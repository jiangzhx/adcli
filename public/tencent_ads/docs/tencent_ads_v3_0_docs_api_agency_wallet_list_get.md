---
title: 获取代理商创建的共享钱包信息列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/agency_wallet_list/get
doc_id: tencent_ads_v3_0_docs_api_agency_wallet_list_get
source_id: tencent_ads_v3_0_docs_api_agency_wallet_list_get
---
# 获取代理商创建的共享钱包信息列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | agency_wallet_list/get |
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
| mdm_id | integer | 主体 id |
| wallet_id | integer | 共享钱包 id |
| page* | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size* | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/agency_wallet_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>'
curl -v -G 'https://api.e.qq.com/v3.0/agency_wallet_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| wallet_list | struct[] | 返回信息列表 |
| owner_id | integer | 代理商 id |
| owner_name | string | 代理商名称 |
| wallet_id | integer | 共享钱包 id |
| wallet_name | string | 共享钱包名称 |
| mdm_id | integer | 主体 id |
| mdm_name | string | 主体名称 |
| total_balance | integer | 余额，单位为分 |
| bind_advertiser_cnt | integer | 关联账户数 |
| tag_list | string[] | 共享钱包标签 |
| balance_info_list | struct[] | 资金信息 |
| fund_type | enum | 资金账户类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_account_type_map) |
| balance | integer | 余额，单位为分 |
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
        "wallet_list": [
            {
                "owner_uid": 78384,
                "owner_name": "名字",
                "mdm_id": 51316448,
                "mdm_name": "腾讯科技(北京)有限公司",
                "wallet_id": 240001,
                "wallet_name": "钱包名字",
                "tag_list": [
                    "钱包 tag1",
                    "钱包 tag2"
                ],
                "bind_advertiser_cnt": 4,
                "total_balance": 120,
                "balance_info_list": [
                    {
                        "fund_type": "FUND_TYPE_CASH",
                        "balance": 0
                    },
                    {
                        "fund_type": "FUND_TYPE_GIFT",
                        "balance": 110
                    },
                    {
                        "fund_type": "FUND_TYPE_SHARED",
                        "balance": 10
                    }
                ]
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
