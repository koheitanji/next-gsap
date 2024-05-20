import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// const ScrollTrigger = dynamic(() => import('gsap/ScrollTrigger'), { ssr: false });
// const ScrollyVideoComponent = dynamic(() => import('../components/ScrollyVideoComponent'), { ssr: false });
const ScrollyVideoCdnComponent = dynamic(() => import('../components/ScrollyVideoCdnComponent'), { ssr: false });

export default function Campaign() {
  useEffect(() => {
    // if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const boxes = [
        { selector: '.js-box_01', trigger: '.js-trigger_01', xStart: -2000 },
        { selector: '.js-box_02', trigger: '.js-trigger_02', xStart: 2000 },
        { selector: '.js-box_03', trigger: '.js-trigger_03', xStart: -2000 },
        { selector: '.js-box_04', trigger: '.js-trigger_04', xStart: 2000 },
        { selector: '.js-box_05', trigger: '.js-trigger_05', xStart: -2000 },
        { selector: '.js-box_06', trigger: '.js-trigger_06', xStart: 2000 }
      ];
      boxes.forEach(box => {
        gsap.fromTo(box.selector, {
          x: box.xStart,
          opacity: box.xStart !== 0 ? 0 : 1
        }, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: box.trigger,
            start: "top 80%",
            end: 'top 50%',
            toggleActions: 'play pause resume reset',
            markers: true,
            scrub: true,
          }
        });
      });
    // }
  }, []);
  return (
    <>
      <Head>
          <title>Campaign | BBB英会話スクール</title>
          <meta name="description" content="BBB英会話スクール" />
          <meta property="og:title" content="Campaign | BBB英会話スクール" />
          <meta property="og:description" content="BBB英会話スクール" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://next-gsap-rho.vercel.app/" />
          <meta property="og:image" content="https://next-gsap-rho.vercel.app/img/common/ogp_campaign.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@hogehoge" />
      </Head>
      <div id="wrapper" className="overflow_none">
        <main>
          <div className="campaign">
            <div className="main">
              <div className="content">
                <div className="content_inner">
                  <h2 className="title">東京</h2>
                  <p className="text">東京は活気のある日本の首都で、ネオンに照らされた超高層ビルから歴史ある寺院まで、近代的な要素と伝統的な要素が融合している街です。荘厳な明治神宮はその鳥居と周辺の森で知られ、広大な公園である皇居外苑の中には皇居があります。都内には数多くの博物館や美術館があり、江戸東京博物館にある再現された歌舞伎劇場から東京国立博物館の古典芸術に至るまでさまざまな展示を鑑賞できます。</p>
                  <div className="demo_main js-trigger_01">
                    <div className="demo_wrap">
                      <div className="box_left js-box_01"></div>
                    </div>
                  </div>
                  <div className="demo_main js-trigger_02">
                    <div className="demo_wrap">
                      <div className="box_right js-box_02"></div>
                    </div>
                  </div>
                  <div className="demo_main js-trigger_03">
                    <div className="demo_wrap">
                      <div className="box_left js-box_03"></div>
                    </div>
                  </div>
                  <div className="demo_main js-trigger_04">
                    <div className="demo_wrap">
                      <div className="box_right js-box_04"></div>
                    </div>
                  </div>
                  <div className="demo_main js-trigger_05">
                    <div className="demo_wrap">
                      <div className="box_left js-box_05"></div>
                    </div>
                  </div>
                  <div className="demo_main js-trigger_06">
                    <div className="demo_wrap">
                      <div className="box_right js-box_06"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="content_inner">
                  <h2 className="title">大阪</h2>
                  <p className="text">大阪市は、大阪府中部に位置する市。大阪府の府庁所在地および近畿地方で最多の人口を有する市であり、政令指定都市に指定されている。市域内には世界規模の華やかな摩天楼、繁華街を据える。 西日本および近畿地方の首位都市であり、経済・文化・交通の中心都市。東京に次ぐ日本第2の都市として機能している。</p>
                </div>
              </div>
              <div className="content">
                <div className="content_inner">
                  <h2 className="title">京都</h2>
                  <p className="text">京都は本州に位置する都市です。かつては首都でもあり、数多くの歴史ある仏教寺院、庭園、皇室の宮殿や御所、神社、伝統的な木造家屋で知られています。また、コース形式の献立が特徴の伝統ある懐石や、祇園の芸者も有名です。</p>
                </div>
              </div>
            </div>
            <div className="bg">
              {/* <div className="bg_item bg_01">
                <ScrollyVideoComponent containerId="scrolly-video_01" videoSrc="/video/tokyo.mp4" />
              </div>
              <div className="bg_item bg_02">
                <ScrollyVideoComponent containerId="scrolly-video_02" videoSrc="/video/osaka.mp4" />
              </div>
              <div className="bg_item bg_03">
                <ScrollyVideoComponent containerId="scrolly-video_03" videoSrc="/video/kyoto.mp4" />
              </div> */}
              <div className="bg_item bg_01">
                <ScrollyVideoCdnComponent containerId="scrolly-video_01" videoSrc="https://d11si2sw4uu5pc.cloudfront.net/output/tokyo.m3u8" />
              </div>
              <div className="bg_item bg_02">
                <ScrollyVideoCdnComponent containerId="scrolly-video_02" videoSrc="https://d11si2sw4uu5pc.cloudfront.net/output/osaka.m3u8" />
              </div>
              <div className="bg_item bg_03">
                <ScrollyVideoCdnComponent containerId="scrolly-video_03" videoSrc="https://d11si2sw4uu5pc.cloudfront.net/output/kyoto.m3u8" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}