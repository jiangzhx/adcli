---
title: 进行图片处理 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/image_processing/add
doc_id: tencent_ads_v3_0_docs_api_image_processing_add
source_id: tencent_ads_v3_0_docs_api_image_processing_add
---
# 进行图片处理 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | image_processing/add |
| 请求方法 | POST |
| Content-Type | application/json |

## 全局参数

全局参数是指每一个接口都需要使用到的参数。详情[参考](https://developers.e.qq.com/v3.0/pages/send_request)，代码案例[参考](https://developers.e.qq.com/v3.0/pages/send_request)。

| 参数名称 | 参数类型 |
| --- | --- |
| access_token | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/docs/start/authorization)章节 |
| timestamp | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。 MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2017-05-15 17:21:59 |
| nonce | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性 |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id | integer | account_id |
| organization_id | integer | account_id 或 organization_id 传其中一个即可 |
| image_id* | string | 图片 id 字段长度最小 1 字节，长度最大 64 字节 |
| operation_type* | string | 操作类型 |
| operation_spec* | struct | 处理操作信息 |
| resize_spec | struct | 缩放信息，当且仅当 operation_type = OPERATION_TYPE_RESIZE 时,可填且必填 |
| width* | integer | ，缩放后的矩形宽度，单位 px 最小值 1，最大值 4000 |
| height* | integer | ，缩放后的矩形高度，单位 px 最小值 1，最大值 4000 |
| file_size_max* | integer | ，操作后的图片大小的最大限制，单位 B(Byte) 可选范围：128-102400 最小值 128，最大值 102400 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/image_processing/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "image_id": "4421578",
    "operation_type": "OPERATION_TYPE_RESIZE",
    "operation_spec": {
        "resize_spec": {
            "width": 800,
            "height": 800
        }
    },
    "file_size_max": 102400
}'
curl 'https://api.e.qq.com/v3.0/image_processing/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "image_id": "4421578",
    "operation_type": "OPERATION_TYPE_RESIZE",
    "operation_spec": {
        "resize_spec": {
            "width": 800,
            "height": 800
        }
    },
    "file_size_max": 102400
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| image_id | string | 图片 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "image_id": "4421578"
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
