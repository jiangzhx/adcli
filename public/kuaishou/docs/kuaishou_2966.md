---
title: 删除屏蔽评论信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2966&menuId=3717
doc_id: kuaishou_2966
source_id: kuaishou_2966
---
# 删除屏蔽评论信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2966 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:09:37.971Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/comment/shield_info/delete |
| httpMethod | POST |
| httpContentType | FORM |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123 | 广告主id |  |
| shield_info_id_list | Long[] | 是 | [1, 2, 3] | 屏蔽信息 id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "shield_info_id_list": [1, 2, 3],
    "advertiser_id": 98
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 错误信息 |  |
| request_id | String |  |  | 请求ID |  |
| data | NullData |  |  | 返回结果 | 空 |
| - null | String |  |  | 空值 | 该部分内容为空 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "request_id": "997a93fead6b4ddbb5a0940abd3ea17f",
    "data": {}
}
```
