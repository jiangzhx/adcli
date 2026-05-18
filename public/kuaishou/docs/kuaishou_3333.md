---
title: 创建 Harmony 应用
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3333&menuId=4116
doc_id: kuaishou_3333
source_id: kuaishou_3333
---
# 创建 Harmony 应用

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3333 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-12-09T11:59:40.870Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/create/harmony |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| app_icon_url | String | 是 |  | 应用图标，通过上传图片 API 获取。 |  |
| app_name | String | 是 |  | 应用名称 |  |
| developer | String | 是 |  | 开发者名称（需与软著保持一致） |  |
| package_name | String | 是 |  | 应用包名 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AddAppResponseSnake |  |  | 请补充描述详情 |  |
| - app_id | Long |  |  | 应用ID |  |
| - global_app_id | Long |  |  | 请补充描述详情 |  |
| - package_id | Long |  |  | 应用包ID【母包ID】 |  |
| message | String |  |  | 请补充描述详情 |  |
| code | Integer |  |  | 请补充描述详情 |  |
