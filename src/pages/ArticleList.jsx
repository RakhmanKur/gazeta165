import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { articles as STATIC_ARTICLES } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function ArticleList() {
  const [allArticles, setAllArticles] = useState(STATIC_ARTICLES);

  // Подгружаем статьи из localStorage (добавленные через админку)
  useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem("articles")) || [];
    // Добавляем их к статическим, чтобы все показывались вместе
    setAllArticles([...STATIC_ARTICLES, ...savedArticles]);
  }, []);

  // Если нет статей, ничего не рендерим
  if (allArticles.length === 0) {
    return <p>Пока нет статей 😅</p>;
  }

  return (
    <div className="grid gap-6">
      <div className="md:col-span-2">
        <Link to={`/article/${allArticles[0].id}`}>
          <ArticleCard article={allArticles[0]} />
        </Link>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {allArticles.slice(1).map((a) => (
            <Link key={a.id} to={`/article/${a.id}`}>
              <ArticleCard article={a} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
