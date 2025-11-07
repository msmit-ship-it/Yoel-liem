
import { type ReactNode } from 'react';

export type ActiveScreen = 'Home' | 'Promos' | 'Orders' | 'Chat';

export interface Service {
  name: string;
  icon: ReactNode;
  color: string;
}
