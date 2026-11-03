"use client";

import { useState, useRef, FormEvent } from "react";
import { ComponentPropsWithoutRef } from "react";

type FormFieldProps = {
  children: React.ReactNode;
};

export function FormField({ children }: FormFieldProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity();

      return;
    }

    alert("Form Submited");
  };
  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="flex flex-col gap-5 bg-gray-100 rounded-2xl p-5"
    >
      {children}
      <button
        type="submit"
        className="px-3 py-2 bg-black text-white rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
  error?: string;
};

export function Input({ ...props }: InputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(value);
    if (value.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <label htmlFor={props.type}>{props.label}</label>
      <input
        id={props.type}
        className="bg-white rounded-lg px-3 py-2"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        value={value}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
      />

      <div className="text-red-500 text-sm">{error && props.error}</div>
    </>
  );
}
