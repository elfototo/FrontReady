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
import SearchWithDelay from "../components/SearchWithDelay";
import SortableTable from "../components/SortableTable";
import MultiStepForm from "../components/MultiStepForm";
import TimerCountdown from "../components/TimerCountdown";

import CounterButton2 from "../components/CounterButton2";
import ToggleBtn2 from "../components/ToggleBtn2";
import Accordion2 from "../components/Accordion2";
import FormWithValidation2 from "../components/FormWithValidation2";
import DataAPI2 from "../components/DataAPI2";
import SearchFilterList2 from "../components/SearchFilterList2";
import ModalWindow2 from "../components/ModalWindow2";
import Pagination2 from "../components/Pagination2";
import Dropdown2 from "../components/Dropdown2";
import Autocomplete2 from "../components/Autocomplete2";
import InfinityScrollIntObs2 from "../components/InfinityScrollIntObs2";
import InfinityScrollEvent2 from "../components/InfinityScrollEvent2";
import MultiStepForm2 from "../components/MultiStepForm2";
import SortableTable2 from "../components/SortableTable2";
import Tabs2 from "../components/Tabs2";
import TimerCountdown2 from "../components/TimerCountdown2";
import FaqCard from "../components/FaqCard";
import SearchableUserList from "../components/SearchableUserList";
import ToastNotifications from "../components/ToastNotifications";
import MiniKanbanBoard from "../components/MiniKanbanBoard";
import MultiSelectTagsInput from "../components/MultiSelectTagsInput";
import HookuseDebounce from "../components/HookuseDebounce";
import DiscoverEvents from "../components/DiscoverEvents";
import Button from "../components/comForTreining/Button";
import Tooltip from "../components/comForTreining/Tooltip";
import { AiTwotoneSetting } from "react-icons/ai";

export default function Practice() {
  return (
    <main className="relative font-sans lg:grid px-[1rem] xl:gap-10 max-w-[1200px] mx-auto">
      <h1 className="mt-10 text-2xl">Список коспонентов</h1>

      <h2>Tooltip</h2>
      <div className=" bg-[#041638] flex items-center justify-center py-[100px] rounded-2xl shadow-sm">
        <Tooltip position="left" content="Setting" delay={100}>
          <button>
            <AiTwotoneSetting size={25} />
          </button>
        </Tooltip>
        <Tooltip position="top" content="Setting" delay={100}>
          <button>
            <AiTwotoneSetting size={25} />
          </button>
        </Tooltip>
        <Tooltip position="bottom" content="Setting" delay={200}>
          <button>
            <AiTwotoneSetting size={25} />
          </button>
        </Tooltip>
        <Tooltip position="right" content="Setting" delay={200}>
          <button>
            <AiTwotoneSetting size={25} />
          </button>
        </Tooltip>
      </div>

      <h2>Button variants</h2>
      <div className=" bg-white flex items-center justify-center py-[100px] rounded-2xl shadow-sm gap-5">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost" disabled={false}>
          Ghost
        </Button>
      </div>

      <h2>Discover Events</h2>
      <div className=" bg-[#041638] flex items-center justify-center py-[100px] rounded-2xl shadow-sm">
        <DiscoverEvents />
      </div>

      <h2>useDebounce hook</h2>
      <div className=" bg-blue-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm">
        <HookuseDebounce />
      </div>

      <h2>Multi Select Tags Input</h2>
      <div className=" bg-blue-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm">
        <MultiSelectTagsInput />
      </div>

      <h2>Mini Kanban Board</h2>
      <div className=" bg-blue-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm">
        <MiniKanbanBoard />
      </div>

      <h2>Toast Notifications</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm bg-gradient-to-t from-[#edeff9] to-[#eceef9]">
        <ToastNotifications />
      </div>

      <h2>Searchable User List</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm bg-blue-400">
        <SearchableUserList />
      </div>

      <h2>Expandable FAQ Card</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm bg-gray-800">
        <FaqCard />
      </div>

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

      {/* <h2>intersection observer infinity scroll</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <InfinityScrollIntObs />
      </div> */}

      <h2>infinity scroll event</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <InfinityScrollEvent />
      </div>

      <h2>Debounced Search</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <SearchWithDelay
          options={[
            { id: 1, label: "Apple", value: "Apple" },
            { id: 2, label: "Orange", value: "Orange" },
            { id: 3, label: "Banana", value: "Banana" },
          ]}
          placeholder="search fruit"
        />
      </div>

      <h2>Sortable Table</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <SortableTable />
      </div>

      <h2>Multi-step Form with useReducer</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <MultiStepForm />
      </div>

      <h2>Timer Countdown</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <TimerCountdown />
      </div>

      <h2>Accordion</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Accordion2 />
      </div>

      <h2>Autocomplete</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Autocomplete2
          options={[
            { id: 1, label: "Apple", value: "apple" },
            { id: 2, label: "Orange", value: "orange" },
            { id: 3, label: "Banana", value: "banana" },
          ]}
          placeholder="type..."
        />
      </div>

      <h2>DataAPI2</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <DataAPI2 />
      </div>

      <h2>Counter Button</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <CounterButton2 />
      </div>

      <h2>Dropdown / Select</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Dropdown2
          options={[
            { id: 1, label: "Apple", value: "apple" },
            { id: 2, label: "Orange", value: "orange" },
            { id: 3, label: "Banana", value: "banana" },
          ]}
          placeholder="Choose fruit"
        />
      </div>

      <h2>Форма с валидацией</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <FormWithValidation2 />
      </div>

      <h2>infinity scroll event</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <InfinityScrollEvent2 />
      </div>

      {/* <h2>intersection observer infinity scroll</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <InfinityScrollIntObs2 />
      </div> */}

      <h2>Multi-step Form with useReducer</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <MultiStepForm2 />
      </div>

      <h2>Pagination</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Pagination2 />
      </div>

      <h2>Search / Filter List</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <SearchFilterList2 />
      </div>

      <h2>Sortable Table</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <SortableTable2 />
      </div>

      <h2>Tabs</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <Tabs2 />
      </div>

      <h2>Timer Countdown</h2>
      <div className="border-1 border-gray-100 flex items-center justify-center py-[100px] rounded-2xl shadow-sm ">
        <TimerCountdown2 />
      </div>
    </main>
  );
}
