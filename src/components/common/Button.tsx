import React from "react"

type ButtonProps = React.ComponentProps<"button"> & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode

}

const Button = ({children, onClick, ...props}: ButtonProps) =>{
    return (
        <button {...props} onClick={onClick}>{children}</button>
    )
}


export default Button