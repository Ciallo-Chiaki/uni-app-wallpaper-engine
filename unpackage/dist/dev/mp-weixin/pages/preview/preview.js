"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const classList = common_vendor.ref([]);
    const currentId = common_vendor.ref(null);
    const currentIndex = common_vendor.ref(0);
    const readImgs = common_vendor.ref([]);
    const currentInfo = common_vendor.ref(null);
    const isScore = common_vendor.ref(false);
    const strorgClassList = common_vendor.index.getStorageSync("storgeClassList") || [];
    classList.value = strorgClassList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    common_vendor.index.__f__("log", "at pages/preview/preview.vue:188", "获取缓存的分类列表", strorgClassList);
    common_vendor.index.__f__("log", "at pages/preview/preview.vue:189", "处理后的分类列表", classList.value);
    common_vendor.onLoad(async (e) => {
      currentId.value = e.id || null;
      if (e.type === "share") {
        let res = await api_apis.apiGetDetailWall({ id: currentId.value });
        classList.value = res.data.map((item) => {
          return {
            ...item,
            picurl: item.smallPicurl.replace("_small.webp", ".jpg")
          };
        });
      }
      currentIndex.value = classList.value.findIndex((item) => {
        return item._id === currentId.value;
      });
      currentInfo.value = classList.value[currentIndex.value];
      readImgsChange();
    });
    const swiperChange = (e) => {
      currentIndex.value = e.detail.current;
      currentInfo.value = classList.value[currentIndex.value];
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:214", e);
      readImgsChange();
    };
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickScore = () => {
      if (currentInfo.value.userScore) {
        isScore.value = true;
        userScore.value = currentInfo.value.userScore;
      }
      scorePopup.value.open();
    };
    const clickScoreClose = () => {
      scorePopup.value.close();
      userScore.value = 0;
      isScore.value = false;
    };
    const submitScore = async () => {
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:248", `用户评分: ${userScore.value}`);
      let { classid, _id: wallId } = currentInfo.value;
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:250", currentInfo.value);
      let res = await api_apis.apiGetSetupScore({
        classid,
        wallId,
        userScore: userScore.value
      });
      common_vendor.index.hideLoading();
      if (res.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
        classList.value[currentIndex.value].userScore = userScore.value;
        common_vendor.index.setStorageSync("storgeClassList", classList.value);
        clickScoreClose();
      }
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:267", res);
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const goBack = () => {
      common_vendor.index.navigateBack({
        success: () => {
        },
        fail: () => {
          common_vendor.index.reLaunch({ url: "/pages/index/index" });
        }
      });
    };
    function readImgsChange() {
      readImgs.value.push(
        currentIndex.value <= 0 ? classList.value.length - 1 : currentIndex.value - 1,
        currentIndex.value,
        currentIndex.value + 1 >= classList.value.length ? 0 : currentIndex.value + 1
      );
      readImgs.value = [...new Set(readImgs.value)];
    }
    const clickDownload = async () => {
      try {
        common_vendor.index.showLoading({
          title: "下载中...",
          mask: true
        });
        let { classid, _id: wallId } = currentInfo.value;
        let res = await api_apis.apiWriteDownload({
          classid,
          wallId
        });
        if (res.errCode !== 0)
          throw res;
        common_vendor.index.__f__("log", "at pages/preview/preview.vue:323", "写入下载记录", res);
        common_vendor.index.getImageInfo({
          src: currentInfo.value.picurl,
          success: (res2) => {
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: res2.path,
              success: (result) => {
                common_vendor.index.showToast({
                  title: "下载成功，请到相册查看",
                  icon: "none"
                });
              },
              fail: (err) => {
                if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                  common_vendor.index.showToast({
                    title: "取消下载，请重新点击下载",
                    icon: "none"
                  });
                  return;
                }
                common_vendor.index.showModal({
                  title: "授权提示",
                  content: "需要授权保存相册",
                  success: (res3) => {
                    if (res3.confirm) {
                      common_vendor.index.openSetting({
                        success: (setting) => {
                          common_vendor.index.__f__("log", "at pages/preview/preview.vue:352", setting);
                          if (setting.authSetting["scope.writePhotosAlbum"]) {
                            common_vendor.index.showToast({
                              title: "授权成功，请重新下载",
                              icon: "none"
                            });
                          } else {
                            common_vendor.index.showToast({
                              title: "授权失败，请手动开启相册权限",
                              icon: "none"
                            });
                          }
                        }
                      });
                    }
                  }
                });
              },
              complete: () => {
                common_vendor.index.hideLoading();
              }
            });
          }
        });
      } catch (err) {
        common_vendor.index.__f__("log", "at pages/preview/preview.vue:377", err);
        common_vendor.index.hideLoading();
      }
    };
    common_vendor.onShareAppMessage((e) => {
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:386", e);
      return {
        title: "别笑，你也过不了第二关",
        path: "/pages/preview/preview?id=" + currentId.value + "&type=share"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "别笑，你也过不了第二关",
        query: "id=" + currentId.value + "&type=share"
      };
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(classList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImgs.value.includes(index)
          }, readImgs.value.includes(index) ? {
            b: common_vendor.o(maskChange, item._id),
            c: item.picurl
          } : {}, {
            d: item._id
          });
        }),
        b: currentIndex.value,
        c: common_vendor.o(swiperChange),
        d: common_vendor.t(readImgs.value),
        e: maskState.value
      }, maskState.value ? {
        f: common_vendor.o(maskChange),
        g: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "30"
        }),
        h: common_vendor.o(goBack),
        i: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        j: common_vendor.t(currentIndex.value + 1),
        k: common_vendor.t(classList.value.length),
        l: common_vendor.p({
          date: Date.now(),
          format: "hh:mm"
        }),
        m: common_vendor.p({
          date: Date.now(),
          format: "MM月dd日"
        }),
        n: common_vendor.p({
          type: "info",
          color: "#000",
          size: "24"
        }),
        o: common_vendor.o(clickInfo),
        p: common_vendor.p({
          type: "star",
          color: "#000",
          size: "24"
        }),
        q: common_vendor.t(currentInfo.value.score),
        r: common_vendor.o(clickScore),
        s: common_vendor.p({
          type: "download",
          color: "#000",
          size: "24"
        }),
        t: common_vendor.o(clickDownload)
      } : {}, {
        v: common_vendor.p({
          type: "closeempty",
          color: "#999",
          size: "18"
        }),
        w: common_vendor.o(clickInfoClose),
        x: common_vendor.t(currentInfo.value._id),
        y: common_vendor.t(currentInfo.value.nickname),
        z: common_vendor.p({
          readonly: true,
          touchable: true,
          value: currentInfo.value.score,
          size: "16"
        }),
        A: common_vendor.t(currentInfo.value.score),
        B: common_vendor.t(currentInfo.value.description),
        C: common_vendor.f(currentInfo.value.tabs, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        D: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        E: common_vendor.p({
          ["safe-area"]: false,
          type: "bottom"
        }),
        F: common_vendor.t(isScore.value ? "已经评过分啦 ~" : "壁纸评分"),
        G: common_vendor.p({
          type: "closeempty",
          color: "#999",
          size: "18"
        }),
        H: common_vendor.o(clickScoreClose),
        I: common_vendor.o(($event) => userScore.value = $event),
        J: common_vendor.p({
          allowHalf: true,
          disabled: isScore.value,
          ["disabled-color"]: "#FFCA3E",
          modelValue: userScore.value
        }),
        K: common_vendor.t(userScore.value),
        L: common_vendor.o(submitScore),
        M: !userScore.value || isScore.value,
        N: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        O: common_vendor.p({
          ["is-mask-click"]: false,
          type: "center"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
