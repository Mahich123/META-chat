import Head from 'next/head'
import { useMoralis } from "react-moralis";
// import Login from '../Components/Login';
// import Register from './Register';
import Image from 'next/image'
// import { WarningTwoIcon } from '@chakra-ui/icons'
import Login2 from '../Components/Login2'



export default function Home() {
  const {isAuthenticated, logout} = useMoralis()
 

  if(!isAuthenticated) return <Login2 />
 
  
  return (
    // <div className="">
      // <Head>
      //   <title>Metaverse-chat</title>
      //   <link rel="icon" href="/favicon.ico" />
      // </Head>

    //   <div className='bg-black relative '>
    //         logged-in
        
    //     <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center'>
    //         <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/69717681?v=4" height={150} width={150}/>
    //         {/* <button onClick={authenticate} className='bg-blue-500 rounded-lg p-3 animate-pulse mt-3'>Log in to metaverse</button> */}
    //        <h2 className='font-bold text-[#000000]'>Welcome to Meta chat Mahi's Room</h2>
    //         {/* <Link href="/Register"> */}
    //         <button className='bg-blue-500 rounded-lg p-3 animate-pulse mt-3'>Enter into the metaverse</button>
    //         {/* </Link> */}
    //         <button className='flex items-center mt-2 text-red-600 animate-bounce' onClick={logout}>Logout  <WarningTwoIcon  w={15} h={15}/></button>
           
    //     </div>
    //      <div className='w-full h-screen'>
    //         <Image src="https://links.papareact.com/55n" layout='fill' objectFit='cover'/>
    //      </div>

           

            
    //     </div>
    // </div>
    <div>
    <Head>
        <title>Metaverse-chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* <h1>Welcome here</h1> */}
    <button onClick={logout}>Log out</button>
    </div>
  )
  
}
