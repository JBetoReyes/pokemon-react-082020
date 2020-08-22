export type ModelSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IAppUser {
  name: string;
  email: string;
  id?: number;
}

export interface IAppUserContext {
  user: IAppUser;
  setUser: ModelSetter<IAppUser>;
}
