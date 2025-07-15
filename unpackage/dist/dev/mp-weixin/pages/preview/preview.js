"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
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
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:158", `用户评分: ${userScore.value}`);
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(5, (item, k0, i0) => {
          return {
            a: common_vendor.o(maskChange, item),
            b: item
          };
        }),
        b: common_assets._imports_0$3,
        c: maskState.value
      }, maskState.value ? {
        d: common_vendor.p({
          date: Date.now(),
          format: "hh:mm"
        }),
        e: common_vendor.p({
          date: Date.now(),
          format: "MM月dd日"
        }),
        f: common_vendor.p({
          type: "info",
          color: "#000",
          size: "24"
        }),
        g: common_vendor.o(clickInfo),
        h: common_vendor.p({
          type: "star",
          color: "#000",
          size: "24"
        }),
        i: common_vendor.o(clickScore),
        j: common_vendor.p({
          type: "download",
          color: "#000",
          size: "24"
        })
      } : {}, {
        k: common_vendor.p({
          type: "closeempty",
          color: "#999",
          size: "18"
        }),
        l: common_vendor.o(clickInfoClose),
        m: common_vendor.p({
          readonly: true,
          touchable: true,
          value: "3.7",
          size: "16"
        }),
        n: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        o: common_vendor.sr(infoPopup, "2dad6c07-5", {
          "k": "infoPopup"
        }),
        p: common_vendor.p({
          type: "bottom"
        }),
        q: common_vendor.p({
          type: "closeempty",
          color: "#999",
          size: "18"
        }),
        r: common_vendor.o(clickScoreClose),
        s: common_vendor.o(($event) => userScore.value = $event),
        t: common_vendor.p({
          allowHalf: true,
          modelValue: userScore.value
        }),
        v: common_vendor.t(userScore.value),
        w: common_vendor.o(submitScore),
        x: !userScore.value,
        y: common_vendor.sr(scorePopup, "2dad6c07-8", {
          "k": "scorePopup"
        }),
        z: common_vendor.p({
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
