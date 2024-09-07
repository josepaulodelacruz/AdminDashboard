import TextField from '@mui/material/TextField'

interface InputTextFieldProps {
  placeholder?: string
  label?: string
  name?: string
  type?: React.HTMLInputTypeAttribute
}

const InputTextField = ({
  placeholder,
  label,
  name,
  type,
}: InputTextFieldProps) => {
  return (
    <TextField
      type={type!}
      name={name!}
      InputLabelProps={{
        shrink: true,
        style: { fontSize: '16px', lineHeight: '1rem' }

      }}
      inputProps={{
        style: { fontSize: '14px' }
      }}
      placeholder={placeholder!}
      fullWidth size='small' variant='standard' label={label!} sx={{ marginY: 1.2 }} />
  )
}

export default InputTextField
