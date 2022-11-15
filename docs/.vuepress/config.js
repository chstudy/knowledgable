module.exports = {
    title: '沧海自习室',
    description: '感谢你那么好看还来到了沧海的自习室！',
    dest: './dist',
    base: '/knowledgable/',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/chbcjs.png'}],
        ['link', {rel: 'stylesheet', href: '/css/style.css'}],
        ['script', {charset: 'utf-8', src: '/js/main.js'}]
    ],
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    theme: 'reco',
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        subSidebar: 'auto',
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
