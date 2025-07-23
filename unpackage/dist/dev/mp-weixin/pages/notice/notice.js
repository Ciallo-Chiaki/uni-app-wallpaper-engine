"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_mp_html2 = common_vendor.resolveComponent("mp-html");
  (_easycom_uni_tag2 + _easycom_uni_dateformat2 + _easycom_mp_html2)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_mp_html = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_dateformat + _easycom_mp_html)();
}
const _sfc_main = {
  __name: "notice",
  setup(__props) {
    common_vendor.index.__f__("log", "at pages/notice/notice.vue:35", "uni 对象:", common_vendor.index);
    common_vendor.index.__f__("log", "at pages/notice/notice.vue:36", "平台信息:", common_vendor.index.getSystemInfoSync());
    const detail = common_vendor.ref({});
    let noticeId;
    common_vendor.onLoad((e) => {
      noticeId = e.id;
      getNoticeDetail();
    });
    const getNoticeDetail = () => {
      api_apis.apiGetNoticeDetail({ id: noticeId }).then((res) => {
        detail.value = res.data;
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: detail.value.select
      }, detail.value.select ? {
        b: common_vendor.o(() => {
        }),
        c: common_vendor.p({
          text: "置顶",
          type: "error",
          inverted: true
        })
      } : {}, {
        d: common_vendor.t(detail.value.title),
        e: common_vendor.t(detail.value.author),
        f: common_vendor.p({
          date: detail.value.publish_date,
          format: "yyyy/MM/dd hh:mm:ss"
        }),
        g: common_vendor.p({
          content: detail.value.content
        }),
        h: common_vendor.t(detail.value.view_count)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1c2e4c1e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/notice/notice.js.map
