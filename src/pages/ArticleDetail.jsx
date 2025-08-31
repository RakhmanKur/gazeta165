import { useParams, useNavigate } from "react-router-dom";
import { articles } from "../data/articles";

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === id);

  if (!article) return <div className="p-6">Статья не найдена</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
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
