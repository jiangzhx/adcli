---
title: 获取衍生素材映射关系接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/programmed_material_mappings/get
doc_id: tencent_ads_v3_0_docs_api_programmed_material_mappings_get
source_id: tencent_ads_v3_0_docs_api_programmed_material_mappings_get
---
# 获取衍生素材映射关系接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | programmed_material_mappings/get |
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
| dynamic_creative_id* | integer | 广告创意 id |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/programmed_material_mappings/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'dynamic_creative_id=1000001'
curl -v -G 'https://api.e.qq.com/v3.0/programmed_material_mappings/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'dynamic_creative_id=1000001'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct | 映射信息 |
| derive_material | struct | 衍生素材 |
| material_id | string | 素材 id |
| type | enum | 素材类型，视频或图片，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#programmed_material_type) |
| original_material | struct[] | 原始素材列表，数组长度为[0,100] |
| material_id | string | 素材 id |
| type | enum | 素材类型，视频或图片，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#programmed_material_type) |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "derive_material": {
                    "material_id": "1800606186",
                    "type": "VIDEO"
                },
                "original_material": [
                    {
                        "material_id": "3890134529",
                        "type": "IMAGE"
                    }
                ]
            },
            {
                "derive_material": {
                    "material_id": "1808356975",
                    "type": "VIDEO"
                },
                "original_material": [
                    {
                        "material_id": "3890134529",
                        "type": "IMAGE"
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
