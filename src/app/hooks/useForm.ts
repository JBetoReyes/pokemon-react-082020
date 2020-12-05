import { useState } from 'react';
import { AppChangeEvent, AppSubmitEvent } from 'src/typings/htmlEvents';
import { AppFormData } from '@typings/hooks';

export type HookData<T extends AppFormData> = [
  T,
  (e: AppChangeEvent) => void,
  (e: AppSubmitEvent) => void,
  () => void
];

const useForm = <T extends AppFormData>(initialState: T): HookData<T> => {
  const [formData, setFormData] = useState<T>(initialState);
  const handleChange = (e: AppChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: AppSubmitEvent) => {
    e.preventDefault();
  };
  const reset = () => {
    setFormData(initialState);
  };
  return [formData, handleChange, handleSubmit, reset];
};

export default useForm;
