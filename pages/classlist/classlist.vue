<template>
  <view class="classlist">
    <view class="content">
      <navigator url="" class="item" v-for="item in 15">
        <image src="../../common/images/preview2.jpg" mode="aspectFill" />
      </navigator>
    </view>
  </view>
</template>

<script setup></script>

<style lang="scss" scoped>
.classlist {
  .content {
    padding: 30rpx;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rpx;

    .item {
      position: relative;
      width: 100%;
      height: 440rpx;
      overflow: hidden;
      border-radius: 10rpx;

      image {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 10rpx;
      }
    }
  }
}
</style>
0
