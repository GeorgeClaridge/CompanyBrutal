import './navbar.css';

const Navbar = () => {
  return (
    <div className="Container flex justify-between w-full">
      <div className="text-2xl">Brand</div>

      <div className="text-xl flex justify-center">
        <div>Link</div>
        <div>Link</div>
        <div>Link</div>
      </div>

      <div className="Button">Button</div>
    </div>
  )
}

export default Navbar
