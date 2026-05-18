---
title: 获取应用列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2939&menuId=3690
doc_id: kuaishou_2939
source_id: kuaishou_2939
---
# 获取应用列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2939 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:50:44.166Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/file/ad/app/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| app_ids | String |  |  | 应用ID | 最多支持查询100个应用 |
| page | Integer |  |  | 页码，默认 1 |  |
| page_size | Integer |  |  | 页数，默认 20 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AppListData |  |  | JSON 返回值 |  |
| - total_count | Long |  |  | 总数 |  |
| - details | AppListDetail[] |  |  | 详情 |  |
| - app_id | Long |  |  | 应用 ID |  |
| - url | String |  |  | 应用地址 |  |
| - app_version | String |  |  | 应用标记 |  |
| - app_name | String |  |  | 应用名称 |  |
| - app_icon_url | String |  |  | 应用图标链接 |  |
| - image_token | String |  |  | 应用图标的 image_token |  |
| - package_name | String |  |  | 应用包名 |  |
| - platform | Integer |  |  | 应用类型 |  |
| - update_time | Long |  |  | 更新时间 | 单位：毫秒 |
| - use_sdk | Integer |  |  | 是否接入快手广告监测 SDK | 0：未接入，1：已接入 |
| - app_privacy_url | String |  |  | app 隐私政策链接，需与 app 相关，该字段会经过审核 | 安卓类应用必填 |
| - scan_status | Integer |  |  | 应用安全扫描状态 | 1-扫描中，2-成功，3-失败，4-失败重试中，5—手动输入 |
| - permission_information | String |  |  | 权限信息，请通过应用权限信息列表接口获取信息 | 权限信息 |
| - real_app_version | String |  |  | 真实版本号 |  |
| - package_size | Long |  |  | 应用包大小 | 应用包大小、真实版本号、权限信息要不全填，要不全不填，不支持部分存在 |
| - app_detail_image_token | String |  |  | app应用详情图片 | 格式：png/jpg/jpeg；宽高比：9:16；大小：小于2M |
| - offline_app_stores | String |  |  | 应用商店下架 | "huawei","oppo","vivo","xiaomi","meizu","smartisan" |
