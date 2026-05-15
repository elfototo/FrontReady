"use client";

export type FormData = {
  name: string;
  email: string;
  address: string;
  phone: string;
};

export type StepID = 1 | 2 | 3;

export type FormError = Partial<Record<keyof FormData, string>>;

type StepConfig = {
  id: StepID;
  title: string;
  fields: (keyof FormData)[];
};

export const STEPS: StepConfig[] = [
  {
    id: 1,
    title: "Personal info",
    fields: ["name", "email"],
  },
  {
    id: 2,
    title: "Contacts infp",
    fields: ["address", "phone"],
  },
  {
    id: 3,
    title: "Confirmation",
    fields: [],
  },
];

type Action =
  | { type: "UPDATE_FIELD"; field: keyof FormData; value: string }
  | { type: "SET_ERRORS"; errors: FormError }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_PROCESS" };

type State = {
  step: StepID;
  data: FormData;
  errors: FormError;
  isSubmittion: boolean;
};

const initialState: State = {
  step: 1,
  data: {
    name: "",
    email: "",
    address: "",
    phone: "",
  },
  errors: {},
  isSubmittion: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        data: {
          ...state.data,
          [action.field]: action.value,
        },
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    case "NEXT_STEP":
      return {
        ...state,
        step: (state.step + 1) as StepID,
        errors: {},
      };
    case "PREV_STEP":
      return {
        ...state,
        step: (state.step - 1) as StepID,
        errors: {},
      };
    case "SUBMIT_START":
      return {
        ...state,
        isSubmittion: true,
      };

    case "SUBMIT_PROCESS":
      return initialState;

    default:
      return state;
  }
}

function validateField(data: FormData, fields: (keyof FormData)[]): FormError {
  const errors: FormError = {};

  fields.forEach((field) => {
    if (!data[field]) {
      errors[field] = "Requied";
    }
  });

  return errors;
}

import { useReducer } from "react";

export default function MultiStepForm2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const currentStep = STEPS.find((s) => s.id === state.step);

  const handleNext = () => {
    if (currentStep) {
      const errors = validateField(state.data, currentStep?.fields);

      if (Object.keys(errors).length > 0) {
        dispatch({ type: "SET_ERRORS", errors });
        return;
      }

      dispatch({ type: "NEXT_STEP" });
    }
  };

  const handleSubmit = async () => {
    dispatch({ type: "SUBMIT_START" });

    await new Promise((res) => setTimeout(res, 1000));

    console.log("Submit data", state.data);

    dispatch({ type: "SUBMIT_PROCESS" });
  };

  return (
    <div className="border border-gray-300 rounded max-w-md p-10 mx-auto">
      <h1 className="text-xl font-bold mx-auto">{currentStep?.title}</h1>
      {state.step === 1 && (
        <>
          <Input
            value={state.data.name}
            type="text"
            name="name"
            label="Name"
            error={state?.errors?.name}
            onChange={(v) =>
              dispatch({ type: "UPDATE_FIELD", field: "name", value: v })
            }
          />
          <Input
            value={state.data.email}
            type="text"
            name="email"
            label="Email"
            error={state?.errors?.email}
            onChange={(v) =>
              dispatch({ type: "UPDATE_FIELD", field: "email", value: v })
            }
          />
        </>
      )}
      {state.step === 2 && (
        <>
          <Input
            value={state.data.address}
            type="text"
            name="address"
            label="Address"
            error={state?.errors?.address}
            onChange={(v) =>
              dispatch({ type: "UPDATE_FIELD", field: "address", value: v })
            }
          />
          <Input
            value={state.data.phone}
            type="text"
            name="phone"
            label="Phone"
            error={state?.errors?.phone}
            onChange={(v) =>
              dispatch({ type: "UPDATE_FIELD", field: "phone", value: v })
            }
          />
        </>
      )}
      {state.step === 3 && (
        <pre className="p-2 bg-gray-100 rounded mb-3 text-sm">
          {JSON.stringify(state.data, null, 2)}
        </pre>
      )}
      <div className="flex justify-between ">
        {state.step > 1 && (
          <button
            className="bg-blue-400 rounded px-3 py-2 text-white"
            onClick={() => dispatch({ type: "PREV_STEP" })}
          >
            Back
          </button>
        )}

        {state.step < 3 && (
          <button
            className="bg-blue-400 rounded px-3 py-2 text-white"
            onClick={handleNext}
          >
            Next
          </button>
        )}

        {state.step === 3 && (
          <button
            className="bg-blue-400 rounded px-3 py-2 text-white"
            onClick={handleSubmit}
            disabled={state.isSubmittion}
          >
            {state.isSubmittion ? "Submition..." : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
}

type InputProps = {
  value: string;
  name: string;
  type: string;
  onChange: (value: string) => void;
  error?: string;
  label: string;
};

export function Input({
  value,
  name,
  type,
  onChange,
  error,
  label,
}: InputProps) {
  return (
    <div className="mb-3 grid">
      <label htmlFor={label}>{label}: </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
}
