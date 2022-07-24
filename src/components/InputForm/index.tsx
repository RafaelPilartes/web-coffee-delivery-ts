import { InputHTMLAttributes } from 'react'
import { InputFormConteiner } from './styles'

type InputFormProps = InputHTMLAttributes<HTMLElement>

export function InputForm({ ...props }: InputFormProps) {
  return <InputFormConteiner {...props} />
}
