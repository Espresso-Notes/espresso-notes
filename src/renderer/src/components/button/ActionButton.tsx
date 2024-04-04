/* eslint-disable prettier/prettier */
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ className, children, ...props }: ActionButtonProps) => {
    return (
        <button className={twMerge('pw-2 py-1 rounded-md border-2 border-stone-400 hover:bg-stone-500 text-stone-300 transition-colors duration-300', className)}
            {...props} >
            {children}
        </button>
    )
}