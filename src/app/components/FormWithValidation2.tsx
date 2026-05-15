"use client";

import { useState } from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

export default function FormWithValidation2() {
  const [userForm, setUserForm] = useState<User>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<User>>({});

  const validate = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (value.trim() === "" || value.trim().length < 2) return "requed";
        return null;

      case "email":
        if (value.trim() === "" || !value.includes("@")) return "requed";
        return null;

      case "password":
        if (value.trim() === "" || value.trim().length < 5) return "requed";
        return null;
    }
  };

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleonBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrorList: Partial<User> = {};

    (Object.keys(userForm) as (keyof User)[]).forEach((key) => {
      const err = validate(key, userForm[key]);

      if (err) {
        newErrorList[key] = err;
      }
    });

    if (Object.keys(newErrorList).length === 0) {
      alert("form sent");
      setUserForm({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  const isValid =
    !Object.values(errors).some((err) => err) &&
    Object.values(userForm).every((v) => v.trim() !== "");

  return (
    <form className="w-lg grid gap-5" onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name:</label>
      <div className="grid">
        <input
          type="text"
          name="name"
          value={userForm.name}
          onChange={handlerOnChange}
          onBlur={handleonBlur}
          className="px-3 py-2 border border-gray-300 rounded"
        />
        {errors?.name && <span className="text-red-400">{errors.name}</span>}
      </div>
      <label htmlFor="email">Email:</label>
      <div className="grid">
        <input
          type="text"
          name="email"
          value={userForm.email}
          onChange={handlerOnChange}
          onBlur={handleonBlur}
          className="px-3 py-2 border border-gray-300 rounded"
        />
        {errors?.email && <span className="text-red-400">{errors.email}</span>}
      </div>
      <label htmlFor="password">Password:</label>
      <div className="grid">
        <input
          type="password"
          name="password"
          value={userForm.password}
          onChange={handlerOnChange}
          onBlur={handleonBlur}
          className="px-3 py-2 border border-gray-300 rounded"
        />
        {errors?.password && (
          <span className="text-red-400">{errors.password}</span>
        )}
      </div>
      <button
        disabled={!isValid}
        className={`px-3 py-2 ${
          isValid
            ? "bg-blue-400 cursor-pointer"
            : "bg-blue-200 cursor-not-allowed"
        } rounded text-white`}
      >
        Submit
      </button>
    </form>
  );
}
