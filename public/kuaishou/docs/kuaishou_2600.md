---
title: 快手号授权接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2600&menuId=3324
doc_id: kuaishou_2600
source_id: kuaishou_2600
---
# 快手号授权接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2600 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:23:25.778Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/native/auth/save |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| user_id | Long |  |  | 授权对应的的快手号id |  |
| valid_type | String | 是 |  | 授权类型，1固定时间，2不限时间。蓝V和普通快手号授权必填 |  |
| valid_start_time | Long |  |  | 授权开始时间，毫秒级时间戳 |  |
| valid_end_time | Long |  |  | 授权结束时间，毫秒级时间戳 |  |
| kol_user_type | Integer |  |  | 1代表普通快手号，2蓝V服务号，备注：不填默认蓝v服务号 |  |
| advertiser_id | Long | 是 |  | 广告主ID |  |
| batch_user_ids | Long[] | 是 |  | 批量快手号id，一次最多添加10个。普通快手号和蓝V授权时填写 |  |
| ad_social_order_ids | String[] |  |  | 批量聚星订单，聚星直播达人授权时填写，最多支持10个 |  |
| batch_kwai_ids | String[] |  |  | 批量自定义快手号id |  |
| sync_bind_type | Integer |  |  | 同步授权子号 |  |

## 请求样例

### 示例标题 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/native/auth/save' \
--header 'access-token: xxxxxxxxxxxxxxxxx' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": xxx,
    "kol_user_type": 1,
    "valid_type": 2,
    "batch_user_ids": [
        111,222
    ]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 错误信息 |  |
| data | KwaiUserAuthorizeResultSnake[] |  |  | 批量授权结果 |  |
| - auth_id | Long |  |  | 授权成功后的唯一id，授权失败时为空 |  |
| - user_id | Long |  |  | 授权对应的的快手号id |  |
| - message | String |  |  | 错误信息 |  |
| - ad_social_order_id | String |  |  | 聚星订单ID |  |
| - kwai_id | String |  |  | 当请求参数传递batch_kwai_ids时，该字段返回授权成功自定义快手号，此时注意保存user_id数值，其他接口当前仅支持传递user_id |  |

## 返回样例

### 示例标题 (javascript)

```
{
    "code": 0,
    "data": [
        {
            "auth_id": null,
            "user_id": 111,
            "message": "用户111已存在蓝V服务号授权"
        },
        {
            "auth_id": 3946137070903615,
            "user_id": 222,
            "message": null
        }
    ],
    "message": "OK",
    "request_id": "ELiAgICQhaayChjEDiCg2o7-kTEo3Ovq3Aw="
}
```
