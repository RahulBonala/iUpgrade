import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './constants';

// Cart store
interface CartItem {
  product: Product;
  storage: '256GB' | '512GB' | '1TB';
  color: string;
  monthlyPrice: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((s) => ({ items: [...s.items.filter(i => i.product.id !== item.product.id), item] })),
      removeItem: (id) => set((s) => ({ items: s.items.filter(i => i.product.id !== id) })),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'iupgrade-cart' }
  )
);

// Compare store (max 3 products)
interface CompareStore {
  ids: string[];
  toggle: (id: string) => void;
  clear: () => void;
}

export const useCompareStore = create<CompareStore>()((set) => ({
  ids: [],
  toggle: (id) => set((s) => ({
    ids: s.ids.includes(id)
      ? s.ids.filter(i => i !== id)
      : s.ids.length < 3 ? [...s.ids, id] : s.ids
  })),
  clear: () => set({ ids: [] }),
}));

// User store
interface UserStore {
  phone: string | null;
  name: string | null;
  isVerified: boolean;
  setUser: (phone: string, name?: string) => void;
  setVerified: (v: boolean) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      phone: null,
      name: null,
      isVerified: false,
      setUser: (phone, name) => set({ phone, name }),
      setVerified: (v) => set({ isVerified: v }),
      logout: () => set({ phone: null, name: null, isVerified: false }),
    }),
    { name: 'iupgrade-user' }
  )
);
