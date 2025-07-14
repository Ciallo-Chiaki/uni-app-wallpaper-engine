<template>
  <view class="common-title">
    <view class="name">
      <slot name="name"></slot>
    </view>
    <view class="custom">
      <slot name="custom"></slot>
    </view>
  </view>
</template>

<script setup></script>

<style lang="scss" scoped>
.common-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30rpx;
  .name {
    font-size: 40rpx;
    color: #333;
  }
  .custom {
    font-size: 28rpx;
    color: #999;
  }
}
</style>
