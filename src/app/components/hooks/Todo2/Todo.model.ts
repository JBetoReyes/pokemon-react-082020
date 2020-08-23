import { AppFormData } from '@typings/hooks';

export interface ITodoApp extends AppFormData {
  id: number;
  description: string;
  done: boolean;
}
