// 05 Dynamic form
import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
const Index: React.FC = () => {
  const { control, register, handleSubmit, reset } = useForm();
  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({ control: control, name: "test" });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <ul className="space-y-2">
        {fields.map((item, index) => (
          <li key={item.id} className="space-x-2">
            <input
              className="p-2 outline-none border-2 rounded-md border-indigo-600"
              {...register(`test.${index}.firstName`)}
            />
            <Controller
              render={({ field }) => (
                <input
                  className="p-2 outline-none border-2 rounded-md border-indigo-600"
                  {...field}
                />
              )}
              name={`test.${index}.lastName`}
              control={control}
            />
            <button
              className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
              type="button"
              onClick={() => remove(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="space-x-2 space-y-2">
        <button
          className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
          type="button"
          onClick={() => {
            append({ firstName: "appendBill", lastName: "appendLuo" });
          }}
        >
          append
        </button>
        <button
          className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
          type="button"
          onClick={() =>
            prepend({
              firstName: "prependFirstName",
              lastName: "prependLastName",
            })
          }
        >
          prepend
        </button>

        <button
          className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
          type="button"
          onClick={() => swap(1, 2)}
        >
          swap
        </button>

        <button
          className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
          type="button"
          onClick={() => move(1, 2)}
        >
          move
        </button>

        <button
          className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
          type="button"
          onClick={() =>
            replace([
              {
                firstName: "test1",
                lastName: "test1",
              },
              {
                firstName: "test2",
                lastName: "test2",
              },
            ])
          }
        >
          replace
        </button>

        <button
          className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
          type="button"
          onClick={() => remove(1)}
        >
          remove at
        </button>

        <button
          className="px-3 py-2 bg-indigo-500 rounded-md shadow-md text-white hover:bg-indigo-800"
          type="button"
          onClick={() =>
            reset({
              test: [{ firstName: "Bill", lastName: "Luo" }],
            })
          }
        >
          reset
        </button>
      </div>
    </form>
  );
};

export default Index;
