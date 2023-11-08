import { NumericFormat } from 'react-number-format';

import { cn } from '@app/utils/cn';

export function InputCurrency() {
  return (
    <NumericFormat
      className={cn(
        'text-gray-800 text-[32px] tracking-[-1px] font-bold outline-none w-full',
      )}
      thousandSeparator="."
      decimalSeparator=","
      defaultValue="0"
    />
  );
}
