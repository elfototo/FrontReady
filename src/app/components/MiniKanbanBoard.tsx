"use client";
import { stat } from "fs";
import { SetStateAction, useEffect, useState } from "react";
import { Dispatch } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

type Tasks = {
  id: number;
  title: string;
  content: string;
  status: string;
};

const initialTasks = [
  {
    id: 1,
    title: "Design landing page",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sint necessitatibus distinctio, harum dicta deleniti rerum",
    status: "todo",
  },
  {
    id: 2,
    title: "Fix navbar bug",
    content: "Lorem quos facilis nulla fuga unde dolorem, placeat nisi?",
    status: "todo",
  },
  {
    id: 3,
    title: "Write toast component",
    content:
      "distinctio, harum dicta deleniti rerum deserunt. Rem dignissimos placeat nisi? landing page",
    status: "inProgress",
  },
  {
    id: 4,
    title: "Fix nav component",
    content: "Design landing page ignissimos placeat nisi? landing",
    status: "done",
  },
];

export default function MiniKanbanBoard() {
  const [tasks, setTasks] = useState<Tasks[]>(initialTasks);

  return (
    <main className="w-[80%]">
      <div className="grid grid-cols-3 gap-3">
        {/* todo */}
        <div>
          <div>
            <h1 className="font-bold text-xl mb-5 text-gray-700">To do</h1>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {tasks
              .filter((item) => item.status === "todo")
              .map((item) => (
                <div key={item.id}>
                  <Task
                    title={item.title}
                    content={item.content}
                    status={item.status}
                    setTasks={setTasks}
                    tasks={tasks}
                    id={item.id}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* in progress */}
        <div>
          <div>
            <h1 className="font-bold text-xl mb-5 text-gray-700">
              In progress
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {tasks
              .filter((item) => item.status === "inProgress")
              .map((item) => (
                <div key={item.id}>
                  <Task
                    title={item.title}
                    content={item.content}
                    status={item.status}
                    setTasks={setTasks}
                    tasks={tasks}
                    id={item.id}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* done */}
        <div>
          <div>
            <h1 className="font-bold text-xl mb-5 text-gray-700">Done</h1>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {tasks
              .filter((item) => item.status === "done")
              .map((item) => (
                <div key={item.id}>
                  <Task
                    title={item.title}
                    content={item.content}
                    status={item.status}
                    setTasks={setTasks}
                    tasks={tasks}
                    id={item.id}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

type TaskProps = {
  title: string;
  content: string;
  status: string;
  tasks: Tasks[];
  setTasks: Dispatch<SetStateAction<Tasks[]>>;
  id: number;
};

const Task = ({ title, content, status, tasks, setTasks, id }: TaskProps) => {
  const handleMoveLeft = (status: string, id: number) => {
    if (status === "todo") {
      return;
    }
    if (status === "inProgress") {
      const updates = tasks.map((item) =>
        item.id === id ? { ...item, status: "todo" } : item,
      );
      setTasks(updates);
      return;
    }
    if (status === "done") {
      const updates = tasks.map((item) =>
        item.id === id ? { ...item, status: "inProgress" } : item,
      );
      setTasks(updates);
      return;
    }
  };

  const handleMoveRight = (status: string, id: number) => {
    if (status === "todo") {
      const updates = tasks.map((item) =>
        item.id === id ? { ...item, status: "inProgress" } : item,
      );
      setTasks(updates);
      return;
    }
    if (status === "inProgress") {
      const updates = tasks.map((item) =>
        item.id === id ? { ...item, status: "done" } : item,
      );
      setTasks(updates);
      return;
    }
    if (status === "done") {
      return;
    }
  };

  return (
    <main className="rounded-2xl p-3 bg-white border border-white/20 text-gray-700 flex flex-col gap-3 items-center shadow-2xl">
      <div className="text-start">
        

        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-sm">{content}</p>
      </div>

      <div className="flex justify-between w-full text-gray-500">
        <button
          onClick={() => handleMoveLeft(status, id)}
          className="px-2 py-2 cursor-pointer rounded-2xl flex items-center gap-1 border border-transparent hover:bg-blue-50 whitespace-nowrap"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => handleMoveRight(status, id)}
          className="px-2 py-2 cursor-pointer rounded-2xl flex items-center gap-1 border border-transparent hover:bg-blue-50 whitespace-nowrap"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </main>
  );
};
