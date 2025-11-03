import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="overflow-visible font-sans flex flex-col items-center justify-center bg-[#fdfdc9] px-5 rounded-b-[50px] md:rounded-b-none shadow-md h-[90vh] md:h-screen">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full pt-10 min-h-screen">
          <div className="flex flex-col py-2 text-gray-500 md:mr-5 justify-center items-center md:items-start text-center md:text-left max-w-lg md:h-auto min-h-screen">
            <h1 className="lg:text-[4.4rem] text-[4rem] font-extrabold md:mb-5 text-[#af8cbd]">
              FrontReady
            </h1>
            <p className="text-md md:mb-[1.8rem] lg:w-[25rem] w-full md:w-[23rem] ml-[2px]">
              Прокачай свои навыки фронтенд-разработки - от простых вопросов до
              реальных задач. Начни путь к уверенному коду уже сегодня!
            </p>

            <div className="md:hidden my-[2rem]">
              <Image
                src="/home copy 2.png"
                alt="home"
                height={400}
                width={400}
                className="h-[15rem] w-auto"
              />
            </div>

            <div className="md:flex gap-2 grid grid-cols-1 w-full md:w-auto">
              <button className="">
                <Link
                  href={"/qwestion"}
                  className="md:px-4 md:py-2 py-3 rounded flex justify-center cursor-pointer border-1 hover:border-[#af8cbd] hover:text-[#af8cbd] hover:bg-transparent text-white m-auto bg-[#af8cbd] flex-nowrap items-center text-md"
                >
                  К вопросам
                </Link>
              </button>

              <button className="">
                <Link
                  href={"/exercise"}
                  className="md:px-4 md:py-2 py-3 rounded flex justify-center cursor-pointer border-1 hover:border-[#af8cbd] hover:text-[#af8cbd] hover:bg-transparent text-white  m-auto bg-[#af8cbd] flex-nowrap items-center  text-md"
                >
                  К упражнениям
                </Link>
              </button>
            </div>
          </div>
          {/* <div className="absolute top-0 z-0 right-30 opacity-70">
          <Image
            src="/blob-haikei-5.svg"
            alt="blob"
            height={1000}
            width={1000}
            style={{"width":"60rem","height":"60rem"}}
          />
        </div> */}
          <div className="z-10 hidden md:block mt-[2rem] md:mt-0  h-auto md:w-[25rem]">
            <Image
              src="/home copy 2.png"
              alt="home"
              height={400}
              width={400}
              className="lg:w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
