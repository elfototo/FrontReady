"use client";
import {useState} from "react";

export default function ToggleBtn2() {
    const [toggle, setTogglr] = useState(false);

    return (
        <div>
            <button className={`${toggle ? "bg-green-500" : "bg-red-500"} text-white p-2 rounded-lg`} onClick={() => setTogglr(!toggle)}>{toggle ? "вкл" : "выкл"}</button>
        </div>
    )
}