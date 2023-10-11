import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div>
    <Link className="mx-3" href='/problems'>Problems</Link>
    <Link className="mx-3" href='/contest'>Contest</Link>
    <Link className="mx-3" href='/profile'>profile</Link>
   </div>  )
}
