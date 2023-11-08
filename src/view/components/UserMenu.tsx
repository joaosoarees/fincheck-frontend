import { ExitIcon } from '@radix-ui/react-icons';

import { useAuth } from '@app/hooks/useAuth';
import { cn } from '@app/utils/cn';

import { DropdownMenu } from './DropdownMenu';

export function UserMenu() {
  const { signout } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div
          className={cn(
            'bg-teal-0 rounded-full w-12 h-12 flex items-center',
            'justify-center border border-teal-100 hover:cursor-pointer',
          )}
        >
          <span className="text-sm tracking-[0.5px] text-teal-900 font-medium">
            JS
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-32">
        <DropdownMenu.Item
          onSelect={signout}
          className="flex items-center justify-between"
        >
          Sair
          <ExitIcon className="w-4 h-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
