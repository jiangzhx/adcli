---
title: 获取视频号列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wechat_channels_accounts/get
doc_id: tencent_ads_v3_0_docs_api_wechat_channels_accounts_get
source_id: tencent_ads_v3_0_docs_api_wechat_channels_accounts_get
---
# 获取视频号列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | wechat_channels_accounts/get |
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
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最大长度 3 |
| field* | string | 过滤字段 可选值：{ wechat_channels_account_id, is_ad_acct, created_source, video_id, wechat_channels_account_name } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 wechat_channels_account_id 时，可选值：{ EQUALS, IN } 当 field 取值 is_ad_acct 时，可选值：{ EQUALS } 当 field 取值 created_source 时，可选值：{ EQUALS, IN } 当 field 取值 video_id 时，可选值：{ EQUALS, IN } 当 field 取值 wechat_channels_account_name 时，可选值：{ EQUALS, CONTAINS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 wechat_channels_account_id 时，数组长度为 1 字段长度最小 1 字节，长度最大 128 字节 当 field 取值 is_ad_acct 时，数组最小长度 0，最大长度 1 字段长度最小 1 字节，长度最大 128 字节 当 field 取值 created_source 时，数组最小长度 0，最大长度 10 当 field 取值 video_id 时，数组最小长度 1，最大长度 20 字段长度最小 1 字节，长度最大 128 字节 当 field 取值 wechat_channels_account_name 时，数组长度为 1 字段长度最小 1 字节，长度最大 128 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| scene | enum | 视频号使用场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_wechat_channels_account_scene) 可选值：{ WECHAT_CHANNELS_ACCOUNT_SECNE_FEEDS_AD, WECHAT_CHANNELS_ACCOUNT_SECNE_LIVE_AD, WECHAT_CHANNELS_ACCOUNT_SECNE_FEEDS_CREATIVE, WECHAT_CHANNELS_ACCOUNT_SECNE_VIDEO_NATIVE_CONTENT_CREATIVE } |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/wechat_channels_accounts/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/wechat_channels_accounts/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| wechat_channels_account_id | string | 视频号账号 id |
| wechat_channels_account_name | string | 视频号名称 |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| wechat_channels_spam_block | boolean | 视频号账号是否封禁 |
| wechat_channels_spam_slient | boolean | 视频号账号是否封禁 |
| wechat_channels_account_icon | string | 视频号头像 |
| authorization_type | enum | 授权类型，(已废弃)，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#wechat_channels_auth_type) |
| authorization_scope | enum | 授权范围，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#wechat_channels_auth_scope) |
| is_blocked | boolean | 是否被限流，视频号信用分低于 85 分或处于禁播、限流等限制投放的状态，不可投放视频号直播 |
| is_private | boolean | 是否设为私密，视频号设为私密，不可用于广告投放 |
| is_ad_acct | boolean | 是否包含广告专用视频号账户，(只读) |
| authorization_begin_time | integer | 授权开始时间，授权开始时间的时间戳 |
| authorization_ttl | integer | 授权有效时间，单位 s,最大值为 3122064000(99 年,授权时展示为不限);如果超过最大值，将默认被设置为为 3122064000。 |
| is_disable | boolean | 是否可使用，如不可使用，创建广告/创意将被拦截 |
| disable_message | string | 禁用原因 |
| authorization_status | enum | 授权状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#wechat_channels_auth_status) |
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
                "created_time": 1491019858,
                "last_modified_time": 1491098468
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

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
