"use client";

import { use, useState, useEffect } from "react";
import exersiseData from "../../data/exercise.json";
import Link from "next/link";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { HiClock } from "react-icons/hi";
import { PiFireFill } from "react-icons/pi";
import { TbCodeCircleFilled } from "react-icons/tb";
import CodeEditor from "../../components/codeEditor";
import Brawser from "../../components/brawser";
import { TestCase, runTests } from "@/lib/runTests";

type Test = {
  description: string;
  query: string;
  expectText: string;
  clicks?: number;
};

type Exercise = {
  id: number;
  theme: string;
  title: string;
  dificult: string;
  time: string;
  note: string;
  requirements: string;
  html: string;
  app: string;
  css: string;
  tests: Test[];
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

  const [code, setCode] = useState({
    "index.html": exercise?.html || undefined,
    "styles.css": exercise?.css || undefined,
    "App.js": exercise?.app || undefined,
  });

  useEffect(() => {
    setCode({
      "index.html": exercise?.html || undefined,
      "styles.css": exercise?.css || undefined,
      "App.js": exercise?.app || undefined,
    });
  }, [exercise]);

  // console.log("code", code);
  // console.log("exercise", exercise);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!exercise) {
      console.log("exercise", exercise);
      return;
    }
    if (typeof window === "undefined") {
      console.log("typeof window", typeof window);
      return;
    }

    const key = `exercise-${exercise.id}`;
    const saved = localStorage.getItem(key);

    console.log("key", key, "saved", saved);

    if (saved) {
      setCode(JSON.parse(saved));
      console.log("есть сохраненное");
    } else {
      const initial = {
        "index.html": exercise.html ?? "",
        "styles.css": exercise.css ?? "",
        "App.js": exercise.app ?? "",
      };

      setCode(initial);
      console.log("нет сохраненного, ставим:", initial);
    }
    // выставляем флаг ТОЛЬКО после загрузки из localStorage/инициализации
    setInitialized(true);
  }, [exercise, setCode]);

  useEffect(() => {
    if (!exercise) return;
    if (!initialized) return;

    const key = `exercise-${exercise.id}`;
    localStorage.setItem(key, JSON.stringify(code));
    console.log("сохранили изменения в localStorage", key, code);
  }, [code, exercise, initialized]);

  const handleCheck = async () => {
    if (!exercise?.tests) {
      console.log("Нет тестов для этого упражнения");
      return;
    }

    const results = await runTests(exercise.tests as TestCase[]);
    console.log("Результаты тестов:", results);

    // простой лог в понятном виде:
    results.forEach((r) => {
      if (r.pass) console.log(`✅ ${r.description}`, r);
      else console.warn(`❌ ${r.description}`, r);
    });
  };

  return (
    <div className="relative font-sans px-16 mt-10 h-screen">
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
        <div className="w-1/4">
          <div className="flex gap-5 text-gray-400 whitespace-nowrap flex-wrap mt-5">
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

          <div className="bg-blue-100 dark:bg-blue-950 p-5 my-5 rounded-xl">
            {exercise?.requirements}
          </div>
        </div>
        <div className="w-full flex gap-5 h-full mt-5">
          <div className="w-1/2">
            <CodeEditor
              code={code}
              exercise={exercise}
              setCode={setCode}
              onChange={(newCode) => setCode(newCode)}
            />
          </div>

          {/* Браузер */}
          <div className="w-1/2">
            <Brawser code={code} setCode={setCode} />
          </div>
        </div>
        {/* Code Editor */}
      </div>

      <div className="fixed bottom-0 left-0 w-full h-20 bg-gray-200 flex justify-end items-center px-16 z-10">
        <button
          className="p-2 bg-white cursor-pointer rounded-xl"
          onClick={handleCheck}
        >
          Проверть
        </button>
      </div>
    </div>
  );
}
