"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "https://tea.qingnian8.com/api/bizhi";
function request(config = {}) {
  let { url, method, header = {}, data = {} } = config;
  url = BASE_URL + url;
  header["access-key"] = "cialloworld";
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      method: method || "GET",
      header,
      data,
      success: (res) => {
        if (res.data.errCode === 0) {
          common_vendor.index.__f__("log", "at utils/request.js:17", "请求成功", res.data);
          resolve(res.data);
        } else if (res.data.errCode === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.errMsg,
            showCancel: false
          });
          reject(res.data);
        } else {
          common_vendor.index.showToast({
            title: res.data.errMsg,
            icon: "none"
          });
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.request = request;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/request.js.map
