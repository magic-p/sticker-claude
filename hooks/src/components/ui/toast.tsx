import * as React from "react"

export interface ToastProps {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

export interface ToastActionElement {
  altText: string
  onClick: () => void
  children: React.ReactNode
}

export function Toast({ title, description, action, open, onOpenChange }: ToastProps) {
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onOpenChange(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        maxWidth: '350px',
        zIndex: 1000,
      }}
    >
      {title && <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>{title}</div>}
      {description && <div style={{ color: '#666' }}>{description}</div>}
      {action && <div style={{ marginTop: '12px' }}>{action}</div>}
    </div>
  )
} 