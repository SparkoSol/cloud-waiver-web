'use client';
import {twMerge} from "tailwind-merge";

const Heading = ({
                   title,
                   subtitle,
                   center,
                   titleClasses='',
                   subTitleClasses=''
                 }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className={twMerge(`font-bold mb-1 text-white text-5xl leading-[150%] ${titleClasses}`)}>
        {title}
      </div>
      <div className={twMerge(`text-base text-[#CDCDFF] ${subTitleClasses}`)}>
        {subtitle}
      </div>
    </div>
  );
}

export default Heading;