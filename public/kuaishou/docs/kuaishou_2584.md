---
title: 修改创意状态
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2584&menuId=3307
doc_id: kuaishou_2584
source_id: kuaishou_2584
---
# 修改创意状态

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2584 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-22T15:49:00.481Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/creative/update/status |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id | 在获取 access_token 的时候返回 |
| creative_id | Long | 是 |  | 广告创意 ID |  |
| creative_ids | Integer[] |  |  | 与原有的 creative_id 字段可以同时填，也可以只填一个 | 1.传入的创意 id 不得重复，且至少有一个;传入的创意 id 总数最多 20 个。2.put_status 为 3 时，会删除所有创意 |
| put_status | Integer | 是 |  | 操作码 | 1-投放、2-暂停、3-删除，传其他数字非法 |

## 请求样例

### 请求样例 (shell)

```
curl -X POST \
  -H 'Access-Token: 98c14f5b7967b6d6fdfb23f5' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id": 20000800,
    "creative_id ":2960188,
    "put_status":1
}' https://ad.e.kuaishou.com/rest/openapi/v1/creative/update/status
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | BatchIdResp913Snake |  |  | 创编计划、广告组、创意返回id参数 |  |
| - errors | ErrorMsg702Snake[] |  |  | 请补充描述详情 |  |
| - error_code | Integer |  |  | 请补充描述详情 |  |
| - error_msg | String |  |  | 请补充描述详情 |  |
| - creative_id | Long |  |  | 请补充描述详情 |  |
| - creative_id | Long |  |  | 请补充描述详情 |  |
| - creative_ids | Long[] |  |  | 所有修改状态成功的创意 id | 假如接口的入参 creative_id 传了值且修改状态成功，则此创意 id 也会包含在返回值 creative_ids 里面 |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {}
}
```
