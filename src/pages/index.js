import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useInView from '../components/useInView';

export default function Top() {
  const [inViewLeft, refLeft] = useInView({ threshold: 0.5 });
  const [inViewRight, refRight] = useInView({ threshold: 0.5 });
  const [inViewBalloon01, refBalloon01] = useInView({ threshold: 0.5 });
  const [inViewBalloon02, refBalloon02] = useInView({ threshold: 0.5 });
  const [inViewBalloon03, refBalloon03] = useInView({ threshold: 0.5 });
  return (
    <>
      <Head>
          <title>BBB英会話スクール</title>
          <meta name="description" content="BBB英会話スクール" />
          <meta property="og:title" content="BBB英会話スクール" />
          <meta property="og:description" content="BBB英会話スクール" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://next-gsap-rho.vercel.app/" />
          <meta property="og:image" content="https://next-gsap-rho.vercel.app/img/common/ogp.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@hogehoge" />
      </Head>
      <div id="wrapper">
        <main>
          <div id="mainvisual">
            <div className="text">
              <p className="title">話して学ぼう！<br />BBB英会話スクール</p>
              <a className="btn" href="#hoge">無料体験はこちら</a>
            </div>
            <ul className="fade">
              <li><img src="/img/top/mainvisual1.jpg" alt=""/></li>
              <li><img src="/img/top/mainvisual2.jpg" alt=""/></li>
              <li><img src="/img/top/mainvisual3.jpg" alt=""/></li>
            </ul>
          </div>

          <section id="reason">
            <h2 className="section-title">BBBが選ばれる理由</h2>

            <div className="bg">
              <div ref={refLeft} className={`slide inview-slide-left ${inViewLeft ? 'slide-left' : ''}`}>
                <img src="/img/top/icon-pc.png" alt=""/>
                <p>
                  <span className="title">オンライン対応</span>
                  <span className="text">24時間いつでも受講できる！</span>
                </p>
              </div>
              <div ref={refRight} className={`slide inview-slide-right ${inViewRight ? 'slide-right' : ''}`}>
                <img src="/img/top/icon-teacher.png" alt=""/>
                <p>
                  <span className="title">講師はネイティブ</span>
                  <span className="text">お気に入りの講師が自由に選べる！</span>
                </p>
              </div>
            </div>
          </section>

          <section id="voice" className="wrapper">
            <h2 className="section-title">受講生の声</h2>

            <div ref={refBalloon01} className={`item-left inview-balloon ${inViewBalloon01 ? 'balloon' : ''}`}>
              <div className="student">
                <img src="/img/top/icon-student1.png" alt=""/>
                <p className="name">○○○さん<br />大学生</p>
              </div>
              <div className="balloon-text">
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
            </div>

            <div ref={refBalloon02} className={`item-right inview-balloon ${inViewBalloon02 ? 'balloon' : ''}`}>
              <div className="balloon-text">
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
              <div className="student">
                <img src="/img/top/icon-student2.png" alt=""/>
                <p className="name">○○○さん<br />会社員</p>
              </div>
            </div>

            <div ref={refBalloon03} className={`item-left inview-balloon ${inViewBalloon03 ? 'balloon' : ''}`}>
              <div className="student">
                <img src="/img/top/icon-student3.png" alt=""/>
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
     </>
  );
}