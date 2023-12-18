'use client';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  console.log('session from profile', session);

  if (session.data?.user) {
    return <div>From client: user signed in</div>;
  }

  return <div>FROM client: user is not signed in!</div>;
}
