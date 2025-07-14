<template>
  <view class="homeLayout pageBg">
    <view class="banner">
      <swiper
        indicator-dots
        indicator-color="rgba(255,255,255,0.5)"
        indicator-active-color="#fff"
        autoplay
        circular
      >
        <swiper-item v-for="item in 3">
          <image src="../../common/images/banner1.jpg" mode="scaleToFill" />
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
          <swiper-item v-for="item in 4"
            >Lorem ipsum dolor sit amet consectetur adipisicing
            elit.</swiper-item
          >
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
          <view class="box" v-for="item in 10">
            <image
              class="pic"
              src="../../common/images/preview_small.webp"
              mode="aspectFill"
            />
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
        <theme-item v-for="item in 8"></theme-item>
        <theme-item :isMore="true"></theme-item>
      </view>
    </view>
  </view>
</template>

<script setup></script>

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
