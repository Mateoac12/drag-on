import Link from "next/link"

const Logo = () => {
  return <Link href='/'>
    <a className="inline-block">
      <h1 className="text-4xl text-orange-600">Drag<strong className="text-orange-50 px-2 py-1 bg-orange-500 rounded-lg">On</strong></h1>
    </a>
  </Link>
}

export default Logo