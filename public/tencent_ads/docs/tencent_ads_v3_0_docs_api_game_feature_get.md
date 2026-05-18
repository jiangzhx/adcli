---
title: 获取游戏 App 特征 V5 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/game_feature/get
doc_id: tencent_ads_v3_0_docs_api_game_feature_get
source_id: tencent_ads_v3_0_docs_api_game_feature_get
---
# 获取游戏 App 特征 V5 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | game_feature/get |
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
| marketing_target_type* | enum | 营销对象类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) 可选值：{ MARKETING_TARGET_TYPE_APP_ANDROID, MARKETING_TARGET_TYPE_APP_IOS } |
| marketing_target_detail_id* | string | 推广内容资产详情 id |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/game_feature/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'marketing_target_type=MARKETING_TARGET_TYPE_APP_IOS' \
-d 'marketing_target_detail_id=417200582'
curl -v -G 'https://api.e.qq.com/v3.0/game_feature/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'marketing_target_type=MARKETING_TARGET_TYPE_APP_IOS' \
-d 'marketing_target_detail_id=417200582'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| marketing_target_type | enum | 推广产品类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) |
| marketing_target_detail_id | string | 推广内容资产详情 id |
| profit_mode_id | integer | 变现模式标签 id |
| game_type_id | integer | 游戏类型标签 id |
| gameplay_id_list | integer[] | 核心玩法标签 id 列表 |
| game_theme_id | integer | 内容素材标签 id |
| game_sub_theme_id | integer | 细分题材标签 id |
| game_marketing_lifecycle_list | struct[] | 游戏营销阶段列表，除 GAME_CLOSED_BETA_TEST 支持填写 5 次日期外，其余仅支持 1 次 |
| game_marketing_scene | string | 营销阶段，可选值：DEFAULT（日常投放），GAME_RESERVATION（新游预约），GAME_PROMOTION（新游首发），GAME_CLOSED_BETA_TEST（新游测试） |
| start_date | string | 开始日期，日期格式：YYYY-MM-DD，且日期小于等于 end_date |
| end_date | string | 结束日期，日期格式：YYYY-MM-DD，且日期大于等于 begin_date |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "game_theme_id": 2615,
        "game_sub_theme_id": 2648,
        "profit_mode_id": 5,
        "marketing_target_type": "MARKETING_TARGET_TYPE_APP_IOS",
        "game_marketing_lifecycle_list": [
            {
                "end_date": "2023-08-17",
                "game_marketing_scene": "GAME_CLOSED_BETA_TEST",
                "start_date": "2023-08-02"
            },
            {
                "end_date": "2023-08-10",
                "game_marketing_scene": "GAME_RESERVATION",
                "start_date": "2023-08-06"
            },
            {
                "end_date": "2023-09-21",
                "game_marketing_scene": "GAME_PROMOTION",
                "start_date": "2023-09-05"
            },
            {
                "end_date": "2023-08-24",
                "game_marketing_scene": "DEFAULT",
                "start_date": "2023-08-07"
            }
        ],
        "gameplay_id_list": [
            2614
        ],
        "marketing_target_detail_id": "417200582",
        "game_type_id": 1485
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
