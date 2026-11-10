import SearchDebounced from "./SearchDebounced";
import {
  render,
  screen,
  fireEvent,
  act,
  cleanup,
} from "@testing-library/react";
import { afterEach } from "node:test";
import { vi, expect, it, describe } from "vitest";

describe("SearchDebounced", () => {
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  interface Product {
    id: number;
    title: string;
    price: number;
  }

  const mockFetch = (products: Product[] = []) => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        products: [],
        total: 0,
        skip: 0,
        limit: 30,
      }),
    });

    vi.stubGlobal("fetch", fetchMock);

    return fetchMock;
  };
  it("component renders", () => {
    render(<SearchDebounced />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("user can typing", () => {
    render(<SearchDebounced />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: {
        value: "react",
      },
    });

    expect(input).toHaveValue("react");
  });

  it("calls API with delay 400 ms", async () => {
    vi.useFakeTimers();

    const fetchMock = mockFetch();

    render(<SearchDebounced />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: {
        value: "essential",
      },
    });

    await act(async () => {
      await vi.advanceTimersByTimeAsync(100);
    });

    expect(fetchMock).not.toHaveBeenCalled();

    await act(async () => {
      await vi.advanceTimersByTimeAsync(300);
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining("q=essential"),
      expect.objectContaining({
        signal: expect.any(AbortSignal),
      }),
    );
  });

  it("does not calls API when input is empty", async () => {
    vi.useFakeTimers();
    const fetchMock = mockFetch();

    render(<SearchDebounced />);

    await act(async () => {
      await vi.advanceTimersByTimeAsync(500);
    });

    expect(fetchMock).toHaveBeenCalledTimes(0);
  });

  it("display products", async () => {
    vi.useFakeTimers();

    mockFetch([
      {
        id: 1,
        title: "Essential Hoodie",
        price: 30,
      },
    ]);

    render(<SearchDebounced />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: {
        value: "hoodie",
      },
    });

    await act(async () => {
      await vi.advanceTimersByTimeAsync(400);
    });

    expect(await screen.findByText("Essential hoodie")).toBeInTheDocument();
  });

  it("abort previous request", async () => {
    vi.useFakeTimers();
    const fetchMock = vi.fn().mockReturnValue(new Promise(() => {}));

    vi.stubGlobal("fetch", fetchMock);

    render(<SearchDebounced />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: {
        value: "react",
      },
    });

    await act(async () => {
      await vi.advanceTimersByTimeAsync(400);
    });

    const firstRequestSignal = fetchMock.mock.calls[0][1].signal;

    expect(firstRequestSignal.aborted).toBe(false);

    fireEvent.change(input, {
      target: {
        value: "java Script",
      },
    });

    await act(async () => {
      await vi.advanceTimersByTimeAsync(400);
    });

    expect(firstRequestSignal.aborted).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
