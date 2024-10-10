import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Vue 3 + TypeScript 学习文档",
    description: "详细学习 Vue3 和 TypeScipt 的指南",
    themeConfig: {
      
        siteTitle: "前端学习",
        logo: "/assets/logo.png",
        nav:[
            {text: "首页",link: "/"},
            {text: "指南",link: "/vueuse"},
            {text: "组件",link: "/components"},
            {text: "API 参考",link: "/api/"},
            {text: "常见问题",link: "/faq/"},
        ],
    socialLinks:[
        {icon : "github",link: "https://github.com/Gwyndolin520/vue3-ts-doc"},
    ],
    sidebar: {
      "/vue/":[
        {
          text: "Vue",
          items: [
            {text:"简介",link: "/vue/"},
            {text:"创建一个Vue应用",link: "/vue/app"},
            {text:"计算属性",link: "/vue/count"},
          ]
        }
      ],
      "/vueuse/": [
        {
          text: "Vueuse",
          //   colliapsible: true,
          items: [
            { text: "简介", link: "/vueuse/" },
            { text: "Vueuse的使用", link: "/vueuse/vueuseuse" },
          ],
        },
      ],
      "/components/": [
        {
          text: "常用组件",
          //   colliapsible: true,
          items: [
            { text: "介绍", link: "/components/" },
            { text: "按钮 Button", link: "/components/button" },
            { text: "表单 Form", link: "/components/form" },
            { text: "表格 Table", link: "/components/table" },
          ],
        },
      ],
    },
    footer: {
      message: "用心学习 Vue3 和 TypeScripts！",
      copyright: "Copyright  2024 qx",
    },
  },
});
