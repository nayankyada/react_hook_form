// 02
import React from "react";
import { Button, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import "antd/dist/antd.css";

const Index: React.FC = () => {
  const {
    control,

    handleSubmit,
    resetField,
    setError,
    trigger,
    setFocus,
    setValue,
    clearErrors,
    getFieldState,
    getValues,
    
    formState: { errors, isDirty, isValid, isSubmitSuccessful, },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="felx justify-center items-start">
      <div className="w-1/2 m-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Username</label>
            <Controller
              name="username"
              control={control}
              rules={{
                required: "Required Fields",
                minLength: { value: 3, message: "Minimum 3 char required" },
              }}
              render={({ field: { onChange, value, ref } }) => (
                <Input onChange={onChange} value={value} ref={ref} />
              )}
            />
            {errors.username ? (
              <p className="text-red-600">{errors.username.message}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label>Password</label>

            <Controller
              name="password"
              control={control}
              rules={{
                required: "Required Fields",
                minLength: { value: 8, message: "Minimum 8 char required" },
              }}
              render={({ field: { onChange, value, ref } }) => (
                <Input.Password onChange={onChange} value={value} ref={ref} />
              )}
            />

            {errors.password ? (
              <p className="text-red-600">{errors.password.message}</p>
            ) : (
              ""
            )}
          </div>
          <button
            className="px-3 my-2 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
            type="submit"
          >
            Submit{" "}
          </button>
        </form>
      </div>
      <div className="space-x-2">
      <button
        onClick={() => {
          console.log("isValid", isValid);
        }}
        className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
      >
        isValid
      </button>
      <button
        onClick={() => {
          console.log("isSubmitSuccessful", isSubmitSuccessful);
        }}
        className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
      >
        isSubmitted
      </button>
      <button
        onClick={() => {
          console.log("isDirty", isDirty);
        }}
        className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
      >
        isDirty
      </button>
      <button
        onClick={() => {
          resetField("password", { keepError: true });
        }}
        className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
      >
        resetField
      </button>
      <button
        onClick={() => {
          setError("username", {
            type: "string",
            message: "This is custome error",
          });
        }}
        className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
      >
        setError
      </button>

      <button
        onClick={() => {
          // we can pass field name to clear errors of single fields
          clearErrors();
        }}
        className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
      >
        clearErrors
      </button>

      <button
        onClick={() => {
          setValue("username", "Custom Value", { shouldValidate: true });
        }}
        className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
      >
        setValue
      </button>

      <button
        onClick={() => {
          setFocus("password");
        }}
        className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
      >
        setFocus
      </button>

      <button
        onClick={() => {
          console.log(getValues(["username", "password"]));
        }}
        className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
      >
        getValues
      </button>
      <button
        onClick={() => {
          console.log(getFieldState("password"));
        }}
        className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
      >
        getFieldState
      </button>
      <button
        onClick={() => {
          console.log("To trigger validation function on specific fields");
          // pass nothing to trigger for all fields
          trigger("username");
        }}
        className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
      >
        trigger
      </button>
      </div>
    </div>
  );
};

export default Index;
