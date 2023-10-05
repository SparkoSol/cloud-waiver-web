import {twMerge} from "tailwind-merge";

const Button = ({
                  fullWidth = false,
                  btnText = '',
                  btnClasses = '',
                  BtnIcon = null,
                  iconClasses = '',
                  ...otherProps
                }) => {
  return (
    <div className={`flex justify-center items-center ${fullWidth}`}>
      <button {...otherProps}
              className={twMerge(`text-gray-50 text-sm align-items-center align-middle rounded-md ${btnClasses}`)}>
        {btnText}
        {BtnIcon && <BtnIcon className={iconClasses ? iconClasses : 'w-5 h-5 text-CW-primary'}/>}
      </button>
    </div>
  )
}

export default Button