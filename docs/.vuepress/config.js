const fs = require('fs')
const path = require('path');

module.exports = {
    title: '沧海自习室',
    description: '感谢你那么好看还来到了沧海的自习室！',
    dest: './dist',
    base: '/knowledgable/',
    devServer: {
        https: true,
        key: fs.readFileSync(path.resolve(__dirname, './localhost+1-key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, './localhost+1.pem'))
    },
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/chbcjs.png'}],
        ['link', {rel: 'stylesheet', href: '/css/style.css'}],
        ['script', {charset: 'utf-8', src: '/js/main.js'}],
        [
            'script', {},
            `var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?3f8fba7c877eb1d47402d98a0c737625";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();`
        ],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/img/chbcjs.png' }],
        ['link', { rel: 'mask-icon', href: '/img/chbcjs.png', color: '#ffffff' }],
        ['meta', { name: 'msapplication-TileImage', content: '/img/chbcjs.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    markdown: {
        lineNumbers: false,
        extendMarkdown: md => {
            md.use(function (md) {
                const fence = md.renderer.rules.fence
                md.renderer.rules.fence = (...args) => {
                    let rawCode = fence(...args);
                    // rawCode = rawCode.replace(/<span class="token comment">\/\/ try-link https:\/\/(.*)<\/span>\n/ig, '<a href="$1" class="try-button" target="_blank">Try</a>');
                    return `${rawCode}`
                }
            })
        }
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
        ],
        [
            require('./vuepress-plugin-code-copy'),
            {
                'copybuttonText': '复制',
                'copiedButtonText': '已复制！'
            }
        ],
        [
            // (options, ctx) => {
            //     return {
            //         name: 'vuepress-plugin-code-try',
            //         clientRootMixin: path.resolve(__dirname, 'vuepress-plugin-code-try/index.js')
            //     }
            // }
        ],
        [
            'copyright',
            {
                authorName: '沧海', // 选中的文字将无法被复制
                minLength: 30, // 如果长度超过  30 个字符
            },
        ],
        [
            '@vuepress-reco/vuepress-plugin-bgm-player',
            {
                audios: [
                    {
                        name: '雪下的时候',
                        artist: '乔家旭',
                        url: 'http://www.ytmp3.cn/down/76661.mp3',
                        cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
                    }
                ],
                // 是否默认缩小
                autoShrink: true,
                // 缩小时缩为哪种模式
                shrinkMode: 'float',
                // 悬浮窗样式
                floatStyle: {bottom: '10px', 'z-index': '999999'}
            }
        ],
        [
            'dynamic-title',
            {
                showIcon: 'https://images.cnblogs.com/cnblogs_com/zcl-blog/1697160/t_221118070018_chbcjs.png',
                showText: '欢迎回来~',
                hideIcon: 'https://images.cnblogs.com/cnblogs_com/zcl-blog/1697160/t_221118070018_chbcjs.png',
                hideText: '休息一下~',
                recoverTime: 2000,
            }
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                }
            }
        ]
    ]
}
