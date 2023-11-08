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
  isNewAccountModalVisible: boolean;
  handleOpenNewAccountModal: () => void;
  handleCloseNewAccountModal: () => void;
}

export const DashboardContext = createContext({} as IDashboardContextValue);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalVisible, setIsNewAccountModalVisible] =
    useState(false);

  const toggleValuesVisibilty = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  const handleOpenNewAccountModal = useCallback(() => {
    setIsNewAccountModalVisible(true);
  }, []);

  const handleCloseNewAccountModal = useCallback(() => {
    setIsNewAccountModalVisible(false);
  }, []);

  const value = useMemo(
    () => ({
      areValuesVisible,
      toggleValuesVisibilty,
      isNewAccountModalVisible,
      handleOpenNewAccountModal,
      handleCloseNewAccountModal,
    }),
    [
      areValuesVisible,
      handleCloseNewAccountModal,
      isNewAccountModalVisible,
      handleOpenNewAccountModal,
      toggleValuesVisibilty,
    ],
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
