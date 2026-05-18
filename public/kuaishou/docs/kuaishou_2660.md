---
title: 线索crm 发起外呼
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2660&menuId=3386
doc_id: kuaishou_2660
source_id: kuaishou_2660
---
# 线索crm 发起外呼

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2660 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | CRM |
| createTime | 2025-04-25T07:53:13.323Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/crm/gemini/crm/clue/call/doCall |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| mid_phone_strategy_type | Integer |  | 0 | 外呼链路 | 0：随机自适应（优先使用隐私号，若未进行实名认证，降级为400号码外呼）【默认值】 1： 隐私号，不进行400外呼，如果选用隐私号，需要调用实名认证接口进行实名认证，若认证失败返回空 2：直接使用400号码外呼 |
| advertiser_id | Long | 是 | 121321 | 广告主 | 广告主ID |
| clue_id | Long | 是 | 123123 | 线索ID | 线索ID |
| user_id | Long |  | 客服用户ID | 可以按照客服ID | 客服用户ID |
| from_phone | String | 是 | 1661973232 | 客服手机号 | 主叫手机号 |
| to_phone | String | 是 | 17612311231 | 线索手机号 | 被叫手机号 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 错误提示 |  |
| data | AdMarketCallResultSnake |  |  | 返回数据 |  |
| - mid_phone | String |  |  | 中间号 |  |
