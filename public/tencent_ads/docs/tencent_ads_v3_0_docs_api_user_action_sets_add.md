---
title: 创建用户行为数据源 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/user_action_sets/add
doc_id: tencent_ads_v3_0_docs_api_user_action_sets_add
source_id: tencent_ads_v3_0_docs_api_user_action_sets_add
---
# 创建用户行为数据源 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,audience_management,user_actions |
| --- | --- |
| 请求地址 | user_action_sets/add |
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
| type* | enum | 用户行为源类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#am_user_action_set_type) 可选值：{ WEB, ANDROID, IOS, OFFLINE, WECHAT, WECHAT_MINI_PROGRAM, WECHAT_MINI_GAME, HARMONY } |
| mobile_app_id | integer | 应用 id，IOS：App Store id ； ANDROID：应用宝 id，type=ANDROID 或 IOS 时必填 |
| wechat_app_id | string | 微信 AppID，当 type = WECHAT 或 WECHAT_MINI_PROGRAM 或 WECHAT_MINI_GAME 时必填 字段长度最小 2 字节，长度最大 64 字节 |
| app_id_str | string | 鸿蒙 AppID，当 type = HARMONY 时必填 字段长度最小 2 字节，长度最大 64 字节 |
| name | string | 用户行为源名称，当 type=WEB 时必填，当 type=ANDROID 或 IOS 时，若未填写该字段，则默认通过 mobile_app_id 获取名称 字段长度最小 1 字节，长度最大 32 字节 |
| description | string | 用户行为源描述 字段长度最小 1 字节，长度最大 128 字节 |
| usages | enum[] | 接入用途类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#action_set_usage_type) 数组最小长度 1，最大长度 2 可选值：{ DEEP_DATA_COOPERATION } |
| enable_conversion_claim | boolean | 是否开启转化归因，true 表示开启，false 表示不开启，不传则默认开启 可选值：{ true, false } |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/user_action_sets/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "type": "WEB",
    "name": "webuser_action_set",
    "description": "",
    "usages": []
}'
curl 'https://api.e.qq.com/v3.0/user_action_sets/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "type": "WEB",
    "name": "webuser_action_set",
    "description": "",
    "usages": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| user_action_set_id | integer | 用户行为源 id，通过 [\[user_action_sets 接口\]](https://developers.e.qq.com/docs/api/user_data/user_action_set/user_action_sets_add) 创建用户行为源时分配的唯一 id。请注意，当填写的用户行为数据源类型为 {WECHAT, WECHAT_MINI_PROGRAM, WECHAT_MINI_GAME} 时，必填 user_id 字段中的 wechat_openid (或 wechat_unionid) 及 wechat_app_id。 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "user_action_set_id": 1111111111
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
