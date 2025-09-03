import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-6">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/images/sl_165.png" 
            alt="School logo" 
            className="w-12 h-12 object-contain"
          />
          <div>
            <div className="text-xl font-bold">School newspaper</div>
            <div className="text-sm text-gray-600">Topic of week "Saving the planet"</div>
          </div>
        </Link>
      </div>
    </header>
  )
}
