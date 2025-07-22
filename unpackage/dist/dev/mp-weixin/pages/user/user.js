"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
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
    const userInfo = common_vendor.ref({});
    const getUserInfo = async () => {
      api_apis.apiGetUserInfo().then((res) => {
        userInfo.value = res.data;
        common_vendor.index.__f__("log", "at pages/user/user.vue:107", "获取用户信息", userInfo.value);
      });
    };
    getUserInfo();
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return {
        a: common_vendor.unref(utils_system.getNavBarHeight)() + "px",
        b: common_assets._imports_0,
        c: common_vendor.t(userInfo.value.IP),
        d: common_vendor.t(((_a = userInfo.value.address) == null ? void 0 : _a.city) || ((_b = userInfo.value.address) == null ? void 0 : _b.province) || ((_c = userInfo.value.address) == null ? void 0 : _c.country)),
        e: common_vendor.p({
          type: "download-filled",
          color: "#28b389",
          size: "20"
        }),
        f: common_vendor.t(userInfo.value.downloadSize),
        g: common_vendor.p({
          type: "right",
          color: "#aaa",
          size: "16"
        }),
        h: common_vendor.o(() => common_vendor.index.navigateTo({
          url: "/pages/classlist/classlist"
        })),
        i: common_vendor.p({
          type: "star-filled",
          color: "#28b389",
          size: "20"
        }),
        j: common_vendor.t(userInfo.value.scoreSize),
        k: common_vendor.p({
          type: "right",
          color: "#aaa",
          size: "16"
        }),
        l: common_vendor.o(() => common_vendor.index.navigateTo({
          url: "/pages/classlist/classlist"
        })),
        m: common_vendor.p({
          type: "chatboxes-filled",
          color: "#28b389",
          size: "20"
        }),
        n: common_vendor.p({
          type: "right",
          color: "#aaa",
          size: "16"
        }),
        o: common_vendor.p({
          type: "notification-filled",
          color: "#28b389",
          size: "20"
        }),
        p: common_vendor.p({
          type: "right",
          color: "#aaa",
          size: "16"
        }),
        q: common_vendor.p({
          type: "flag-filled",
          color: "#28b389",
          size: "20"
        }),
        r: common_vendor.p({
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
