import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const CohortForm = (props) => {
  const onSubmit = (data) => console.log(data);
  const { register, handleSubmit } = useForm();

  const formState = () => {};

  const testFunction = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("test");
      }}
    >
      <input id="firstName" />

      <input type="submit" />
    </form>
  );
};

export default CohortForm;
