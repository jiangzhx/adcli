---
title: 组件化创意衍生预览查询接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview/get
doc_id: tencent_ads_v3_0_docs_api_programmed_commponent_preview_get
source_id: tencent_ads_v3_0_docs_api_programmed_commponent_preview_get
---
# 组件化创意衍生预览查询接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | programmed_commponent_preview/get |
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
| material_derive_id* | integer | 衍生全局 id |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/programmed_commponent_preview/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'material_derive_id=117505'
curl -v -G 'https://api.e.qq.com/v3.0/programmed_commponent_preview/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'material_derive_id=117505'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| material_derive_id | integer | 衍生全局 id |
| derive_data_version | enum | 衍生数据版本，区分组件化衍生和素材衍生，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#derive_data_version) |
| component_group_list | struct[] | 组件信息列表，数组长度为[0,100] |
| component_id | integer | 创意组件 id |
| component_type | string | 组件类型 |
| original_creative_template_id_list | integer[] | 原创意形式 id 列表 |
| supported_target_creative_template_id_list | integer[] | 目标创意形式 id 列表 |
| previews | struct[] | 预览信息列表，数组长度为[0,100] |
| material_preview_id | integer | 预览 id |
| target_creative_template_dimension | struct | 目标创意形式信息 |
| ratio_width | integer | 视频比例：宽 |
| min_width | integer | 视频最小宽度 |
| min_height | integer | 视频最小高度 |
| creative_template_ids | integer[] | 创意形式 id 列表 |
| template_id | integer | 模版 id |
| type | string | 素材类型，IMAGE-图片,VIDEO-视频 |
| template_preview_url | string | 预览链接 |
| recommend_templates | array | 系统推荐模板 id 列表，数组长度为[0,100] |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "account_id": "<ACCOUNT_ID>",
        "material_derive_id": 117505,
        "component_group_list": [
            {
                "component_id": 1086718,
                "component_type": "VIDEO",
                "original_creative_template_id_list": [
                    722
                ],
                "supported_target_creative_template_id_list": [
                    720,
                    721
                ],
                "previews": [
                    {
                        "material_preview_id": 35521,
                        "target_creative_template_dimension": {
                            "ratio_width": 9,
                            "ratio_height": 16,
                            "min_width": 720,
                            "min_Height": 1280,
                            "file_size_kb_limit": 512000,
                            "min_duration": 5,
                            "max_duration": 1800,
                            "creative_template_ids": [
                                721
                            ],
                            "type": "VIDEO"
                        },
                        "template_id": 20001019,
                        "type": "VIDEO",
                        "template_preview_url": "https://video.e.qq.com/tacc/creative_preview_v2?account_id=20458&material_derive_id=117505&component_id=1086718&material_preview_id=35521&timestamp=1731391783&sign=ae15567a77650f5ac6360788f11e6eba",
                        "recommend_templates": []
                    }
                ]
            }
        ],
        "derive_data_version": "DERIVE_DATA_VERSION_V3"
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
