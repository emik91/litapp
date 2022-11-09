import { AppStoreLink } from '@/components/AppStoreLink'
import { PlayStoreLink } from '@/components/PlayStoreLink'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-800">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-white xl:inline">See who</span>{' '}
              <span className="block text-indigo-600 xl:inline">likes you</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-50 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mx-auto mt-5 flex max-w-md sm:justify-center">
              <div className="mr-4">
                <AppStoreLink />
              </div>
              <div>
                <PlayStoreLink />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
