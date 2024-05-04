import { IconType } from 'react-icons';
export type LinkType = {
  href: string;
  label: string;
  icon?: string | IconType;
  classes?: string;
}

export type AlertArgs = {
  type: AlertTypes;
  children: React.ReactNode;
};

export enum AlertTypes {
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
  INFO = "info",
}
