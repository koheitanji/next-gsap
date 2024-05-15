import Link from 'next/link';

function Footer() {
  return (
    <footer id="footer">
      <ul className="inner wrapper">
        <li>
          <p className="title">コース一覧</p>
          <ul className="menu">
            <li><Link href="/">スタンダードプラン</Link></li>
            <li><Link href="/">プレミアムプラン</Link></li>
            <li><Link href="/">短期集中プラン</Link></li>
            <li><Link href="/">日常英会話コース</Link></li>
            <li><Link href="/">ビジネス英会話コース</Link></li>
          </ul>
        </li>
        <li>
          <p className="title">講師紹介</p>
          <ul className="menu">
            <li><Link href="/">講師について</Link></li>
            <li><Link href="/">講師一覧</Link></li>
            <li><Link href="/">講師を探す</Link></li>
          </ul>
        </li>
        <li>
          <p className="title">会社情報</p>
          <ul className="menu">
            <li><Link href="/">会社概要</Link></li>
            <li><Link href="/">採用情報</Link></li>
          </ul>
        </li>
        <li>
          <p className="title">BBBについて</p>
          <ul className="menu">
            <li><Link href="/">よくあるご質問</Link></li>
            <li><Link href="/">ご利用規約</Link></li>
            <li><Link href="/">プライバシーポリシー</Link></li>
            <li><Link href="/">お問い合わせ</Link></li>
          </ul>
        </li>
      </ul>
      <p className="copyright">&copy; BBB English School</p>
    </footer>
  );
}

export default Footer;