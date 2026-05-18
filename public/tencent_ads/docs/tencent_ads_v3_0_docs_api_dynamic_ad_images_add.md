---
title: 创建用于广告投放的动态广告图片 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_images/add
doc_id: tencent_ads_v3_0_docs_api_dynamic_ad_images_add
source_id: tencent_ads_v3_0_docs_api_dynamic_ad_images_add
---
# 创建用于广告投放的动态广告图片 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | dynamic_ad_images/add |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| product_catalog_id* | integer | 商品目录 id 最小值 0，最大值 2147483647 |
| product_mode* | enum | 标明适用的动态商品广告类型，SINGLE 表示适用于 SDPA，MULTIPLE 表示适用于 MDPA，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_product_mode) 可选值：{ SINGLE, MULTIPLE } |
| product_source* | string | ，product_mode 为 SINGLE 时，需传入商品 id ； product_mode 为 MULTIPLE 时，需传入商品系列 id 字段长度最小 1 字节，长度最大 128 字节 |
| dynamic_ad_template_size* | enum | 模板使用尺寸，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#dynamic_ad_template_size) 可选值：{ SIZE_1280_720, SIZE_1080_1920, SIZE_1000_560, SIZE_960_540, SIZE_960_334, SIZE_960_274, SIZE_900_500, SIZE_800_800, SIZE_800_640, SIZE_800_450, SIZE_720_1280, SIZE_640_316, SIZE_640_960, SIZE_640_800, SIZE_640_360, SIZE_640_1136, SIZE_582_166, SIZE_498_280, SIZE_480_360, SIZE_480_320, SIZE_480_270, SIZE_465_230, SIZE_354_222, SIZE_240_180, SIZE_230_152, SIZE_147_147, SIZE_540_276 } |
| dynamic_ad_template_id* | integer | 动态商品模板 id 最小值 0，最大值 2147483647 |
| image_matting_enabled | boolean | 是否使用商品抠图功能 可选值：{ true, false } 默认值：false |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/dynamic_ad_images/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 123,
    "product_catalog_id": 1,
    "product_mode": "MULTIPLE",
    "product_source": "123",
    "dynamic_ad_template_size": "SIZE_1280_720",
    "dynamic_ad_template_id": 123456
}'
curl 'https://api.e.qq.com/v3.0/dynamic_ad_images/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 123,
    "product_catalog_id": 1,
    "product_mode": "MULTIPLE",
    "product_source": "123",
    "dynamic_ad_template_size": "SIZE_1280_720",
    "dynamic_ad_template_id": 123456
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
        "image_id": "<IMAGE_ID>"
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
