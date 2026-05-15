"use client";

import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

type Accordion = {
  id: number;
  title: string;
  content: string;
};

const accordion: Accordion[] = [
  {
    id: 1,
    title: "What payment methods do you accept?",
    content:
      "1. We accept every major credit card (Visa, Mastercard, Amex, Discover), PayPal, and bank transfer for annual plans. All payments run through Stripe with PCI DSS compliance. Enterprise customers can bill by invoice with NET 30 terms.",
  },
  {
    id: 2,
    title: "Can I upgrade or downgrade my plan at any time?",
    content:
      "2. We accept every major credit card (Visa, Mastercard, Amex, Discover), PayPal, and bank transfer for annual plans. All payments run through Stripe with PCI DSS compliance. Enterprise customers can bill by invoice with NET 30 terms.",
  },
  {
    id: 3,
    title: "Do you offer refunds if I'm not satisfied?",
    content:
      "3. We accept every major credit card (Visa, Mastercard, Amex, Discover), PayPal, and bank transfer for annual plans. All payments run through Stripe with PCI DSS compliance. Enterprise customers can bill by invoice with NET 30 terms.",
  },
  {
    id: 4,
    title: "What payment methods do you accept?",
    content:
      "4. We accept every major credit card (Visa, Mastercard, Amex, Discover), PayPal, and bank transfer for annual plans. All payments run through Stripe with PCI DSS compliance. Enterprise customers can bill by invoice with NET 30 terms.",
  },
  {
    id: 5,
    title: "What payment methods do you accept?",
    content:
      "5. We accept every major credit card (Visa, Mastercard, Amex, Discover), PayPal, and bank transfer for annual plans. All payments run through Stripe with PCI DSS compliance. Enterprise customers can bill by invoice with NET 30 terms.",
  },
];

export default function FaqCard() {
  const [isOpen, setIsOpen] = useState<number>(0);

  return (
    <main className="w-[47%] text-white">
      <div className="flex flex-col justify-center items-center w-full gap-5 mb-10">
        <p className="text-sm">FREQUENTLY ASKED QUESTIONS</p>
        <h1 className="text-4xl font-bold">Everything you need to know.</h1>
        <p className="text-sm text-center ">
          The short answers to the questions we hear most often. Can not find what
          you are looking for? Our support team replies in under an hour.
        </p>
      </div>

      <Accordian isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}

type options = {
  isOpen: number;
  setIsOpen: Dispatch<SetStateAction<number>>;
};

const Accordian = ({ isOpen, setIsOpen }: options) => {
  return (
    <div className="grid-cols-1 bg-gray-700 rounded-2xl p-5">
      <div>
        {accordion.map((item: Accordion, index: number) => (
          <div key={item.id} className="">
            <div className=" flex justify-between p-2 gap-2">
              <h2 className="font-bold">{item.title}</h2>
              {index === isOpen ? (
                <IoIosArrowDown onClick={() => setIsOpen(-1)} />
              ) : (
                <IoIosArrowBack onClick={() => setIsOpen(index)} />
              )}
            </div>
            {index === isOpen ? (
              <div className="text-gray-400 p-5">{item.content}</div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
