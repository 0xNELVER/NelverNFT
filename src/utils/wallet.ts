import { type JsonMetadata, Metaplex, type Option } from "@metaplex-foundation/js";
import { env } from "@nelver/env.mjs";
import { Connection, PublicKey, clusterApiUrl, type Keypair } from "@solana/web3.js";

type WalletInfo = {
  address: string;
  balance: number;
  nevMetadata: Option<JsonMetadata>;
};

export const loadWalletInformation = async ({ wallet }: { wallet: Keypair }): Promise<WalletInfo> => {
  const connection = new Connection(clusterApiUrl(env.SOLANA_CLUSTER));
  const metaplex = new Metaplex(connection);
  const nevMintAddress = new PublicKey(env.NELVER_TOKEN_MINT_ADDRESS);

  const tokenAccounts = await connection.getParsedTokenAccountsByOwner(wallet.publicKey, {
    mint: nevMintAddress,
    programId: metaplex.programs().getToken().address,
  });

  console.log("@nelverToken", tokenAccounts);

  const pubKey = wallet.publicKey.toBase58();
  const nevTokenMint = await metaplex.nfts().findByMint({ mintAddress: nevMintAddress });

  console.log("@nevTokenMint", nevTokenMint);

  if (!tokenAccounts || !tokenAccounts.value || tokenAccounts.value.length === 0) {
    return {
      address: pubKey.substring(0, 4) + "..." + pubKey.substring(pubKey.length - 4, pubKey.length - 1),
      balance: 0,
      nevMetadata: nevTokenMint.json,
    };
  }
  const tokenAccount = tokenAccounts.value[0];
  return {
    address: pubKey.substring(0, 4) + "..." + pubKey.substring(pubKey.length - 4, pubKey.length - 1),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    balance: tokenAccount?.account.data.parsed.info.tokenAmount.uiAmount,
    nevMetadata: nevTokenMint.json,
  };
};
