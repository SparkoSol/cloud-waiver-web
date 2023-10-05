import Image from "next/image";

const Card = ({startIcon, title, number, endIcon}) => {
  return (
    <div className="flex flex-col justify-center overflow-hidden rounded-xl bg-white p-5 shadow">
      <dt className="flex items-start justify-between">
        <div className="space-y-6">
          {startIcon ?
            <span className="text-2xl">
            ♾️
          </span> : <>
              <p className="text-gray-500 font-normal text-base">{title}</p>
              <h2 className="text-4xl font-semibold text-gray-800">{number}</h2>
            </>}
        </div>
        <Image
          src={endIcon}
          width='20'
          height='30'
          alt='Pencil'
        />
      </dt>
    </div>
  )
}

export default Card