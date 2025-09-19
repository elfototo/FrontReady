import Link from "next/link";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>FrontReady</h1>
      <div className="grid gap-2 w-[10rem]">
        <Link href={"/qwestion"} className="py-2 w-full rounded flex justify-center cursor-pointer bg-emerald-400 text-white m-auto hover:bg-emerald-600">К вопросам</Link>
        <Link href={"/exercise"} className="py-2 w-full rounded flex justify-center cursor-pointer bg-emerald-400 text-white m-auto hover:bg-emerald-600">К упражнениям</Link>
      </div>
    </div>
  );
}
