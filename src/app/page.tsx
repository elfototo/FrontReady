import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#fdfdc9]">
      <div className="flex gap-6 items-center justify-center w-full">
        <div className="flex flex-col text-[#af8cbd]">
          <h1 className="text-[#af8cbd] lg:text-8xl text-5xl font-extrabold mb-5">
            FrontReady
          </h1>
          <p className="text-xl mb-5">
            Прокачай свои навыки фронтенд-разработки — от простых вопросов <br/> до
            реальных задач. Начни путь к уверенному коду уже сегодня!
          </p>
          <div className="flex gap-2">
            <button className="">
              <Link
                href={"/qwestion"}
                className="px-4 py-2 rounded flex justify-center cursor-pointer bg-[#c69fd5] text-white m-auto hover:bg-[#af8cbd] flex-nowrap items-center text-xl"
              >
                К вопросам
              </Link>
            </button>

            <button className="">
              <Link
                href={"/exercise"}
                className="p-2 rounded flex justify-center cursor-pointer bg-[#c69fd5] text-white m-auto hover:bg-[#af8cbd] flex-nowrap   items-center text-xl"
              >
                К упражнениям
              </Link>
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/home.png"
            alt="home"
            height={500}
            width={500}
            style={{}}
          />
        </div>
      </div>
    </div>
  );
}
