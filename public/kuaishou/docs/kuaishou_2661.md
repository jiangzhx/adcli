---
title: 线索crm 获取通话记录列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2661&menuId=3387
doc_id: kuaishou_2661
source_id: kuaishou_2661
---
# 线索crm 获取通话记录列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2661 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | CRM |
| createTime | 2024-07-04T12:25:54.178Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/crm/clue/call/record |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 112313 | 广告主ID |  |
| clue_list | Long[] | 是 | [12312] | 线索id LIST |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdMarketPageResultSnake552 |  |  | data |  |
| - total_count | Long |  |  | 条数 |  |
| - details | ClueCallRecordResultSnake |  |  | ClueCallRecordResult |  |
| - call_id | String |  |  | callId |  |
| - clue_id | Long |  |  | clueId |  |
| - from_phone | String |  |  | fromPhone |  |
| - mid_phone | String |  |  | midPhone |  |
| - to_phone | String |  |  | toPhone |  |
| - call_start_time | Long |  |  | callStartTime |  |
| - call_answer_time | Long |  |  | callAnswerTime |  |
| - call_finish_time | Long |  |  | callFinishTime |  |
| - call_duration | Integer |  |  | callDuration |  |
| - call_stat | Integer |  |  | callStat |  |
| - record_url | String |  |  | recordUrl |  |
