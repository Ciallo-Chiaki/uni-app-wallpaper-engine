"use strict";
const common_vendor = require("../common/vendor.js");
let WINDOW_INFO = common_vendor.index.getWindowInfo();
const getStatusBarHeight = () => {
  common_vendor.index.__f__("log", "at utils/system.js:6", "获取状态栏高度", WINDOW_INFO.statusBarHeight);
  return WINDOW_INFO.statusBarHeight || 0;
};
const getTitleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    let { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    return (top - getStatusBarHeight()) * 2 + height;
  } else {
    return 40;
  }
};
const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight();
const getLeftIconLeft = () => {
  let {
    leftIcon: { left, width }
  } = tt.getCustomButtonBoundingClientRect();
  return left + parseInt(width) + 5;
};
exports.getLeftIconLeft = getLeftIconLeft;
exports.getNavBarHeight = getNavBarHeight;
exports.getStatusBarHeight = getStatusBarHeight;
exports.getTitleBarHeight = getTitleBarHeight;
//# sourceMappingURL=../../.sourcemap/mp-toutiao/utils/system.js.map
