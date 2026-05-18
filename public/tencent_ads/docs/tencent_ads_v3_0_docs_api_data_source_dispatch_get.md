---
title: 数据源分发关系获取 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/data_source_dispatch/get
doc_id: tencent_ads_v3_0_docs_api_data_source_dispatch_get
source_id: tencent_ads_v3_0_docs_api_data_source_dispatch_get
---
# 数据源分发关系获取 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,audience_management,user_actions |
| --- | --- |
| 请求地址 | data_source_dispatch/get |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| user_action_set_id | integer | 数据源 id，通过 user_action_sets 模块创建和获取，数据源 id 对应的类型要与 user_action_sets 中指定的 type 一致 |
| type | enum | 用户行为源类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#am_user_action_set_type) 可选值：{ WEB, ANDROID, IOS, OFFLINE, WECHAT, WECHAT_MINI_PROGRAM, WECHAT_MINI_GAME, HARMONY } |
| name | string | 用户行为源名称，当 type=WEB 时必填，当 type=ANDROID 或 IOS 时，若未填写该字段，则默认通过 mobile_app_id 获取名称 字段长度最小 1 字节，长度最大 32 字节 |
| scenes | enum[] | 应用场景信息列表，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#data_nexus_scene) 可选值：{ DMP, TRANSFORMATION_ATTRIBUTION, PKAM, DPA } |
| switch_type | enum | 批量分发开关标识，SWITCH_ON 开启，SWITCH_OFF 关闭，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#data_source_dispatch_switch) 可选值：{ SWITCH_ON, SWITCH_OFF } |
| access_way | enum | 数据源来源，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#action_set_access_way_type) 可选值：{ SELF_BUILT, BE_AUTHORIZED } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/data_source_dispatch/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'scenes=[]'
curl -v -G 'https://api.e.qq.com/v3.0/data_source_dispatch/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'scenes=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| data_source_scenes | struct[] | 数据源分发列表 |
| user_action_set_id | integer | 用户行为源 id，通过 [\[user_action_sets 接口\]](https://developers.e.qq.com/v3.0/docs/api/user_action_sets/add) 创建用户行为源时分配的唯一 id。请注意，当填写的用户行为数据源类型为 {WECHAT, WECHAT_MINI_PROGRAM, WECHAT_MINI_GAME} 时，必填 user_id 字段中的 wechat_openid (或 wechat_unionid) 及 wechat_app_id。 |
| scenes | struct[] | 应用场景信息列表 |
| scene | enum | 应用场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#data_nexus_scene) |
| asset_ids | struct[] | 资产列表 |
| data_set_id | integer | 数据集 id，更新商品应用场景时必填 |
| catalog_id | integer | 商品库 id，更新动态商品广告应用场景时必填 |
| switch_type | enum | 批量分发开关标识，SWITCH_ON 开启，SWITCH_OFF 关闭，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#data_source_dispatch_switch) |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "account_id": "<ACCOUNT_ID>",
        "data_source_scenes": [
            {
                "user_action_set_id": 1111111111,
                "scenes": [
                    {
                        "scene": "DMP",
                        "asset_ids": [
                            []
                        ]
                    }
                ],
                "switch_type": "SWITCH_ON"
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
