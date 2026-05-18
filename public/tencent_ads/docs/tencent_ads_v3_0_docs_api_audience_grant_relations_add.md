---
title: 添加人群授权 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/audience_grant_relations/add
doc_id: tencent_ads_v3_0_docs_api_audience_grant_relations_add
source_id: tencent_ads_v3_0_docs_api_audience_grant_relations_add
---
# 添加人群授权 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | audience_management,ads_management,user_actions |
| --- | --- |
| 请求地址 | audience_grant_relations/add |
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
| audience_id_list* | integer[] | 人群 id 列表，同 bm 授权时支持批量人群授权，跨 bm 授权时暂不支持批量人群授权 数组最小长度 1，最大长度 20 最小值 1，最大值 2147483647 |
| grant_type* | enum | 授权类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#audience_grant_type) 可选值：{ GRANT_TYPE_BUSINESS } |
| grant_spec* | struct | 人群授权信息 |
| grant_to_business_spec | struct | 授权给商务管家账号认领的账号的授权信息 |
| grant_business_id* | integer | 商务管家账号 最小值 0，最大值 2147483647 |
| grant_scope_type* | enum | 人群授权的范围，仅支持 'GRANT_SCOPE_TYPE_ACCOUNT' 枚举值。授权给 BM 内全部账号功能不再在此接口中支持实现，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#audience_grant_scope_type) 可选值：{ GRANT_SCOPE_TYPE_BUSINESS, GRANT_SCOPE_TYPE_ACCOUNT } |
| grant_business_permission | struct | 授权给商务管家账号认领所有广告账号的权限信息 |
| grant_permission_type_list* | enum[] | 人群授权权限列表，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#audience_grant_permission_type) 可选值：{ GRANT_PERMISSION_TYPE_TARGET, GRANT_PERMISSION_TYPE_INSIGHT } |
| grant_account_permission | struct[] | 授权给指定账号的权限信息 |
| account_id* | integer | 广告主帐号 id，（直客和子客） |
| grant_permission_type_list* | enum[] | 人群授权权限列表，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#audience_grant_permission_type) 可选值：{ GRANT_PERMISSION_TYPE_TARGET, GRANT_PERMISSION_TYPE_INSIGHT } |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/audience_grant_relations/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "audience_id_list": [
        12,
        23
    ],
    "grant_type": "GRANT_TYPE_BUSINESS",
    "grant_spec": {
        "grant_to_business_spec": {
            "grant_business_id": 12312,
            "grant_scope_type": "GRANT_SCOPE_TYPE_ACCOUNT",
            "grant_account_permission": [
                {
                    "account_id": 20458,
                    "grant_permission_type_list": [
                        "GRANT_PERMISSION_TYPE_TARGET",
                        "GRANT_PERMISSION_TYPE_INSIGHT"
                    ]
                },
                {
                    "account_id": 20345,
                    "grant_permission_type_list": [
                        "GRANT_PERMISSION_TYPE_TARGET",
                        "GRANT_PERMISSION_TYPE_INSIGHT"
                    ]
                }
            ]
        }
    }
}'
curl 'https://api.e.qq.com/v3.0/audience_grant_relations/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "audience_id_list": [
        12,
        23
    ],
    "grant_type": "GRANT_TYPE_BUSINESS",
    "grant_spec": {
        "grant_to_business_spec": {
            "grant_business_id": 12312,
            "grant_scope_type": "GRANT_SCOPE_TYPE_ACCOUNT",
            "grant_account_permission": [
                {
                    "account_id": 20458,
                    "grant_permission_type_list": [
                        "GRANT_PERMISSION_TYPE_TARGET",
                        "GRANT_PERMISSION_TYPE_INSIGHT"
                    ]
                },
                {
                    "account_id": 20345,
                    "grant_permission_type_list": [
                        "GRANT_PERMISSION_TYPE_TARGET",
                        "GRANT_PERMISSION_TYPE_INSIGHT"
                    ]
                }
            ]
        }
    }
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
