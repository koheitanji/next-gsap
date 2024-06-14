const news_data = Array.from({ length: 100 }, (v, k) => ({
  id: (k + 1).toString(),
  ph: `/img/news/thum_${(k % 3) + 1}.png`,
  title: `News Article ${k + 1}`,
  content: `This is the content of the news article ${k + 1}.`
}));

export default news_data;