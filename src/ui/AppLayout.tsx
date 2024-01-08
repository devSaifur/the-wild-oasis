import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const AppLayout = () => {
  return (
    <div className="grid h-screen min-h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr] bg-gray-50 font-primary text-base leading-normal text-gray-700 transition-colors delay-300 dark:bg-gray-900 dark:text-gray-200">
      <Header />
      <Sidebar />

      <main className="overflow-scroll py-16 pl-[6.4rem] pr-[4.8rem]">
        <div className="mx-auto flex max-w-[120rem] flex-col gap-[3.2rem]">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AppLayout
