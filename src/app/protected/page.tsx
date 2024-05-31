"use client";
import isAuth from '@/components/isAuth/isAuth';
import { getUser } from '@/utils/supabase/getUser'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [user, setUser] = useState<any>();


  const fetchUser = async () => {
    const user = await getUser();
    setUser(user)
  }
  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <div>hello {user?.email}</div>
  )
}

export default isAuth(page);