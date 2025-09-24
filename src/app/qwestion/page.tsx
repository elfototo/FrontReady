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

  return (
    <div className="font-sans grid justify-items-center p-8 pb-20 gap-16 sm:p-20">
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
                className="flex items-center cursor-pointer text-gray-400  hover:text-black dark:hover:text-white py-2 border-t-1 solid border-gray-300"
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
              <h2 className="font-bold text-2xl">
                <ReactMarkdown
                  components={{
                    code({ children }) {
                      return (
                        <code className="bg-gray-100 dark:bg-gray-700 rounded text-sm p-1 font-bold">
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
                                  <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded text-sm p-1 font-bold">
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
                                  <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded text-sm p-1 font-bold">
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
                                  <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded text-sm p-1 font-bold">
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
                                      <code className="bg-green-200 dark:bg-green-900  dark:text-gray-200 rounded text-sm p-1 font-bold">
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
                                      <code className="bg-red-200 dark:bg-red-900 rounded text-sm p-1 font-bold">
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
                                        <code className="bg-gray-100 dark:bg-gray-700 rounded text-sm p-1 font-bold">
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
                                      <code className="bg-gray-100 dark:bg-gray-700 rounded text-sm p-1 font-bold">
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
                                          <code className="bg-gray-100 dark:bg-gray-700 rounded text-sm p-1 font-bold">
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
                                            <code className="bg-gray-100 dark:bg-gray-700 rounded text-sm p-1 font-bold">
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
    </div>
  );
}
