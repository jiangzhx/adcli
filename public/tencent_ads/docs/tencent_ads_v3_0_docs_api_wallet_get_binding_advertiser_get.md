---
title: 查询单个共享钱包下的关联账户信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wallet_get_binding_advertiser/get
doc_id: tencent_ads_v3_0_docs_api_wallet_get_binding_advertiser_get
source_id: tencent_ads_v3_0_docs_api_wallet_get_binding_advertiser_get
---
# 查询单个共享钱包下的关联账户信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | wallet_get_binding_advertiser/get |
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
| wallet_id* | integer | 钱包 id，钱包账号 id |
| page* | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size* | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/wallet_get_binding_advertiser/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'wallet_id=<WALLET_ID>' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/wallet_get_binding_advertiser/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'wallet_id=<WALLET_ID>' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| wallet_binding_account_list | struct[] | 返回信息列表 |
| uid | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| uname | string | 账户名称 |
| advertiser_status | string | 账户状态 1-有效 2-待审核 3-审核不通过 4-封停 19-准备中 21-冻结 |
| bind_status | string | 绑定状态 1-已解绑 2-绑定中 |
| bind_time | integer | 绑定时间 |
| create_time | integer | 开户时间 |
| yesterday_cost | integer | 昨日消耗，单位为分 |
| total_balance | integer | 余额，单位为分 |
| today_cost | integer | 今日消耗，单位为分 |
| kframe | string | K 框 |
| balance_info_list | struct[] | 资金信息 |
| fund_type | enum | 资金账户类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_account_type_map) |
| balance | integer | 余额，单位为分 |
| industry_id | string | 广告主行业 id |
| industry_name | string | 广告主行业 |
| advertiser_daily_budget | integer | 账户日预算 |
| identity_check | boolean | 身份验证状态，true=通过 false=不通过 |
| deposit_check | boolean | 保证金状态，true=通过 false=不通过 |
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
        "wallet_binding_account_list": [
            {
                "kframe": "k2_frame",
                "wallet_id": 24111993,
                "uid": 23870009,
                "uname": "腾讯科技(北京)有限公司",
                "bind_status": 2,
                "advertiser_status": 1,
                "create_time": 1701136120,
                "bind_time": 1734422848,
                "total_balance": 900,
                "balance_info_list": [
                    {
                        "fund_type": "FUND_TYPE_CASH",
                        "balance": 900
                    },
                    {
                        "fund_type": "FUND_TYPE_GIFT",
                        "balance": 0
                    },
                    {
                        "fund_type": "FUND_TYPE_SHARED",
                        "balance": 0
                    }
                ],
                "yesterday_cost": 0,
                "today_cost": 0,
                "advertiser_daily_budget": 1000000,
                "industry_id": 21474839281,
                "industry_name": "房地产开发商",
                "identity_check": true,
                "deposit_check": false
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
