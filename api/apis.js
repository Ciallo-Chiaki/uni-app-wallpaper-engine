import { request } from "@/utils/request.js";

// 获取轮播图
export function apiGetBanner() {
  return request({
    url: "/homeBanner",
  });
}

// 获取每日推荐
export function apiGetDayRandom() {
  return request({
    url: "/randomWall",
  });
}

// 获取公告列表
export function apiGetNotice(data = {}) {
  return request({
    url: "/wallNewsList",
    data: data,
  });
}

// 获取分类列表
export function apiGetClassify(data = {}) {
  return request({
    url: "/classify",
    data: data,
  });
}

// 获取壁纸列表
export function apiGetClassList(data = {}) {
  return request({
    url: "/wallList",
    data: data,
  });
}

// 为壁纸评分
export function apiGetSetupScore(data = {}) {
  return request({
    url: "/setupScore",
    data: data,
  });
}

// 写入下载记录
export function apiWriteDownload(data = {}) {
  return request({
    url: "/downloadWall",
    data: data,
  });
}

// 获取壁纸详情
export function apiGetDetailWall(data = {}) {
  return request({
    url: "//detailWall",
    data: data,
  });
}

// 获取用户信息
export function apiGetUserInfo(data = {}) {
  return request({
    url: "/userInfo",
    data: data,
  });
}
