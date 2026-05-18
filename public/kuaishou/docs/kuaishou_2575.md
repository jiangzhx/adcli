---
title: 修改广告组状态
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2575&menuId=3298
doc_id: kuaishou_2575
source_id: kuaishou_2575
---
# 修改广告组状态

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2575 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-22T15:47:40.423Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/ad_unit/update/status |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| put_status | Integer | 是 |  | 操作码 | 1-投放、2-暂停、3-删除，传其他数字非法 |
| unit_id | Long | 是 |  | 广告组 ID |  |
| unit_ids | Integer[] | 是 |  | 与原有的 unit_id 字段可以同时填，也可以只填一个 | 1.传入的广告组 id 不得重复，且至少有一个;传入的广告组 id 总数最多 10 个。2.put_status 为 3 时，会删除广告组，广告组下的所有程序化创意，创意 |

## 请求样例

### 请求样例 (shell)

```
curl -X POST \
  -H 'Access-Token: 98c14f5b7967b6d6fdfb23f5' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id": 20000800,
    "unit_id ":2960188,
    "put_status":1
}' https://ad.e.kuaishou.com/rest/openapi/v1/ad_unit/update/status
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | BatchIdRespSnake |  |  | 创编计划、广告组、创意返回id参数 |  |
| - unit_ids | Long[] |  |  | 所有修改状态成功的广告组 id | 假如接口的入参 unit_id 传了值且修改状态成功，则此广告组 id 也会包含在返回值 unit_ids 里面。 |
| - errors | ErrorMsgSnake[] |  |  | 错误详情 |  |
| - id | Long |  |  | id |  |
| - error_msg | String |  |  | 错误信息 |  |
| - unit_id | Long |  |  | 1 |  |
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
