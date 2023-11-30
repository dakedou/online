// 接口共用地址
import BASE_URL from '@/env.js'
var request = function(app) {
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		config.baseURL = BASE_URL;
		return config
	})
 
	// 请求拦截
	uni.$u.http.interceptors.request.use(config => {
		config.data = config.data || {}
		// 接口名为login则不携带token
		if(config.url != 'login'){
			config.header['Authorization'] = uni.getStorageSync('token') || ''
		}
		return config
 
	}, config => {
		// 返回异常承诺对象
		return Promise.reject(config)
	})
 
	// 响应拦截
	uni.$u.http.interceptors.response.use(response => {
		// uni.hideLoading();
		let data
		switch (response.data.code) {
			case 401 || 402 || 403:
				uni.showModal({
					title: '提示',
					content: response.data.msg,
					showCancel: false, // 隐藏取消按钮
					success: (res) => {
						if (res.confirm) {
							uni.redirectTo({
								url: '/pages/login'
							})
						}
					}
				})
				break;
			default:
				data = response.data.data;
				break;
		}
		return data;
	}, responseError => {
		// 返回异常承诺对象
		return Promise.reject(responseError)
	})
 
}
 
// 导出
module.exports = request;