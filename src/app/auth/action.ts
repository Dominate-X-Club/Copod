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
    console.log(error)
    const errObj={
      code:error.code,
      message:error.message
    }
    return errObj
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
    console.log(error)
    const errObj={
      code:error.code,
      message:error.message
    }
    return errObj
  }

  revalidatePath('/', 'layout');
  redirect('/auth/emailverification');
}

// Sportify 
export async function loginWithSportify() {
  const supabase = createClient();

  const { data,error } = await supabase.auth.signInWithOAuth({
    provider:"spotify"
  });


  if (error) {
    return error
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

// Sportify 
export async function loginWithGoogle() {
  const supabase = createClient();

  const { data,error } = await supabase.auth.signInWithOAuth({
    provider:"google"
  });


  if (error) {
    return error
  }

  revalidatePath('/', 'layout');
  redirect('/');
}