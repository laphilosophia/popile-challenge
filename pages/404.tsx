import Image from 'next/image'
import Link from 'next/link'
import { DefaultLayout } from '../layouts'

export default function Popile404() {
  return (
    <DefaultLayout title="Nope!">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image src="/error.gif" alt="Popile" width={320} height={240} layout="fixed" priority />

        <h1 style={{ marginBlockStart: 30 }}>Nope!</h1>
        <h4>Shit happened..</h4>

        <Link href="/">
          <a style={{ color: '#955fff', marginBlockStart: 30 }}>Go home..</a>
        </Link>
      </div>
    </DefaultLayout>
  )
}
