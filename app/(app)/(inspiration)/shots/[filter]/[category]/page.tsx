import React from "react"

interface CategoryPageProps {
  params: {
    filter: string
    category: string
  }
}

export default async function CategoryPage({params}: CategoryPageProps) {
  
  const {filter, category} = params
  
  return (
    <div>
      <p>{filter}</p>
      <p>{category}</p>
    </div>
  )
}
