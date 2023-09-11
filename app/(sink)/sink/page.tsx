import React from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import Image from 'next/image'

import ExampleImage from '@/public/images/google-deepmind-unsplash-ai.jpg'


const items: (GridItemProps & {spanTwo?: boolean, element: React.ReactNode})[] = [
  { title: "Buttons", description: "These are the different buttons", showHeader: true, element: (
    <div className="flex flex-col space-y-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
    )},
  { title: "Test 2", description: "Different button sizes", showHeader: true, element: (
    <div className="flex flex-col space-y-2">
      <Button variant="default" size="lg">Lg</Button>
      <Button variant="default" size="default">Default</Button>
      <Button variant="default" size="sm">Sm</Button>
      <Button variant="default" size="icon"><Icons.gitHub className="h-6 w-6"/></Button>
    </div>
    )},
  { title: "Test 3", description: "This is a grid item", showHeader: false, element: (
    <div className="flex flex-col space-y-2">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Heading 1</h1>
      <h2 className="text-3xl font-semibold tracking-tight transition-colors first:mt-0">Heading 2</h2>
      <h3 className="text-2xl font-semibold tracking-tight">Heading 3</h3>
      <h4 className="text-xl font-semibold tracking-tight">Heading 4</h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Paragraph</p>
      <div className="text-lg font-semibold">Large</div>
      <small className="text-sm font-medium leading-none">Small</small>
      <p className="text-sm text-muted-foreground">Muted</p>
    </div>
    )},
  { title: "Test 4", description: "This is a grid item", showHeader: true, spanTwo: true, element: (
    <div>
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            src={ExampleImage}
            alt="artist's illustration of artificial intelligence"
          />
        </TooltipTrigger>
        <TooltipContent>
          Photo by <a className="underline"
          href="https://unsplash.com/@googledeepmind?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Google DeepMind</a> on <a className="underline" href="https://unsplash.com/photos/a-piece-of-metal-with-a-button-on-it-4nBaO2Y4IzQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <div className="flex justify-between">
      <h1 className="w-full">Shawnigan Lake, Canada</h1>
      <div className="flex justify-center items-center space-x-1"><Icons.star className="h-4 w-4" /><span>5.0</span></div>

    </div>
    <p className="text-muted-foreground">78 km away</p>
      <p className="text-muted-foreground">Sep. 17-22</p>
      <p><b>$542 CAD</b> night</p>
    </div>
    )},
  { title: "Test 5", description: "This is a grid item", showHeader: true, spanTwo: true, element: (
    <p>Content 5</p>
    )},
  { title: "Test 6", description: "This is a grid item", showHeader: true, element: (
    <p>Content 6</p>
    )},
  { title: "Test 7", description: "This is a grid item", showHeader: true, element: (
    <p>Content 7</p>
    )},
  { title: "Test 8", description: "This is a grid item", showHeader: true, element: (
    <p>Content 8

  </p>
    )},
]

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  showHeader?: boolean
  title?: string
  description?: string
}

function GridItem({className, showHeader, title, description, children, ...props}: GridItemProps) {
  return (
    <Card className={cn(className)} {...props}>
      {showHeader && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={cn(!showHeader && "p-6") }>
        {children}
      </CardContent>
    </Card>
    )
}

interface SinkPageProps  {}

export default function SinkPage({}: SinkPageProps) {
  return (
    <div className="pb-6 pt-12">
      <div className="grid grid-flow-row-dense grid-cols-3 gap-4">
        {
          items.map((item, index) => {
            return (
              <GridItem
                key={item.title ? `${item.title}-${index}` : `grid-item-${index}`}
                className={cn(item.spanTwo && "col-span-2")}
                title={item.title}
                description={item.description}
                showHeader={item.showHeader}
              >
                {item.element}
              </GridItem>
            )
          })
        }
      </div>
    </div>
  )
}
