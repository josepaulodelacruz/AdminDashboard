import { useTheme } from "@mui/material/styles";
import { ReactNode } from "react";

const SpanTheme = () => {
  const theme = useTheme()
  const { dark, text } = theme.palette as { gradients?: any, dark?: any, text?: any }

  const textColor = dark.main
  const subTextColor = text.main

  return {textColor: textColor, subTextColor: subTextColor}
}

interface MainSpanProps {
  children: ReactNode,
  
}

const MainSpan = ({ children } : MainSpanProps ) => {

  const textTheme = SpanTheme()

  return (
    <h6 className='text-[1rem] font-bold' style={{ color: textTheme.textColor }} >
      {children}
    </h6>
  )
}

interface SubSpanProps {
  children: ReactNode
  className?: string 
}

const SubSpan = ({ 
  children,
  className = 'text-[0.75rem] font-light'
}: SubSpanProps) => {
  const textTheme = SpanTheme();
  return (
    <span className={className} style={{ color: textTheme.subTextColor }}>
      {children}
    </span>
  );
};

export { MainSpan, SubSpan }


