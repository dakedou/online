<template>
	<view class="main">
		
		<view class="box-top">
			<view class="title font-h1">{{networkName}}</view>
			<view class="title font-h2">{{title.name}}</view>
		</view>
		<view class="box-menu">
			<view class="menu-list" v-for="(item, index) in list">
				<view class="menu-img">c</view>
				<view class="menu-text">{{item.content}}</view>
				<view class="menu-ico">3</view>
			</view>
		</view>
	<u-button type="primary" size="large" text="大小尺寸"></u-button>

	</view>
</template>

<script>
	import {  getMenu } from '../../config/api.js';
	export default {
		data() {
			return {
			
				title:{
					name: '实时案件',
					tit:'全员上一线'
					},
					
				
				list:[
					{
						img:'',
						content:'净化管理',
						ico:''
					},
					{
						img:'',
						content:'序化管理',
						ico:''
					},
					{
						img:'',
						content:'绿化管理',
						ico:''
					},
					{
						img:'',
						content:'美化管理',
						ico:''
					}
				
				]
			}
		},
		computed: {
			networkName() {
				return this.$store.state.networkName
			}
		},
		onLoad() {
            this.getMenu()
		},
		methods: {
			async getMenu(){
				await getMenu({ custom: { auth: true }})

			}
		}
	}
</script>

<style scoped lang="scss">
	.main {
		background: linear-gradient(to bottom, #2c65a8,#367bcc, #ffffff, #ffffff,#ffffff);
		height: 100vh;
		padding: 40rpx;
		.box-top{
			height: 200rpx;
			.title{
				color: #fff;
			    
			}
			.font-h1{
				font-size: 42rpx;
				opacity: .8;
				line-height: 100rpx;
			}
			.font-h2{
				font-size: 36rpx;
				opacity: .9;
			}
		}
		.box-menu{
			.menu-list{
				box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 3px 1px;
				background-color: #fff;
				border-radius: 40rpx;
				height: 150rpx;
				margin-top: 20rpx;
				
				.menu-img{
					display: inline-block;
					width: 30%;
				}
				.menu-text{
					display: inline-block;
					width: 50%;
				}
				.menu-ico{
					display: inline-block;
					width: 20%;
				}
				
			}
			
		}
	}
</style>
