"use client";
import { useState } from "react";

type Form = {
  name: string;
  email: string;
  password: string;
};

export default function FormWithValidation2() {
  const [values, setValues] = useState<Form>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<Form>>({});

  const validationFields = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Поле не должно быть пустым";
        if (value.trim().length < 2) return "Не менее 2 знаков";
        return null;

      case "email":
        if (!value.trim()) return "Поле не должно быть пустым";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Некорректный email";
        return null;

      case "password":
        if (!value.trim()) return "Поле не должно быть пустым";
        if (value.trim().length < 5) return "Не менее 5 знаков";
        return null;
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validationFields(name, value) }));
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setErrors((prev) => ({ ...prev, [name]: validationFields(name, value) }));
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Form> = {};

    (Object.keys(values) as (keyof Form)[]).forEach((key) => {
        const err = validationFields(key, values[key]);

        if (err) newErrors[key] = err;
    })

    if (Object.keys(newErrors).length === 0) {
        alert("Form sent");
    }

    setValues({
        name: "",
        email: "",
        password: ""
    })
  };

  const isValid = !Object.values(errors).some((err) => err) && Object.values(values).every((v) => v !== "");

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleOnSubmit} className="grid grid-cols-[1fr_3fr] gap-5">
        <label htmlFor="name">Name:</label>
        <div className="grid">
          <input
            value={values.name}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            className="p-2 bg-gray-50 border border-gray-300 rounded-lg"
            name="name"
            id="name"
            placeholder="name"
            type="text"
          />
          {errors.name && <p className="text-red-400">{errors.name}</p>}
        </div>

        <label htmlFor="email">Email:</label>

        <div className="grid">
          <input
            value={values.email}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            className="p-2 bg-gray-50 border border-gray-300 rounded-lg"
            name="email"
            id="email"
            placeholder="email"
            type="text"
          />
          {errors.email && <p className="text-red-400">{errors.email}</p>}
        </div>

        <label htmlFor="password">Password:</label>
        <div className="grid">
          <input
            value={values.password}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            className="p-2 bg-gray-50 border border-gray-300 rounded-lg"
            name="password"
            id="password"
            placeholder="password"
            type="password"
          />
          {errors.password && <p className="text-red-400">{errors.password}</p>}
        </div>

        <button disabled={!isValid} className={`${isValid ? " bg-blue-400  cursor-pointer" : "bg-blue-100 cursor-not-allowed"} w-full col-span-full rounded-lg py-2 text-white`}>
          Send
        </button>
      </form>
    </div>
  );
}