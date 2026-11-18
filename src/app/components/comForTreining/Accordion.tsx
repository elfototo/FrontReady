"use client";
import { useState, useRef, useLayoutEffect } from "react";

type AccordionProps = {
  children: React.ReactNode;
};

type TriggerProps = {
  children: React.ReactNode;
  onClick: () => void;
  id: string;
  idContent: string;
  "aria-expanded": boolean;
};

type ContentProps = {
  children: React.ReactNode;
  isExpended: boolean;
  id: string;
  idTrigger: string;
};

function Accordion({ children }: AccordionProps) {
  return <div className="text-white grid grid-cols-1 w-2xl">{children}</div>;
}

function Item({ children }: AccordionProps) {
  return <div className="flex flex-col w-full">{children}</div>;
}

function Trigger({
  children,
  onClick,
  idContent,
  id,
  "aria-expanded": isExpanded,
}: TriggerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isExpanded}
      id={id}
      aria-controls={idContent}
      className="py-2 text-center border border-white w-full cursor-pointer flex items-center justify-center"
    >
      {children}
    </button>
  );
}

function Content({ children, isExpended, id, idTrigger }: ContentProps) {
  const [height, setHeight] = useState(0);
  const refConteiner = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (refConteiner.current) {
      setHeight(refConteiner.current?.scrollHeight);
    }
  }, [children]);

  return (
    <div
      ref={refConteiner}
      id={id}
      role="region"
      aria-labelledby={idTrigger}
      style={{
        maxHeight: isExpended ? height : 0,

        overflow: "hidden",

        transition: "max-height 300ms ease",
      }}
      className={`bg-white text-[#041638]`}
    >
      <div className="p-2">{children}</div>
    </div>
  );
}

Accordion.Item = Item;
Accordion.Trigger = Trigger;
Accordion.Content = Content;

const accordionItems = [
  {
    id: 1,
    title: "React",
    content: "Lorem",
  },
  {
    id: 2,
    title: "Type Script",
    content: "Lorem2",
  },
  {
    id: 3,
    title: "Tailwind",
    content: "Lorem3",
  },
];

export default function AccordionWhole() {
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
