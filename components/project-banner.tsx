import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

import { projectConfig } from "@/config/project"

export function ProjectBanner() {
  if (process.env.NODE_ENV === "production") return null

  return (
  <Card className="fixed top-4 right-4 z-50 flex items-center justify-center p-1 font-mono max-w-[14rem]">
    <CardHeader className="p-1">
      <CardTitle className="text-sm">{projectConfig.title}</CardTitle>
      <CardDescription className="text-xs">{projectConfig.description}</CardDescription>
    </CardHeader>
  </Card>
  )
}