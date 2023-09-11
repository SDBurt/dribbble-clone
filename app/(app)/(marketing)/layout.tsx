

interface MarketingLayoutProps {
  children: React.ReactNode
}


export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}