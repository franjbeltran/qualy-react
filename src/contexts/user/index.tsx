import { createContext, ReactNode, useState } from 'react';
import { usePersistState } from '../../hooks/persistState';
import { defaultUser } from './data';
import { User as UserType } from './user.type';

export const UserContext = createContext({
    user: defaultUser,
    setUser: (_user: UserType) => {}
});

export const UserProvider = ({ children }: { children?: ReactNode} ) => {
    const [ storedUser, storeUser ] = usePersistState('user');
    const [ user, setUser ] = useState<UserType>(storedUser);
    console.log('Initializing User Context');
    return (
        <UserContext.Provider value={{ user, setUser: (user: UserType) => {
                setUser(user);
                storeUser(user);
            } }}>
            {children}
        </UserContext.Provider>
    );
}
