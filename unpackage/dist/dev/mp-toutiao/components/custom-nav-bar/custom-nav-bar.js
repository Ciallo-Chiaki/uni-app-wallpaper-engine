"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "custom-nav-bar",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_vendor.p({
          type: "search",
          color: "#888",
          size: "18"
        }),
        c: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        d: common_vendor.unref(utils_system.getLeftIconLeft)() + "px",
        e: common_vendor.unref(utils_system.getNavBarHeight)() + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-412fc155"]]);
tt.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-toutiao/components/custom-nav-bar/custom-nav-bar.js.map
