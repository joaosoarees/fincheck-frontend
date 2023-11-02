import { cn } from "../../../../../app/utils/cn";

interface SliderOptionProps {
  isActive: boolean;
  month: string;
}

export function SliderOption({ isActive, month }: SliderOptionProps) {
  return (
    <button
      className={cn(
        `
          w-full rounded-full h-12 text-sm text-gray-800 tracking-[-0.5px] font-medium
        `,
        isActive && 'bg-white'
      )}
    >
      {month}
    </button>
  );
}
