/*  ./components/WalletConnect.js     */
import Link from 'next/link';
import { useState } from 'react';

export const WalletConnect = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex-auto min-w-20">
        <button className="btn btn-primary rounded-full z-10 opacity-75">
            <a>Connect Your Wallet</a>
        </button>
    </div>
  );
};