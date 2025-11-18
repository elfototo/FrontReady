"use client";

import { useState } from "react";

interface formValues {
  name: string;
  email: string;
  password: string;
}

export default function FormWithValidation() {
  const [values, setValues] = useState<formValues>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<formValues>>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Имя не должно быть пустым";
        if (value.trim().length < 2) return "Минимум 2 символа";
        return null;
      case "email":
        if (!value.trim()) return "email не должен быть пустым";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Некорректный email";
        return null;

      case "password":
        if (!value.trim()) return "Пароль не должен быть пустым";
        if (value.trim().length < 5) return "Минимум 5 символов";
        return null;
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<formValues> = {};

    (Object.keys(values) as (keyof formValues)[]).forEach((key) => {
      const error = validateField(key, values[key]);

      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Форма отправлена");
      console.log("values", values);
    }

    setValues({
      name: "",
      email: "",
      password: "",
    });
  };

  const errorList = Object.values(errors);
  const hasError = errorList.some((error) => error);
  const isValid = !hasError && Object.values(values).every((v) => v.trim());

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[700px] bg-slate-50 p-10 rounded-2xl"
    >
      <div className="mb-5">
        <label className="mr-2">Name</label>
        <input
          name="name"
          value={values.name}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          className="border border-stone-300 rounded-lg p-1"
        />
      </div>
      {errors.name && <p className="p-2 text-red-400">{errors.name}</p>}
      <div className="mb-5">
        <label className="mr-2">Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          className="border border-stone-300 rounded-lg p-1"
        />
      </div>
      {errors.email && <p className="p-2 text-red-400">{errors.email}</p>}
      <div className="mb-5">
        <label className="mr-2">Password</label>
        <input
          name="password"
          value={values.password}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          type="password"
          className="border border-stone-300 rounded-lg p-1"
        />
      </div>
      {errors.password && <p className="p-2 text-red-400">{errors.password}</p>}

      <button
        disabled={!isValid}
        className="cursor-pointer p-2 bg-blue-400 text-white rounded-lg w-full"
      >
        Зарегистрироваться
      </button>
    </form>
  );
}
