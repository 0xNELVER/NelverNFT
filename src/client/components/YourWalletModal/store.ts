import { type RouterOutputs } from "@nelver/utils/api";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface WalletModalState {
  importedWallet: RouterOutputs["wallet"]["import"] | null;
  setImportedWallet: (wallet: RouterOutputs["wallet"]["import"]) => void;
}

export const useWalletModalStore = create<WalletModalState>()(
  devtools((set) => ({
    importedWallet: null,
    setImportedWallet: (wallet) => set({ importedWallet: wallet }),
  }))
);
