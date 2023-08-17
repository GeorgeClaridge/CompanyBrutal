import './work.css';
import { Background } from './imports';

const Work = () => {

  return (
    <div className="Container w-full pt-[10rem]">

      <div className="Header text-6xl font-medium text-center">How it Works?</div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-6">
        <div className="Box text-center">
          <div className="Icon text-4xl font-bold">1</div>
          <div className="Header text-2xl font-bold">Header</div>
          <div className="Info Info text-lg font-medium">WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE  WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE</div>
        </div>

        <div className="Box text-center">
          <div className="Icon text-4xl font-bold">2</div>
          <div className="Header text-2xl font-bold">Header</div>
          <div className="Info Info text-lg font-medium">WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE  WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE</div>
        </div>

        <div className="Box text-center">
          <div className="Icon text-4xl font-bold">3</div>
          <div className="Header text-2xl font-bold">Header</div>
          <div className="Info text-lg font-medium">WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE  WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE WHAT ELSE  WHAT ELSE</div>
        </div>
        
      </div>

    </div>
  )
}

export default Work
