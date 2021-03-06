import Vue from 'vue'
import MathJax from 'assets/js/MathJax'

Vue.prototype.MathJax = MathJax

Vue.config.productionTip = false

Vue.prototype.$PUBLIC_PATH = process.env.VUE_ROUTER_BASE

// 浏览器 title
Vue.prototype.$title = ' | Vue Quasar'

// 侧边栏风格
Vue.prototype.$SildeBar = 'hHh lpR fFf' // 风格二：lHh lpR fFf

// axios 中请求基地址，如果需要请在 axios/axiosConfig.js 中打开，下面是跨域代理示例
// Vue.prototype.$baseURL = process.env.NODE_ENV === 'development' ? '/api/' : '生产环境 API'
Vue.prototype.$baseURL = ''

// 请求超时时间
Vue.prototype.$timeOut = 8000

// 组件最大缓存数
Vue.prototype.$Max_KeepAlive = 10

// 侧边栏底部文字
Vue.prototype.$buttonList = [
  { text: '北京航空航天大学', URL: 'http://www.buaa.edu.cn' },
  { text: '网络空间安全学院', URL: 'http://cst.buaa.edu.cn/' },
  { text: '开发者', URL: 'http://nanasuki.github.io/' },
  { text: '关于实验室', URL: '/cimo' }
]
