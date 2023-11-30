<template>
	<view class="main">
		<view class="img-box" scroll-y="true">
			<cover-image class="img" src="../../static/logo.png"></cover-image>
		</view>
		<view class="text-box" scroll-y="true">
			<text>{{text}}</text>
		</view>
		<view class="button-box">
			<button size="default" type="default" 
			class="btn"
				hover-class="btn-hover">微信一键登录</button>
		</view>
		<view class="remark">
			使用范围说明:小程序仅限烟台市黄渤海新区综合执法局“全员上一线”用户使用，账号（手机号码）已通过后台添加，请使用后台登记的手机号码绑定的微信登录。
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:'全员上一线'
			}
		},
		methods: {
			
		},
		mounted() {
			//隐藏tabBar
			 // uni.hideTabBar();
		}	
	}
</script>

<style lang="scss" scoped>
	.main{
		text-align: center;
		
		.img-box{
			width: 200rpx;
			margin:100rpx auto 0;
			
			.img{
				// width: 200rpx;
			}
			
		}
		.text-box{
			line-height: 80px;
			height: 80px;
		}
		.button-box{
			margin: 100rpx auto 50rpx;
			width: 80%;
			.btn{
				color:#ffffff;
				background:#033886;
				// borderColor:#1AAD19;
				font-size: 32rpx;
				border-radius: 50rpx;
				
			}
			.btn-hover{
				opacity: .8;
			}
		}
		.remark{
			margin: auto;
			width: 80%;
			color:#999;
			font-size: 26rpx;
			text-align: left;
		}
	}
</style>
