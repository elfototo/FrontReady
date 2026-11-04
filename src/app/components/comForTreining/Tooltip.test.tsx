import {
  render,
  screen,
  fireEvent,
  act,
  cleanup,
} from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import Tooltip from "./Tooltip";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("Tooltip", () => {
  it("renders children without showing tooltip initially", () => {
    render(
      <Tooltip position="top" content="Helpful infirmation">
        <button>Hover me</button>
      </Tooltip>,
    );

    expect(
      screen.getByRole("button", { name: "Hover me" }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Helpful infirmation")).not.toBeInTheDocument();
  });

  it("shows tooltip after the specified delay on hover", () => {
    vi.useFakeTimers();

    render(
      <Tooltip position="top" content="Helpful infirmation" delay={300}>
        <button>Hover me</button>
      </Tooltip>,
    );

    fireEvent.mouseEnter(screen.getByRole("button").parentElement!);

    expect(screen.queryByText("Helpful infirmation")).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(299);
    });

    expect(screen.queryByText("Helpful infirmation")).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(screen.getByText("Helpful infirmation")).toBeInTheDocument();
  });

  it("Hides tooltip when the mouse leave", () => {
    vi.useFakeTimers();

    render(
      <Tooltip position="top" content="Helpful infirmation">
        <button>Hover me</button>
      </Tooltip>,
    );

    fireEvent.mouseEnter(screen.getByRole("button").parentElement!);

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText("Helpful infirmation")).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByRole("button").parentElement!);

    expect(screen.queryByText("Helpful infirmation")).not.toBeInTheDocument();
  });

  it("cancels the pending timer if the mouse leave earlier", () => {
    vi.useFakeTimers();

    render(
      <Tooltip position="top" content="Helpful infirmation" delay={300}>
        <button>Hover me</button>
      </Tooltip>,
    );

    fireEvent.mouseEnter(screen.getByRole("button").parentElement!);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    fireEvent.mouseLeave(screen.getByRole("button").parentElement!);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.queryByText("Helpful infirmation")).not.toBeInTheDocument();
  });

  it("shows tooltip on focus after the specified delay", () => {
    vi.useFakeTimers();

    render(
      <Tooltip position="top" content="Helpful infirmation" delay={300}>
        <button>Hover me</button>
      </Tooltip>,
    );

    fireEvent.focus(screen.getByRole("button").parentElement!);

    expect(screen.queryByText("Helpful infirmation")).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText("Helpful infirmation")).toBeInTheDocument();
  });

  it("hides tooltip on blur", () => {
    vi.useFakeTimers();

    render(
      <Tooltip position="top" content="Helpful infirmation" delay={300}>
        <button>Hover me</button>
      </Tooltip>,
    );

    fireEvent.focus(screen.getByRole("button"));

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText("Helpful infirmation")).toBeInTheDocument();

    fireEvent.blur(screen.getByRole("button"));

    expect(screen.queryByText("Helpful infirmation")).not.toBeInTheDocument();
  });

  it("cleans up the pending timer when unmounted", () => {
    vi.useFakeTimers();

    const {unmount} = render(
      <Tooltip position="top" content="Helpful infirmation" delay={300}>
        <button>Hover me</button>
      </Tooltip>,
    );

    fireEvent.mouseEnter(screen.getByRole("button").parentElement!)

    expect(vi.getTimerCount()).toBe(1);

    unmount();

    expect(vi.getTimerCount()).toBe(0);

    vi.advanceTimersByTime(300);

    expect(screen.queryByText("Helpful infirmation")).not.toBeInTheDocument();
  });
});
