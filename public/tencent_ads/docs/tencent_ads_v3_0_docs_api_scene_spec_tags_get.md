---
title: 获取场景定向标签 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/scene_spec_tags/get
doc_id: tencent_ads_v3_0_docs_api_scene_spec_tags_get
source_id: tencent_ads_v3_0_docs_api_scene_spec_tags_get
---
# 获取场景定向标签 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | scene_spec_tags/get |
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
| type* | enum | 场景定向标签类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_scene_spec_tags_type) 可选值：{ WECHAT_POSITION, OFFICIAL_ACCOUNT_MEDIA_CATEGORY, MINI_PROGRAM_AND_MINI_GAME, PAY_SCENE, MOBILE_UNION_CATEGORY, WECHAT_CHANNELS_SCENE, PC_SCENE } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/scene_spec_tags/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'type=WECHAT_POSITION'
curl -v -G 'https://api.e.qq.com/v3.0/scene_spec_tags/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'type=WECHAT_POSITION'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| id | integer | 通用 id |
| name | string |  |
| description | string | 描述 |
| parent_id | integer | 通用 id |
| targeting_name | string |  |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "targeting_name": "wechat_position",
                "parent_id": 0,
                "name": "WECHAT_PUBLIC_ACCOUNT_ARTICLE_BOTTOM",
                "description": "公众号文章底部",
                "id": 11111
            },
            {
                "targeting_name": "wechat_position",
                "parent_id": 0,
                "name": "WECHAT_PUBLIC_ACCOUNT_ARTICLE_MIDDLE",
                "description": "公众号文章中部",
                "id": 22222
            },
            {
                "targeting_name": "wechat_position",
                "parent_id": 0,
                "name": "WECHAT_PUBLIC_ACCOUNT_ARTICLE_VIDEO_PATCH",
                "description": "公众号文章视频贴片",
                "id": 33333
            },
            {
                "targeting_name": "wechat_position",
                "parent_id": 0,
                "name": "WECHAT_PUBLIC_ACCOUNT_BOX",
                "description": "订阅号消息列表",
                "id": 44444
            },
            {
                "targeting_name": "wechat_position",
                "parent_id": 0,
                "name": "WECHAT_PAYMENT_DETAILS",
                "description": "微信支付订单详情页",
                "id": 55555
            },
            {
                "targeting_name": "wechat_position",
                "parent_id": 0,
                "name": "WECHAT_APP_BANNER",
                "description": "小程序 banner 广告",
                "id": 66666
            },
            {
                "targeting_name": "wechat_position",
                "parent_id": 0,
                "name": "WECHAT_APP_REWARDED",
                "description": "小程序激励式广告",
                "id": 7777
            },
            {
                "targeting_name": "wechat_position",
                "parent_id": 0,
                "name": "WECHAT_MINI_PROGRAM_TABLE_PLAQUE",
                "description": "小程序插屏广告",
                "id": 88888
            },
            {
                "targeting_name": "wechat_position",
                "parent_id": 0,
                "name": "WECHAT_APP_COVER",
                "description": "小程序封面广告",
                "id": 99999
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
