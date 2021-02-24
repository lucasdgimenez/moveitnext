interface TextProps {
  msg: string,
  children: string
}

export default function Text(props: TextProps) {
  return (
    <>
      <h1>
        {props.children}
      </h1>
      <p>
        {props.msg}
      </p>  
    </>
  )
}