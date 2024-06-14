import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import news_data from '../../../data/news_data';

const NewsPage = ({ newsPage, currentPage, totalPages }) => {
  const router = useRouter();

  return (
    <>
      <Head>
          <title>BBB英会話スクール | News一覧</title>
          <meta name="description" content="BBB英会話スクール" />
          <meta property="og:title" content="BBB英会話スクール" />
          <meta property="og:description" content="BBB英会話スクール" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://next-gsap-rho.vercel.app/" />
          <meta property="og:image" content="https://next-gsap-rho.vercel.app/img/common/ogp.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@hogehoge" />
      </Head>
      <div id="news_page">
      <h1 className="page_title">News List - Page {currentPage}</h1>
      <ul className="news_list">
        {newsPage.map((article) => (
          <li key={article.id}>
            <Link href={`/news/${article.id}`}>
              <p className="ph"><img src={`${article.ph}`} alt=""/></p>
              <p className="title">{article.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pager">
        {/* {currentPage > 1 && (
          <button onClick={() => router.push(`/news/page/${currentPage - 1}`)}>前へ</button>
        )} */}
        {Array.from({ length: 5 }, (_, i) => {
          let pageNumber;
          if (currentPage <= 3) {
            pageNumber = i + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNumber = totalPages - 4 + i;
          } else {
            pageNumber = currentPage - 2 + i;
          }
          return (
            pageNumber > 0 && pageNumber <= totalPages && (
              <button
                key={pageNumber}
                onClick={() => router.push(`/news/page/${pageNumber}`)}
                style={{ fontWeight: pageNumber === currentPage ? 'bold' : 'normal' }}
              >
                {pageNumber}
              </button>
            )
          );
        })}
        {/* {currentPage < totalPages && (
          <button onClick={() => router.push(`/news/page/${currentPage + 1}`)}>次へ</button>
        )} */}
      </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = Array.from({ length: Math.ceil(news_data.length / 9) }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const currentPage = parseInt(params.page, 10);
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