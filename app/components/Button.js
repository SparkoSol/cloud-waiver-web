import {twMerge} from "tailwind-merge";

const Button = ({
                  fullWidth = '',
                  btnText = '',
                  btnClasses = '',
                  BtnIcon = null,
                  iconClasses = '',
                  ...otherProps
                }) => {
  return (
    <div className={`flex justify-center items-center ${fullWidth}`}>
      <button {...otherProps}
              className={twMerge(`text-gray-50 text-sm align-items-center align-middle rounded-md flex justify-center items-center gap-2 ${btnClasses}`)}>
        {BtnIcon && <BtnIcon className={iconClasses ? iconClasses : 'w-5 h-5 text-CW-primary'}/>}
        {btnText}
      </button>
    </div>
  )
}

export default Button