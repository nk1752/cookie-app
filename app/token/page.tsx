import { cookies } from 'next/headers';
import Link from 'next/link';


export default function Token() {

   

    const cookieStore = cookies();
    const token = cookieStore.get('token');
    const jwt = token?.value;

    console.log('token: ', token)
    console.log('jwt: ', jwt)

    //setJwt(token?.name)

    return (
        <main>
            <h1>Server</h1>
            <h1><Link href={'/'}>go home</Link></h1>
            
        </main>
    )
}