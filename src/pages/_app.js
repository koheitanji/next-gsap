import '../styles/common.sass';
import '../styles/style.sass';
import App from 'next/app';
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps, router }) {
  const noHeaderFooterPages = ['/campaign'];
  const showHeaderFooter = !noHeaderFooterPages.includes(router.pathname);
  return (
    <>
      {showHeaderFooter && <Header />}
      <Component {...pageProps} />
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default MyApp;