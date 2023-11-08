import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

import { cn } from '@app/utils/cn';

interface IDropdownMenuProps {
  children: ReactNode;
}

interface IDropdownMenuContentProps extends IDropdownMenuProps {
  className?: string;
}

interface IDropdownMenuItemProps extends IDropdownMenuProps {
  className?: string;
  onSelect?: () => void;
}

function DropdownMenuRoot({ children }: IDropdownMenuProps) {
  return <RadixDropdownMenu.Root>{children}</RadixDropdownMenu.Root>;
}

function DropdownMenuTrigger({ children }: IDropdownMenuProps) {
  return (
    <RadixDropdownMenu.Trigger className="outline-none" asChild>
      {children}
    </RadixDropdownMenu.Trigger>
  );
}

function DropdownMenuContent({
  children,
  className,
}: IDropdownMenuContentProps) {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        className={cn(
          'rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
          'data-[side=bottom]:animate-slide-up-and-fade z-50',
          'data-[side=top]:animate-slide-down-and-fade z-50',
          className,
        )}
      >
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  );
}

function DropdownMenuItem({
  children,
  className,
  onSelect,
}: IDropdownMenuItemProps) {
  return (
    <RadixDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        `
          min-h-[40px] outline-none flex items-center px-4 py-2 text-gray-800
          text-sm data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer
        `,
        className,
      )}
    >
      {children}
    </RadixDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
