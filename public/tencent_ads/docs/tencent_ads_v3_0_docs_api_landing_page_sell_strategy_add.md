---
title: 短剧售卖策略-创建售卖策略 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/landing_page_sell_strategy/add
doc_id: tencent_ads_v3_0_docs_api_landing_page_sell_strategy_add
source_id: tencent_ads_v3_0_docs_api_landing_page_sell_strategy_add
---
# 短剧售卖策略-创建售卖策略 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | landing_page_sell_strategy/add |
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
| strategy_name* | string | 策略名称 字段长度最小 1 字节，长度最大 60 字节 |
| episode_price* | float | 单集价格，支持填写 >= 0.01 的小数，精确到 0.01，单位元 最小值 0，最大值 999999，最多保留 2 位小数 |
| min_recharge_tier* | float | 最低充值档位，支持填写 >= 0.01 的小数，精确到 0.01，单位元 最小值 0，最大值 999999，最多保留 2 位小数 |
| recharge_num* | integer | 起充集数，支持填写 >= 0 的整数 最小值 0，最大值 999999 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/landing_page_sell_strategy/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
curl 'https://api.e.qq.com/v3.0/landing_page_sell_strategy/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| strategy_id | integer | 策略 id |
| strategy_name | string | 策略名称 |
| strategy_type | string | 策略类型，当前枚举值：SELL |
| strategy_status | integer | 策略状态，0：无效，1：有效 |
| episode_price | float | 单集价格，支持填写 >= 0.01 的小数，精确到 0.01，单位元 |
| min_recharge_tier | float | 最低充值档位，支持填写 >= 0.01 的小数，精确到 0.01，单位元 |
| recharge_num | integer | 起充集数，支持填写 >= 0 的整数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "account_id": "<ACCOUNT_ID>"
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
