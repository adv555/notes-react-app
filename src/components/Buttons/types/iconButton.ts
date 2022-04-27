export interface IconButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode
  onClick: () => void
}
