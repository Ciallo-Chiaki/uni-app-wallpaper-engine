"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
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
    const strorgClassList = common_vendor.index.getStorageSync("storgeClassList") || [];
    classList.value = strorgClassList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    common_vendor.index.__f__("log", "at pages/preview/preview.vue:153", "获取缓存的分类列表", strorgClassList);
    common_vendor.index.__f__("log", "at pages/preview/preview.vue:154", "处理后的分类列表", classList.value);
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickScore = () => {
      scorePopup.value.open();
    };
    const clickScoreClose = () => {
      scorePopup.value.close();
    };
    const submitScore = () => {
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:177", `用户评分: ${userScore.value}`);
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: common_vendor.o(maskChange, item._id),
            b: item.picurl,
            c: item._id
          };
        }),
        b: maskState.value
      }, maskState.value ? {
        c: common_vendor.o(maskChange),
        d: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "30"
        }),
        e: common_vendor.o(goBack),
        f: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        g: common_vendor.t(classList.value.length),
        h: common_vendor.p({
          date: Date.now(),
          format: "hh:mm"
        }),
        i: common_vendor.p({
          date: Date.now(),
          format: "MM月dd日"
        }),
        j: common_vendor.p({
          type: "info",
          color: "#000",
          size: "24"
        }),
        k: common_vendor.o(clickInfo),
        l: common_vendor.p({
          type: "star",
          color: "#000",
          size: "24"
        }),
        m: common_vendor.o(clickScore),
        n: common_vendor.p({
          type: "download",
          color: "#000",
          size: "24"
        })
      } : {}, {
        o: common_vendor.p({
          type: "closeempty",
          color: "#999",
          size: "18"
        }),
        p: common_vendor.o(clickInfoClose),
        q: common_vendor.p({
          readonly: true,
          touchable: true,
          value: "3.7",
          size: "16"
        }),
        r: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        s: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        t: common_vendor.p({
          type: "bottom"
        }),
        v: common_vendor.p({
          type: "closeempty",
          color: "#999",
          size: "18"
        }),
        w: common_vendor.o(clickScoreClose),
        x: common_vendor.o(($event) => userScore.value = $event),
        y: common_vendor.p({
          allowHalf: true,
          modelValue: userScore.value
        }),
        z: common_vendor.t(userScore.value),
        A: common_vendor.o(submitScore),
        B: !userScore.value,
        C: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        D: common_vendor.p({
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
