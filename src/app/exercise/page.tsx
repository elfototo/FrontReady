"use client";

import { use, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Editor from "@monaco-editor/react";
import exerciseData from "../data/exercise.json";
import Link from "next/link";
import { FaArrowRotateLeft } from "react-icons/fa6";
import Card from "../components/card";

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

export default function Exercises() {
  const exercises: Exercise[] = exerciseData;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex justify-between">
        <h1 className="text-4xl">Задачи</h1>
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <FaArrowRotateLeft size={12} /> назад
          </div>
        </Link>
      </div>
      <div className="flex">
        <div>
          {exercises?.map((ex) => (
            <Card
              theme={ex.theme}
              key={ex.id}
              id={ex.id}
              title={ex.title}
              dificult={ex.dificult}
              time={ex.time}
              requirements={ex.requirements}
            />
          ))}
        </div>
        <div className="">
          <div>Темы</div>
        </div>
      </div>
    </div>
  );
}
