module.exports = {
  pages: {
    pageA: {
      entry: 'src/pages/pageA/main.js',
      template: 'public/index.html',
      filename: 'pageA.html',
      title: 'PageAAA',
    },
    pageB: {
      entry: 'src/pages/pageB/main.js',
      template: 'public/index.html',
      filename: 'pageB.html',
      title: 'BBB',
    },
  },
  devServer: {
    // open: true,
    // index: '/pageA.html',
    proxy: 'http://10.0.38.93:8602/'
  }
};
