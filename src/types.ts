export interface Row {
  date: Date;
  amount: number;
  description: string;
  category: string;
  show: boolean;
}

export interface Category {
  name: string;
  rows: Row[];
  isInverted?: boolean;
}

export interface Rule {
  name: string;
  searchFor: string;
  category: string;
  isRegex?: boolean;
}
