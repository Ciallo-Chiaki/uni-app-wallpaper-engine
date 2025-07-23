"use strict";
require("../common/vendor.js");
function formatTime(timestamp) {
  const now = Date.now();
  const time = typeof timestamp === "string" ? parseInt(timestamp) : timestamp;
  const targetTime = time.toString().length === 10 ? time * 1e3 : time;
  const diff = now - targetTime;
  if (diff < 0)
    return null;
  const minute = 60 * 1e3;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const threeMonths = 3 * month;
  if (diff > threeMonths) {
    return null;
  }
  if (diff >= month) {
    const months = Math.floor(diff / month);
    return `${months}个月前`;
  }
  if (diff >= day) {
    const days = Math.floor(diff / day);
    return `${days}天前`;
  }
  if (diff >= hour) {
    const hours = Math.floor(diff / hour);
    return `${hours}小时前`;
  }
  if (diff >= minute) {
    const minutes = Math.floor(diff / minute);
    return `${minutes}分钟前`;
  }
  return "1分钟前";
}
exports.formatTime = formatTime;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/common.js.map
