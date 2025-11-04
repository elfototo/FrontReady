import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="z-0 overflow-visible font-sans flex flex-col items-center justify-center bg-gray-50 px-5 h-screen md:bg-[#fdfdc9] md:h-screen">
        <div
          className="hidden md:block absolute z-0 top-0 h-full w-full"
          style={{
            backgroundImage: 'url("/Безымянный-4.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="absolute z-0 top-0 bg-[#c084fc] h-[60vh] w-full md:hidden"
          style={{
            backgroundImage: 'url("/Безымянный-3.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="z-10 flex flex-col md:flex-row gap-6 items-center justify-end w-full pt-10 min-h-screen md:justify-center">
          {/* <div className="hidden md:block absolute bottom-0 w-full bg-gray-50 h-[68vh] z-0"></div> */}
          <div className="relative z-10 flex flex-col text-gray-500 justify-center items-center text-center max-w-lg bg-white mx-[2rem] mb-[20vh] md:mb-0 rounded-xl shadow-lg md:shadow-none md:mr-5 md:items-start md:text-left md:mx-0 p-[2.4rem] md:px-10 md:bg-transparent">
            
            <h1 className="lg:text-[4.4rem] md:text-[4rem] text-[2.5rem] font-extrabold mb-4 md:mb-[0.1rem] text-violet-400 ">
              FrontReady
            </h1>
            <p className="text-sm ml-[2px] w-full mb-7  md:text-[1rem] md:w-[23rem] md:mb-[1.4rem] lg:w-[25rem]">
              Прокачай свои навыки фронтенд-разработки - от простых вопросов до
              реальных задач. Начни путь к уверенному коду уже сегодня!
            </p>

            <div className="md:flex gap-3 grid grid-cols-1 w-full md:w-auto">
              <button className="">
                <Link
                  href={"/qwestion"}
                  className="md:px-6 md:py-2 py-[0.6rem] rounded-full flex justify-center cursor-pointer border-1 border-transparent hover:bg-violet-500 text-white m-auto bg-violet-400 flex-nowrap items-center text-sm md:text-[1rem]"
                >
                  К вопросам
                </Link>
              </button>

              <button className="">
                <Link
                  href={"/exercise"}
                  className="md:px-6 md:py-2 py-[0.6rem] rounded-full flex justify-center cursor-pointer border-1 border-transparent hover:bg-violet-500 text-white  m-auto bg-violet-400 flex-nowrap items-center  text-sm md:text-[1rem]"
                >
                  К упражнениям
                </Link>
              </button>
            </div>
          </div>

          <div className="z-10 hidden md:block mt-[2rem] md:mt-0  h-auto md:w-[25rem]">
            {/* <Image
              src="/home copy 2.png"
              alt="home"
              height={400}
              width={400}
              className="lg:w-full h-auto"
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
