"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.p({
          type: "download-filled",
          color: "#28b389",
          size: "20"
        }),
        c: common_vendor.p({
          type: "right",
          color: "#aaa",
          size: "16"
        }),
        d: common_vendor.o(() => common_vendor.index.navigateTo({
          url: "/pages/classlist/classlist"
        })),
        e: common_vendor.p({
          type: "star-filled",
          color: "#28b389",
          size: "20"
        }),
        f: common_vendor.p({
          type: "right",
          color: "#aaa",
          size: "16"
        }),
        g: common_vendor.o(() => common_vendor.index.navigateTo({
          url: "/pages/classlist/classlist"
        })),
        h: common_vendor.p({
          type: "chatboxes-filled",
          color: "#28b389",
          size: "20"
        }),
        i: common_vendor.p({
          type: "right",
          color: "#aaa",
          size: "16"
        }),
        j: common_vendor.p({
          type: "notification-filled",
          color: "#28b389",
          size: "20"
        }),
        k: common_vendor.p({
          type: "right",
          color: "#aaa",
          size: "16"
        }),
        l: common_vendor.p({
          type: "flag-filled",
          color: "#28b389",
          size: "20"
        }),
        m: common_vendor.p({
          type: "right",
          color: "#aaa",
          size: "16"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
