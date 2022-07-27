import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularTxt } from '../Typography'
import { InputFormConteiner, InputWrapper } from './styles'

type InputFormProps = InputHTMLAttributes<HTMLElement> & {
  error?: string
}

export const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputFormConteiner hasError={!!error} {...props} ref={ref} />
        {error && <RegularTxt size="s"> {error} </RegularTxt>}
      </InputWrapper>
    )
  }
)
