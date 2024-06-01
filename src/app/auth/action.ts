'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function login(email:string,password:string) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const loginData = {
    email: email,
    password: password,
  };

  const { data,error } = await supabase.auth.signInWithPassword(loginData);


  if (error) {
    return error
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(email:string,password:string) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const signUpData = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signUp(signUpData);

  if (error) {
    return error
  }

  revalidatePath('/', 'layout');
  redirect('/auth/emailverification');
}
