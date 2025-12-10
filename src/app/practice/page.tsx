import CounterButton from "../components/CounterButton";
import ToggleBtn from "../components/ToggleBtn";
import Accordion from "../components/Accordion";
import FormWithValidation from "../components/FormWithValidation";
import DataAPI from "../components/DataAPI";
import SearchFilterList from "../components/SearchFilterList";
import ModalWindow from "../components/ModalWindow";
import Tabs from "../components/Tabs";
import Pagination from "../components/Pagination";
import Dropdown from "../components/Dropdown";
import Autocomplete from "../components/Autocomplete";
import InfinityScrollIntObs from "../components/InfinityScrollIntObs";
import InfinityScrollEvent from "../components/InfinityScrollEvent";

import CounterButton2 from "../components/CounterButton2";
import ToggleBtn2 from "../components/ToggleBtn2";
import Accordion2 from "../components/Accordion2";
import FormWithValidation2 from "../components/FormWithValidation2";
import DataAPI2 from "../components/DataAPI2";
import SearchFilterList2 from "../components/SearchFilterList2";
import ModalWindow2 from "../components/ModalWindow2";
import Pagination2 from "../components/Pagination2";
import Tabs2 from "../components/Tabs2";

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
        <ToggleBtn />
      </div>

      <h2>Accordion</h2>

      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Accordion />
      </div>

      <h2>Форма с валидацией</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <FormWithValidation />
      </div>

      <h2>Fetch Data from API</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <DataAPI />
      </div>

      <h2>Search / Filter List</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <SearchFilterList />
      </div>

      <h2>Modal Window</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <ModalWindow />
      </div>

      <h2>Tabs</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Tabs />
      </div>

      <h2>Pagination</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Pagination />
      </div>

      <h2>Dropdown / Select</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Dropdown
          options={[
            { label: "Apple", value: "apple" },
            { label: "Orange", value: "orange" },
            { label: "Banana", value: "banana" },
          ]}
          placeholder="Choose fruit"
        />
      </div>

      <h2>Autocomplete</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Autocomplete
          options={[
            { id: 1, label: "Apple", value: "apple" },
            { id: 2, label: "Orange", value: "orange" },
            { id: 3, label: "Banana", value: "banana" },
          ]}
          placeholder="type..."
        />
      </div>

      <h2>intersection observer infinity scroll</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <InfinityScrollIntObs />
      </div>

      <h2>infinity scroll event</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <InfinityScrollEvent />
      </div>

      <h2>Counter Button</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <CounterButton2 />
      </div>

      <h2>Toggle Button</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <ToggleBtn2 />
      </div>

      <h2>Accordion</h2>

      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Accordion2 />
      </div>

      <h2>1111111111</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <FormWithValidation2 />
      </div>

      <h2>Fetch Data from API</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <DataAPI2 />
      </div>

      <h2>Search / Filter List</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <SearchFilterList2 />
      </div>

      <h2>Modal Window</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <ModalWindow2 />
      </div>

      <h2>Tabs</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Tabs2 />
      </div>

      <h2>Pagination</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Pagination2 />
      </div>
    </main>
  );
}
