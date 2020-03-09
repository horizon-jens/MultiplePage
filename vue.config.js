var glob = require("glob")

function getPagesInfo(){
  let pages = {}
  glob.sync('src/pages/**/main.js').map(entry => {
    let title = entry.slice(10, -8)
    pages[title] = {
      entry,
      template: `${entry.slice(0, -8)}/index.html`,
      filename: `${title}.html`,
    }
  })
  return pages
}



module.exports = {
  // pages: {
  //   pageA: {
  //     entry: 'src/pages/pageA/main.js',
  //     template: 'src/pages/pageA/index.html',
  //     filename: 'pageA.html',
  //   },
  //   pageB: {
  //     entry: 'src/pages/pageB/main.js',
  //     template: 'src/pages/pageB/index.html',
  //     filename: 'pageB.html',
  //   },
  // },
  pages: getPagesInfo(),
  devServer: {
    // open: true,
    // index: '/pageA.html',
    // proxy: 'http://localhost:8090/'
  }
};
