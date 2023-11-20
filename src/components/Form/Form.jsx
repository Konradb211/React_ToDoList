import { useState } from "react";
import { Button } from "../Button/Button";

export const Form = ({ onFormSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(inputValue);
      }}
      className="mt-6 flex gap-3"
    >
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        className="w-full rounded border border-black p-2"
      />
      <Button>Dodaj</Button>
    </form>
  );
};
