import { Modal } from '@view/components/Modal';

import { useNewAccountModalController } from './useNewAccountModalController';

export function NewAccountModal() {
  const { handleCloseNewAccountModal, isNewAccountModalVisible } =
    useNewAccountModalController();

  return (
    <Modal
      title="Nova Conta"
      open={isNewAccountModalVisible}
      onClose={handleCloseNewAccountModal}
    >
      NewAccountModal
    </Modal>
  );
}
