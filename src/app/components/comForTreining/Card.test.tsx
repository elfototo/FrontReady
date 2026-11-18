import {CardCard} from "./Card";
import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";

describe("Card", () => {
  it("renders children", () => {
    render(
      <CardCard>
        <div>Content</div>
      </CardCard>,
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders Card.Media", () => {
    render(
      <CardCard>
        <CardCard.Media>
          <img src="/test.jpg" alt="test" />
        </CardCard.Media>
      </CardCard>,
    );

    expect(screen.getByAltText("test")).toBeInTheDocument();
  });

  it("renders Card.Title", () => {
    render(
      <CardCard>
        <CardCard.Title>
          <h2>title</h2>
        </CardCard.Title>
      </CardCard>,
    );

    expect(screen.getByText("title")).toBeInTheDocument();
  });

  it("renders Card.Content", () => {
    render(
      <CardCard>
        <CardCard.Content>
          <p>content</p>
        </CardCard.Content>
      </CardCard>,
    );

    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
