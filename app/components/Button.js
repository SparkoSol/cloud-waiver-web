const Button = ({
                  fullWidth = false,
                  btnText = '',
                  btnClasses = '',
                  BtnIcon = null,
                  ...otherProps
                }) => {
  return (
    <div className={`${fullWidth ? 'w-full mb-4' : 'w-fit'} flex justify-center items-center`}>
      <button {...otherProps}
              className={`text-gray-50 text-sm align-items-center align-middle rounded-md ${btnClasses}`}>
        {BtnIcon && <BtnIcon className='w-5 h-5 text-CW-primary'/>}
        {btnText}
      </button>
    </div>
  )
}

export default Button