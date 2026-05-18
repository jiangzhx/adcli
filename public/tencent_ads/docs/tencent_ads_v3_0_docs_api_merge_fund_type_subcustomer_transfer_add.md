---
title: 资金合并类型同商务管家子客间转账 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/merge_fund_type_subcustomer_transfer/add
doc_id: tencent_ads_v3_0_docs_api_merge_fund_type_subcustomer_transfer_add
source_id: tencent_ads_v3_0_docs_api_merge_fund_type_subcustomer_transfer_add
---
# 资金合并类型同商务管家子客间转账 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | merge_fund_type_subcustomer_transfer/add |
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
| account_id* | integer | 金额，单位为分 |
| amount* | integer | 转账金额，限制：大于 0，小于余额 |
| to_account_id* | integer | 子客推广账户 id |
| fund_type* | enum | 合并资金账户类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_account_merge_type_map) 可选值：{ FUND_TYPE_AD_RECHARGE, FUND_TYPE_COMPENSATE_VIRTUAL, FUND_TYPE_INTERNAL_QUOTA, FUND_TYPE_TEST_VIRTUAL, FUND_TYPE_TCC_GIFT, FUND_TYPE_SPECIAL_GIFT, FUND_TYPE_MP_GAME_DEVELOPER_WORKING_FUND, FUND_TYPE_MP_GAME_DEVELOPER_GIFT, FUND_TYPE_FLOW_SOURCE_AD_FUND, FUND_TYPE_ANDROID_ORIENTED_GIFT, FUND_TYPE_LOCATION_PROMOTION_REWARDS, FUND_TYPE_GIFT_RESTRICT, FUND_TYPE_DEBT_FIXED, FUND_TYPE_DEBT_TEMP, FUND_TYPE_SHORT_PLAY_GIFT, FUND_TYPE_GAME_CHARGE_INDIRECT_REWARDS_GIFT, FUND_TYPE_GAME_CHARGE_DIRECT_REWARDS_GIFT, FUND_TYPE_SHORT_PLAY_PUBLISHER_GIFT, FUND_TYPE_MP_GAME_SPECIAL_REWARDS_GIFT, FUND_TYPE_MINIGAME_CREDIT, FUND_TYPE_MP_GAME_PC_TARGET_GIFT, FUND_TYPE_UNSUPPORTED } |
| external_bill_no* | string | 用户侧订单 id 字段长度最小 1 字节，长度最大 16 字节 |
| memo | string | 备注信息 字段长度最小 1 字节，长度最大 64 字节 |
| pre_fetch_amount | integer | 是否获取可转账金额，0-不获取金额，直接转账 1-获取系统推荐的最大可转账金额，不进行转账 最小值 0，最大值 1 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/merge_fund_type_subcustomer_transfer/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "amount": 10000,
    "fund_type": "FUND_TYPE_AD_RECHARGE",
    "external_bill_no": "mkt-1010-xxxx-yyy",
    "memo": "转账备注",
    "pre_fetch_amount": 0
}'
curl 'https://api.e.qq.com/v3.0/merge_fund_type_subcustomer_transfer/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "amount": 10000,
    "fund_type": "FUND_TYPE_AD_RECHARGE",
    "external_bill_no": "mkt-1010-xxxx-yyy",
    "memo": "转账备注",
    "pre_fetch_amount": 0
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| fund_type | enum | 合并资金账户类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_account_merge_type_map) |
| amount | integer | 转账金额，限制：大于 0，小于余额 |
| external_bill_no | string | 用户侧订单 id |
| time | integer | 交易时间，时间戳 |
| recommend_amount | integer | 系统推荐的最大可转账金额，单位为分 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "fund_type": "FUND_TYPE_AD_RECHARGE",
        "amount": 10000,
        "external_bill_no": "mkt-1010-xxxx-yyy",
        "time": 1494910610,
        "recommend_amount": 100
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
