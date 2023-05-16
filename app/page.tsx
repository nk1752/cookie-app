'use client'

import { setCookie } from "cookies-next";
import Link from "next/link";

export default function Home() {

  const currentTime = Date.now()
  const jwt = "kfdh67fksfe7afh87njkkedf98kj6hfhkewf8ueoifhjewoif897hefhkj-" + currentTime;

  console.log('jwt: ', jwt);

  setCookie('token', jwt, {
    httpOnly: false,
    secure: false,
    

  })

  return (
    <main>
      <div>
        <h1>Client</h1> 
        <h1><Link href={'/token'}>go to server</Link></h1>
      </div>
    </main>
  )
}
