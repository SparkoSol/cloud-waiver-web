'use client';
const Heading = ({
                   title,
                   subtitle,
                   center,
                   titleClasses='',
                   subTitleClasses=''
                 }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className={`font-bold leading-[150%] ${titleClasses ? titleClasses : 'text-white text-5xl mb-3'}`}>
        {title}
      </div>
      <div className={`text-base ${subTitleClasses ? subTitleClasses : 'text-[#CDCDFF]'}`}>
        {subtitle}
      </div>
    </div>
  );
}

export default Heading;