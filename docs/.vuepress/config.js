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
            { text: 'Zippie.com', link: 'https://www.zippie.com' },
            { text: 'Docs', link: '/' },
            { text: 'Support', link: 'https://www.zippie.com/contact' },
        ]
    }
}