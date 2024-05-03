import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

/*  This is a protected page that requires the user to be logged in
    if the user is not logged in, they will be redirected to the login page
    this is done by checking if the user is logged in using the supabase client
    it can be used to implement protected routes in your application like dashboard, settings, etc 
*/

export default async function ProtectedPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return <p>Hello {data.user.email}</p>;
}
