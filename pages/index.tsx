import { NextPage } from "next";

import { signIn, signOut, useSession } from "next-auth/client";
import { useEffect } from "react";

const IndexPage: NextPage = () => {
  const [session, loading] = useSession();

  useEffect(() => {
    console.log('session',session)
  },[])

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn('auth0')}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      {
        loading && (
          <div className="text-5xl">
            <h1>Carregando</h1>
          </div>
        )
      }
    </>
  );
};

export default IndexPage;
