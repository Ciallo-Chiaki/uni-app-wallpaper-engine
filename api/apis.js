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
