import { HiClock } from "react-icons/hi";
import { PiFireFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { TbCodeCircleFilled } from "react-icons/tb";
import Link from "next/link";

export default function Card({
  title,
  id,
  theme,
  dificult,
  time,
  requirements,
}: {
  title: string;
  id: number;
  theme: string;
  dificult: string;
  time: string;
  requirements: string;
}) {
  return (
    <div>
      <Link href={`/exercise/${id}`}>
        <div className="border border-gray-200 p-5 flex items-center gap-5 hover:bg-gray-50 dark:hover:bg-gray-800">
          <div>
            <h2 className="font-bold text-2xl mb-5">{title}</h2>
            <p>{requirements}</p>
            <div className="flex gap-5 text-gray-400">
              <div className="flex items-center gap-1">
                <TbCodeCircleFilled />
                {theme}
              </div>
              <div className="flex items-center gap-1">
                <PiFireFill />
                {dificult}
              </div>
              <div className="flex items-center gap-1 ">
                <HiClock />
                {time}
              </div>
            </div>
          </div>
          <div className="text-gray-400">
            <IoIosArrowForward size={40} />
          </div>
        </div>
      </Link>
    </div>
  );
}
