export type RentalStatus = 'active' | 'paused' | 'completed' | 'cancelled';

export interface Order {
  id: string;
  productId: string;
  productName: string;
  storage: string;
  color: string;
  monthlyRent: number;
  deposit: number;
  status: 'confirmed' | 'packed' | 'shipped' | 'delivered';
  orderDate: Date;
  estimatedDelivery: Date;
  trackingId?: string;
}

export interface User {
  phone: string;
  name?: string;
  email?: string;
  isKycVerified: boolean;
  referralCode: string;
  activeRentals: Order[];
}
