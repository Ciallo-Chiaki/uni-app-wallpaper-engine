"use strict";
const common_vendor = require("../common/vendor.js");
let WINDOW_INFO = 123;
WINDOW_INFO = common_vendor.index.getWindowInfo();
const getStatusBarHeight = () => {
  let value = 20;
  common_vendor.index.__f__("log", "at utils/system.js:18", "获取状态栏高度", WINDOW_INFO.statusBarHeight);
  value = WINDOW_INFO.statusBarHeight || 0;
  return value;
};
const getTitleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    let { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    return (top - getStatusBarHeight()) * 2 + height;
  } else {
    return 40;
  }
};
const getNavBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    return getStatusBarHeight() + getTitleBarHeight();
  } else {
    return 30;
  }
};
const getLeftIconLeft = () => {
  return 0;
};
exports.getLeftIconLeft = getLeftIconLeft;
exports.getNavBarHeight = getNavBarHeight;
exports.getStatusBarHeight = getStatusBarHeight;
exports.getTitleBarHeight = getTitleBarHeight;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/system.js.map
