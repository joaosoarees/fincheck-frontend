import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { cn } from '@app/utils/cn';
import { Button } from '@view/components/Button';
import { Modal } from '@view/components/Modal';

interface IFiltersModal {
  open: boolean;
  onClose: () => void;
}

export function FiltersModal({ open, onClose }: IFiltersModal) {
  return (
    <Modal open={open} onClose={onClose} title="Filtros">
      <div>
        <span className="text-lg tracking-[-1px] font-bold text-gray-800">
          Conta
        </span>

        <div className="space-y-2 mt-2">
          <button
            className={cn(
              'p-2 rounded-2xl !bg-gray-200 w-full text-left text-gray-800',
              'hover:bg-gray-50 transition-colors',
            )}
          >
            Nubank
          </button>
          <button
            className={cn(
              'p-2 rounded-2xl w-full text-left text-gray-800',
              'hover:bg-gray-50 transition-colors',
            )}
          >
            XP Investimentos
          </button>
          <button
            className={cn(
              'p-2 rounded-2xl w-full text-left text-gray-800',
              'hover:bg-gray-50 transition-colors',
            )}
          >
            Dinheiro
          </button>
        </div>
      </div>

      <div className="mt-10 text-gray-800">
        <span className="text-lg tracking-[-1px] font-bold">Ano</span>

        <div className="mt-2 w-52 flex items-center justify-between">
          <button className="w-12 h-12 flex items-center justify-center">
            <ChevronLeftIcon className="w-6 h-6 " />
          </button>

          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-[-0.5px]">2023</span>
          </div>

          <button className="w-12 h-12 flex items-center justify-center">
            <ChevronRightIcon className="w-6 h-6 " />
          </button>
        </div>
      </div>

      <Button className="w-full mt-10">Aplicar Filtros</Button>
    </Modal>
  );
}
