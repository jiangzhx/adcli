---
title: 获取历史上有消耗的转化目标
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3192&menuId=3941
doc_id: kuaishou_3192
source_id: kuaishou_3192
---
# 获取历史上有消耗的转化目标

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3192 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2025-02-17T13:51:14.482Z |

## 概述

注意 1./rest/openapi/gw/dsp/account/incExplore/add仅能添加获取历史上有消耗的转化目标

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/account/incExplore/ocpxTypes |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 账号id |  |

## 请求样例

### 请求样例 (javascript)

```
{
  "advertiser_id": 123456
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| error_msg | String |  |  | 具体报错信息 |  |
| message | String |  |  | 状态描述信息 |  |
| code | Integer |  |  | 状态码 |  |
| data | GwOcpxTypeDescriptionData |  |  | 历史上有消耗的转化目标 |  |
| - not_uax | GwOcpxTypeDescription[] |  |  | 历史上没有开启uax有消耗的转化目标 |  |
| - deep_conversion_type | Integer |  |  | 深度转化目标 |  |
| - deep_conversion_type_name | String |  |  | 深度转化目标名称 |  |
| - ocpx_action_type | Integer |  |  | 转化目标 |  |
| - ocpx_action_type_name | String |  |  | 转化目标名称 |  |
| - uax | GwOcpxTypeDescription[] |  |  | 历史上开启uax有消耗的转化目标 |  |
| - deep_conversion_type | Integer |  |  | 深度转化目标 |  |
| - deep_conversion_type_name | String |  |  | 深度转化目标名称 |  |
| - ocpx_action_type | Integer |  |  | 转化目标 |  |
| - ocpx_action_type_name | String |  |  | 转化目标名称 |  |

## 返回样例

### 返回样例 (javascript)

```
{
    "code": 0,
    "data": {
        "not_uax": [
            {
                "ocpx_action_type_name": "行为数",
                "deep_conversion_type": 0,
                "deep_conversion_type_name": "",
                "ocpx_action_type": 2
            },
            {
                "ocpx_action_type_name": "表单转化",
                "deep_conversion_type": 0,
                "deep_conversion_type_name": "",
                "ocpx_action_type": 53
            }
        ],
        "uax": [
            {
                "ocpx_action_type_name": "行为数",
                "deep_conversion_type": 0,
                "deep_conversion_type_name": "",
                "ocpx_action_type": 2
            },
            {
                "ocpx_action_type_name": "表单转化",
                "deep_conversion_type": 0,
                "deep_conversion_type_name": "",
                "ocpx_action_type": 53
            }
        ]
    },
    "message": "OK",
    "request_id": "ENKAgICg1OWcChjuDCD79aKh0TIo39mfuAc="
}
```
