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
            a: item
          };
        }),
        b: common_vendor.o(maskChange),
        c: common_assets._imports_0$3,
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          date: Date.now(),
          format: "hh:mm"
        }),
        f: common_vendor.p({
          date: Date.now(),
          format: "MM月dd日"
        }),
        g: common_vendor.p({
          type: "info",
          color: "#000",
          size: "24"
        }),
        h: common_vendor.o(clickInfo),
        i: common_vendor.p({
          type: "star",
          color: "#000",
          size: "24"
        }),
        j: common_vendor.o(clickScore),
        k: common_vendor.p({
          type: "download",
          color: "#000",
          size: "24"
        })
      } : {}, {
        l: common_vendor.p({
          type: "closeempty",
          color: "#999",
          size: "18"
        }),
        m: common_vendor.o(clickInfoClose),
        n: common_vendor.p({
          readonly: true,
          touchable: true,
          value: "3.7",
          size: "16"
        }),
        o: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        p: common_vendor.sr(infoPopup, "2dad6c07-5", {
          "k": "infoPopup"
        }),
        q: common_vendor.p({
          type: "bottom"
        }),
        r: common_vendor.p({
          type: "closeempty",
          color: "#999",
          size: "18"
        }),
        s: common_vendor.o(clickScoreClose),
        t: common_vendor.o(($event) => userScore.value = $event),
        v: common_vendor.p({
          allowHalf: true,
          modelValue: userScore.value
        }),
        w: common_vendor.t(userScore.value),
        x: common_vendor.o(submitScore),
        y: !userScore.value,
        z: common_vendor.sr(scorePopup, "2dad6c07-8", {
          "k": "scorePopup"
        }),
        A: common_vendor.p({
          ["is-mask-click"]: false,
          type: "center"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
tt.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-toutiao/pages/preview/preview.js.map
