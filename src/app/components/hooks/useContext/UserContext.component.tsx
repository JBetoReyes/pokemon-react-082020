import { createContext } from 'react';
import { IAppUserContext } from './userContext.model';

const UserContext = createContext<Partial<IAppUserContext>>({});

export default UserContext;
