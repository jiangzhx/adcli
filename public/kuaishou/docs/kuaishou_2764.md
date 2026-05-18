---
title: 投前预估任务管理接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2764&menuId=3501
doc_id: kuaishou_2764
source_id: kuaishou_2764
---
# 投前预估任务管理接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2764 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:17:30.459Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/pre_put/predication_task/management |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| management_type | Integer | 是 | 1 | 管理类型 |  |
| predication_ids | Long[] | 是 | [23] | 投前任务ids |  |
| advertiser_id | Long | 是 | 2434343 | 广告主id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 11440033,
    "predication_ids": [60290963],
    "management_type": 1
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 响应状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | RealTaskResult |  | {} | 投前预估创建结果 |  |
| - successful | Long |  | 0 | 成功数量 |  |
| - failed | Long |  | 1 | 失败数量 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "failed": 0,
        "successful": 1
    },
    "message": "OK",
    "request_id": "0426b977221740af87a6171d8a2d623e"
}
```
