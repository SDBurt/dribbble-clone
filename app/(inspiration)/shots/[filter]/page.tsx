import React from "react"

interface FilterPageProps {
  params: {
    filter: string
  }
}

export default async function FilterPage({params}: FilterPageProps) {
  
  const {filter} = params
  
  return (
    <div>
      <p>{filter}</p>
    </div>
  )
}
