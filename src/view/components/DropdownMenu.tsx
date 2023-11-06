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
}

function DropdownMenuRoot({ children }: IDropdownMenuProps) {
  return <RadixDropdownMenu.Root>{children}</RadixDropdownMenu.Root>;
}

function DropdownMenuTrigger({ children }: IDropdownMenuProps) {
  return (
    <RadixDropdownMenu.Trigger className="outline-none">
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
          `rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]`,
          className,
        )}
      >
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  );
}

function DropdownMenuItem({ children, className }: IDropdownMenuItemProps) {
  return (
    <RadixDropdownMenu.Item
      className={cn(
        `
          min-h-[48px] outline-none flex items-center p-4 text-gray-800
          text-sm hover:bg-gray-50 rounded-2xl transition-colors
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
