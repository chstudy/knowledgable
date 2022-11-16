module.exports = {
    title: '沧海自习室',
    description: '感谢你那么好看还来到了沧海的自习室！',
    dest: './dist',
    base: '/knowledgable/',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/chbcjs.png'}],
        ['link', {rel: 'stylesheet', href: '/css/style.css'}],
        ['script', {charset: 'utf-8', src: '/js/main.js'}],
        [
            'script', `
                var _hmt = _hmt || [];
                (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?3f8fba7c877eb1d47402d98a0c737625";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
            </script>`
        ]
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
        lastUpdated: '上次更新',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            }
        ]
    ]
}
