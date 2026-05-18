---
title: 线索crm意向度/进度/通话状态更新接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2658&menuId=3384
doc_id: kuaishou_2658
source_id: kuaishou_2658
---
# 线索crm意向度/进度/通话状态更新接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2658 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | CRM |
| createTime | 2026-04-01T08:27:51.010Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/gemini/crm/clue/clue_mark/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| bind_account_id | Long |  |  | 用户id |  |
| bind_account_type | Integer |  |  | 绑定的用户类型：1.aid身份；7.uid身份 |  |
| app_id | String |  |  | 代理商 appid |  |
| schedule_id | Long |  |  | 线索进度ID | 0：待联系；1：电话已建联；2：高意向；3：微信加粉；4：成交；5：待持续跟进；6：用户开口聊天；7：已拨打；8：无意向；9：交定金；11：到店 可为 null |
| child_intention_id | Long[] |  |  | 标签ID | 1：高意向度-高意愿；2：高意向度-有明确需求；3：潜在客户类标签-有购买力；4：潜在客户类标签-多次建联；5：无意向类标签-无购买能力；6：无意向类标签-非本人提交；7：无意向类标签-非本人接电话；8：无意向类标签-无购买意愿；9：无意向类标签-业务范围不符；11：无意向类标签-年龄不符；12：无意向类标签-地域不符；13：无意向类标签-多次未建联；14：成交付费 可为空 list |
| call_stat | Integer |  |  | 线索通话状态 | 0:未标记 1:待跟进 2:跟进中 3:已跟进 101：已接通-有效通话 102：已接通-无效通话 103：未接通-拒接 104：未接通-无人接听 105：未接通-忙线 106：未接通-空号 107：未接通-停机 108：未接通 109：未接通-关机 可为空 |
| advertiser_id | Long | 是 |  | 广告主ID |  |
| clue_id | Long | 是 |  | 线索ID |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v2/gemini/crm/clue/clue_mark/update' \
--header 'Access-Token: 8beb118da3eecac1276b9fd91c903d73' \
--header 'Content-Type: application/json' \
--header 'Cache-Control: no-cache' \
--header 'Postman-Token: 747e8f82-bd78-e89f-9b40-7d86ee8543df' \
--header 'Cookie: apdid=968e5b13-0feb-44ad-b8cf-a5d5d52b0dd9fcba02e0c821a22c38274be8f675cb23:1620359178:1' \
--data-raw '{
  "advertiser_id": 20007234,
  "clue_id": 206866474542123330,
  "schedule_id":2,
  "call_stat": 105,
  "child_intention_id": [1,2]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | UpdateReturnData |  |  | 返回信息 |  |
| - id | Long |  |  | 更新线索的ID |  |

## 返回样例

### 返回样例 (jsonc)

```
{
   "code": 0,
   "message": "OK",
   "data": {
       "id": 206866474542123330
   },
   "request_id": "7bb6d3f2ff014b4e9354d0a2aaa9138e"
}
```
