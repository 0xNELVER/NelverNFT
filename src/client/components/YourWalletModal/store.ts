import { type RouterOutputs } from "@nelver/utils/api";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface WalletModalState {
  wallet: RouterOutputs["wallet"]["import"] | null;
  setWallet: (wallet: RouterOutputs["wallet"]["import"]) => void;
}

export const useWalletModalStore = create<WalletModalState>()(
  devtools((set) => ({
    wallet: null,
    setWallet: (wallet) => set({ wallet }),
  }))
);
