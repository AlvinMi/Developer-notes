module.exports = {
  // 这个 base 如果是部署在 github pages 需要设置，官方文档已经说明了
  base: '/Developer-notes/',
  // 标题名字
  title: "YUHUI'S Dev-Notes",
  // 描述
  description: '日常开发技术总结笔记，技术答疑！',
  repo: 'AlvinMi/Developer-notes',
  repoLabel: '查看源码',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
    }],
    ['link', {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
    }],
  ],
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2, 3, 4] },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  },
  themeConfig: {
    // ------ 导航栏 ----- //
    // 禁用导航栏
    // navbar: false,
    
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Google',
        link: 'https://google.com'
      },

      // 前端
      {
        text: '前端',
        link: '/frontend/index'
        // items: [{
        //     text: '基础',
        //     link: './frontend/index'
        //   },
        //   {
        //     text: 'Vue',
        //     link: './frontend/Vue/index'
        //   },
        //   {
        //     text: 'React',
        //     link: './frontend/React/index'
        //   },
        //   {
        //     text: 'Angular',
        //     link: './frontend/Angular/index'
        //   }
        // ]
      },
      // 后端
      {
        text: '后端',
        link: '/backend/index'
      },
      // 嵌入式
      {
        text: '嵌入式',
        link: '/embedded/index'
        // items: [{
        //     text: '单片机',
        //     link: './embedded/MCU'
        //   },
        //   {
        //     text: '树莓派',
        //     link: './embedded/RaspberryPi'
        //   },
        //   {
        //     text: 'ROS',
        //     link: './embedded/ROS'
        //   }
        // ]
      },
      {
        text: '计算机基础',
        link: '/computerbasic/index'
      }
    ],

    // ----- 侧边栏 ----- //
    // 自动生成侧边栏
    // sidebar: 'auto'


    // 显示所有页面的标题链接
    // displayAllHeaders: true, // 默认值：false

    // sidebar: [
    //   '/',
    //   '/page-a',
    //   ['/page-b', 'Explicit link text'],
    //   {
    //     title: '前端',
    //     // 可折叠
    //     collapsable: false,
    //     children: [
    //       '/'
    //     ]
    //   }
    // ]

    sidebar: [
      // 关于本站
      '/about/',
      // 侧栏-前端
      {
        title: '前端',
        // 是否折可叠
        // collapsable: false,
        children: [
          '/frontend/',
          '/frontend/React/',
          '/frontend/React/ReactNative',
          '/frontend/Vue/',
          '/frontend/Angular/',
          '/frontend/module-bundler/',
          '/frontend/MiniProgram/',
          '/frontend/nodejs/',
          '/frontend/Performance/',
          '/frontend/mobileweb/',
          '/frontend/Network/',
          '/frontend/WebGL/Canvas',
          '/frontend/WebGL/',
          '/frontend/WebGL/GLSL',
          '/frontend/TypeScript/',
          '/frontend/Regular/'
        ]
      },
      {
        title: '后端',
        children: [
          '/backend/',
          // Python
          '/backend/Python/',
          '/backend/Python/Django',
          '/backend/Python/flask',
          // Java

          // C&C++
          // OpenGL 学习
          '/backend/C-CPP/LearnOpenGL'

        ]
      },
      {
        title: '嵌入式',
        children: [
          '/embedded/',
          '/embedded/MCU',
          '/embedded/RaspberryPi',
          '/embedded/ai-iot',
          '/embedded/ROS'
        ]
      },
      {
        title: '计算机基础',
        children: [
          '/computerbasic/',
          '/computerbasic/linear_algebra',
          '/computerbasic/Advanced_Mathematics',
          '/computerbasic/tools/'
        ]
      }
    ]
  }
}