import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ArticleList from './pages/ArticleList'
import ArticleDetail from './pages/ArticleDetail'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full p-6">
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </main>
    </div>
  )
}
