<template>
  <view class="preview">
    <swiper circular :current="currentIndex" @change="swiperChange">
      <swiper-item v-for="(item, index) in classList" :key="item._id">
        <image
          v-if="readImgs.includes(index)"
          @click="maskChange"
          :src="item.picurl"
          mode="aspectFill"
        />
      </swiper-item>
    </swiper>
    {{ readImgs }}

    <view class="mask" v-if="maskState">
      <view
        class="goBack"
        @click="goBack"
        :style="{ top: getStatusBarHeight() + 'px' }"
      >
        <uni-icons
          type="back"
          color="#fff"
          size="30"
          @click="maskChange"
        ></uni-icons>
      </view>
      <view class="count">{{ currentIndex + 1 }} / {{ classList.length }}</view>
      <view class="time">
        <uni-dateformat :date="Date.now()" format="hh:mm" />
      </view>
      <view class="date">
        <uni-dateformat :date="Date.now()" format="MM月dd日" />
      </view>
      <view class="footer">
        <view class="box" @click="clickInfo">
          <uni-icons type="info" color="#000" size="24" />
          <view class="text">信息</view>
        </view>
        <view class="box" @click="clickScore">
          <uni-icons type="star" color="#000" size="24" />
          <view class="text">{{ currentInfo.score }}分</view>
        </view>
        <view class="box" @click="clickDownload">
          <uni-icons type="download" color="#000" size="24" />
          <view class="text">下载</view>
        </view>
      </view>
    </view>

    <uni-popup ref="infoPopup" type="bottom">
      <view class="infoPopup">
        <view class="popHeader">
          <view></view>
          <view class="title">壁纸信息</view>
          <view class="close" @click="clickInfoClose">
            <uni-icons type="closeempty" color="#999" size="18" />
          </view>
        </view>
        <scroll-view scroll-y>
          <view class="content">
            <view class="row">
              <view class="label">壁纸ID：</view>
              <text selectable class="value">{{ currentInfo._id }}</text>
            </view>

            <!-- <view class="row">
              <view class="label">分类：</view>
              <text class="value class">{{ currentInfo.category }}</text>
            </view> -->

            <view class="row">
              <view class="label">发布者：</view>
              <text class="value">{{ currentInfo.nickname }}</text>
            </view>

            <view class="row">
              <view class="label">评分：</view>
              <view class="value roteBox">
                <uni-rate
                  readonly
                  touchable
                  :value="currentInfo.score"
                  size="16"
                />
                <text class="score">{{ currentInfo.score }}分</text>
              </view>
            </view>

            <view class="row">
              <view class="label">摘要：</view>
              <text selectable class="value">
                {{ currentInfo.description }}
              </text>
            </view>

            <view class="row">
              <view class="label">标签：</view>
              <view class="value tabs">
                <view
                  class="tab"
                  v-for="item in currentInfo.tabs"
                  :key="item"
                  >{{ item }}</view
                >
              </view>
            </view>

            <view class="copyright">
              版权信息 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit ab dolorum, aliquid eos repudiandae laboriosam totam eligendi!
              Aut autem aperiam error harum quo cumque iure accusamus? Nisi et
              illo eum.
            </view>
          </view>
        </scroll-view>
      </view>
    </uni-popup>

    <uni-popup ref="scorePopup" :is-mask-click="false" type="center">
      <view class="scorePopup">
        <view class="popHeader">
          <view></view>
          <view class="title">{{
            isScore ? "已经评过分啦 ~" : "壁纸评分"
          }}</view>
          <view class="close" @click="clickScoreClose">
            <uni-icons type="closeempty" color="#999" size="18" />
          </view>
        </view>

        <view class="content">
          <uni-rate
            v-model="userScore"
            allowHalf
            :disabled="isScore"
            disabled-color="#FFCA3E"
          />
          <text class="scoreText">{{ userScore }}分</text>
        </view>

        <view class="footer">
          <button
            @click="submitScore"
            :disabled="!userScore || isScore"
            type="default"
            size="mini"
            plain
          >
            确认评分
          </button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { getStatusBarHeight } from "@/utils/system";
import { onLoad } from "@dcloudio/uni-app";
import { apiGetSetupScore } from "@/api/apis";

const maskState = ref(true);
const infoPopup = ref(null);
const scorePopup = ref(null);
const userScore = ref(0);
const classList = ref([]);
const currentId = ref(null);
const currentIndex = ref(0);
const readImgs = ref([]);
const currentInfo = ref(null);
const isScore = ref(false);

const strorgClassList = uni.getStorageSync("storgeClassList") || [];
classList.value = strorgClassList.map((item) => {
  return {
    ...item,
    picurl: item.smallPicurl.replace("_small.webp", ".jpg"),
  };
});
console.log("获取缓存的分类列表", strorgClassList);
console.log("处理后的分类列表", classList.value);

onLoad((e) => {
  // 页面加载时获取分类列表
  // console.log("e", e.id);
  currentId.value = e.id || null;
  currentIndex.value = classList.value.findIndex((item) => {
    return item._id === currentId.value;
  });
  currentInfo.value = classList.value[currentIndex.value];
  readImgsChange();
});

const swiperChange = (e) => {
  currentIndex.value = e.detail.current;
  currentInfo.value = classList.value[currentIndex.value];
  console.log(e);
  readImgsChange();
};

// 点击info弹窗
const clickInfo = () => {
  infoPopup.value.open();
};

// 点击关闭信息弹窗
const clickInfoClose = () => {
  infoPopup.value.close();
};

