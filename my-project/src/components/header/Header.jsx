import './header.css';
import { Background, Github, TalkIcon, HandIcon, ClickButton } from './imports';

const Header = () => {

  return (
    <div className="Container w-full">

      <div className="Header py-5">
        <div className="Header text-5xl lg:text-7xl font-medium">We Help</div>
        <div className="Header text-5xl lg:text-7xl font-medium">You Manage</div>
      </div>

      <div className="rounded-lg bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: `url(${Background})` }}>
        <div className="flex justify-end pr-12 invisible lg:visible">
          <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1" className='-mt-16'><img src={Github} alt="Github" className='w-[8rem] hover:-translate-y-4 hover:scale-110 duration-500'/></a>
        </div>

        <div className="flex justify-center px-4">
          <a target='_blank'rel='noopener noreferrer' href="https://www.figma.com/file/n9Y2ZU6f0YmERYSrgWiBIt/Brutal?type=design&node-id=0%3A1&mode=design&t=8zFX6ZBIMMG0o9oC-1"><img src={TalkIcon} alt="TalkIcon" className=''/></a>
        </div>

        <div className="">
          <div className="">
            <img src={ClickButton} alt="Click Button" className=''/>
            <img src={HandIcon} alt="Talk" className=''/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
