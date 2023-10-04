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
      <div className={`font-bold mb-1 ${titleClasses ? titleClasses : 'text-white text-5xl leading-[150%]'}`}>
        {title}
      </div>
      <div className={`text-base ${subTitleClasses ? subTitleClasses : 'text-[#CDCDFF]'}`}>
        {subtitle}
      </div>
    </div>
  );
}

export default Heading;