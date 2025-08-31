import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) return <div className="p-6">Статья не найдена</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="mb-4">{article.summary}</div>

      {article.pdf ? (
        <div className="w-full h-[80vh] border rounded">
          <iframe
            src={article.pdf}
            className="w-full h-full"
            title="PDF article"
          ></iframe>
        </div>
      ) : (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      )}
    </div>
  );
}
