import Link from 'next/link';
import Image from 'next/image'

export default function Top() {
  return (
    <div id="wrapper">
      <main>
        <div id="mainvisual">
          <div className="text">
            <p className="title">話して学ぼう！<br />BBB英会話スクール</p>
            <a className="btn" href="#hoge">無料体験はこちら</a>
          </div>
          <ul className="fade">
            <li><Image src="/img/top/mainvisual1.jpg" alt="" width={1920} height={1080} layout="responsive"/></li>
            <li><Image src="/img/top/mainvisual2.jpg" alt="" width={1920} height={1280} layout="responsive"/></li>
            <li><Image src="/img/top/mainvisual3.jpg" alt="" width={1920} height={1280} layout="responsive"/></li>
          </ul>
        </div>

        <section id="reason">
          <h2 className="section-title">BBBが選ばれる理由</h2>

          <div className="bg">
            <div className="slide inview-slide-left">
              <Image src="/img/top/icon-pc.png" alt="" width={174} height={120} layout="responsive"/>
              <p>
                <span className="title">オンライン対応</span>
                <span className="text">24時間いつでも受講できる！</span>
              </p>
            </div>
            <div className="slide inview-slide-right">
              <Image src="/img/top/icon-teacher.png" alt="" width={101} height={120} layout="responsive"/>
              <p>
                <span className="title">講師はネイティブ</span>
                <span className="text">お気に入りの講師が自由に選べる！</span>
              </p>
            </div>
          </div>
        </section>

        <section id="voice" className="wrapper">
          <h2 className="section-title">受講生の声</h2>

          <div className="item-left inview-balloon">
            <div className="student">
              <Image src="/img/top/icon-student1.png" alt="" width={240} height={240} layout="responsive"/>
              <p className="name">○○○さん<br />大学生</p>
            </div>
            <div className="balloon-text">
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>

          <div className="item-right inview-balloon">
            <div className="balloon-text">
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className="student">
              <Image src="/img/top/icon-student2.png" alt="" width={240} height={240} layout="responsive"/>
              <p className="name">○○○さん<br />会社員</p>
            </div>
          </div>

          <div className="item-left inview-balloon">
            <div className="student">
              <Image src="/img/top/icon-student3.png" alt="" width={240} height={240} layout="responsive"/>
              <p className="name">○○○さん<br />自営業</p>
            </div>
            <div className="balloon-text">
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>
        </section>

        <section id="summary">
          <div className="wrapper">
            <h2 className="section-title">スクールの概要</h2>

            <ul className="menu">
              <li>
                <h3 className="menu-title">
                  <span className="ja">レッスン内容</span>
                  <span className="en">LESSON</span>
                </h3>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </li>
              <li>
                <h3 className="menu-title">
                  <span className="ja">料金プラン</span>
                  <span className="en">PRICE</span>
                </h3>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </li>
              <li>
                <h3 className="menu-title">
                  <span className="ja">講師のご紹介</span>
                  <span className="en">TEACHER</span>
                </h3>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </li>
              <li>
                <h3 className="menu-title">
                  <span className="ja">BBBのQ&A</span>
                  <span className="en">Q&A</span>
                </h3>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </li>
            </ul>
          </div>
        </section>

        <div id="entry" className="wrapper">
          <p className="title">まずは無料で、BBBの英会話を試してみませんか？</p>
          <p className="catchphrase">今なら初月のレッスンを特別価格で受講できる割引クーポンをプレゼント！</p>
          <Link className="btn" href="#hoge">無料体験に申し込む</Link>
        </div>
      </main>
    </div>
  );
}