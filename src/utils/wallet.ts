import { env } from "@nelver/env.mjs";
import { Connection, LAMPORTS_PER_SOL, clusterApiUrl, type Keypair } from "@solana/web3.js";

type WalletInfo = {
  address: string;
  solBalance: number;
};

export const loadWalletInformation = async ({ wallet }: { wallet: Keypair }): Promise<WalletInfo> => {
  const connection = new Connection(clusterApiUrl(env.SOLANA_CLUSTER));

  const balance = await connection.getBalance(wallet.publicKey);
  const pubKey = wallet.publicKey.toBase58();

  return {
    address: pubKey.substring(0, 4) + "..." + pubKey.substring(pubKey.length - 4, pubKey.length - 1),
    solBalance: balance / LAMPORTS_PER_SOL,
  };
};
