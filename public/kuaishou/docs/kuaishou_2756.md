---
title: 智能托管删除接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2756&menuId=3491
doc_id: kuaishou_2756
source_id: kuaishou_2756
---
# 智能托管删除接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2756 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T02:44:05.152Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/hosting/project/delete |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | advertiser_id |  |
| project_ids | Long[] | 是 | 1,2 | 项目id集合 |  |

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
