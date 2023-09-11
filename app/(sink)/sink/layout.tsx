
interface SinkLayoutProps {
  children: React.ReactNode
}

export default function SinkLayout({ children }: SinkLayoutProps) {
  return (
    <div className="container">
      {children}
    </div>
  )
}