---
title: 小铃铛推送接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2803&menuId=3544
doc_id: kuaishou_2803
source_id: kuaishou_2803
---
# 小铃铛推送接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2803 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:19:25.406Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/jingleBell/share |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主userId |  |
| live_user_id | String |  |  | 主播ID |  |
| jingle_bell_id | String |  |  | 小铃铛ID |  |
| target_account_ids | Long[] |  |  | 推送目标 accountIds |  |

## 请求样例

### 示例标题 (javascript)

```
{
  "advertiser_id": 7869843,
  "live_user_id": "1743291153",
  "jingle_bell_id": "629871139803856",
  "target_account_ids": [
    139494,
    7267594
  ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 结果code码 |  |
| message | String |  |  | 错误信息 |  |
| data | JingleBellCommonResSnake |  |  | 操作结果 |  |
| - result | Integer |  | 1 | 1成功 非1失败 |  |
| - data | String |  |  | 如果失败，则是失败信息 |  |

## 返回样例

### 示例标题 (javascript)

```
{"code":0,"data":{"result":1,"hostName":"ad-c11-bjx-platform91.idchb1az1.hb1.kwaidc.com","traceId":"EL2BgIDw9pmaChidByDrhpXn4jEosIfm3As=","data":""},"message":"OK","request_id":"EL2BgIDw9pmaChidByDrhpXn4jEosIfm3As="}
```
