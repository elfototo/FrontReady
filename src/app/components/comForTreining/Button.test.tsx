import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { describe, it, expect, vi } from "vitest";

describe("button", () => {
  it("renders primary variant", () => {
    render(<Button variant="primary">primary</Button>);

    const button = screen.getByRole("button", { name: "primary" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-white");
  });

  it("renders secondary variant", () => {
    render(<Button variant="secondary">secondary</Button>);

    const button = screen.getByRole("button", { name: "secondary" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-gray-100");
  });

  it("renders ghost variant", () => {
    render(<Button variant="ghost">ghost</Button>);

    const button = screen.getByRole("button", { name: "ghost" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-transparent");
  });

  it("renders disabled state", () => {
    render(
      <Button variant="primary" disabled>
        primary
      </Button>,
    );

    const button = screen.getByRole("button", { name: "primary" });

    expect(button).toBeDisabled();
  });

  it("calls onClick when button is clicked", async () => {
    const handleClick = vi.fn();

    render(
      <Button variant="primary" onClick={handleClick}>
        primary
      </Button>,
    );

    const button = screen.getByRole("button", { name: "primary" });

    const user = userEvent.setup();

    await user.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
