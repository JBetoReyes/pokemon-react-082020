import { AppFormData } from '@typings/hooks';

export interface ITodoApp {
  id: number;
  description: string;
  done: boolean;
}

export interface ITodoForm extends AppFormData {
  description: string;
}
