<template>
  <view class="layout">
    <view class="navbar">
      <view
        class="statusBar"
        :style="{ height: getStatusBarHeight() + 'px' }"
      ></view>
      <view
        class="titleBar"
        :style="{
          height: getTitleBarHeight() + 'px',
          marginLeft: getLeftIconLeft() + 'px',
        }"
      >
        <view class="title">{{ title }}</view>
        <view
          class="search"
          @click="
            () => {
              uni.navigateTo({ url: '/pages/search/search' });
            }
          "
        >
          <uni-icons class="icon" type="search" color="#888" size="18" />
          <text class="text">搜索</text>
        </view>
      </view>
    </view>

    <view class="fill" :style="{ height: getNavBarHeight() + 'px' }"> </view>
  </view>
</template>

<script setup>
// 引入ref
import { ref } from "vue";
import {
  getStatusBarHeight,
  getTitleBarHeight,
  getNavBarHeight,
  getLeftIconLeft,
} from "@/utils/system.js";

defineProps({
  title: {
    type: String,
    default: "标题",
  },
});
</script>

<style lang="scss" scoped>
.layout {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background: linear-gradient(to bottom, transparent 0%, #fff 500rpx),
      linear-gradient(to right, #beecd8 20%, #f4e2d8 100%);
    .statusBar {
      //   border: 1px solid red;
    }
    .titleBar {
      display: flex;
      align-items: center;
      padding: 0 30rpx;
      //   border: 1px solid green;
      //   height: 100rpx;
      .title {
        font-size: 40rpx;
        font-weight: 700;
        color: $text-font-color-1;
      }
      .search {
        width: 220rpx;
        height: 50rpx;
        border-radius: 60rpx;
        background: rgba(255, 255, 255, 0.4);
        // border: 1px solid red;
        margin-left: 30rpx;
        color: 999;
        font-size: 28rpx;
        display: flex;
        align-items: center;
        .icon {
          margin-left: 5rpx;
        }
        .text {
          padding-left: 10rpx;
        }
      }
    }
  }
}
</style>
