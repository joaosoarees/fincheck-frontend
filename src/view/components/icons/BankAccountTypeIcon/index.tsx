import { iconsMap } from './iconsMap';

interface IBankAccountTypeIconProps {
  type: keyof typeof iconsMap;
}

export function BankAccountTypeIcon({ type }: IBankAccountTypeIconProps) {
  const Icon = iconsMap[type];

  return <Icon />;
}
