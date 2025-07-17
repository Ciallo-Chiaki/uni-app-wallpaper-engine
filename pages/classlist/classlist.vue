<template>
  <view class="classlist">
    <view class="loadingLayout" v-if="!classList.length && !noData">
      <uni-load-more status="loading"></uni-load-more>
    </view>

    <view class="content">
      <navigator
        :url="'/pages/preview/preview?id=' + item._id"
        class="item"
        v-for="item in classList"
        :key="item._id"
      >
        <image :src="item.smallPicurl" mode="aspectFill" />
      </navigator>
    </view>

    <view class="loadingLayout" v-if="noData || classList.length">
      <uni-load-more :status="noData ? 'noMore' : 'loading'"></uni-load-more>
    </view>

    <view class="safe-area-inset-bottom"></view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { onLoad, onReachBottom } from "@dcloudio/uni-app";
import { apiGetClassList } from "@/api/apis.js";
// 分类列表数据
const classList = ref([]);

const noData = ref(false); // 是否有数据

// 查询参数
const queryParms = {
  pageNum: 1,
  pageSize: 12,
};

onLoad((e) => {
  // 页面加载时获取分类列表
  console.log("e", e);
  let { id = null, name = null } = e;
  queryParms.classid = id;
  uni.setNavigationBarTitle({ title: name });
  getClassList(queryParms);
});

// 页面触底加载更多
onReachBottom(() => {
  if (noData.value) {
    return;
  }
  console.log("触底加载更多");
  queryParms.pageNum++;
  getClassList(queryParms);
});

// 获取分类列表
const getClassList = async (value = {}) => {
  let res = await apiGetClassList(value);
  classList.value = [...classList.value, ...res.data];
  if (res.data.length < queryParms.pageSize) {
    noData.value = true; // 没有更多数据
  } else {
    noData.value = false; // 还有数据
  }
  uni.setStorageSync("storgeClassList", classList.value);
};
</script>

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
