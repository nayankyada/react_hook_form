// 01 hook-form implemented simply
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    trigger,
    clearErrors,
    resetField,
    setValue,
    setFocus,
    getFieldState,
    getValues,
    formState: { errors, isSubmitSuccessful, isValid, isDirty,dirtyFields },
  } = useForm({ defaultValues: { username: "", password: "" } });
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (e) => {
    console.log("Error", e);
  };

  // to watch all input
  useEffect(() => {
    const d = watch((value) => console.log(value));
    return () => d.unsubscribe();
  }, [watch]);

  // to watch specific
  const watchPassword = watch("password");
  useEffect(() => {
    console.log(watchPassword);
  }, [watchPassword]);

  // reset only when successfull
  useEffect(() => {
    if (isSubmitSuccessful === true) {
      reset();
    }
  }, [isSubmitSuccessful]);
  return (
    <div className="space-x-3 space-y-2">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col justify-center items-center space-y-2">
          <div className="flex flex-col">
            <label>Username</label>
            <input
              {...register("username", {
                required: "Username Required",
                maxLength: { value: 5, message: "Max 5 Character allowed" },
                minLength: { value: 2, message: "Min 2 Character" },
                validate: {
                  max5: (v) => v.length < 6 || "Max 5 character allowed",
                },
                // onChange : (e) => console.log(e.target.value)
              })}
              className="p-2 outline-none border-2 rounded-md border-indigo-600"
            ></input>
            {errors.username ? (
              <p className="text-red-600">{errors.username.message}</p>
            ) : (
              ""
            )}
          </div>

          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password Required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 Character Required",
                },
              })}
              className="p-2 outline-none border-2 rounded-md border-indigo-600"
            ></input>
            {errors.password ? (
              <p className="text-red-600">{errors.password.message}</p>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
          >
            Submit
          </button>
          <button
            type="reset"
            className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
          >
            Reset
          </button>
        </div>
      </form>
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
  );
};
export default Form;
