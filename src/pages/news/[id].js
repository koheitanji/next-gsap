import { useRouter } from 'next/router';
import news_data from '../../data/news_data';

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const article = news_data.find((n) => n.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}