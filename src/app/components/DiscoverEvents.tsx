"use client";

import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import { MdOutlinePlace } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

type Category = {
  id: number;
  title: string;
};

export const category = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Music",
  },
  {
    id: 3,
    title: "Art",
  },
  {
    id: 4,
    title: "Sport",
  },
  {
    id: 5,
    title: "Food",
  },
  {
    id: 6,
    title: "Festival",
  },
];

export const eventsData = [
  {
    id: 1,
    title: "Rock Festival",
    city: "Moscow",
    category: "music",
    date: "2026-07-20",
    price: 0,
    rating: 4.9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEj-FmTs0Luk9iInJwpjd8IXLYM2d2IqYjUK-AML_d0g&s",
  },
  {
    id: 2,
    title: "Van Gogh Exhibition",
    city: "Saint Petersburg",
    category: "art",
    date: "2026-07-28",
    price: 1200,
    rating: 4.8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgAo9ZqfAdmBf-261EmN51-onYVao73U2v2DObzer88g&s=10",
  },
  {
    id: 3,
    title: "Street Food Weekend",
    city: "Kazan",
    category: "food",
    date: "2026-07-18",
    price: 700,
    rating: 4.6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVH0Rv7sCI_6XTFweFAanH0s9f1c1wwkXauzJktEUoQ&s=10",
  },
  {
    id: 4,
    title: "Jazz Night",
    city: "Moscow",
    category: "music",
    date: "2026-08-02",
    price: 1800,
    rating: 4.7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7stuGHacfhQyFzOIuvRRJLiVIlLZyf3kZlohNUB-8A&s=10",
  },
  {
    id: 5,
    title: "City Marathon",
    city: "Sochi",
    category: "sport",
    date: "2026-09-10",
    price: 500,
    rating: 4.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2w1UvAZc8yGB6SxC063rATIIeR76ZW4KESTPrQQX1MQ&s=10",
  },
  {
    id: 6,
    title: "Comic Con",
    city: "Moscow",
    category: "festival",
    date: "2026-08-18",
    price: 2500,
    rating: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleKfmH4fK4DUyZYC0-a89xZ2fYA03iTasU1X70l2e4g&s=10",
  },
  {
    id: 7,
    title: "Electronic Night",
    city: "Berlin",
    category: "music",
    date: "2026-08-25",
    price: 3200,
    rating: 4.9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTqXsbfF3SI-ELz-9c0J1sSlVarO3RqfEnYIz6uKyww&s=10",
  },
  {
    id: 8,
    title: "Photo Exhibition",
    city: "Paris",
    category: "art",
    date: "2026-07-30",
    price: 900,
    rating: 4.4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-up2abh3szSZVwihUsHVDVmnenjvdO7AMF_hhS0GJTw&s=10",
  },
];

type Event = {
  id: number;
  title: string;
  city: string;
  category: string;
  date: string;
  price: number;
  rating: number;
  image: string;
};

type Filter = {
  search: string;
  category: Category;
  maxPrice: number;
  sort: string;
};

export default function DiscoverEvents() {
  const [activeCategory, setActiveCategory] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState<Event[]>([]);

  const refTimeout = useRef<number | null>(null);

  function filterEvents(events: Event[], filters: Filter) {}

  useEffect(() => {
    if (refTimeout.current) {
      clearTimeout(refTimeout.current);
    }

    refTimeout.current = window.setTimeout(() => {
      if (value.trim() === "") {
        setFiltered(eventsData);
        return;
      }

      const filtered = eventsData.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase());
      });

      if (filtered.length !== 0) {
        setFiltered(filtered);
      }
    }, 500);


  }, [value]);

  return (
    <div className="w-[80%] flex flex-col gap-10">
      <SearchingEvents value={value} setValue={setValue} />

      <div className="flex gap-3 text-white/50 ">
        {category.map((item) => (
          <button
            key={item.id}
            onClick={() =>
              setActiveCategory((prev) => [
                ...prev,
                activeCategory.includes(item.title) ? " " : item.title,
              ])
            }
            className={`px-3 py-2 border border-white/20 rounded-xl cursor-pointer text-sm hover:bg-white/10 ${activeCategory.includes(item.title) ? "bg-white/5" : "bg-transparent"}`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {filtered.map((item, index) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            city={item.city}
            category={item.category}
            date={item.date}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  id,
  title,
  city,
  category,
  date,
  price,
  rating,
  image,
}: Event) {
  return (
    <div className="text-white border-1 border-white/20 rounded-2xl overflow-hidden">
      <div className="overflow-hidden h-[150px] w-auto relative">
        <div className="absolute top-5 left-5 bg-[#824FC8] rounded-full px-3 py-1 text-sm flex items-center gap-2">
          <FaStar />
          <p>{rating}</p>
        </div>

        <div className="absolute top-5 right-5 bg-red-400 rounded-full px-3 py-1 text-sm flex items-center gap-2">
          <FaCalendar />
          <p>{date}</p>
        </div>

        <div className="w-full h-[150px] bg-gradient-to-b from-transparent to-black/80 absolute"></div>

        <img
          className="object-contain w-full"
          src={image}
          alt="img"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col p-4 gap-2 my-2">
        <div className="flex">
          <p className="border-1 border-white/20 rounded-full px-3 py-1 text-sm">
            {category}
          </p>
        </div>

        <h1 className="font-bold text-xl">{title}</h1>

        <div className="flex items-center gap-1 text-white/30 text-sm">
          <MdOutlinePlace />
          <p>{city}</p>
        </div>

        <div className="w-full h-[1px] bg-white/20"></div>

        <div className="flex items-center justify-between">
          <p className="text-white/30">from</p>
          <p className="font-bold text-[#824FC8] text-xl">${price}</p>
        </div>
      </div>
    </div>
  );
}

type SearchingEventsProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

function SearchingEvents({ value, setValue }: SearchingEventsProps) {
  return (
    <div className="w-full text-white border-1 border-white/20 rounded-2xl px-3 py-2 flex items-center gap-3">
      <IoSearch className="text-white/50" />
      <input
        className=" w-full"
        type="text"
        placeholder="Search events..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
