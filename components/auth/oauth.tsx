import type { LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import type { BuiltInProviderType } from 'next-auth/providers';

import BtnLogin from './btn-login';

interface OAuthProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

const OAuth = ({ providers }: OAuthProps) => {
  return (
    <>
      <BtnLogin provider={providers.google} bgColor="#f2573f" />
      <BtnLogin provider={providers.facebook} bgColor="#0404be" />
      <BtnLogin provider={providers.github} bgColor="#444" />
    </>
  );
};

export default OAuth;
