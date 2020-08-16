/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { AppChangeEvent } from 'src/typings/htmlEvents';

const Form = (): JSX.Element => {
  const [state, setFields] = useState({
    name: '',
    email: '',
  });
  const { name, email } = state;
  useEffect(() => {
    console.log('runnin at page render');
  }, []);
  useEffect(() => {
    console.log('email is changing');
  }, [email]);
  const handleInputChange = (event: AppChangeEvent) => {
    setFields({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        placeholder="email@example.com"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Form;
