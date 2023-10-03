const Button = ({
  otherProps,
  fullWidth=false,
  btnText,
                }) =>{
  return(
    <div className={`${fullWidth ? 'w-full' : 'w-fit'} mb-4`}>
      <button {...otherProps} className={`btn bg-CW-primary text-gray-50 text-sm align-items-center border-CW-primary align-middle lg:px-16 sm:px-8 sm:py-3.5 py-3.5 w-full sm:rounded-md rounded-md`}>{btnText}</button>
    </div>
  )
}

export default Button