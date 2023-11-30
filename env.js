let BASE_URL;
 
if (process.env.NODE_ENV === 'development') {
	// 开发环境
	BASE_URL = 'http://xingzhengzhifa.shujuwuliankeji.com/prod-api';
} else {
	// 生产环境
	BASE_URL = '';
}
 
export default BASE_URL;