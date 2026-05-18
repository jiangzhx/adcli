---
title: 发起代理商与钱包之间转账 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wallet_transfer/add
doc_id: tencent_ads_v3_0_docs_api_wallet_transfer_add
source_id: tencent_ads_v3_0_docs_api_wallet_transfer_add
---
# 发起代理商与钱包之间转账 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | wallet_transfer/add |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，仅能填写代理商 id |
| to_account_id* | integer | 钱包账号 id |
| fund_type* | enum | 资金账户类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_account_type_map) 可选值：{ FUND_TYPE_CASH, FUND_TYPE_GIFT, FUND_TYPE_SHARED, FUND_TYPE_BANK, FUND_TYPE_CREDIT_ROLL, FUND_TYPE_CREDIT_TEMPORARY, FUND_TYPE_COMPENSATE_VIRTUAL, FUND_TYPE_INTERNAL_QUOTA, FUND_TYPE_TEST_VIRTUAL } |
| amount* | integer | 金额，单位为分，最小值 500000，最大值 2000000000 |
| transfer_type* | string | 转账类型，转账类型,当值为 AGENCY_TO_WALLET 时代表代理商转账给钱包，当值为 WALLET_TO_AGENCY 时代表钱包转账给代理商 可选值：{ WALLET_TO_AGENCY, AGENCY_TO_WALLET } |
| transfer_try_best | integer | 是否尽可能进行转账操作，当可转账金额小于预期转账金额时，尽可能转账表示能转多少转多少（可能小于预期转账金额），否则可转账金额不足时转账失败,只针对 WALLET_TO_AGENCY 转账类型生效，不传该参数默认为尽可能转账类型：0-根据实际金额进行转账类型，1-尽可能转账类型 最小值 0，最大值 1 |
| external_bill_no | string | 调用方订单号，需要有调用方标示前缀，须要保证在同一个广告主下唯一，不支持大写字母 字段长度最小 10 字节，长度最大 35 字节 |
| memo | string | 备注信息 字段长度最小 1 字节，长度最大 64 字节 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/wallet_transfer/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "to_account_id": "wallet_id",
    "fund_type": "FUND_TYPE_GIFT",
    "amount": 100000,
    "transfer_type": "AGENCY_TO_WALLET",
    "external_bill_no": "gdt-123456",
    "memo": "代理商转账钱包"
}'
curl 'https://api.e.qq.com/v3.0/wallet_transfer/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "to_account_id": "wallet_id",
    "fund_type": "FUND_TYPE_GIFT",
    "amount": 100000,
    "transfer_type": "AGENCY_TO_WALLET",
    "external_bill_no": "gdt-123456",
    "memo": "代理商转账钱包"
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| fund_type | enum | 资金账户类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_account_type_map) |
| amount | integer | 金额，单位为分 |
| external_bill_no | string | 调用方订单号，需要有调用方标示前缀，须要保证在同一个广告主下唯一，不支持大写字母 |
| time | integer | 交易时间的时间戳 |
| is_repeated | boolean | 是否重复转账，false：不是，true：是 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "fund_type": "FUND_TYPE_GIFT",
        "amount": 100000,
        "time": 1735195945,
        "external_bill_no": "gdt-123456",
        "is_repeated": false
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
