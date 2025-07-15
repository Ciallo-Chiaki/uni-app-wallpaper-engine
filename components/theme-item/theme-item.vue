<template>
  <view class="themeItem">
    <navigator
      url="../../pages/classlist/classlist"
      open-type="navigate"
      hover-class="navigator-hover"
      class="box"
      v-if="!isMore"
    >
      <image
        class="pic"
        src="../../common/images/classify1.jpg"
        mode="aspectFill"
      />
      <view class="mask">123</view>
      <view class="tab">3天前更新</view>
    </navigator>

    <navigator
      url="/pages/classify/classify"
      open-type="reLaunch"
      hover-class="navigator-hover"
      class="box more"
      v-if="isMore"
    >
      <image class="pic" src="../../common/images/more.jpg" mode="aspectFill" />
      <view class="mask">
        <uni-icons type="more-filled" color="#fff" size="34" />
        <view class="text">更多</view>
      </view>
    </navigator>
  </view>
</template>

<script setup>
defineProps({
  // 可以添加需要的props
  isMore: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.themeItem {
  .box {
    height: 340rpx;
    border-radius: 10rpx;
    overflow: hidden;
    position: relative;
    .pic {
      width: 100%;
      height: 100%;
    }
    .mask {
      width: 100%;
      height: 70rpx;
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgb(255, 255, 255, 0.1);
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(10rpx);
      font-weight: 600;
      font-size: 30rpx;
    }
    .tab {
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(250, 129, 90, 0.7);
      backdrop-filter: blur(10rpx);
      color: #fff;
      padding: 6rpx 14rpx;
      font-size: 22rpx;
      border-radius: 0 0 20rpx 0;
      transform: scale(0.8);
      transform-origin: left top;
    }
  }
  .box.more {
    .mask {
      height: 100%;
      flex-direction: column;
    }
    .text {
      font-size: 28rpx;
    }
  }
}
</style>
