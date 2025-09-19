"use client";

import { use, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import exersiseData from "../../data/exercise.json";
import Link from "next/link";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { HiClock } from "react-icons/hi";
import { PiFireFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { TbCodeCircleFilled } from "react-icons/tb";
import CodeEditor from "../../components/codeEditor";

type Exercise = {
  id: number;
  theme: string;
  title: string;
  dificult: string;
  time: string;
  note: string;
  requirements: string;
  html: string;
  javascript: string;
  css: string;
  tsx: string;
  [key: string]: unknown;
};

export default function ExercisePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const exercises: Exercise[] = exersiseData;
  const exercise = exercises.find((ex) => ex.id === Number(id));
  console.log("exercise id", exercise);
  console.log("exercises", exercises);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center p-8 pb-20 gap-16 sm:p-20">
      <div className="flex justify-between">
        <h1 className="text-4xl">{exercise?.title}</h1>
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <FaArrowRotateLeft size={12} /> назад
          </div>
        </Link>
      </div>

      <div className="flex gap-5">
        {/* Условия */}
        <div className="w-1/3">
          <div className="flex gap-5 text-gray-400">
            <div className="flex items-center gap-1">
              <TbCodeCircleFilled />
              {exercise?.theme}
            </div>
            <div className="flex items-center gap-1">
              <PiFireFill />
              {exercise?.dificult}
            </div>
            <div className="flex items-center gap-1 ">
              <HiClock />
              {exercise?.time}
            </div>
          </div>

          <div className="bg-blue-100 p-5 my-5 rounded-xl">
            {exercise?.requirements}
          </div>
        </div>

        {/* Code Editor */}
        <div className="w-full">
          <CodeEditor
            exercise={exercise}
            jsValue={exercise?.javascript}
            tsxValue={exercise?.tsx}
            htmlValue={exercise?.html}
            cssValue={exercise?.css}
          />
        </div>

        {/* Браузер */}
        <div></div>
      </div>
    </div>
  );
}
