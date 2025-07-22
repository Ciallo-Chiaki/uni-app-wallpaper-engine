// 时间格式化函数
export function formatTime(timestamp) {
  // 获取当前时间戳
  const now = Date.now();
  // 传入的时间戳（如果是秒级时间戳，需要乘以1000）
  const time = typeof timestamp === "string" ? parseInt(timestamp) : timestamp;
  const targetTime = time.toString().length === 10 ? time * 1000 : time;

  // 计算时间差（毫秒）
  const diff = now - targetTime;

  // 如果时间差为负数（未来时间），返回null
  if (diff < 0) return null;

  // 定义时间单位（毫秒）
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const threeMonths = 3 * month;

  // 超过三个月返回null
  if (diff > threeMonths) {
    return null;
  }

  // 三个月内显示多少月前
  if (diff >= month) {
    const months = Math.floor(diff / month);
    return `${months}个月前`;
  }

  // 一个月内显示多少天前
  if (diff >= day) {
    const days = Math.floor(diff / day);
    return `${days}天前`;
  }

  // 一天内显示多少小时前
  if (diff >= hour) {
    const hours = Math.floor(diff / hour);
    return `${hours}小时前`;
  }

  // 一小时内显示多少分钟前
  if (diff >= minute) {
    const minutes = Math.floor(diff / minute);
    return `${minutes}分钟前`;
  }

  // 一分钟内显示一分钟前
  return "1分钟前";
}

export function goToHome() {
  uni.showModal({
    title: "提示",
    content: "页面有误将返回首页",
    showCancel: true,
    success: (res) => {
      if (res.confirm) {
        uni.reLaunch({ url: "/pages/index/index" });
      }
    },
  });
}
