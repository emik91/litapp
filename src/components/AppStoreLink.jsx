import Link from 'next/link'
import Image from 'next/future/image'
import appstore from '@/images/appstore.png'

export function AppStoreLink() {
  return (
    <Link href="#" aria-label="Download on the App Store">
      <Image className="w-44" src={appstore} />
    </Link>
  )
}
