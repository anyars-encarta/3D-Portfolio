import BallCanvas from "../components/Ball";
import { technologies } from '../constants/index';
import { useState } from "react";

const Tech = () => {
  const [showName, setShowName] = useState('-');

  const handleHover = (techName) => {
    setShowName(techName);
  };

  return (
    <div className='flex flex-col justify-center items-center mt-7'>
      <p className='mb-10 text-secondary text-[24px] font-bold swinging'>
        {showName}
      </p>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {
          technologies.map((technology) => (
            <div
              className='w-28 h-28'
              key={technology.name}
              onMouseEnter={() => handleHover(technology.name)}
              onMouseLeave={() => setShowName('-')}
            >
              <BallCanvas icon={technology.icon} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Tech;