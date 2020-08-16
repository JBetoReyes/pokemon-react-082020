import React from 'react';
import useForm from '@hooks/useForm';
import { AppFormData } from '@typings/hooks';

const FormWithCustomHook = (): JSX.Element => {
  const { formData, handleChange, handleSubmit } = useForm<FormInputs>({
    name: '',
    email: '',
    age: 0,
    password: '',
  });
  const { name, email, password, age } = formData;
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <span>Name:</span>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div className="">
        <span>Email:</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="">
        <span>Password:</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="">
        <span>Age:</span>
        <input type="number" name="age" value={age} onChange={handleChange} />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default FormWithCustomHook;

export interface FormInputs extends AppFormData {
  name: string;
  email: string;
  password: string;
  age: number;
}
