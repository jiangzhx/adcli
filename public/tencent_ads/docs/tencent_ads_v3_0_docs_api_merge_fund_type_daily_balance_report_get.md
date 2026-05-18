---
title: 获取资金合并类型资金账户日结明细 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/merge_fund_type_daily_balance_report/get
doc_id: tencent_ads_v3_0_docs_api_merge_fund_type_daily_balance_report_get
source_id: tencent_ads_v3_0_docs_api_merge_fund_type_daily_balance_report_get
---
# 获取资金合并类型资金账户日结明细 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | merge_fund_type_daily_balance_report/get |
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
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| date_range* | struct | 日期范围，单次查询跨度不能超过 10 天，支持两年内的数据查询 |
| start_date* | string | 开始日期，日期格式：YYYY-MM-DD，且小于等于 end_date 字段长度为 10 字节 |
| end_date* | string | 结束日期，日期格式：YYYY-MM-DD，且大于等于 begin_date 字段长度为 10 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/merge_fund_type_daily_balance_report/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'date_range={
    "start_date": "2024-05-10",
    "end_date": "2024-06-10"
}' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/merge_fund_type_daily_balance_report/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'date_range={
    "start_date": "2024-05-10",
    "end_date": "2024-06-10"
}' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| account_id | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| fund_type | enum | 合并资金账户类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_account_merge_type_map) |
| time | integer | 记录对应的时间，时间戳 |
| deposit | integer | 总存入，单位为分 |
| paid | integer | 总支出，单位为分 |
| trans_in | integer | 总转入，单位为分 |
| trans_out | integer | 总转出，单位为分 |
| credit_modify | integer | 授信调整，单位为分 |
| balance | integer | 日终结余，单位为分。如果无法获取余额则不返回本字段。 |
| preauth_balance | integer | 预授权额度，单位为分 |
| preauth_out_pay | integer | 预授权消耗，单位为分 |
| preauth_in_refund | integer | 预授权退回，单位为分 |
| acct_out_pay | integer | 非预授权消耗，单位为分 |
| acct_out_pay_share | integer | 账户总消耗，单位为分 |
| share_out_pay | integer | 共享钱包消耗，单位为分 |
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
        "list": [
            {
                "account_id": "<ACCOUNT_ID>",
                "fund_type": "FUND_TYPE_CASH",
                "deposit": 100000,
                "paid": 50000,
                "trans_in": 1100000,
                "trans_out": 55000,
                "credit_modify": 400000,
                "balance": 300000,
                "preauth_balance": 11,
                "preauth_out_pay": 2,
                "preauth_in_refund": 20,
                "preauth_out_others": 30,
                "acct_out_pay_share": 50,
                "share_out_pay": 10
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
