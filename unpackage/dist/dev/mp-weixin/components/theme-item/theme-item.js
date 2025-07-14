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
  __name: "theme-item",
  props: {
    // 可以添加需要的props
    isMore: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? {
        b: common_assets._imports_0$2
      } : {}, {
        c: __props.isMore
      }, __props.isMore ? {
        d: common_assets._imports_1$1,
        e: common_vendor.p({
          type: "more-filled",
          color: "#fff",
          size: "34"
        })
      } : {});
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/theme-item/theme-item.js.map
