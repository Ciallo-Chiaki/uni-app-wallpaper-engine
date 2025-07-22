<template>
  <view class="classLayout pageBg">
    <custom-nav-bar title="分类"></custom-nav-bar>
    <view class="classify">
      <theme-item
        v-for="item in classifyList"
        :key="item._id"
        :item="item"
      ></theme-item>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { apiGetClassify } from "@/api/apis.js";
import { onShareAppMessage, onShareTimeline } from "@dcloudio/uni-app";
const classifyList = ref([]);

// 获取分类列表
const getClassify = async () => {
  let res = await apiGetClassify({
    pageSize: 15,
  });
  classifyList.value = res.data;
};

// 分享给好友
onShareAppMessage((e) => {
  console.log(e);
  return {
    title: "别笑，你也过不了第二关",
    path: "/pages/index/index",
  };
});

// 分享到朋友圈
onShareTimeline(() => {
  return {
    title: "别笑，你也过不了第二关",
  };
});

getClassify();
</script>

<style lang="scss" scoped>
.classify {
  padding: 30rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15rpx;
}
</style>
