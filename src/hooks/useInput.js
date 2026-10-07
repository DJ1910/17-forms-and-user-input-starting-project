import { useState } from "react";

export function useInput(initialValue, validationFn) {
  const [data, setData] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);

  const isValid = !didEdit || validationFn(data);

  function handleInputChange(event) {
    setData(event.target.value);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  function handleInputFocus() {
    setDidEdit(false);
  }

  function handleReset() {
    setData(initialValue);
    setDidEdit(false);
  }

  return {data, isValid, handleInputChange, handleInputBlur, handleInputFocus, handleReset};
}