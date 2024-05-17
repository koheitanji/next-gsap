import Link from 'next/link';
import { useRouter } from 'next/router';
import news_data from '../../../data/news_data';

const NewsPage = ({ newsPage, currentPage, totalPages }) => {
  const router = useRouter();

  return (
    <div>
      <h1>News List - Page {currentPage}</h1>
      <ul>
        {newsPage.map((article) => (
          <li key={article.id}>
            <Link href={`/news/${article.id}`}>
              <p className="ph">{article.ph}</p>
              <p className="title">{article.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {currentPage > 1 && (
          <button onClick={() => router.push(`/news/page/${currentPage - 1}`)}>前へ</button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => router.push(`/news/page/${currentPage + 1}`)}>次へ</button>
        )}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const totalPages = Math.ceil(news_data.length / 9);
  const paths = Array.from({ length: totalPages }, (v, k) => ({
    params: { page: (k + 1).toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const currentPage = parseInt(params.page, 9);
  const startIndex = (currentPage - 1) * 9;
  const newsPage = news_data.slice(startIndex, startIndex + 9);
  const totalPages = Math.ceil(news_data.length / 9);

  return {
    props: {
      newsPage,
      currentPage,
      totalPages,
    },
  };
}

export default NewsPage;