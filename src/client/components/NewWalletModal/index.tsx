import { useEffect, useState } from "react";
import { Button, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import { api, type RouterOutputs } from "@nelver/utils/api";

export function NewWalletModal() {
  const [newWallet, setNewWallet] = useState<RouterOutputs["wallet"]["create"] | null>(null);
    const { mutate } = api.wallet.create.useMutation({
      onSuccess: setNewWallet
    });

    useEffect(() => {
      mutate()
    },[]);

    return (
        <Button
            onClick={() =>
                modals.open({
                    centered: true,
                    title: <Title order={2}>New Wallet</Title>,
                    children: <>{JSON.stringify(newWallet)}</>,
                })
            }
        >
            New Wallet
        </Button>
    );
}
