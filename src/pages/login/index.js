import { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image"; 

const Login = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return null;
  }

  if (session) {
    return (
      <>
        <Image
          src={session?.user?.image}
          alt="avatar"
          width="25px"
          height="25px"
          className="h-48 w-48 rounded-full"
        /><br />
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Login;