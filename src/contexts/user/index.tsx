import { createContext, ReactNode, useState } from 'react';
import { defaultUser } from './data';
import { User as UserType } from './user.type';

export const UserContext = createContext({
    user: defaultUser,
    setUser: (user: UserType) => {}
});

export const UserProvider = ({ children }: { children?: ReactNode} ) => {
    const [ user, setUser ] = useState<UserType>(defaultUser);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
