---
title: 更新订单 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/ecommerce_order/update
doc_id: tencent_ads_v3_0_docs_api_ecommerce_order_update
source_id: tencent_ads_v3_0_docs_api_ecommerce_order_update
---
# 更新订单 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_insights |
| --- | --- |
| 请求地址 | ecommerce_order/update |
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
| account_id* | integer | 广告主帐号 id 对订单有所有权的直客帐号或子客帐号 |
| ecommerce_order_id* | string | 订单 id 字段长度最小 1 字节，长度最大 20 字节 |
| delivery_tracking_number | string | 快递单号，快递公司和快递单号两个参数必须同时存在 字段长度最小 1 字节，长度最大 200 字节 |
| express_company | enum | 快递公司，快递公司和快递单号两个参数必须同时存在，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#express_company) 可选值：{ UNKNOWN, SF_EXPRESS, STO, YTO, ZTO, BEST_EXPRESS, YUNDA_EXPRESS, TTK_EXPRESS, EMS, CHINA_POST_EXPRESS, JUST_IN_TIME, JD_EXPRESS, DEPPON_EXPRESS } |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/ecommerce_order/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 111111111,
    "ecommerce_order_id": "B326518663301826",
    "delivery_tracking_number": "VB40977313484",
    "express_company": "ZTO"
}'
curl 'https://api.e.qq.com/v3.0/ecommerce_order/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 111111111,
    "ecommerce_order_id": "B326518663301826",
    "delivery_tracking_number": "VB40977313484",
    "express_company": "ZTO"
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

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
