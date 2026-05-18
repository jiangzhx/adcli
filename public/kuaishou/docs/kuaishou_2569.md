---
title: 修改广告计划状态
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2569&menuId=3291
doc_id: kuaishou_2569
source_id: kuaishou_2569
---
# 修改广告计划状态

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2569 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-22T15:46:25.304Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/campaign/update/status |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| campaign_id | Long | 是 | 1 | 广告计划 ID |  |
| put_status | Integer | 是 | 1 | 要修改的状态 | `1-投放、2-暂停、3-删除，传其他数字非法。.put_status 为 3 时，会删除广告计划，和计划下的所有广告组，程序化创意，创意、搜索关键词 |
| campaign_ids | Long[] |  | [1] | 与原有的 campaign_id 字段可以同时填，也可以只填一个 | `1.传入的计划 id 不得重复，且至少有一个;传入的 campaign_id 总数最多 20 个。 |
| advertiser_id | Long | 是 | 1 | 广告主 ID | `在获取 access_token 的时候返回 |

## 请求样例

### 请求样例 (shell)

```
curl -X POST \
  -H 'Access-Token: 98c14f5b7967b6d6fdfb23f5' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id": 20000800,
    "campaign_id ":2960188,
    "put_status":1
}' https://ad.e.kuaishou.com/rest/openapi/v1/campaign/update/status
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | code |  |
| message | String |  | ok | msg |  |
| data | UpdateCampaignData |  | 1 | data |  |
| - campaign_id | Long |  | 1 | 广告计划id |  |
| - campaign_ids | Long[] |  | [1,2] | 广告计划id集合 | 假如接口的入参 campaign_id 传了值且修改状态成功，则此广告计划 id 也会包含在返回值 campaign_ids 里面。 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {}
}
```
