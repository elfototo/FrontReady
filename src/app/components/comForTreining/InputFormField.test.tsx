import { Input } from "./InputFormField";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("input", () => {
  it("renders input", () => {
    render(<Input />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Input label="email" />);

    expect(screen.getByText("email")).toBeInTheDocument();
  });

  it("renders placeholder", () => {
    render(<Input placeholder="write your email" />);

    expect(screen.getByPlaceholderText("write your email")).toBeInTheDocument();
  });

  it("allows user to type text", () => {
    render(<Input label="email" type="email" />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "qwerty@gmail.com" } });

    expect(input).toHaveValue("qwerty@gmail.com");
  });

  it("shows error after onBlur if value empty", () => {
    render(<Input required error="shows error" />);

    const input = screen.getByRole("textbox");

    fireEvent.blur(input);

    expect(input).toHaveValue("");
    expect(screen.getByText("shows error")).toBeInTheDocument();
  });

  it("error disapiars", () => {
    render(<Input required error="shows error" />);

    const input = screen.getByRole("textbox");

    fireEvent.blur(input);
    expect(input).toHaveValue("");
    expect(screen.getByText("shows error")).toBeInTheDocument();

    fireEvent.change(input, {
      target: {
        value: "qwerty@gmail.com",
      },
    });

    expect(input).toHaveValue("qwerty@gmail.com");
    expect(screen.queryByText("shows error")).not.toBeInTheDocument();
  });

  it("if an error is not handed an error is not shoewed", () => {
    render(<Input />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: {
        value: "text",
      },
    });

    expect(screen.queryByText("shows error")).not.toBeInTheDocument();
  });
});
