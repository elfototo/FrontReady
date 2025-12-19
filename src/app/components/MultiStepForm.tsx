"use client";

export type FormData = {
  name: string;
  email: string;
  address: string;
  phone: string;
};

export type StepId = 1 | 2 | 3;

export type FormErrors = Partial<Record<keyof FormData, string>>;

type StepConfig = {
  id: StepId;
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
    title: "Contacts",
    fields: ["address", "phone"],
  },
  {
    id: 3,
    title: "Confirmation",
    fields: [],
  },
];

type State = {
  step: StepId;
  data: FormData;
  errors: FormErrors;
  isSubmittion: boolean;
};

type Action =
  | { type: "UPDATE_FIELD"; field: keyof FormData; value: string }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_ERRORS"; errors: FormErrors }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_PROCCESS" };

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
        step: (state.step + 1) as StepId,
        errors: {},
      };
    case "PREV_STEP":
      return {
        ...state,
        step: (state.step - 1) as StepId,
        errors: {},
      };

    case "SUBMIT_START":
      return {
        ...state,
        isSubmittion: true,
      };

    case "SUBMIT_PROCCESS":
      return initialState;

    default:
      return state;
  }
}

function validateFields(
  data: FormData,
  fields: (keyof FormData)[]
): FormErrors {
  const errors: FormErrors = {};

  fields.forEach((field) => {
    if (!data[field]) {
      errors[field] = "Required";
    }
  });

  return errors;
}

import { useReducer } from "react";

export default function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const currentStep = STEPS.find((s) => s.id === state.step);

  const handleNext = () => {
    if (currentStep) {
      const errors = validateFields(state.data, currentStep.fields);

      if (Object.keys(errors).length > 0) {
        dispatch({ type: "SET_ERRORS", errors });
        return;
      }

      dispatch({ type: "NEXT_STEP" });
    }
  };

  const handleSubmit = async () => {
    dispatch({ type: "SUBMIT_START" });

    // имитация API
    await new Promise((res) => setTimeout(res, 1000));

    console.log("Submit data", state.data);

    dispatch({ type: "SUBMIT_PROCCESS" });
  };

  return (
    <div className="max-w-md mx-auto border p-4 rounded">
      <h2 className="text-xl font-bold mb-5">{currentStep?.title}</h2>

      {state.step === 1 && (
        <>
          <Input
            label="Name"
            value={state.data.name}
            error={state.errors.name}
            type="text"
            name="name"
            onChange={(v) =>
              dispatch({ type: "UPDATE_FIELD", field: "name", value: v })
            }
          />
          <Input
            label="Email"
            value={state.data.email}
            error={state.errors.email}
            type="email"
            name="email"
            onChange={(v) =>
              dispatch({ type: "UPDATE_FIELD", field: "email", value: v })
            }
          />
        </>
      )}

      {state.step === 2 && (
        <>
        <Input
            label="Address"
            value={state.data.address}
            error={state.errors.address}
            type="text"
            name="address"
            onChange={(v) =>
              dispatch({ type: "UPDATE_FIELD", field: "address", value: v })
            }
          />

          <Input
            label="Phone"
            value={state.data.phone}
            error={state.errors.phone}
            type="text"
            name="phone"
            onChange={(v) =>
              dispatch({ type: "UPDATE_FIELD", field: "phone", value: v })
            }
          />
        </>
      )}

      {state.step === 3 && (
        <pre className="bg-gray-100 p-2 rounded text-sm">
            {JSON.stringify(state.data, null, 2)}
        </pre>
      )}

      <div className="flex justify-between mt-4">
        {state.step > 1 && (
            <button className="cursor-pointer px-3 py-2 bg-blue-400 text-white rounded" onClick={() => dispatch({type: "PREV_STEP"})}>Back</button>
        )}

        {state.step < 3 && (
            <button  className="cursor-pointer px-3 py-2 bg-blue-400 text-white rounded"onClick={handleNext}>Next</button>
        )}

        {state.step === 3 && (
            <button  className="cursor-pointer px-3 py-2 bg-blue-400 text-white rounded"onClick={handleSubmit} disabled={state.isSubmittion}>{state.isSubmittion ? "Submittion..." : "Submit"}</button>
        )}
      </div>
    </div>
  );
}

type InputProps = {
  label: string;
  value: string;
  error?: string;
  type: string;
  name: string;
  onChange: (value: string) => void;
};

export function Input({ label, value, error, type, name, onChange }: InputProps) {
  return (
    <div className="mb-3">
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-lg px-3 py-2 border-gray-300 w-full"
        placeholder={`Введите ${label}`}
        type={type}
        name={name}
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
}
