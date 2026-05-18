---
title: 联盟媒体包推送
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3050&menuId=3605
doc_id: kuaishou_3050
source_id: kuaishou_3050
---
# 联盟媒体包推送

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3050 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:44:08.320Z |

## 概述

可将当前账户下的且未被删除，未被推送过自定义媒体包推送到其它同主体同代理的其它账户下。注意：被推送账户下不能存在与待推送的媒体包同名的媒体包。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/asset/media/share |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  | 123456 | 广告主ID |  |
| media_ids | Long[] | 是 | [123] | 待推送的媒体包ID集合 |  |
| target_account_ids | Long[] | 是 | [654321] | 目标账户ID集合 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | ShareMediaInfo[] |  |  | 媒体包分享结果数据 |  |
| - target_account_id | Long |  |  | 推送的目标账户ID |  |
| - new_media_id | Long |  |  | 推送到目标账户后新生成的媒体包id |  |
| - origin_media_id | Long |  |  | 待推送的原始媒体包id |  |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 错误详情 |  |
