import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("counter", () => {
  it("renders increment", () => {
    render(<Counter />);

    const increment = screen.getByRole("button", {
      name: "+",
    });

    expect(increment).toBeInTheDocument();
  });

  it("renders decrement", () => {
    render(<Counter />);

    const decrement = screen.getByRole("button", { name: "-" });

    expect(decrement).toBeInTheDocument();
  });

  it("renders reset", () => {
    render(<Counter />);

    const reset = screen.getByRole("button", { name: "Reset" });

    expect(reset).toBeInTheDocument();
  });

  it("increments the value when clicked", async () => {
    render(<Counter />);

    expect(screen.getByText("0")).toBeInTheDocument();

    const increment = screen.getByRole("button", { name: "+" });

    const user = userEvent.setup();

    await user.click(increment);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("decrements the value when clicked", async () => {
    render(<Counter />);

    expect(screen.getByText("0")).toBeInTheDocument();

    const decrement = screen.getByRole("button", { name: "-" });

    const user = userEvent.setup();

    await user.click(decrement);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  it("resets the value to zero when clicked", async () => {
    render(<Counter />);

    expect(screen.getByText("0")).toBeInTheDocument();

    const increment = screen.getByRole("button", { name: "+" });

    const user = userEvent.setup();

    await user.click(increment);

    expect(screen.getByText("1")).toBeInTheDocument();

    const reset = screen.getByRole("button", { name: "Reset" });

    await user.click(reset);

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
