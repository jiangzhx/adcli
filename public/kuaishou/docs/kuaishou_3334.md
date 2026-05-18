---
title: 更新 Harmony 应用
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3334&menuId=4117
doc_id: kuaishou_3334
source_id: kuaishou_3334
---
# 更新 Harmony 应用

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3334 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2025-12-09T12:50:43.138Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/update/harmony |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | - | 广告主id |  |
| app_id | Long |  |  | 应用id |  |
| app_name | String |  |  | 应用名称 |  |
| developer | String |  |  | 开发者名称 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | ModAppResponseSnake |  |  | 请补充描述详情 |  |
| - app_id | Long |  |  | 应用ID |  |
| - package_id | Long |  |  | 应用包ID |  |
| message | String |  |  | 请补充描述详情 |  |
| code | Integer |  |  | 请补充描述详情 |  |
