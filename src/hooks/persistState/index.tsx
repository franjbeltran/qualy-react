import { useState, useEffect } from 'react';
import browserStorage from 'store';
import { defaultUser } from '../../contexts/user/data';
import { User as UserType } from '../../contexts/user/user.type';

export const usePersistState = (key: string) => {
    const [ state, setInternalState ] = useState<UserType>(browserStorage.get(key) || defaultUser);

    const setState = (newState: UserType) => {
        browserStorage.set(key, newState);
        setInternalState(newState);
    }

    return [ state, setState ] as const;
};
