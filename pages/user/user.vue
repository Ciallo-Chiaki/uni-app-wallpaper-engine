<template>
  <view class="userLayout pageBg">
    <view :style="{ height: getNavBarHeight() + 'px' }"></view>
    <view class="userInfo">
      <view class="avatar">
        <image src="../../static/logo.png" mode="aspectFill" />
      </view>
      <view class="ip">{{ userInfo.IP }}</view>
      <view class="address"
        >来自于：{{
          userInfo.address?.city ||
          userInfo.address?.province ||
          userInfo.address?.country
        }}</view
      >
    </view>

    <view class="section">
      <view class="list">
        <!-- 跳转classlist -->
        <view
          class="row"
          @click="() => uni.navigateTo({ url: '/pages/classlist/classlist' })"
        >
          <view class="left">
            <uni-icons type="download-filled" color="#28b389" size="20" />
            <view class="text">我的下载</view>
          </view>
          <view class="right">
            <view class="count">{{ userInfo.downloadSize }}</view>
            <uni-icons type="right" color="#aaa" size="16" />
          </view>
        </view>

        <view
          class="row"
          @click="() => uni.navigateTo({ url: '/pages/classlist/classlist' })"
        >
          <view class="left">
            <uni-icons type="star-filled" color="#28b389" size="20" />
            <view class="text">我的评分</view>
          </view>
          <view class="right">
            <view class="count">{{ userInfo.scoreSize }}</view>
            <uni-icons type="right" color="#aaa" size="16" />
          </view>
        </view>
        <view class="row">
          <view class="left">
            <uni-icons type="chatboxes-filled" color="#28b389" size="20" />
            <view class="text">联系客服</view>
          </view>
          <view class="right">
            <uni-icons type="right" color="#aaa" size="16" />
          </view>
          <!-- #ifdef MP -->
          <button open-type="contact">联系客服</button>
          <!-- #endif -->
          <!-- #ifndef MP -->
          <button @click="clickContact">拨打电话</button>
          <!-- #endif -->
        </view>
      </view>
    </view>
    <view class="section">
      <view class="list">
        <view class="row">
          <view class="left">
            <uni-icons type="notification-filled" color="#28b389" size="20" />
            <view class="text">订阅更新</view>
          </view>
          <view class="right">
            <uni-icons type="right" color="#aaa" size="16" />
          </view>
        </view>
        <view class="row">
          <view class="left">
            <uni-icons type="flag-filled" color="#28b389" size="20" />
            <view class="text">常见问题</view>
          </view>
          <view class="right">
            <uni-icons type="right" color="#aaa" size="16" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { getNavBarHeight } from "@/utils/system.js";
import { apiGetUserInfo } from "@/api/apis.js";
import { ref } from "vue";

const userInfo = ref({});

const clickContact = () => {
  // 这里可以添加拨打电话的逻辑
  uni.makePhoneCall({
    phoneNumber: "123456789", // 替换为实际的电话号码
  });
};

const getUserInfo = async () => {
  apiGetUserInfo().then((res) => {
    userInfo.value = res.data;
    console.log("获取用户信息", userInfo.value);
  });
};

getUserInfo();
</script>

<style lang="scss" scoped>
.userLayout {
  padding: 30rpx;
  .userInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50rpx 0;
    .avatar {
      width: 160rpx;
      height: 160rpx;
      border-radius: 50%;
      overflow: hidden;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .ip {
      padding: 20rpx 0 5rpx;
      font-size: 44rpx;
      color: #333;
    }
    .address {
      margin-left: 10rpx;
      font-size: 28rpx;
      color: #aaa;
    }
  }
  .section {
    width: 690rpx;
    margin: 50rpx auto;
    border: 1px solid #eee;
    border-radius: 10rpx;
    box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
    .list {
      .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30rpx 20rpx;
        border-bottom: 1px solid #eee;
        position: relative;
        background-color: #fff;
        &:last-child {
          border-bottom: none;
        }
        .left {
          display: flex;
          align-items: center;
          .text {
            margin-left: 10rpx;
            font-size: 30rpx;
            color: $brand-theme-color;
          }
        }
        .right {
          display: flex;
          align-items: center;
          .count {
            margin-right: 10rpx;
            font-size: 28rpx;
            color: #999;
          }
        }
        button {
          position: absolute;
          top: 0;
          left: 0;
          width: 690rpx;
          height: 100%;
          background: transparent;
          border: none;
          z-index: 1;
          opacity: 0;
        }
      }
    }
  }
}
</style>
