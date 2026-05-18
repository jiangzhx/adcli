---
title: 更新商品信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/product_items/update
doc_id: tencent_ads_v3_0_docs_api_product_items_update
source_id: tencent_ads_v3_0_docs_api_product_items_update
---
# 更新商品信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | product_items/update |
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
| account_id* | integer | 广告主 id，如果已经升级了工作台，则填写 bm_id，有操作权限的广告主 id |
| catalog_id* | integer | 商品库 id |
| product_outer_id* | string | 广告主商品 id 字段长度最小 1 字节，长度最大 255 字节 |
| price | float | 商品价格，大于等于 0，至多 2 位小数（单位元） 最小值 0，最大值 9223372036854775807，最多保留 2 位小数 |
| sale_price | float | 商品促销价格，大于等于 0，至多 2 位小数 最小值 0，最大值 9999999999，最多保留 2 位小数 |
| price_pc | float | 商品 PC 上价格，大于等于 0，至多 2 位小数（单位元） 最小值 0，最大值 9223372036854775807，最多保留 2 位小数 |
| price_mobile | float | 商品移动上价格，大于等于 0，至多 2 位小数（单位元） 最小值 0，最大值 9223372036854775807，最多保留 2 位小数 |
| price_app | float | 商品 APP 上价格，大于等于 0，至多 2 位小数（单位元） 最小值 0，最大值 9223372036854775807，最多保留 2 位小数 |
| stock_volume | integer | 库存数 |
| discount | float | 商品折扣 最大值 9999999999，最多保留 2 位小数 |
| expiration_time | string | 商品下架时间 字段长度最小 19 字节，长度最大 20 字节 |
| product_sale_status | enum | 商品在线状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#product_sale_online_status) 可选值：{ PRODUCT_SALE_STATUS_ONLINE, PRODUCT_SALE_STATUS_OFFLINE } |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/product_items/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 111111111,
    "catalog_id": 1234,
    "product_outer_id": "xly_123",
    "price": 12.99,
    "sale_price": 12.99,
    "price_pc": 12.99,
    "price_mobile": 12.99,
    "price_app": 11.88,
    "stock_volume": 1000,
    "discount": 0.85,
    "expiration_time": 1516774131
}'
curl 'https://api.e.qq.com/v3.0/product_items/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 111111111,
    "catalog_id": 1234,
    "product_outer_id": "xly_123",
    "price": 12.99,
    "sale_price": 12.99,
    "price_pc": 12.99,
    "price_mobile": 12.99,
    "price_app": 11.88,
    "stock_volume": 1000,
    "discount": 0.85,
    "expiration_time": 1516774131
}'
```

## 应答字段

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": ""
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
