import './navbar.css';

const Navbar = () => {
  return (
    <div className="Container flex justify-between w-full pt-4 items-center">
      <div className="text-3xl font-bold">BRAND</div>

      <div className="text-xl flex justify-center">
        <div>Link</div>
        <div className='px-4'>Link</div>
        <div>Link</div>
      </div>

      <div className="Button py-2 px-6 bg-yellow-200 font-bold rounded-lg text-lg border-black border-[2px] shadow-solid-primary hover:scale-125 duration-300">Button</div>
    </div>
  )
}

export default Navbar
