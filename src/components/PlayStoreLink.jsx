import Link from 'next/link'
import Image from 'next/future/image'
import playstore from '@/images/playstore.png'

export function PlayStoreLink() {
  return (
    <Link href="#" aria-label="Download on the Play Store">
      <Image className="w-44" src={playstore} />
    </Link>
  )
}
