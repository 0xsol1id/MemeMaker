import { FC, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export const ConnectWallet: FC = () => {
  const { setVisible } = useWalletModal();
  const { wallet, disconnect, connect, connecting, publicKey } = useWallet();

  useEffect(() => {
    if (!publicKey && wallet) {
      try {
        connect();
      } catch (error) {
        console.log("Error connecting to the wallet: ", (error as any).message);
      }
    }
  }, [wallet]);

  const handleWalletClick = () => {
    console.log(wallet)    
    try {
      if (!wallet) {
        setVisible(true)
      } else {
        if (!publicKey)
          connect()
        else
          disconnect()
      }
    } catch (error) {
      console.log("Error connecting to the wallet: ", (error as any).message);
    }
  };

  return (
    <div>
      {!wallet &&
        <div className="flex flex-col items-center mt-1 font-trash ">
          <button className="grid items-center" onClick={handleWalletClick} >
            <img src="./button/toggle_2.png" alt="tmp" />
            <div className="text-center hidden lg:block">connect</div>
          </button>
        </div>
      }
      {publicKey &&
        <div className="flex flex-col items-center mt-1 font-trash">
        <button className="grid items-center" onClick={handleWalletClick} >
          <img src="./button/toggle_1.png" alt="tmp" />
          <div className="text-center hidden lg:block">disconnect</div>
        </button>
        </div>
      }
    </div>
  );
};