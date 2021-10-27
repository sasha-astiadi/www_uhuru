// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Uhuru',
    siteUrl: 'https://uhuru.io',
    pathPrefix: "threefold",
    plugins: [

        // Local models

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BrandPanel',
                path: './content/page/**/brandPanel/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BrandPanel2',
                path: './content/page/**/brandPanel2/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BrandPanel3',
                path: './content/page/**/brandPanel3/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BrandPanel4',
                path: './content/page/**/brandPanel4/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'ProductivityMain',
                path: './content/page/**/productivity/main/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Productivity',
                path: './content/page/**/productivity/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'SuiteMain',
                path: './content/page/**/suite/main/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Suites',
                path: './content/page/**/suite/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BenefitsMain',
                path: './content/page/**/benefits/main/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Benefits',
                path: './content/page/**/benefits/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'TimelineMain',
                path: './content/page/**/timeline/main/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Timeline',
                path: './content/page/**/timeline/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Contact',
                path: './content/page/**/contact/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'MarkdownPage',
                path: './content/page/*/*.md',
                refs: {
                    brandPanel: 'BrandPanel',
                    brandPanel2: 'BrandPanel2',
                    brandPanel3: 'BrandPanel3',
                    brandPanel4: 'BrandPanel4',
                    productivityMain: 'ProductivityMain',
                    productivity: 'Productivity',
                    suiteMain: 'SuiteMain',
                    suites: 'Suites',
                    benefitsMain: 'BenefitsMain',
                    benefits: 'Benefits',
                    timelineMain: 'TimelineMain',
                    timeline: 'Timeline',
                    contact: 'Contact'
                }
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Navigation',
                path: './content/navigation/navigation.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Footer',
                path: './content/footer/footer.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Person',
                path: './content/person/**/*.md',
                refs: {
                    tags: {
                        typeName: 'PersonTag',
                        create: true
                    },
                    memberships: {
                        typeName: 'Membership',
                        create: true
                    },
                    projects: 'Project'
                },
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Blog',
                path: './content/blog/**/*.md',
                templates: {
                    BlogPost: '/blog/post/:id'
                },
                refs: {
                    authors: 'Person',
                    tags: {
                        typeName: 'BlogTag',
                        create: true
                    },

                    category: {
                        typeName: 'BlogCategory',
                        create: true
                    }

                }
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'News',
                path: './content/news/**/*.md',
                refs: {
                    authors: 'Person',
                    tags: {
                        typeName: 'NewsTag',
                        create: true
                    },

                    category: {
                        typeName: 'NewsCategory',
                        create: true
                    }
                }
            }
        },


        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Project',
                path: './content/project/**/*.md',
                refs: {
                    authors: 'Person',
                    members: 'Person',

                    tags: {
                        typeName: 'ProjectTag',
                        create: true
                    }
                }
            }
        },

        // Tailwind
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: './tailwind.config.js',
                purgeConfig: {
                    whitelist: ['svg-inline--fa', 'table', 'table-striped', 'table-bordered', 'table-hover', 'table-sm'],
                    whitelistPatterns: [/fa-$/, /blockquote$/, /code$/, /pre$/, /table$/, /table-$/]
                },
                presetEnvConfig: {},
                shouldPurge: false,
                shouldImport: true,
                shouldTimeTravel: true,
                shouldPurgeUnusedKeyframes: true,
            }
        },
        // {
        //     use: 'gridsome-plugin-matomo',
        //     options: {
        //         host: 'https://analytics.threefold.io',
        //         siteId: 5
        //     }
        // }
    ],
    chainWebpack: config => {
        config.resolve.alias.set('@images', '@/assets/images')
    },
    templates: {
        MarkdownPage: [{
            path: '/:id',
            component: '~/templates/MarkdownPage.vue',

        }],

        BlogTag: [{
            path: '/blog/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        NewsTag: [{
            path: '/news/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        ProjectTag: [{
            path: '/partners/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        Membership: [{
            path: '/people/memberships/:id',
            component: '~/templates/Membership.vue'
        }],

        Blog: [{
            path: '/blog/post/:id',
            component: '~/templates/BlogPost.vue'
        }],

        News: [{
            path: '/news/post/:id',
            component: '~/templates/NewsPost.vue'
        }],

        Person: [{
            path: '/people/:id',
            component: '~/templates/Person.vue'
        }],
        PersonTag: [{
            path: '/people/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        Project: [{
            path: '/partners/:id',
            component: '~/templates/Project.vue'
        }],
    },

    transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',

            pathPrefix: "threefold",
            plugins: [
                ['gridsome-plugin-remark-prismjs-all', {
                    highlightClassName: "gridsome-highlight",
                    codeTitleClassName: "gridsome-code-title",
                    classPrefix: 'language-',
                    aliases: {},
                    noInlineHighlight: false,
                    showLineNumbers: false, //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                    languageExtensions: [],
                    prompt: { //  `require("prismjs/plugins/command-line/prism-command-line.css");`
                        user: `root`,
                        host: `localhost`,
                        global: false,
                    }
                },
                    // '@noxify/gridsome-remark-table-align', ['@noxify/gridsome-remark-classes', {
                    //     'table': 'table table-striped',
                    //     'tableCell[align=center]': 'text-center',
                    //     'tableCell[align=right]': 'text-right'
                    // }
                ]
            ]
        }
    }
}