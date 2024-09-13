import { ReactNode } from 'react'
import { bgGradient } from './constants'
import { classNames } from '@/utils/classNames'

export const BorderGradient = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classNames(bgGradient, 'rounded-lg p-[2px]')}>
      {children}
    </div>
  )
}
