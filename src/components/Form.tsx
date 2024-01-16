import React, { ChangeEvent, ReactNode, useState } from 'react'
import st from '../assets/styles/Form.module.styl'
import cn from 'classnames'
import { toast } from 'react-hot-toast'

function maskNumber(value: string, mask: string) {
  for (const char of value) mask = mask.replace(/#/, char)
  return mask.replace(/\D+$/g, '')
}

function unmaskNumber(value: string) {
  return value.replace(/\D/g, '')
}

function maskPhone(value: string) {
  if (!value) return
  value = unmaskNumber(value)
  return maskNumber(
    value,
    value.length > 10 ? '(##) #####-####' : '(###) ###-####'
  )
}

const Mask = (
  mask: string | undefined,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e)
  }
  if (mask === 'phone')
    return {
      value: maskPhone(value) || '',
      onChange: handleChange,
    }
  return { value: value || '', onChange }
}

type Props = {
  inputs: Array<{
    name: string
    label: ReactNode
    placeholder?: string
    type?: string
    mask?: 'phone'
    required?: boolean
  }>
  button: ReactNode
  loadingButton?: ReactNode
  idPrefix: string
  className?: string
}

export function Form({
  inputs,
  button,
  loadingButton = button,
  idPrefix,
  className,
}: Props) {
  const [data, setData] = useState<{ [key: string]: any }>({})
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const copyData = { ...data }
    copyData[e.target.name] = e.target.value
    setData(copyData)
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    console.log(response)
    console.log('entrou')
    if (response.status === 200) {
      setData({})
      toast.success(`Hey ${data.name}, your message was sent successfully!`)
    }
    
  }

  return (
    <form className={cn(st.core, className)} onSubmit={onSubmit}>
      {inputs.map(
        ({ name, label, placeholder, type, mask, required = true }) => (
          <div key={name}>
            {type === 'textarea' ? (
              <>
                <label htmlFor={`${idPrefix}-${name}`}>{label}</label>
                <textarea
                  name={name}
                  placeholder={placeholder}
                  id={`${idPrefix}-${name}`}
                  value={data[name] || ''}
                  required={required}
                  onChange={onChange}
                ></textarea>
              </>
            ) : (
              <>
                <label htmlFor={`${idPrefix}-${name}`}>{label}</label>

                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  id={`${idPrefix}-${name}`}
                  required={required}
                  {...Mask(mask, data[name], onChange)}
                />
              </>
            )}
          </div>
        )
      )}
      <div className="form-submit">{button}</div>
    </form>
  )
}