// 点击评分弹窗
const clickScore = () => {
  if (currentInfo.value.userScore) {
    isScore.value = true;
    userScore.value = currentInfo.value.userScore;
  }
  scorePopup.value.open();
};
// 点击关闭评分弹窗
const clickScoreClose = () => {
  scorePopup.value.close();
  userScore.value = 0; // 重置评分
  isScore.value = false; // 重置评分状态
};

// 提交评分
const submitScore = async () => {
  uni.showLoading({
    title: "加载中...",
  });
  console.log(`用户评分: ${userScore.value}`);
  let { classid, _id: wallId } = currentInfo.value;
  console.log(currentInfo.value);
  let res = await apiGetSetupScore({
    classid,
    wallId,
    userScore: userScore.value,
  });
  uni.hideLoading();
  if (res.errCode === 0) {
    uni.showToast({
      title: "评分成功",
      icon: "none",
    });
    classList.value[currentIndex.value].userScore = userScore.value;
    uni.setStorageSync("storgeClassList", classList.value);
    clickScoreClose();
  }

  console.log(res);
};

// 遮罩层状态
const maskChange = () => {
  maskState.value = !maskState.value;
};

// 返回上一页
const goBack = () => {
  uni.navigateBack();
};

// 处理图片索引变化，确保前后各一张图片,
function readImgsChange() {
  readImgs.value.push(
    currentIndex.value <= 0
      ? classList.value.length - 1
      : currentIndex.value - 1,
    currentIndex.value,
    currentIndex.value + 1 >= classList.value.length
      ? 0
      : currentIndex.value + 1,
  );
  readImgs.value = [...new Set(readImgs.value)]; // 去重
}

// 点击下载
const clickDownload = () => {
  // #ifdef H5
  uni.showModal({
    content: "请长按保存壁纸",
    showCancel: false,
  });
  // #endif

  // #ifndef H5
  uni.getImageInfo({
    src: currentInfo.value.picurl,
    success: (res) => {
      console.log(res);

      uni.saveImageToPhotosAlbum({
        filePath: res.path,
        success: (result) => {
          console.log(result);
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
  });

  // #endif
};
</script>

<style lang="scss" scoped>
.preview {
  width: 100%;
  height: 100vh;
  position: relative;
  swiper {
    width: 100%;
    height: 100%;

    image {
      width: 100%;
      height: 100%;
      border-radius: 10rpx;
    }
  }
  .mask {
    & > view {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: fit-content;
      color: #fff;
    }
    .goBack {
      width: 76rpx;
      height: 76rpx;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 76rpx;
      margin-left: 0;
      top: 0;
      left: 30rpx;
      backdrop-filter: blur(10rpx);
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .count {
      top: 10vh;
      background: rgba(0, 0, 0, 0.3);
      font-size: 28rpx;
      border-radius: 40rpx;
      padding: 8rpx 28rpx;
      backdrop-filter: blur(10rpx);
    }
    .time {
      font-size: 140rpx;
      top: calc(10vh + 80rpx);
      font-weight: 100;
      line-height: 1em;
      text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
    }
    .date {
      font-size: 34rpx;
      top: calc(10vh + 230rpx);
      text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
    }
    .footer {
      background: rgba(255, 255, 255, 0.8);
      bottom: 10vh;
      width: 65vw;
      height: 120rpx;
      border-radius: 120rpx;
      color: #000;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20rpx);
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rpx 12rpx;
        .text {
          font-size: 26rpx;
          color: $text-font-color-2;
        }
      }
    }
  }

  .infoPopup {
    background: #fff;
    padding: 30rpx;
    border-radius: 30rpx 30rpx 0 0;
    overflow: hidden;
    .popHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20rpx 0;
      .title {
        font-size: 26rpx;
        color: $text-font-color-2;
      }
      .close {
        padding: 10rpx;
      }
    }
    scroll-view {
      max-height: 60vh;
      .content {
        padding: 20rpx;
        .row {
          display: flex;
          padding: 16rpx 0;
          border-bottom: 1px solid #eee;
          font-size: 32rpx;
          line-height: 1.7rem;
          color: #666;
          .label {
            color: $text-font-color-3;
            width: 140rpx;
            text-align: right;
            font-size: 30rpx;
          }
          .value {
            flex: 1;
            width: 0;
            margin-left: 20rpx;
            color: $text-font-color-1;
          }
          .roteBox {
            display: flex;
            align-items: center;
            .score {
              font-size: 26rpx;
              color: $text-font-color-2;
              padding-left: 10rpx;
            }
          }
          .tabs {
            display: flex;
            flex-wrap: wrap;
            .tab {
              border: 1px solid $brand-theme-color;
              color: $brand-theme-color;
              font-size: 22rpx;
              padding: 10rpx 30rpx;
              border-radius: 40rpx;
              line-height: 1rem;
              margin: 0 10rpx 10rpx 0;
            }
          }
          .class {
            color: $brand-theme-color;
          }
        }
        .copyright {
          margin: 20rpx 0;
          padding: 20rpx;
          font-size: 28rpx;
          background: #f6f6f6;
          color: #666;
          border-radius: 10rpx;
          margin: 20rpx 0;
          line-height: 1.6rem;
        }
      }
    }
  }

  .scorePopup {
    background: #fff;
    padding: 30rpx;
    border-radius: 30rpx;
    width: 70vw;
    .popHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20rpx 0;
      .title {
        font-size: 26rpx;
        color: $text-font-color-2;
      }
      .close {
        padding: 10rpx;
      }
    }
    .content {
      padding: 30rpx 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .scoreText {
        font-size: 32rpx;
        color: #ffca3e;
        padding-left: 10rpx;
        width: 80rpx;
        line-height: 1em;
        text-align: right;
      }
    }
    .footer {
      padding: 10rpx 0;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        border-radius: 30rpx;
      }
    }
  }
}
</style>
