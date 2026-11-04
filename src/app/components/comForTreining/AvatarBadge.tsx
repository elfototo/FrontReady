"use client";

import { useState } from "react";
type AvatarStatus = "online" | "offline" | "away";

type AvatarProps = {
  status: AvatarStatus;
  name: string;
  src?: string;
};

export default function Avatar({ status, name, src }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const shortNAme = name.split(" ").filter((item) => item.length > 0);

  console.log("shortNAme", shortNAme);
  let firstname;
  let surname;

  if (shortNAme.length > 1) {
    firstname = shortNAme[0][0].toUpperCase();

    surname = shortNAme[1][0].toUpperCase();
  } else {
    firstname = shortNAme[0][0].toUpperCase();
    surname = "";
  }

  const initials = `${firstname}${surname}`;

  return (
    <div className="w-[30px] h-[30px] relative">
      <div className="overflow-hidden flex items-center justify-center w-full h-full rounded-full object-cover bg-gray-50">
        {src && !imageError ? (
          <img
            src={src}
            alt={name}
            width={30}
            height={30}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="bg-gray-50 text-sm">{initials}</div>
        )}
      </div>

      <Badge status={status} />
    </div>
  );
}

export function Badge({ status }: { status: AvatarStatus }) {
  const badgeStatus = {
    online: "bg-green-500",
    offline: "bg-red-500",
    away: "bg-orange-500",
  };

  return (
    <div
      className={`absolute right-0 bottom-0 rounded-full w-[10px] h-[10px] ${badgeStatus[status]}`}
    ></div>
  );
}
