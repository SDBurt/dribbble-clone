import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="pb-6 pt-12">
      <div className="grid grid-flow-row-dense grid-cols-3 gap-4">
        <Skeleton className="w-full h-56"/>
        <Skeleton className="w-full h-56"/>
        <Skeleton className="w-full h-56"/>
        <Skeleton className="w-full h-56"/>
        <Skeleton className="w-full h-56"/>
        <Skeleton className="w-full h-56"/>
        <Skeleton className="w-full h-56"/>
        <Skeleton className="w-full h-56"/>
        <Skeleton className="w-full h-56"/>
      </div>
    </div>
  )
}
