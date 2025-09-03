import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-3">
          
          <div>
            <div className="text-xl font-bold">School newspaper</div>
            <div className="text-sm text-gray-600">Topic of week "Saving the planet"</div>
          </div>
        </Link>
      </div>
    </header>
  )
}
