import './work.css';
import { Background } from './imports';

const Work = () => {

  return (
    <div className="Container w-full pt-[10rem]">

      <div className="Header text-6xl font-medium text-center pb-12">How it Works?</div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-6">
        <div className="Box text-center">
          <div className="Icon text-4xl font-bold w-14 h-14 rounded-full bg-purple-400 text-white leading-[3.5rem] mx-auto">1</div>
          <div className="Header text-2xl font-bold pt-4">Header</div>
          <div className="Info Info text-lg font-medium">WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE  WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE</div>
        </div>

        <div className="Box text-center">
          <div className="Icon text-4xl font-bold w-14 h-14 rounded-full bg-purple-400 text-white leading-[3.5rem] mx-auto">2</div>
          <div className="Header text-2xl font-bold pt-4">Header</div>
          <div className="Info Info text-lg font-medium">WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE  WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE</div>
        </div>

        <div className="Box text-center">
          <div className="Icon text-4xl font-bold w-14 h-14 rounded-full bg-purple-400 text-white leading-[3.5rem] mx-auto">3</div>
          <div className="Header text-2xl font-bold pt-4">Header</div>
          <div className="Info Info text-lg font-medium">WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE  WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE</div>
        </div>
        
      </div>

    </div>
  )
}

export default Work
