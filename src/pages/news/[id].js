import Head from 'next/head';
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
    <>
      <Head>
          <title>BBB英会話スクール | {article.title}</title>
          <meta name="description" content="BBB英会話スクール" />
          <meta property="og:title" content="BBB英会話スクール" />
          <meta property="og:description" content="BBB英会話スクール" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://next-gsap-rho.vercel.app/" />
          <meta property="og:image" content="https://next-gsap-rho.vercel.app/img/common/ogp.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@hogehoge" />
      </Head>
      <div id="news_show_page">
        <div className="head">
          <p className="kv"><img src={`${article.ph}`} alt=""/></p>
        </div>
        <div className="body">
          <h1 className="title">{article.title}</h1>
          <p className="text">{article.content}</p>
        </div>
        <div className="footer">
          <button onClick={() => router.back()}>前のページに戻る</button>
        </div>
      </div>
    </>
  );
}