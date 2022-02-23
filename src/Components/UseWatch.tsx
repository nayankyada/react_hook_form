import React from "react";
import { Controller, FieldValues, useForm, useWatch,Control } from "react-hook-form";
import "antd/dist/antd.css";
import { Input } from "antd";

interface ChildProps {
  control: Control;
  temp:string
}
const Child: React.FC<ChildProps> = (props) => {
  const parentData = useWatch({
    control: props.control,
  });

  return <div>{JSON.stringify(parentData)}</div>;
};
const Index: React.FC = () => {
  const { register, control } = useForm();
  return (
    <div>
      <input
        className="border p-1 w-full"
        type="text"
        {...register("username")}
      ></input>

      <Controller
        name="password"
        control={control}
        render={({
          field: { onBlur, onChange, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => <Input.Password value={value} onChange={onChange} ref={ref} />}
      />
      <Child control={control} temp="HI" />
    </div>
  );
};

export default Index;
