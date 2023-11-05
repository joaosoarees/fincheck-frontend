import { useQuery } from '@tanstack/react-query';
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import toast from 'react-hot-toast';

import { LaunchScreen } from '../../view/components/LaunchScreen';
import { localStorageKeys } from '../config/localStorageKeys';
import { usersService } from '../services/usersService';

interface IAuthContextValue {
  signedIn: boolean;
  signin: (accessToken: string) => void;
  signout: () => void;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!storedAccessToken;
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSignedIn(false);
  }, []);

  const {
    isError,
    isFetching: isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => usersService.me(),
    enabled: signedIn,
  });

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou.');
      signout();
    }
  }, [isError, signout]);

  const value = useMemo(
    () => ({
      signedIn: isSuccess && signedIn,
      signin,
      signout,
    }),
    [isSuccess, signedIn, signin, signout],
  );

  return (
    <AuthContext.Provider value={value}>
      <LaunchScreen isLoading={isLoading} />
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
