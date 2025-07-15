// import { ref } from "vue";

// 获取系统状态栏信息
let WINDOW_INFO = uni.getWindowInfo();
export const getStatusBarHeight = () => {
  console.log("获取状态栏高度", WINDOW_INFO.statusBarHeight);

  return WINDOW_INFO.statusBarHeight || 0;
};

// 处理标题栏高度
export const getTitleBarHeight = () => {
  if (uni.getMenuButtonBoundingClientRect) {
    // 获取胶囊按钮信息并且解构
    let { top, height } = uni.getMenuButtonBoundingClientRect();
    // 计算返回值 调用 getStatusBarHeight() 获取状态栏高度
    // 返回值为胶囊按钮顶部位置 - 状态栏高度 * 2
    return (top - getStatusBarHeight()) * 2 + height;
  } else {
    return 40;
  }
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
