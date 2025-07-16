// import { ref } from "vue";

// 获取系统状态栏信息
let WINDOW_INFO = 123;
// #ifdef MP-WEIXIN
WINDOW_INFO = uni.getWindowInfo();
// #endif

// #ifdef MP-TOUTIAO
WINDOW_INFO = tt.getSystemInfo();
console.log("获取系统状态栏信息", WINDOW_INFO);

// #endif

export const getStatusBarHeight = () => {
  let value;
  // #ifdef MP-WEIXIN
  console.log("获取状态栏高度", WINDOW_INFO.statusBarHeight);

  value = WINDOW_INFO.statusBarHeight || 0;
  // #endif

  // #ifdef MP-TOUTIAO
  console.log(WINDOW_INFO);
  value = WINDOW_INFO.statusBarHeight || 0;
  // #endif
  return value;
};

// 处理标题栏高度
export const getTitleBarHeight = () => {
  // 获取胶囊按钮信息并且解构
  let { top, height } = uni.getMenuButtonBoundingClientRect();
  // 计算返回值 调用 getStatusBarHeight() 获取状态栏高度
  // 返回值为胶囊按钮顶部位置 - 状态栏高度 * 2

  return (top - getStatusBarHeight()) * 2 + height;
};

export const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight();

export const getLeftIconLeft = () => {
  // #ifdef MP-TOUTIAO
  let {
    leftIcon: { left, width },
  } = tt.getCustomButtonBoundingClientRect();
  return left + parseInt(width) + 5;
  // #endif

  // #ifndef MP-TOUTIAO
  return 0;
  // #endif
};
