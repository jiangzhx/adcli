---
title: 新建共享钱包 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wallet_create/add
doc_id: tencent_ads_v3_0_docs_api_wallet_create_add
source_id: tencent_ads_v3_0_docs_api_wallet_create_add
---
# 新建共享钱包 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | wallet_create/add |
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
| account_id* | integer | 代理商 id |
| mdm_id* | integer | 主体 id，主体 id |
| wallet_name* | string | 钱包名称 |
| tag_list | string[] | 共享钱包标签 数组最大长度 5 |
| contact_info_list | struct[] | 监控预警联系人信息 数组最小长度 1，最大长度 10 |
| avatar_name* | string | 联系人名称 |
| contact* | string | 联系电话 |
| status* | integer | 联系人状态，1-启用 0-删除 |
| contact_notify_condition | struct | 监控预警信息 |
| status_desc* | string | 启用状态描述，1-启用中, 2-已停用 |
| status* | integer | 启用状态，1-启用 2-停用 |
| condition_list* | struct[] | 监控预警场景类型 数组最小长度 1，最大长度 3 |
| event_type* | integer | 场景枚举，1-钱包余额偏低 2-钱包余额不足 3-钱包消耗过快 (需要设置触发金额 trigger_amount) |
| event_desc* | string | 场景描述 |
| trigger_amount | integer | 触发金额，单位为分 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/wallet_create/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "mdm_id": 63444700,
    "account_id": "<ACCOUNT_ID>",
    "wallet_name": "测试钱包",
    "tag_list": [
        "tag-1",
        "tga-2"
    ],
    "contact_info_list": [
        {
            "avatar_name": "contact-1",
            "contact": "18200000000"
        },
        {
            "avatar_name": "contact-2",
            "contact": "18200000001"
        }
    ],
    "contact_notify_condition": {
        "status": 1,
        "condition_list": [
            {
                "event_type": 1
            },
            {
                "event_type": 3,
                "trigger_amount": 10
            }
        ]
    }
}'
curl 'https://api.e.qq.com/v3.0/wallet_create/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "mdm_id": 63444700,
    "account_id": "<ACCOUNT_ID>",
    "wallet_name": "测试钱包",
    "tag_list": [
        "tag-1",
        "tga-2"
    ],
    "contact_info_list": [
        {
            "avatar_name": "contact-1",
            "contact": "18200000000"
        },
        {
            "avatar_name": "contact-2",
            "contact": "18200000001"
        }
    ],
    "contact_notify_condition": {
        "status": 1,
        "condition_list": [
            {
                "event_type": 1
            },
            {
                "event_type": 3,
                "trigger_amount": 10
            }
        ]
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| wallet_info | struct | 钱包信息 |
| wallet_id | integer | 钱包 id，钱包账号 id |
| wallet_name | string | 钱包名称 |
| agency_id | integer | 代理商 id |
| mdm_id | integer | 主体 id，主体 id |
| tag_list | string[] | 共享钱包标签 |
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
            "wallet_id": 24150059,
            "wallet_name": "测试钱包",
            "agency_id": 78300,
            "mdm_id": 63444700,
            "tag_list": [
                "tag-1",
                "tga-2"
            ],
            "contact_info_list": [
                {
                    "avatar_name": "contact-1",
                    "contact": "18200000000"
                },
                {
                    "avatar_name": "contact-2",
                    "contact": "18200000001"
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
                        "event_type": 3,
                        "event_desc": "钱包消耗过快",
                        "trigger_amount": 10
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
