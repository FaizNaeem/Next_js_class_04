
'use client'
import signIn from "@/confiq/singin"
import signUp from "@/confiq/signup"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
    const [authType, setAuthType] = useState('login')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const router = useRouter()
    const authTypeTxt = authType === 'login' ? 'Login' : "Signup"

    const onClickBtn = async () => {
        setLoading(true)
        if (authType === 'login') {
            const { result, error } = await signIn(email, password)
            console.log('result, error->', result, error?.message)
            if (result) {
                router.replace('/')
            }
            else {
                alert(error.message)
            }
            setLoading(false)


        } else {
            const { result, error } = await signUp(email, password)
            console.log('result, error->', result, error)
            if (result) {
                alert("Signup Success")
                authType === 'login'
                // router.replace('/')
            } else {
                alert(error.message)
            }
            setLoading(false)

        }
    }
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="flex w-6/10 justify-between bg-white">
                <div
                    onClick={() => setAuthType('login')}
                    style={{ marginTop:"30px", borderRadius:"4px",
                        backgroundColor: authType === 'login' ? '#0066F1' : 'white',
                        color:authType === 'signup' ? 'black' : 'white'

                    }} className="flex cursor-pointer p-4 item-center w-6/12 text-center"> <span>Login</span>  </div>
                <div
                    onClick={() => setAuthType('signup')}
                    style={{marginTop:"30px",borderRadius:"4px",
                        backgroundColor: authType === 'signup' ? 'skyblue' : 'white',
                        color:authType === 'signup' ? 'black' : 'black'
                    }}
                    className="flex cursor-pointer p-4 item-center w-6/12 text-center"> <span>Signup</span>  </div>
            </div>

            <section className="mt-8 text-gray-600 body-font relative">
                <div className="container px-5 mx-auto flex">
                    <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">{authTypeTxt}</h2>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> </div>
                        <button disabled={loading} onClick={onClickBtn} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{authTypeTxt}</button>
                    </div>
                </div>
            </section>
        </main>
    )
}