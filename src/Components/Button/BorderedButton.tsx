
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import { ReactNode } from "react"

interface BorderedButtonProps {
  backgroundValue?: string
  children?: ReactNode
  onClick?: () => void,
  style?: React.CSSProperties,
  variant?: string
}

const BorderedButton = ({ 
  backgroundValue = 'transparent', 
  children,
  onClick,
  style,
  variant = 'primary',

}: BorderedButtonProps) => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }

  let defaultLabel = children ?? 'OKAY';

  let backgroundColor = () => {
    if(variant! === 'info') {
      return gradients.info.main
    } 

    return gradients.dark.main //default color
  }

  return (
    <Button
      onClick={onClick!}
      variant='outlined'
      size='small'
      style={style!}
      sx={{
        background: backgroundValue,
        borderColor: backgroundColor,
        color: backgroundColor,
        '&:hover': {
          borderColor: backgroundColor 
        },
      }}
    >
      {defaultLabel}
    </Button>

  )
}

export default BorderedButton
