import { FC, useEffect } from 'react';
import type { BuiltInProviderType } from 'next-auth/providers';
import {
  LiteralUnion,
  ClientSafeProvider,
  getProviders,
  getSession,
  GetSessionParams
} from 'next-auth/react';
import type { Session } from 'next-auth/server/types';
import Router from 'next/router';

import OAuth from '../components/auth/oauth';

interface LoginProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
  session: Session;
}

const Login: FC<LoginProps> = ({ providers, session }: LoginProps) => {
  useEffect(() => {
    if (session) {
      Router.push('/');
    }
  }, [session]);

  if (session) {
    return null;
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div
        style={{ maxWidth: '450px', width: '100%' }}
        className="border border-1 max-auto p-4 shadow"
      >
        <h2
          className="text-center fw-bolder text-uppercase"
          style={{ color: '#555', letterSpacing: '1px' }}
        >
          DevAT
        </h2>

        <p className="text-center">Login with NextAuth</p>

        <OAuth providers={providers} />
      </div>
    </div>
  );
};

export default Login;

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  return {
    props: {
      providers: await getProviders(),
      session: await getSession(context)
    }
  };
}
