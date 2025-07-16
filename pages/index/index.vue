<template>
  <view class="homeLayout pageBg">
    <custom-nav-bar title="推荐"></custom-nav-bar>

    <view class="banner">
      <swiper
        indicator-dots
        indicator-color="rgba(255,255,255,0.5)"
        indicator-active-color="#fff"
        autoplay
        circular
      >
        <swiper-item v-for="item in bannerList" :key="item._id">
          <image :src="item.picurl" mode="scaleToFill" />
        </swiper-item>
      </swiper>
    </view>
    <!-- 公告列表 -->
    <view class="notice">
      <view class="left">
        <uni-icons type="sound-filled" color="#28b389" size="30" />
        <text class="text"> 公告 </text>
      </view>
      <view class="center">
        <swiper vertical autoplay interval="1500" duration="300" circular>
          <swiper-item v-for="item in noticeList" :key="item._id">
            <navigator url="/pages/notice/notice">
              {{ item.title }}
            </navigator>
          </swiper-item>
        </swiper>
      </view>
      <view class="right">
        <uni-icons type="right" color="#333" size="16" />
      </view>
    </view>

    <!-- 每日推荐 -->
    <view class="select">
      <common-title>
        <template #name>每日推荐</template>
        <template #custom>
          <view class="date">
            <uni-icons type="calendar" color="#28b389" size="18" />
            <view class="text">
              <uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
            </view>
          </view>
        </template>
      </common-title>
      <view class="content">
        <scroll-view scroll-x="true">
          <view
            class="box"
            v-for="item in randomList"
            :key="item._id"
            @click="goPreview"
          >
            <image class="pic" :src="item.smallPicurl" mode="aspectFill" />
          </view>
        </scroll-view>
      </view>
    </view>
    <!-- 专题精选 -->
    <view class="theme">
      <common-title>
        <template #name>专题精选</template>
        <template #custom>
          <navigator
            url="/pages/"
            open-type="navigate"
            hover-class="navigator-hover"
            class="more"
          >
            More+
          </navigator>
        </template>
      </common-title>
      <view class="content">
        <theme-item
          v-for="item in classifyList"
          :key="item._id"
          :item="item"
        ></theme-item>
        <theme-item :isMore="true"></theme-item>
      </view>
    </view>
  </view>
</template>

<script setup>
// 本项目中所有代码推测和交流请使用中文
import { ref } from "vue";
import {
  apiGetBanner,
  apiGetDayRandom,
  apiGetNotice,
  apiGetClassify,
} from "@/api/apis.js";

const bannerList = ref([]);
const randomList = ref([]);
const noticeList = ref([]);
const classifyList = ref([]);

// 获取轮播图
const getBanner = async () => {
  let res = await apiGetBanner();
  bannerList.value = res.data;
};

// 获取每日推荐
const getDayRandom = async () => {
  let res = await apiGetDayRandom();
  randomList.value = res.data;
};

// 获取公告列表
const getNotice = async () => {
  let res = await apiGetNotice({ select: true });
  noticeList.value = res.data;
};

// 获取分类列表
const getClassify = async () => {
  let res = await apiGetClassify({
    select: true,
  });
  classifyList.value = res.data;
};

// 跳转到预览页面
const goPreview = () => {
  uni.navigateTo({
    url: "/pages/preview/preview",
  });
};

getBanner();
getDayRandom();
getNotice();
getClassify();
</script>

<style lang="scss" scoped>
.homeLayout {
  .banner {
    width: 750rpx;
    padding: 30rpx 0;
    swiper {
      width: 750rpx;
      height: 340rpx;
      &-item {
        width: 100%;
        height: 100%;
        padding: 0 30rpx;
        image {
          width: 100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
    }
  }
  .notice {
    width: 690rpx;
    height: 80rpx;
    line-height: 80rpx;
    background-color: #f9f9f9;
    margin: 0 auto;
    border-radius: 80rpx;
    display: flex;
    .left {
      width: 140rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        margin-left: 10rpx;
        font-size: 28rpx;
        color: #28b389;
        font-weight: 600;
      }
    }
    .center {
      flex: 1;
      swiper {
        height: 100%;
        swiper-item {
          height: 100%;
          font-size: 30rpx;
          color: #666;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .right {
      width: 70rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .select {
    padding-top: 50rpx;
    .date {
      color: #28b389;
      display: flex;
      align-items: center;
      .text {
        margin-left: 5rpx;
      }
    }
    .content {
      width: 720rpx;
      margin-left: 30rpx;
      margin-top: 30rpx;
      scroll-view {
        white-space: nowrap;
        .box {
          width: 200rpx;
          height: 430rpx;
          display: inline-block;
          margin-right: 15rpx;
          border-radius: 10rpx;
          overflow: hidden;
          .pic {
            width: 100%;
            height: 100%;
            border-radius: 10rpx;
          }
        }
        .box:last-child {
          margin-right: 30rpx;
        }
      }
    }
  }
  .theme {
    padding: 50rpx 0;
    .more {
      color: #28b389;
      font-size: 28rpx;
    }
    .content {
      margin-top: 30rpx;
      padding: 0 30rpx;
      display: grid;
      gap: 15rpx;
      grid-template-columns: repeat(3, 1fr);
      //   grid-auto-rows: 200rpx;
      theme-item {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
