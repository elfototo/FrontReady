import Link from "next/link";
import { BsStarFill } from "react-icons/bs";
import { FaArrowRotateLeft } from "react-icons/fa6";
import questionsData from "../data/qwestion.json";
import { FaLink } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

type ContentBlock =
  | { type: "title"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "links"; items: string[] }
  | { type: "code"; code: string; language?: string }
  | { type: string; [key: string]: unknown }
  | { type: "image"; url: string };

type Question = {
  id: number;
  title: string;
  content: ContentBlock[] | string;
  [key: string]: unknown;
};

export default function Qwestions() {
  const questions: Question[] = questionsData;

  return (
    <div className="font-sans grid justify-item s-center p-8 pb-20 gap-16 sm:p-20">
      <div className="flex justify-between">
        <h1 className="text-4xl">Вопросы</h1>
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <FaArrowRotateLeft size={12} /> назад
          </div>
        </Link>
      </div>

      <div className="flex gap-6">
        <div className="w-[20%]">
          <h2 className="text-2xl">Список</h2>
          <ul className="list-disc list-inside">
            {questions.map((item) => (
              <li
                key={item.id}
                className="flex items-center cursor-pointer text-gray-400  hover:text-black py-2 border-t-1 solid border-gray-300"
              >
                <a href={`#${item.title}`} className="flex items-center gap-2">
                  <h3>{item.title}</h3>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[80%]">
          {questions.map((item) => (
            <div key={item.id} id={item.title} className="my-10">
              <h2 className="font-bold text-2xl">{item.title}</h2>

              {Array.isArray(item.content) &&
                item.content.map((block, index) => {
                  const key = `${item.id}-${block.type}-${index}`;

                  switch (block.type) {
                    case "title":
                      return (
                        <h3 key={key} className="my-4 font-bold underline">
                          <ReactMarkdown>
                            {(block as { text: string }).text}
                          </ReactMarkdown>
                        </h3>
                      );

                    case "paragraph":
                      return (
                        <p key={key} className="my-4">
                          <ReactMarkdown>
                            {(block as { text: string }).text}
                          </ReactMarkdown>
                        </p>
                      );

                    case "list":
                      if (!("items" in block) || !Array.isArray(block.items))
                        return null;

                      return (
                        <ul
                          key={key}
                          className="my-4 ml-4 list-disc border px-8 py-4 rounded-xl"
                        >
                          {block.items.map((li, i) => (
                            <li key={i}>
                              <ReactMarkdown>{li}</ReactMarkdown>
                            </li>
                          ))}
                        </ul>
                      );

                    case "links":
                      if (!("items" in block) || !Array.isArray(block.items))
                        return null;

                      return (
                        <div
                          key={key}
                          className="my-4 mx-4 grid-cols-1 text-green-600"
                        >
                          {block.items.map((link, i) => (
                            <a
                              key={i}
                              href={link}
                              target="_blank"
                              rel="noopen noreferrer"
                              className="flex gap-2 items-center hover:underline"
                            >
                              <FaLink size={10} /> {link}
                            </a>
                          ))}
                        </div>
                      );

                    case "code":
                      if (!("code" in block && typeof block.code === "string"))
                        return null;
                      return (
                        <SyntaxHighlighter
                          key={key}
                          language="javascript"
                          style={oneDark}
                          showLineNumbers
                          customStyle={{ borderRadius: "8px", padding: "12px" }}
                        >
                          {block.code}
                        </SyntaxHighlighter>
                      );

                    case "image":
                      return (
                        <Image
                          key={key}
                          src={(block as { url: string }).url}
                          alt=""
                          width={1000}
                          height={1000}
                          className="w-full h-full p-5"
                        />
                      );

                    default:
                      return null;
                  }
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
