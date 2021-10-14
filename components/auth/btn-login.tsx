import type { FC } from 'react';
import type { ClientSafeProvider } from 'next-auth/react';
import { signIn } from 'next-auth/react';

interface BtnLoginProps {
  provider: ClientSafeProvider;
  bgColor: string;
  txtColor?: string;
}

const BtnLogin: FC<BtnLoginProps> = ({
  provider,
  bgColor,
  txtColor = '#eee'
}: BtnLoginProps) => {
  return (
    <div>
      <button
        onClick={() => signIn(provider.id)}
        className="btn w-100 my-2 py-3"
        style={{ background: `${bgColor}`, color: `${txtColor}` }}
      >
        Sign in with {provider.name}
      </button>
    </div>
  );
};

export default BtnLogin;
