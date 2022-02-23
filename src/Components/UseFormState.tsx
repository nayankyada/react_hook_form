// 0
import React, { useEffect } from "react";
import { useForm, useFormState } from "react-hook-form";
const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
  } = useForm({ defaultValues: { username: "", password: "" } });

  // here we have used hook and in 01 we destructured from useForm  
  const {errors,dirtyFields,isDirty,isSubmitSuccessful} = useFormState({ control: control });

  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (e) => {
    console.log("Error", e);
  };

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
    </div>
  );
};
export default Form;
