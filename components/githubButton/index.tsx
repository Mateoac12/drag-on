import { signIn } from 'next-auth/react'

const GithubButton = () => {
  const handleSignIn = () => signIn("github")

  return <button onClick={handleSignIn} className="px-4 py-2 text-orange-600 transition bg-white border border-orange-400 rounded-2xl hover:bg-orange-400 hover:text-orange-50 hover:ring-4 hover:ring-orange-200 hover:border-orange-100">Inicia sesion con GitHub</button>
}

export default GithubButton