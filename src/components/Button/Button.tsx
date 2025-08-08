import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  className?: string
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'primary', 
  className, 
  style 
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className || ''}`.trim()
  
  return (
    <button
      onClick={onClick}
      className={buttonClass}
      style={style}
    >
      {children}
    </button>
  )
}

export default Button
