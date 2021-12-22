import React,{useState} from 'react'
import Image from 'next/image'
import { useMoralis } from "react-moralis";
import Link from "next/link"




const Signup = () => {
    const {signup} = useMoralis()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return(
        <form class=" flex flex-col items-center justify-center align=items">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Full Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-[#2C272E] appearance-none border-2  rounded w-full py-2 px-4 text-white leading-tight focus:outline-none  focus:border-purple-500" id="inline-full-name" type="text" 
             placeholder="Name"
             value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-[#2C272E] appearance-none border-2  rounded w-full py-2 px-4 text-white leading-tight focus:outline-none  focus:border-purple-500" id="inline-password" type="password" placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
       
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="md:w-28 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded lg:w-24" type="button" 
            onClick={() => signup(name,password)}
           >
              Sign Up
            </button>
          </div>
        </div>
      
      </form>
    )

}



const Login = () => {
    const {login} = useMoralis()
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <form class="flex flex-col items-center justify-center align=items">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Full Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-[#2C272E]  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none  focus:border-purple-500" id="inline-full-name" type="text" 
              placeholder="Name"
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-[#2C272E] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:border-purple-500" id="inline-password" type="password" placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
       
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="md:w-28 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded lg:w-24" type="button" 
            onClick={() => login(name,password)}
           >
             Login
            </button>
          </div>
        </div>
      
        {/* <ScrollToTop /> */}
      </form>
    )
}

const Login2 = () => {
  const {authenticate} = useMoralis()
    return (
        <div className='bg-black relative '>
        logged-in
    
    <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center mt-20'>
        <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/69717681?v=4" height={200} width={200}/>
        {/* <button onClick={authenticate} className='bg-blue-500 rounded-lg p-3 animate-pulse mt-3'>Log in to metaverse</button> */}
       <h2 className='font-bold text-[#000000]'>Welcome to Meta chat Mahi's Room</h2>
        
        <button onClick={authenticate} className='bg-blue-500 rounded-lg p-3 animate-pulse mt-3'>Log in with Metamask</button>
     
       <div className='flex mt-12'>
        <Signup />
        <Login />
        {/* <h1 className='text-black relative'>or</h1> */}
        {/* <Login /> */}
        </div>

    </div>
    
     <div className='w-full h-screen'>
        <Image src="https://links.papareact.com/55n" layout='fill' objectFit='cover'/>
     </div>

       

        
    </div>
    )
}

export default Login2
