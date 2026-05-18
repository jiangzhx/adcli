---
title: 智能托管状态更新
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2755&menuId=3490
doc_id: kuaishou_2755
source_id: kuaishou_2755
---
# 智能托管状态更新

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2755 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T02:43:57.648Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/hosting/project/update/put_status |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | advertiser_id |  |
| project_ids | Long[] | 是 |  | 项目id集合 |  |
| put_status | Integer | 是 |  | 本接口只能操作启停，不能删除。也不能操作删除数据 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | code |  |
| message | String |  |  | message |  |
| data | AdHostingUpdatePutStatusResultForGateway |  |  | data |  |
| - invalid_project_ids | Long[] |  |  | 无效的projectIds，比如数字不正确或者不属于当前用户等。 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK"
}
```
