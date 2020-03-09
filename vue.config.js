module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: 'http://localhost:3000'
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  }
};
