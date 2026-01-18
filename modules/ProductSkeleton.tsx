export default function ProductSkeleton() {
  return (
    <div className="rounded-xl border bg-[#1E1E1E] p-3 animate-pulse">
      <div className="aspect-square rounded-lg bg-gray-700" />

      <div className="mt-3 h-4 w-full rounded bg-gray-700" />
      <div className="mt-2 h-4 w-2/3 rounded bg-gray-700" />

      <div className="mt-3 h-4 w-1/2 rounded bg-gray-700" />
    </div>
  )
}