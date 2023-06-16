import {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineTrophy, AiOutlineCrown, AiOutlineInstagram} from 'react-icons/ai'

const SideNav = () => {
const [nav, setNav] = useState(false)
const handleNav = () => {
  setNav(!nav)
  console.log('state changed')
}

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curser-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Home</span>
            </a>
            <a href="#performance" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curser-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineCrown size={20}/>
              <span className='pl-4'>Performance</span>
            </a>
            <a href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curser-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineTrophy size={20}/>
              <span className='pl-4'>Contact</span>
            </a>
            <a href="#socials" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 curser-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineInstagram size={20}/>
              <span className='pl-4'>Socials</span>
            </a>
          </div>
        )
        : (
          ''
        )
      }
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col ml-2'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
            <AiOutlineHome size={20}/>
          </a>
          <a href="#performance" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
            <AiOutlineCrown size={20}/>
          </a>
          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
            <AiOutlineTrophy size={20}/>
          </a>
          <a href="#socials" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
            <AiOutlineInstagram size={20}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideNav