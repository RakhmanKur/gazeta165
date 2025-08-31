export default function ArticleCard({article}){
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={article.image} alt={article.title} className="w-full h-44 object-contain"/>
      <div className="p-4">
        <h3 className="font-bold text-lg mt-1">{article.title}</h3>
        <p className="text-sm text-gray-700 mt-2">{article.summary}</p>
      </div>
    </div>
  )
}
