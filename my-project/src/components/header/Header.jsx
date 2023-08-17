import './header.css';
import { Background, Github, TalkIcon, HandIcon, ClickButton } from './imports';

const Header = () => {

  return (
    <div className="Container w-full">

      <div className="Header py-5">
        <div className="Header text-5xl lg:text-7xl font-medium">We Help</div>
        <div className="Header text-5xl lg:text-7xl font-medium">You Manage</div>
      </div>

      <div className="rounded-lg bg-no-repeat bg-cover bg-fixed group" style={{ backgroundImage: `url(${Background})` }}>
        <div className="flex justify-end pr-12 invisible lg:visible">
          <a className='-mt-16' target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1"><img src={Github} alt="Github" className='w-[8rem] hover:scale-110 hover:-translate-y-6 duration-500'/></a>
        </div>

        <div className="flex justify-center">
          <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1"><img src={TalkIcon} alt="TalkIcon"/></a>
        </div>

        <div className="flex flex-col items-center pb-10">
          <a className="-mt-24 -mr-48" target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1"><img src={ClickButton} alt="Click Button"/></a>
          <img className='group-hover:scale-110 group-hover:-translate-y-4 duration-500 w-14 h-14 -mt-2' src={HandIcon} alt="Talk"/>
        </div>

      </div>

    </div>
  )
}

export default Header
