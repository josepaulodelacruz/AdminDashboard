import { SubSpan } from "@/Components/Labels/Spans"
import { useTheme } from "@mui/material/styles"
import React, { ReactNode } from "react"

interface ErrorLabelProps {
  isError: boolean,
  children?: ReactNode 
}

const ErrorLabel: React.FC<ErrorLabelProps> = ({
  isError,
  children
}) => {
   const theme = useTheme()
  const { badgeColors } = theme.palette as { gradients?: any, badgeColors?: { error?: any } }

  return (

    <div className=" rounded-md px-2 border-red-600 border-[0.1rem]" style={{ backgroundColor: badgeColors?.error.background, display: !isError ? 'none' : 'block' }}>
      <SubSpan style={{ color: badgeColors?.error.text }}>{children!}</SubSpan>
    </div>
  )

}

export default ErrorLabel

