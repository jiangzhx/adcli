---
title: 获取游戏特征标签 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/game_feature_tags/get
doc_id: tencent_ads_v3_0_docs_api_game_feature_tags_get
source_id: tencent_ads_v3_0_docs_api_game_feature_tags_get
---
# 获取游戏特征标签 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | game_feature_tags/get |
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
| type* | string | 标签类型，可选值：PROFIT_MODE（变现模式），GAME_TYPE（游戏类型），GAMEPLAY（核心玩法），THEME（内容题材），SUB_THEME（细分题材），GAME_TYPE_V6（游戏类型 V6），GAME_PLAY_V6（游戏主玩法 V6），GAME_SUB_PLAY_V6（游戏副玩法 V6） 可选值：{ PROFIT_MODE, GAME_TYPE, GAMEPLAY, THEME, SUB_THEME, GAME_TYPE_V6, GAME_PLAY_V6, GAME_SUB_PLAY_V6 } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/game_feature_tags/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'type=THEME'
curl -v -G 'https://api.e.qq.com/v3.0/game_feature_tags/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'type=THEME'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| id | integer | 通用 id |
| name | string | 名称 |
| type | string | 标签类型，可选值：PROFIT_MODE（变现模式），GAME_TYPE（游戏类型），GAMEPLAY（核心玩法），THEME（内容题材），SUB_THEME（细分题材），GAME_TYPE_V6（游戏类型 V6），GAME_PLAY_V6（游戏主玩法 V6），GAME_SUB_PLAY_V6（游戏副玩法 V6） |
| parent_id | integer | 通用 id |
| parent_name | string | 名称 |
| parent_type | string | 标签类型，可选值：PROFIT_MODE（变现模式），GAME_TYPE（游戏类型），GAMEPLAY（核心玩法），THEME（内容题材），SUB_THEME（细分题材），GAME_TYPE_V6（游戏类型 V6），GAME_PLAY_V6（游戏主玩法 V6），GAME_SUB_PLAY_V6（游戏副玩法 V6） |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "parent_name": "",
                "parent_id": 0,
                "name": "模拟恋爱",
                "id": 95,
                "type": "THEME",
                "parent_type": ""
            },
            {
                "parent_name": "",
                "parent_id": 0,
                "name": "恐怖",
                "id": 96,
                "type": "THEME",
                "parent_type": ""
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
