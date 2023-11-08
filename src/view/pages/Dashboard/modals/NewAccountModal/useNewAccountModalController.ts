import { useDashboard } from '../../components/DashboardContext/useDashboard';

export function useNewAccountModalController() {
  const { isNewAccountModalVisible, handleCloseNewAccountModal } =
    useDashboard();

  return {
    isNewAccountModalVisible,
    handleCloseNewAccountModal,
  };
}
