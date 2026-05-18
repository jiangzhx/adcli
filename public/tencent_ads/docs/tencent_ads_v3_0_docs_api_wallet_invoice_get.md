---
title: 共享钱包流水相关信息查询 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wallet_invoice/get
doc_id: tencent_ads_v3_0_docs_api_wallet_invoice_get
source_id: tencent_ads_v3_0_docs_api_wallet_invoice_get
---
# 共享钱包流水相关信息查询 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | wallet_invoice/get |
| 请求方法 | GET |

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
| account_id* | integer | 代理商 id |
| wallet_id_list* | string | 钱包 id 列表，以英文,号分割 |
| fund_type | enum | 资金账户类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_account_type_map) 可选值：{ FUND_TYPE_CASH, FUND_TYPE_GIFT, FUND_TYPE_SHARED, FUND_TYPE_BANK, FUND_TYPE_CREDIT_ROLL, FUND_TYPE_CREDIT_TEMPORARY, FUND_TYPE_COMPENSATE_VIRTUAL, FUND_TYPE_INTERNAL_QUOTA, FUND_TYPE_TEST_VIRTUAL } |
| date_range* | struct | 日期范围，支持两年内的数据查询,最大查询范围限制为一个月 |
| start_date* | string | 开始日期，日期格式：YYYY-MM-DD，且小于等于 end_date 字段长度为 10 字节 |
| end_date* | string | 结束日期，日期格式：YYYY-MM-DD，且大于等于 begin_date 字段长度为 10 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| primary_key | string | 上一页最后一条记录的 primary_key |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/wallet_invoice/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'wallet_id_list=2410111,24111000' \
-d 'date_range={
    "start_date": "YYYY-MM-DD",
    "end_date": "YYYY-MM-DD"
}' \
-d 'fund_type=FUND_TYPE_CASH' \
-d 'primary_key=CgdBMjAwMDAyEgU3ODM4NBoEQ0FTSCAOKiQyYzQ4MjUwZS1hYzBlLTQwZTItOGMwNS04TgzYWFmZTY3ZGYyCDI0MDc4OTM3OiQ2N2NiMzk3Ni' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/wallet_invoice/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'wallet_id_list=2410111,24111000' \
-d 'date_range={
    "start_date": "YYYY-MM-DD",
    "end_date": "YYYY-MM-DD"
}' \
-d 'fund_type=FUND_TYPE_CASH' \
-d 'primary_key=CgdBMjAwMDAyEgU3ODM4NBoEQ0FTSCAOKiQyYzQ4MjUwZS1hYzBlLTQwZTItOGMwNS04TgzYWFmZTY3ZGYyCDI0MDc4OTM3OiQ2N2NiMzk3Ni' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| account_name | string | 账户名称 |
| fund_type | enum | 资金账户类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_account_type_map) |
| time | integer | 交易时间，时间戳 |
| external_bill_no | string | 调用方订单号，需要有调用方标示前缀，须要保证在同一个广告主下唯一，不支持大写字母 |
| trade_type_ext | enum | 交易类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_trade_type_ext) |
| amount | integer | 金额，单位为分 |
| description | string | 描述信息 |
| primary_key | string | 记录主键 |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        },
        "list": [
            {
                "account_id": 24107192,
                "account_name": "测试钱包 1",
                "fund_type": "FUND_TYPE_GIFT",
                "time": 1735543102,
                "external_bill_no": "billNo-01",
                "trade_type": "CHARGE",
                "trade_type_ext": "TRANSFER_IN",
                "amount": 1,
                "description": "备注",
                "primary_key": "CgdBMjAwMDAyEMTA2MDQyNi01NlOC04OTUyLWY5ZmYwMWE4NWU3NUIHMzQ5OTE0NkoBMVCh1KqBloKMTc0MzQzMjIyNA=="
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
