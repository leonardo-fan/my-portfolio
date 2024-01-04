export default function SkeletonButton({ text, className, onClick } : { text : string, className : string, onClick : () => void }) {
  return (
    <button onClick={onClick} className={`border border-white rounded-full hover:bg-white hover:text-black font-medium text-sm px-4 lg:px-5 py-1 lg:py-1.5 ${className}`}>
      {text}
    </button>
  )
}