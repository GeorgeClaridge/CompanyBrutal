import './navbar.css';

const Navbar = () => {
  return (
    <div className="Container flex justify-between w-full pt-4 items-center">
      <div className="text-3xl font-bold">BRAND</div>

      <div className="text-xl flex justify-center invisible lg:visible">
        <div className='hover:underline hover:cursor-pointer underline-offset-8 decoration-3 decoration-purple-500'>Link</div>
        <div className='hover:underline hover:cursor-pointer underline-offset-8 decoration-3 decoration-purple-500 px-24'>Link</div>
        <div className='hover:underline hover:cursor-pointer underline-offset-8 decoration-3 decoration-purple-500'>Link</div>
      </div>

      <div className="Button py-2 px-6 bg-yellow-200 font-bold rounded-lg text-lg border-black border-[2px] shadow-solid-primary hover:scale-125 duration-300">Button</div>
    </div>
  )
}

export default Navbar
