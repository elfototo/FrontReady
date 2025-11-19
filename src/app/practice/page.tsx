import CounterButton from "../components/CounterButton";
import ToggleBtn from "../components/ToggleBtn";
import  Accordion from "../components/Accordion";
import FormWithValidation from "../components/FormWithValidation";
import DataAPI from "../components/DataAPI";
import SearchFilterList from "../components/SearchFilterList";
import ModalWindow from "../components/ModalWindow";
import Tabs from "../components/Tabs";

export default function Practice() {
  return (
    <main className="relative font-sans lg:grid px-[1rem] xl:gap-10 max-w-[1200px] mx-auto">
      <h1 className="mt-10 text-2xl">Список коспонентов</h1>
      <h2>Counter Button</h2>

      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <CounterButton />
      </div>

      <h2>Toggle Button</h2>

      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <ToggleBtn/>
      </div>

      <h2>Accordion</h2>

      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Accordion/>
      </div>

      <h2>Форма с валидацией</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <FormWithValidation/>
      </div>

      <h2>Fetch Data from API</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <DataAPI/>
      </div>

      <h2>Search / Filter List</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <SearchFilterList/>
      </div>

       <h2>Modal Window</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <ModalWindow/>
      </div>

      <h2>Tabs</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Tabs/>
      </div>
    </main>
  );
}
