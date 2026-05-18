---
title: 人群包跨账户推送
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2933&menuId=3683
doc_id: kuaishou_2933
source_id: kuaishou_2933
---
# 人群包跨账户推送

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2933 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:29:07.271Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/dmp/population/accounts/push |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| orientation_id | Long | 是 |  | 需要推送的人群包 | 人群包状态需有效，status=4 才能推送。 |
| dest_account_ids | Long[] | 是 |  | 要推送的账户 ids | 建议单次推送的账户数量<20个 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | PopulationAccountsPushData |  |  | JSON 返回值 |  |
| - success | Long[] |  |  | 推送成功的 account_ids |  |
| - fail | Long[] |  |  | 推送失败的 account_ids |  |
