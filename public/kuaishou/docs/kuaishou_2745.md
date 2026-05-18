---
title: 一键复苏关闭
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2745&menuId=3480
doc_id: kuaishou_2745
source_id: kuaishou_2745
---
# 一键复苏关闭

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2745 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:14:15.307Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/unit/explore/recovery/stop |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 1 | 账户id |  |
| unit_id | Long | 是 | 1 | 广告组id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 123,
    "unit_id": 123456
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 状态码 |  |
| message | String |  |  | 错误信息 |  |
| data | GatewayExploreDataResult |  |  | 返回结果 |  |
| - unit_id | Long |  | 1 | 广告组id，操作成功后返回，否则返回空 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "unit_id": 123456
    },
    "message": "OK",
    "request_id": "8f7b123c0dff48fb8ee7c025eb094d80"
}
```
