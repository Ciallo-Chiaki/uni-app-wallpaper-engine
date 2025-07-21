"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const classList = common_vendor.ref([]);
    const currentId = common_vendor.ref(null);
    const currentIndex = common_vendor.ref(0);
    const readImgs = common_vendor.ref([]);
    const currentInfo = common_vendor.ref(null);
    const isScore = common_vendor.ref(false);
    const strorgClassList = common_vendor.index.getStorageSync("storgeClassList") || [];
    classList.value = strorgClassList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    common_vendor.index.__f__("log", "at pages/preview/preview.vue:182", "获取缓存的分类列表", strorgClassList);
    common_vendor.index.__f__("log", "at pages/preview/preview.vue:183", "处理后的分类列表", classList.value);
    common_vendor.onLoad((e) => {
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
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:199", e);
      readImgsChange();
    };
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickScore = () => {
      if (currentInfo.value.userScore) {
        isScore.value = true;
        userScore.value = currentInfo.value.userScore;
      }
      scorePopup.value.open();
    };
    const clickScoreClose = () => {
      scorePopup.value.close();
      userScore.value = 0;
      isScore.value = false;
    };
    const submitScore = async () => {
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:233", `用户评分: ${userScore.value}`);
      let { classid, _id: wallId } = currentInfo.value;
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:235", currentInfo.value);
      let res = await api_apis.apiGetSetupScore({
        classid,
        wallId,
        userScore: userScore.value
      });
      common_vendor.index.hideLoading();
      if (res.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
        classList.value[currentIndex.value].userScore = userScore.value;
        common_vendor.index.setStorageSync("storgeClassList", classList.value);
        clickScoreClose();
      }
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:252", res);
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    function readImgsChange() {
      readImgs.value.push(
        currentIndex.value <= 0 ? classList.value.length - 1 : currentIndex.value - 1,
        currentIndex.value,
        currentIndex.value + 1 >= classList.value.length ? 0 : currentIndex.value + 1
      );
      readImgs.value = [...new Set(readImgs.value)];
    }
    const clickDownload = () => {
      common_vendor.index.getImageInfo({
        src: currentInfo.value.picurl,
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/preview/preview.vue:292", res);
          common_vendor.index.saveImageToPhotosAlbum({
            filePath: res.path,
            success: (result) => {
              common_vendor.index.__f__("log", "at pages/preview/preview.vue:297", result);
            },
            fail: (error) => {
              common_vendor.index.__f__("log", "at pages/preview/preview.vue:300", error);
            }
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(classList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImgs.value.includes(index)
          }, readImgs.value.includes(index) ? {
            b: common_vendor.o(maskChange, item._id),
            c: item.picurl
          } : {}, {
            d: item._id
          });
        }),
        b: currentIndex.value,
        c: common_vendor.o(swiperChange),
        d: common_vendor.t(readImgs.value),
        e: maskState.value
      }, maskState.value ? {
        f: common_vendor.o(maskChange),
        g: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "30"
        }),
        h: common_vendor.o(goBack),
        i: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        j: common_vendor.t(currentIndex.value + 1),
        k: common_vendor.t(classList.value.length),
        l: common_vendor.p({
          date: Date.now(),
          format: "hh:mm"
        }),
        m: common_vendor.p({
          date: Date.now(),
          format: "MM月dd日"
        }),
        n: common_vendor.p({
          type: "info",
          color: "#000",
          size: "24"
        }),
        o: common_vendor.o(clickInfo),
        p: common_vendor.p({
          type: "star",
          color: "#000",
          size: "24"
        }),
        q: common_vendor.t(currentInfo.value.score),
        r: common_vendor.o(clickScore),
        s: common_vendor.p({
          type: "download",
          color: "#000",
          size: "24"
        }),
        t: common_vendor.o(clickDownload)
      } : {}, {
        v: common_vendor.p({
          type: "closeempty",
          color: "#999",
          size: "18"
        }),
        w: common_vendor.o(clickInfoClose),
        x: common_vendor.t(currentInfo.value._id),
        y: common_vendor.t(currentInfo.value.nickname),
        z: common_vendor.p({
          readonly: true,
          touchable: true,
          value: currentInfo.value.score,
          size: "16"
        }),
        A: common_vendor.t(currentInfo.value.score),
        B: common_vendor.t(currentInfo.value.description),
        C: common_vendor.f(currentInfo.value.tabs, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        D: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        E: common_vendor.p({
          type: "bottom"
        }),
        F: common_vendor.t(isScore.value ? "已经评过分啦 ~" : "壁纸评分"),
        G: common_vendor.p({
          type: "closeempty",
          color: "#999",
          size: "18"
        }),
        H: common_vendor.o(clickScoreClose),
        I: common_vendor.o(($event) => userScore.value = $event),
        J: common_vendor.p({
          allowHalf: true,
          disabled: isScore.value,
          ["disabled-color"]: "#FFCA3E",
          modelValue: userScore.value
        }),
        K: common_vendor.t(userScore.value),
        L: common_vendor.o(submitScore),
        M: !userScore.value || isScore.value,
        N: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        O: common_vendor.p({
          ["is-mask-click"]: false,
          type: "center"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
