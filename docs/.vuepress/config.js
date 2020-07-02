// .vuepress/config.js
module.exports = {
    plugins: ['tabs'],
    description: 'Hello World!',
    head: [
        ['link', { rel: 'icon', href: '/assets/images/zippie-icon.png' }],
        ['link', { rel: 'stylesheet', href: 'assets/styles/style.css' }],
    ],
    themeConfig: {
        logo: '/assets/images/logo.png',
        sidebar: 'auto',
         nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' }
        ]
    }
}