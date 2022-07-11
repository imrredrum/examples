const Button = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      style={{
        minWidth: 80,
        lineHeight: 1.5,
        letterSpacing: 2,
        cursor: 'pointer',
        margin: 4,
      }}
    >
      {children}
    </button>
  )
}

export default Button
