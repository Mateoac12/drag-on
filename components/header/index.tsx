import { getSession } from "next-auth/react"
import Link from "next/link"
import { IGitHubProfile } from "../../types/users"
import GithubButton from "../githubButton"
import Logo from "../logo"

interface Props {
  user: IGitHubProfile
}

const Header = ({ user }: Props) => {

  return <header className="fixed top-0 left-0 w-full py-4 border-b bg-white/80">
    <div className="flex items-center justify-between max-w-screen-lg mx-auto">
      <Logo />
      {user ? <Link href='/dashboard'><a className="px-4 py-2 border rounded-2xl">Ir al Dashboard</a></Link> : <GithubButton />}
    </div>
  </header>
}

export default Header