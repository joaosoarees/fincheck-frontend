import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface IDashboardContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibilty: () => void;
}

export const DashboardContext = createContext({} as IDashboardContextValue);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const toggleValuesVisibilty = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  const value = useMemo(
    () => ({ areValuesVisible, toggleValuesVisibilty }),
    [areValuesVisible, toggleValuesVisibilty],
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
