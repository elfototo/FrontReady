import Tabs from "./tabs";
import { fireEvent, render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";

describe("Tabs", () => {
  it("renders the first tab as active by default", () => {
    render(<Tabs />);

    const overviewTab = screen.getByRole("tab", { name: "Overview" });

    const reportsTab = screen.getByRole("tab", { name: "Reports" });

    expect(overviewTab).toHaveAttribute("aria-selected", "true");

    expect(reportsTab).toHaveAttribute("aria-selected", "false");
  });

  it("switchws active tabs when clicked", () => {
    render(<Tabs />);

    const overviewTab = screen.getByRole("tab", { name: "Overview" });

    const reportsTab = screen.getByRole("tab", { name: "Reports" });

    expect(overviewTab).toHaveAttribute("aria-selected", "true");

    expect(reportsTab).toHaveAttribute("aria-selected", "false");

    fireEvent.click(reportsTab);

    expect(overviewTab).toHaveAttribute("aria-selected", "false");

    expect(reportsTab).toHaveAttribute("aria-selected", "true");
  });

  it("displays content of the active tabs", () => {
    render(<Tabs />);

    fireEvent.click(screen.getByRole("tab", { name: "Settings" }));

    expect(
      screen.getByText(/Manage your account preferences/),
    ).toBeInTheDocument();

    expect(screen.queryByText(/View your key metrics/)).not.toBeInTheDocument();
  });

  it("renders correct Aria roles", () => {
    render(<Tabs />);

    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(3);
    expect(screen.getByRole("tabpanel")).toBeInTheDocument();
  });

  it("connects the active tabs with its panel", () => {
    render(<Tabs />);

    const activeTab = screen.getByRole("tab", { name: "Overview" });

    const panel = screen.getByRole("tabpanel");

    expect(activeTab).toHaveAttribute("aria-controls", panel.id);

    expect(panel).toHaveAttribute("aria-labelledby", activeTab.id);
  });
});
