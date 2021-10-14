import { FC, SyntheticEvent, useState } from 'react';
import type { ClientSafeProvider, SignInOptions } from 'next-auth/react';
import { signIn } from 'next-auth/react';

interface BtnLoginProps {
  children?: JSX.Element;
  options: SignInOptions;
  provider: ClientSafeProvider;
  bgColor: string;
  txtColor?: string;
  csrfToken?: string;
}

const BtnLogin: FC<BtnLoginProps> = ({
  children,
  options,
  provider,
  bgColor,
  txtColor = '#eee',
  csrfToken
}: BtnLoginProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    await signIn(provider.id, options);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
      {children}
      <button
        type="submit"
        className="btn w-100 my-2 py-3"
        style={{ background: `${bgColor}`, color: `${txtColor}` }}
      >
        Sign in with {provider.name}
      </button>
    </form>
  );
};

export default BtnLogin;
