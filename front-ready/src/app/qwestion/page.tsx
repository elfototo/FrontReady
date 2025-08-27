import Link from "next/link";
import questions from "../data/qwestion.json";
import { BsStarFill } from "react-icons/bs";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default function Qwestions() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <h1>Вопросы</h1>
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <FaArrowRotateLeft size={12}/> назад
        </div>
      </Link>

      <div>
        <h2>List</h2>
        <ul className="gap-6">
          {questions.map((item) => (
            <li
              key={item.id}
              className="flex gap-2 items-center cursor-pointer hover:text-red-400 hover:underline"
            >
              <BsStarFill size={9} />
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
