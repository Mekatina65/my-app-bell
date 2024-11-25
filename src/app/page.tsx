import Header from '@/components/Header'
import LeftCol from '@/components/LeftCol'
import RightCol from '@/components/RightCol'
import SideNavBar from '@/components/SideNavBar'


const Page = () => {
  return (
    <main className='flex'>
      <SideNavBar /> 
      <nav className='flex-1 md:flex h-screen relative'>
       <Header /> 
       <LeftCol />
       <RightCol />
      </nav>

    </main>
  )
}

export default Page
