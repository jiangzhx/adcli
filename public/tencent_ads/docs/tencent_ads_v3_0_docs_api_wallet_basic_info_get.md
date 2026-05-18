---
title: 通过钱包 id 去查询共享钱包基础信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wallet_basic_info/get
doc_id: tencent_ads_v3_0_docs_api_wallet_basic_info_get
source_id: tencent_ads_v3_0_docs_api_wallet_basic_info_get
---
# 通过钱包 id 去查询共享钱包基础信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | wallet_basic_info/get |
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

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/wallet_basic_info/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'wallet_id=<WALLET_ID>'
curl -v -G 'https://api.e.qq.com/v3.0/wallet_basic_info/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'wallet_id=<WALLET_ID>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| wallet_info | struct | 返回结构 |
| agency_id | integer | 代理商 id |
| agency_name | string | 代理商名称 |
| wallet_id | integer | 钱包 id，钱包账号 id |
| wallet_name | string | 钱包名称 |
| mdm_id | integer | 主体 id，主体 id |
| mdm_name | string | 主体名称 |
| balance | integer | 余额，单位为分 |
| bind_advertiser_cnt | integer | 关联账户数 |
| binding_account_list | array | 绑定账户 id |
| tag_list | string[] | 共享钱包标签 |
| balance_info_list | struct[] | 资金信息 |
| fund_type | enum | 资金账户类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_account_type_map) |
| balance | integer | 余额，单位为分 |
| contact_info_list | struct[] | 监控预警联系人信息 |
| avatar_name | string | 联系人名称 |
| contact | string | 联系电话 |
| status | integer | 联系人状态，1-启用 0-删除 |
| contact_notify_condition | struct | 监控预警信息 |
| status_desc | string | 启用状态描述，1-启用中, 2-已停用 |
| status | integer | 启用状态，1-启用 2-停用 |
| condition_list | struct[] | 监控预警场景类型 |
| event_type | integer | 场景枚举，1-钱包余额偏低 2-钱包余额不足 3-钱包消耗过快 (需要设置触发金额 trigger_amount) |
| event_desc | string | 场景描述 |
| trigger_amount | integer | 触发金额，单位为分 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "wallet_info": {
            "wallet_id": 24111993,
            "wallet_name": "name",
            "balance": 9954999,
            "agency_id": 78384,
            "agency_name": "腾讯",
            "mdm_id": 63444781,
            "mdm_name": "mdmName",
            "tag_list": [
                "视频",
                "tag1"
            ],
            "bind_advertiser_cnt": 4,
            "binding_account_list": [
                23870009,
                23878247,
                23953986,
                23954003
            ],
            "balance_info_list": [
                {
                    "fund_type": "FUND_TYPE_CASH",
                    "balance": 9954999
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
            "contact_info_list": [
                {
                    "avatar_name": "哈哈",
                    "contact": "18262997750"
                }
            ],
            "contact_notify_condition": {
                "status": 1,
                "status_desc": "启用中",
                "condition_list": [
                    {
                        "event_type": 1,
                        "event_desc": "钱包余额偏低"
                    },
                    {
                        "event_type": 2,
                        "event_desc": "钱包余额不足"
                    },
                    {
                        "event_type": 3,
                        "event_desc": "钱包消耗过快",
                        "trigger_amount": 1100
                    }
                ]
            }
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
