import { PlusIcon } from '@radix-ui/react-icons';

import { DropdownMenu } from '@view/components/DropdownMenu';
import { BankAccountIcon } from '@view/components/icons/BankAccountIcon';
import { CategoryIcon } from '@view/components/icons/categories/CategoryIcon';

import { useDashboard } from '../DashboardContext/useDashboard';

export function Fab() {
  const { handleOpenNewAccountModal } = useDashboard();

  return (
    <div className="fixed right-4 bottom-4 ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className={`
            text-white w-12 h-12 bg-teal-900
            rounded-full flex items-center justify-center
          `}
          >
            <PlusIcon className="w-6 h-6" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item className="gap-2">
            <CategoryIcon type="expense" />
            Nova Despesa
          </DropdownMenu.Item>

          <DropdownMenu.Item className="gap-2">
            <CategoryIcon type="income" />
            Nova Receita
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="gap-2"
            onSelect={() => handleOpenNewAccountModal()}
          >
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}

// [FRONT] Dropdown e Modais com Radix UI - 01:14:97
