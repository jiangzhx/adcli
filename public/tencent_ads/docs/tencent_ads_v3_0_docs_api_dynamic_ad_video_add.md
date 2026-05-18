---
title: 创建用于广告投放的动态广告视频 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_video/add
doc_id: tencent_ads_v3_0_docs_api_dynamic_ad_video_add
source_id: tencent_ads_v3_0_docs_api_dynamic_ad_video_add
---
# 创建用于广告投放的动态广告视频 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | dynamic_ad_video/add |
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
| account_id* | integer | 广告主 id，有操作权限的广告主 id |
| product_catalog_id* | integer | 商品目录 id |
| product_mode* | enum | 标明适用的动态商品广告类型，SINGLE 表示适用于 SDPA，MULTIPLE 表示适用于 MDPA, 当 dynamic_ad_template_id 传入的模板为 MDPA 视频模板时，则该字段要求强制传 MULTIPLE，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_product_mode) 可选值：{ SINGLE, MULTIPLE } |
| product_source* | string | 动态商品广告所使用的商品信息，可以填入商品系列 id 或者商品 id，优先使用 product_outer_id 或 product_series_id 字段长度最小 1 字节，长度最大 128 字节 |
| product_outer_id | string | 商品 id，传入该参数则不从 product_source 参数读取商品 id |
| product_series_id | integer | 商品系列 id，传入该参数则不从 product_source 参数读取商品系列 id |
| video_max_duration | integer | 视频素材最大时长，单位为秒，最小时长为 1 秒，最大时长为 240 秒 最小值 1，最大值 240 |
| dynamic_ad_template_id* | integer | 动态商品模板 id |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/dynamic_ad_video/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
curl 'https://api.e.qq.com/v3.0/dynamic_ad_video/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| video_id | string | 视频 id |
| video_preview_image_url | string | 视频封面图 url |
| video_preview_image_id | integer | 视频封面图 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": ""
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
