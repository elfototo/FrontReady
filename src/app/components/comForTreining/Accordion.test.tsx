import { fireEvent, render, screen } from "@testing-library/react";
import { it, vi, test, describe, expect } from "vitest";
import { Accordion } from "./Accordion";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

describe("Accordion", () => {
  it("render", () => {
    render(
      <Accordion>
        <Accordion.Item>
          <Accordion.Trigger>
            <h2>React</h2>
          </Accordion.Trigger>
          <Accordion.Content>
            <p>React is framework</p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );

    expect(screen.getByRole("button", { name: "React" })).toBeInTheDocument();
  });

  it("handle onClick is called when user clicked trigger button", async () => {
    const handleClick = vi.fn();

    render(
      <Accordion>
        <Accordion.Item>
          <Accordion.Trigger
            onClick={handleClick}
            id="accordion-trigger-1"
            aria-expanded={false}
            idContent="accordion-content-1"
          >
            React
          </Accordion.Trigger>
          <Accordion.Content
            isExpended={false}
            id="accordion-content-1"
            idTrigger="accordion-trigger-1"
          >
            <p>React is framework</p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );

    const button = screen.getByRole("button", { name: "React" });

    const user = userEvent.setup();

    await user.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it("opens the content when trigger is clicked", async () => {
    function TestAccordion() {
      const [isExpanded, setIsExpanded] = useState(false);

      return (
        <Accordion>
          <Accordion.Item>
            <Accordion.Trigger
              onClick={() => setIsExpanded((prev) => !prev)}
              id="accordion-trigger-1"
              aria-expanded={isExpanded}
              idContent="accordion-content-1"
            >
              React
            </Accordion.Trigger>

            <Accordion.Content
              isExpended={isExpanded}
              id="accordion-content-1"
              idTrigger="accordion-trigger-1"
            >
              <p>React is framework</p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );
    }

    render(<TestAccordion />);

    const button = screen.getByRole("button", { name: "React" });

    expect(button).toHaveAttribute("aria-expanded", "false");

    const user = userEvent.setup();

    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("closes the content when trigger is clicked", async () => {
    function TestAccordion() {
      const [isExpanded, setIsExpanded] = useState(true);

      return (
        <Accordion>
          <Accordion.Item>
            <Accordion.Trigger
              onClick={() => setIsExpanded((prev) => !prev)}
              id="accordion-trigger-1"
              aria-expanded={isExpanded}
              idContent="accordion-content-1"
            >
              React
            </Accordion.Trigger>

            <Accordion.Content
              isExpended={isExpanded}
              id="accordion-content-1"
              idTrigger="accordion-trigger-1"
            >
              <p>React is framework</p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );
    }

    render(<TestAccordion />);

    const button = screen.getByRole("button", { name: "React" });

    expect(button).toHaveAttribute("aria-expanded", "true");

    const user = userEvent.setup();

    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("few section is opened in the same time", async () => {
    const accordionItems = [
      {
        id: 1,
        title: "React",
        content: "Lorem1",
      },
      {
        id: 2,
        title: "TypeScript",
        content: "Lorem2",
      },
      {
        id: 3,
        title: "Tailwind",
        content: "Lorem3",
      },
    ];

    function TestAccordion() {
      const [isOpenId, setIsOpenId] = useState<number[]>([]);

      return (
        <>
          <Accordion>
            {accordionItems.map((item) => {
              const isExpended = isOpenId.includes(item.id);

              const handleOnClick = () =>
                setIsOpenId((prev) =>
                  prev.includes(item.id)
                    ? prev.filter((i) => i !== item.id)
                    : [...prev, item.id],
                );

              const triggerId = `accordion-trigger-${item.id}`;

              const contentId = `accordion-content-${item.id}`;
              return (
                <Accordion.Item key={item.id}>
                  <Accordion.Trigger
                    onClick={handleOnClick}
                    aria-expanded={isExpended}
                    id={triggerId}
                    idContent={contentId}
                  >
                    {item.title}
                  </Accordion.Trigger>

                  <Accordion.Content
                    isExpended={isExpended}
                    id={contentId}
                    idTrigger={triggerId}
                  >
                    {item.content}
                  </Accordion.Content>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </>
      );
    }

    render(<TestAccordion />);

    const buttonOne = screen.getByRole("button", { name: "React" });
    const buttonTwo = screen.getByRole("button", { name: "TypeScript" });
    const buttonThree = screen.getByRole("button", { name: "Tailwind" });

    const user = userEvent.setup();

    expect(buttonOne).toHaveAttribute("aria-expanded", "false");
    expect(buttonTwo).toHaveAttribute("aria-expanded", "false");
    expect(buttonThree).toHaveAttribute("aria-expanded", "false");

    await user.click(buttonOne);
    await user.click(buttonTwo);
    await user.click(buttonThree);

    expect(buttonOne).toHaveAttribute("aria-expanded", "true");
    expect(buttonTwo).toHaveAttribute("aria-expanded", "true");
    expect(buttonThree).toHaveAttribute("aria-expanded", "true");
  });

  it("works with keyboard interaction", async () => {
    function TestAccordion() {
      const [isExpanded, setIsExpanded] = useState(false);

      return (
        <Accordion>
          <Accordion.Item>
            <Accordion.Trigger
              onClick={() => setIsExpanded((prev) => !prev)}
              id="accordion-trigger-1"
              aria-expanded={isExpanded}
              idContent="accordion-content-1"
            >
              React
            </Accordion.Trigger>

            <Accordion.Content
              isExpended={isExpanded}
              id="accordion-content-1"
              idTrigger="accordion-trigger-1"
            >
              <p>React is framework</p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );
    }

    render(<TestAccordion />);

    const button = screen.getByRole("button", { name: "React" });

    const user = userEvent.setup();

    button.focus();

    await user.keyboard("{Enter}");

    expect(button).toHaveAttribute("aria-expanded", "true");

    await user.keyboard(" ");

    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
