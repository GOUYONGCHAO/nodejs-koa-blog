import fetch from './fetch';

export default {
  // 登录
  login(params) {
    return fetch.post('/admin/login', params)
  },

  // 验证管理员token
  auth(params) {
    return fetch.get('/admin/auth', params)
  }
}
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
    config => {
      if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = localStorage.getItem('Authorization');
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    });