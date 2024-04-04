/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
    return <main className={twMerge('flex flex-row h-screen bg-neutral-900', className)} {...props}>
        {children}
    </main>
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
    return (
        <aside className={twMerge('w-[25%] overflow-auto', className)} {...props}>
            {children}
        </aside>
    )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
    ({ children, className, ...props }, ref) => (
        <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
            {children}
        </div>
    )
)

Content.displayName = 'Content'

export const FormatControls = ({ className, children, ...props }: ComponentProps<'aside'>) => {
    return (
        <aside className={twMerge('w-12 pt-3')} {...props}>
            {children}
        </aside>
    )
}