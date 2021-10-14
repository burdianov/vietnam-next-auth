import type { LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import type { BuiltInProviderType } from 'next-auth/providers';

import BtnLogin from './btn-login';

interface OAuthProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
  csrfToken?: string;
}

const OAuth = ({ providers, csrfToken }: OAuthProps) => {
  return (
    <>
      <BtnLogin
        provider={providers.google}
        bgColor="#f2573f"
        csrfToken={csrfToken}
      />
      <BtnLogin
        provider={providers.facebook}
        bgColor="#0404be"
        csrfToken={csrfToken}
      />
      <BtnLogin
        provider={providers.github}
        bgColor="#444"
        csrfToken={csrfToken}
      />
    </>
  );
};

export default OAuth;
