"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const classList = common_vendor.ref([]);
    const noData = common_vendor.ref(false);
    const queryParms = {
      pageNum: 1,
      pageSize: 12
    };
    let pageName;
    common_vendor.onLoad((e) => {
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:52", "e", e);
      let { id = null, name = null, type = null } = e;
      if (type)
        queryParms.type = type;
      if (id)
        queryParms.classid = id;
      pageName = name;
      common_vendor.index.setNavigationBarTitle({ title: name });
      getClassList(queryParms);
    });
    common_vendor.onReachBottom(() => {
      if (noData.value) {
        return;
      }
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:67", "触底加载更多");
      queryParms.pageNum++;
      getClassList(queryParms);
    });
    const getClassList = async (value = {}) => {
      let res;
      if (queryParms.classid)
        res = await api_apis.apiGetClassList(value);
      if (queryParms.type)
        res = await api_apis.apiGetHistoryList(value);
      classList.value = [...classList.value, ...res.data];
      if (res.data.length < queryParms.pageSize) {
        noData.value = true;
      } else {
        noData.value = false;
      }
      common_vendor.index.setStorageSync("storageClassList", classList.value);
    };
    common_vendor.onShareAppMessage((e) => {
      common_vendor.index.__f__("log", "at pages/classlist/classlist.vue:91", e);
      return {
        title: "别笑，你也过不了第二关",
        path: "/pages/classlist/classlist?id=" + queryParms.classid + "&name=" + pageName
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "别笑，你也过不了第二关",
        query: "id=" + queryParms.classid + "&name=" + pageName
      };
    });
    common_vendor.onUnload(() => {
      common_vendor.index.removeStorageSync("storageClassList");
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !classList.value.length && !noData.value
      }, !classList.value.length && !noData.value ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: "/pages/preview/preview?id=" + item._id,
            c: item._id
          };
        }),
        d: noData.value || classList.value.length
      }, noData.value || classList.value.length ? {
        e: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classlist/classlist.js.map
