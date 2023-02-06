import Image from "next/image"
import { signIn } from "next-auth/react"

function Login() {
  return (
    <div className="grid place-items-center">
      {/* <Image
      src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png?20170210095314" 
      width={300} 
      height={300} 
      style={{objectFit:"contain"}} 
      alt="logo"
       /> */}
       <h1 
       className="p-5 m-5 bg-blue-500 rounded-full text-white text-center cursor-pointer" 
       onClick={signIn}>Login with Facebook</h1>
    </div>
  )
}

export default Login