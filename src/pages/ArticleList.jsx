import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import ArticleCard from '../components/ArticleCard'

export default function ArticleList(){
  return (
    <div className="grid gap-6">
      <div className="md:col-span-2">
        <Link to={`/article/${articles[0].id}`}>
          <ArticleCard article={articles[0]} />
        </Link>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {articles.slice(1).map(a=>(
            <Link key={a.id} to={`/article/${a.id}`}>
              <ArticleCard article={a} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
