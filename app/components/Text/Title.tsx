export default function Title({ text, level } : { text : String, level: Number }) {
  switch (level) {
    case 1: return <div className="font-semibold text-5xl py-1 my-3">{text}</div>
    case 2: return <div className="font-semibold text-4xl py-1 my-3">{text}</div>
    case 3: return <div className="font-semibold text-3xl py-1 my-3">{text}</div>
    case 4: return <div className="font-semibold text-2xl py-1 my-3">{text}</div>
  }
}