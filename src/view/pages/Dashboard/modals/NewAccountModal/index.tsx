import { Input } from '@view/components/Input';
import { InputCurrency } from '@view/components/InputCurrency';
import { Modal } from '@view/components/Modal';
import { Select } from '@view/components/Select';

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
      <form>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">Saldo</span>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 ">
          <Input type="text" name="name" placeholder="Nome da conta" />

          <Select />
        </div>
      </form>
    </Modal>
  );
}
