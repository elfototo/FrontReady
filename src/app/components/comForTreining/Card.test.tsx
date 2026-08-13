import Card from "./Card";
import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";

describe("Card", () => {
  it("renders children", () => {
    render(
      <Card>
        <div>Content</div>
      </Card>,
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders Card.Media", () => {
    render(
      <Card>
        <Card.Media>
          <img src="/test.jpg" alt="test" />
        </Card.Media>
      </Card>,
    );

    expect(screen.getByAltText("test")).toBeInTheDocument();
  });

  it("renders Card.Title", () => {
    render(
      <Card>
        <Card.Title>
          <h2>title</h2>
        </Card.Title>
      </Card>,
    );

    expect(screen.getByText("title")).toBeInTheDocument();
  });

  it("renders Card.Content", () => {
    render(
      <Card>
        <Card.Content>
          <p>content</p>
        </Card.Content>
      </Card>,
    );

    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
