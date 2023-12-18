import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Image from 'next/image';
import Profile from '@/components/profile';

export default async function Home() {
  const session = await auth();

  console.log('session from home:', session);

  return (
    <div>
      {session?.user ? (
        <>
          <div>Signed in!</div>
          <div>{JSON.stringify(session.user)}</div>
        </>
      ) : (
        <>Signed out!</>
      )}

      <Profile />
      <form action={actions.signIn}>
        <Button type="submit">Sign in</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
}
