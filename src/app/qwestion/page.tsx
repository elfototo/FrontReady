"use client";

import Link from "next/link";
import { FaArrowRotateLeft } from "react-icons/fa6";
import questionsData from "../data/qwestion.json";
import { FaLink } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { TbPointFilled } from "react-icons/tb";
import { MdNotificationImportant } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

type ContentBlock =
  | { type: "title"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "mainParagraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "links"; items: string[] }
  | { type: "code"; code: string; language?: string }
  | { type: string; [key: string]: unknown }
  | { type: "image"; url: string }
  | { type: "table"; headers: string[]; rows: string[][] };

type Question = {
  id: number;
  title: string;
  content: ContentBlock[] | string;
  [key: string]: unknown;
};

export default function Qwestions() {
  const questions: Question[] = questionsData;
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(!openMenu);
    console.log("openMenu", openMenu);
  };

  return (
    <main className="relative font-sans lg:grid px-[1rem] xl:gap-10">
      <div className="flex justify-between mt-[2rem] pt-[1rem] ">
        <h1 className="hidden xl:block text-4xl">Вопросы</h1>
        <div className="xl:hidden ">
          <button
            onClick={handleOpen}
            className="flex items-center gap-2 text-white cursor-pointer p-5 border-1 rounded-full fixed top-[2rem] bg-violet-400 shadow-md"
          >
            <FaList />
          </button>
        </div>
        <Link href={"/"}>
          <div
            className="flex items-center gap-2 text-gray-400 cursor-pointer p-5 border-1 border-gray-400 rounded-full bg-white shadow-md fixed right-[1rem] top-[2rem] xl:sticky xl:top-[1rem] xl:bottom-auto"
          >
            <FaArrowRotateLeft />
          </div>
        </Link>
      </div>

      <h1 className="text-4xl xl:hidden pt-[5rem]">Вопросы</h1>

      <div className="flex xl:gap-6 w-full overflow-hidden">
        <div
          className={`bg-black opacity-40 w-full h-full absolute z-0 top-0 right-0 ${
            openMenu ? "block" : "hidden"
          }`}
        ></div>

        <div
          className={`z-10 lg:w-[30%] w-[75%] absolute left-0 top-0 pt-[2rem] bg-white  border-1 border-gray-200 shadow-lg ${
            openMenu ? "block" : "hidden"
          }`}
          style={{
            height: "100vh",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <div className="text-2xl top-0 bg-white w-full pb-3 shadow-lg px-4 flex justify-between">
            <h2>Список</h2>
            <button
              className="cursor-pointer"
              onClick={() => setOpenMenu(false)}
            >
              <IoMdClose />
            </button>
          </div>

          <ul className="px-4 list-disc list-inside">
            {questions.map((item) => (
              <li
                key={item.id}
                className="flex text-md items-center cursor-pointer text-gray-400  hover:text-black dark:hover:text-white py-4 border-t-1 solid border-gray-300"
              >
                <a
                  href={`#${item.title}`}
                  onClick={handleOpen}
                  className="flex items-center gap-2"
                >
                  <h3>{item.title}</h3>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`hidden xl:block w-[20%] bg-white `}>
          <div className="text-2xl top-0 bg-white w-full pb-3 flex justify-between">
            <h2>Список</h2>
          </div>

          <ul className="list-disc list-inside border-r-1 border-gray-300">
            {questions.map((item) => (
              <li
                key={item.id}
                className="flex text-md items-center cursor-pointer text-gray-400  hover:text-black dark:hover:text-white py-4 pr-3 border-t-1 solid border-gray-300"
              >
                <a href={`#${item.title}`} className="flex items-center gap-2">
                  <h3>{item.title}</h3>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="xl:w-[80%] w-full">
          {questions.map((item) => (
            <div key={item.id} id={item.title} className="my-10">
              <h2 className="font-bold text-2xl">
                <ReactMarkdown
                  components={{
                    code({ children }) {
                      return (
                        <code className="bg-gray-100 dark:bg-gray-700 rounded text-md p-1 font-bold">
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {item.title}
                </ReactMarkdown>
              </h2>

              {Array.isArray(item.content) &&
                item.content.map((block, index) => {
                  const key = `${item.id}-${block.type}-${index}`;

                  switch (block.type) {
                    case "title":
                      return (
                        <h3 key={key} className="my-4 font-bold underline">
                          <ReactMarkdown
                            components={{
                              code({ children }) {
                                return (
                                  <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded text-md p-1 font-bold">
                                    {children}
                                  </code>
                                );
                              },
                            }}
                          >
                            {(block as { text: string }).text}
                          </ReactMarkdown>
                        </h3>
                      );

                    case "paragraph":
                      return (
                        <h3 key={key} className="my-4">
                          <ReactMarkdown
                            components={{
                              code({ children }) {
                                return (
                                  <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded text-md p-1 font-bold">
                                    {children}
                                  </code>
                                );
                              },
                            }}
                          >
                            {(block as { text: string }).text}
                          </ReactMarkdown>
                        </h3>
                      );

                    case "mainParagraph":
                      return (
                        <h3
                          key={key}
                          className="my-4 border px-4 py-4 rounded-xl flex items-center"
                        >
                          <div className="text-gray-200 pr-4">
                            <MdNotificationImportant size={40} />
                          </div>
                          <ReactMarkdown
                            components={{
                              code({ children }) {
                                return (
                                  <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded text-md p-1 font-bold">
                                    {children}
                                  </code>
                                );
                              },
                            }}
                          >
                            {(block as { text: string }).text}
                          </ReactMarkdown>
                        </h3>
                      );

                    case "positive":
                      if (!("items" in block) || !Array.isArray(block.items))
                        return null;

                      return (
                        <ul
                          key={key}
                          className="my-4 ml-4  px-8 py-4 rounded-xl bg-green-50 dark:bg-green-950 dark:text-gray-200"
                        >
                          {block.items.map((li, i) => (
                            <li key={i} className="flex">
                              <div className="pt-[5px] pr-2 text-green-500">
                                <TbPointFilled size={12} />
                              </div>

                              <ReactMarkdown
                                components={{
                                  code({ children }) {
                                    return (
                                      <code className="bg-green-200 dark:bg-green-900  dark:text-gray-200 rounded text-md p-1 font-bold">
                                        {children}
                                      </code>
                                    );
                                  },
                                }}
                              >
                                {li}
                              </ReactMarkdown>
                            </li>
                          ))}
                        </ul>
                      );

                    case "negative":
                      if (!("items" in block) || !Array.isArray(block.items))
                        return null;

                      return (
                        <ul
                          key={key}
                          className="my-4 ml-4 px-8 py-4 rounded-xl bg-red-50 dark:bg-red-950"
                        >
                          {block.items.map((li, i) => (
                            <li key={i} className="flex">
                              <div className="pt-[5px] pr-2 text-red-500">
                                <TbPointFilled size={12} />
                              </div>

                              <ReactMarkdown
                                components={{
                                  code({ children }) {
                                    return (
                                      <code className="bg-red-200 dark:bg-red-900 rounded text-md p-1 font-bold">
                                        {children}
                                      </code>
                                    );
                                  },
                                }}
                              >
                                {li}
                              </ReactMarkdown>
                            </li>
                          ))}
                        </ul>
                      );

                    case "main":
                      if (!("items" in block) || !Array.isArray(block.items))
                        return null;

                      return (
                        <ul
                          key={key}
                          className="my-4 px-4 py-4 rounded-xl border flex items-center"
                        >
                          <div className="text-gray-200 pr-2">
                            <MdNotificationImportant size={40} />
                          </div>
                          <div>
                            {block.items.map((li, i) => (
                              <li key={i} className="flex">
                                <div className="pt-[5px] pr-2 text-gray-400">
                                  <TbPointFilled size={12} />
                                </div>
                                <ReactMarkdown
                                  components={{
                                    code({ children }) {
                                      return (
                                        <code className="bg-gray-100 dark:bg-gray-700 rounded text-md p-1 font-bold">
                                          {children}
                                        </code>
                                      );
                                    },
                                  }}
                                >
                                  {li}
                                </ReactMarkdown>
                              </li>
                            ))}
                          </div>
                        </ul>
                      );

                    case "list":
                      if (!("items" in block) || !Array.isArray(block.items))
                        return null;

                      return (
                        <ul
                          key={key}
                          className="my-4 ml-4 px-8 py-4 rounded-xl"
                        >
                          {block.items.map((li, i) => (
                            <li key={i} className="flex">
                              <div className="pt-[5px] pr-2 text-gray-500">
                                <TbPointFilled size={12} />
                              </div>
                              <ReactMarkdown
                                components={{
                                  code({ children }) {
                                    return (
                                      <code className="bg-gray-100 dark:bg-gray-700 rounded text-md p-1 font-bold">
                                        {children}
                                      </code>
                                    );
                                  },
                                }}
                              >
                                {li}
                              </ReactMarkdown>
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
                            <div key={i} className="flex items-center gap-2">
                              <a
                                href={link}
                                target="_blank"
                                rel="noopen noreferrer"
                                className="flex gap-2 items-center hover:underline  break-all"
                              >
                                <div className="flex gap-2 place-items-baseline">
                                  <div>
                                    <FaLink size={10} />
                                  </div>
                                  {link}
                                </div>
                              </a>
                            </div>
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
                          customStyle={{
                            borderRadius: "8px",
                            padding: "12px",
                            fontSize: "14px",
                            overflowX: "auto",
                            lineHeight: "1.5",
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                          }}
                          {...({
                            codeTagProps: {
                              style: {
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-word",
                              },
                            },
                          } as unknown as React.ComponentProps<
                            typeof SyntaxHighlighter
                          >)}
                          {...({
                            className: "syntax-wrap",
                          } as unknown as React.ComponentProps<
                            typeof SyntaxHighlighter
                          >)}
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
                          className="w-[80%] h-full p-5 bg-white m-auto"
                        />
                      );

                    case "table":
                      if (
                        !("headers" in block) ||
                        !("rows" in block) ||
                        !Array.isArray(block.headers) ||
                        !Array.isArray(block.rows)
                      ) {
                        return null;
                      }
                      return (
                        <table
                          key={key}
                          className="my-6 border-collapse border bprder-gray-400 w-full "
                        >
                          <thead className="bg-green-200">
                            <tr>
                              {block.headers.map((header, i) => (
                                <th
                                  key={i}
                                  className="border border-gray-400 px-4 py-2"
                                >
                                  <ReactMarkdown
                                    components={{
                                      code({ children }) {
                                        return (
                                          <code className="bg-gray-100 dark:bg-gray-700 rounded text-md p-1 font-bold">
                                            {children}
                                          </code>
                                        );
                                      },
                                    }}
                                  >
                                    {header}
                                  </ReactMarkdown>
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, i) => (
                              <tr key={i}>
                                {row.map((cell: string, j: number) => (
                                  <td
                                    key={j}
                                    className="border border-gray-400 px-4 py-2"
                                  >
                                    <ReactMarkdown
                                      components={{
                                        code({ children }) {
                                          return (
                                            <code className="bg-gray-100 dark:bg-gray-700 rounded text-md p-1 font-bold">
                                              {children}
                                            </code>
                                          );
                                        },
                                      }}
                                    >
                                      {cell}
                                    </ReactMarkdown>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      );

                    default:
                      return null;
                  }
                })}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
