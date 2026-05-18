---
title: 获取模板预览接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/programmed/get
doc_id: tencent_ads_v3_0_docs_api_programmed_get
source_id: tencent_ads_v3_0_docs_api_programmed_get
---
# 获取模板预览接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | programmed/get |
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
| material_derive_id* | integer | 预览 id |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/programmed/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "material_derive_id": 151006938
}'
curl 'https://api.e.qq.com/v3.0/programmed/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "material_derive_id": 151006938
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| material_derive_id | integer | 预览 id |
| adgroup_id | int64 | 广告 id |
| material_groups | struct[] | 素材组信息列表，数组长度为[0,100] |
| material_group_id | integer | 素材组 id |
| ratio | string | 素材比例 |
| material_type | enum | 待衍生的素材类型，视频或图片，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#programmed_material_type) |
| materials | struct[] | 素材信息列表，数组长度为[0,100] |
| type | enum | 待衍生的素材类型，视频或图片，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#programmed_material_type) |
| media_id | string | 素材 id，图片或者视频 |
| material_name | string | 素材名称 |
| origin_media_id | string | 原始素材 id |
| url | string | 使用素材 url |
| original_creative_templates | struct[] | 原创意形式及规格列表，数组长度为[0,100] |
| ratio_width | integer | 视频比例：宽 |
| ratio_height | integer | 视频比例：高 |
| min_width | integer | 视频最小宽度 |
| min_height | integer | 视频最小高度 |
| file_size_kblimit | integer | 视频大小最大限制 |
| min_duration | float | 最小时长 |
| max_duration | float | 最大时长 |
| creative_template_ids | array | 创意形式 id 列表，数组长度为[0,100] |
| media_type | string | 媒体类型 |
| min_occurs | integer | 当前最小创意形式的素材个数标识 |
| max_occurs | integer | 当前最大创意形式的素材个数标识 |
| target_creative_templates | struct[] | 素材对应的目标创意形式及规格列表，数组长度为[0,100] |
| ratio_width | integer | 视频比例：宽 |
| ratio_height | integer | 视频比例：高 |
| min_width | integer | 视频最小宽度 |
| min_height | integer | 视频最小高度 |
| file_size_kblimit | integer | 视频大小最大限制 |
| min_duration | float | 最小时长 |
| max_duration | float | 最大时长 |
| creative_template_ids | array | 创意形式 id 列表，数组长度为[0,100] |
| media_type | string | 媒体类型 |
| min_occurs | integer | 当前最小创意形式的素材个数标识 |
| max_occurs | integer | 当前最大创意形式的素材个数标识 |
| previews | struct[] | 预览数据列表，数组长度为[0,100] |
| material_derive_preview_id | integer | 素材预览 id |
| template_id | integer | 模板 id |
| template_preview_url | string | 模板预览 URL |
| template_name | string | 模板名称 |
| dimension | struct | 创意形式 |
| ratio_width | integer | 视频比例：宽 |
| ratio_height | integer | 视频比例：高 |
| min_width | integer | 视频最小宽度 |
| min_height | integer | 视频最小高度 |
| file_size_kblimit | integer | 视频大小最大限制 |
| min_duration | float | 最小时长 |
| max_duration | float | 最大时长 |
| creative_template_ids | array | 创意形式 id 列表，数组长度为[0,100] |
| media_type | string | 媒体类型 |
| min_occurs | integer | 当前最小创意形式的素材个数标识 |
| max_occurs | integer | 当前最大创意形式的素材个数标识 |
| recommend_templates | struct[] | 系统推荐模板列表，数组长度为[0,100] |
| dimension | struct | 创意形式 |
| ratio_width | integer | 视频比例：宽 |
| ratio_height | integer | 视频比例：高 |
| min_width | integer | 视频最小宽度 |
| min_height | integer | 视频最小高度 |
| file_size_kblimit | integer | 视频大小最大限制 |
| min_duration | float | 最小时长 |
| max_duration | float | 最大时长 |
| creative_template_ids | array | 创意形式 id 列表，数组长度为[0,100] |
| media_type | string | 媒体类型 |
| min_occurs | integer | 当前最小创意形式的素材个数标识 |
| max_occurs | integer | 当前最大创意形式的素材个数标识 |
| recommend_template_ids | array | 系统推荐模板 id 列表，数组长度为[0,100] |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "account_id": "<ACCOUNT_ID>",
        "adgroup_id": "<ADGROUP_ID>",
        "material_derive_id": 2479,
        "material_groups": [
            {
                "material_group_id": 286925030,
                "ratio": "16:9",
                "material_type": "IMAGE",
                "materials": [
                    {
                        "type": "IMAGE",
                        "media_id": "10234231460"
                    }
                ],
                "original_creative_templates": [
                    {
                        "ratio_width": 16,
                        "ratio_height": 9,
                        "min_width": 1280,
                        "min_height": 720,
                        "file_size_kblimit": 400,
                        "min_duration": 0,
                        "max_duration": 0,
                        "creative_template_ids": [
                            711
                        ],
                        "media_type": "image",
                        "min_occurs": 1,
                        "max_occurs": 1
                    }
                ],
                "target_creative_templates": [
                    {
                        "ratio_width": 9,
                        "ratio_height": 16,
                        "min_width": 1080,
                        "min_height": 1920,
                        "file_size_kblimit": 512000,
                        "min_duration": 5,
                        "max_duration": 5,
                        "creative_template_ids": [
                            1529
                        ],
                        "media_type": "video",
                        "min_occurs": 1,
                        "max_occurs": 12
                    },
                    {
                        "ratio_width": 16,
                        "ratio_height": 9,
                        "min_width": 1280,
                        "min_height": 720,
                        "file_size_kblimit": 512000,
                        "min_duration": 5,
                        "max_duration": 300,
                        "creative_template_ids": [
                            720
                        ],
                        "media_type": "video",
                        "min_occurs": 1,
                        "max_occurs": 3
                    }
                ],
                "previews": [
                    {
                        "material_derive_preview_id": 662091566,
                        "template_id": 11825389,
                        "template_preview_url": "https://video.e.qq.com/tacc/creative_preview?uid=41701304&materialDeriveId=151006938&materialGroupId=286925030&materialDerivePreviewId=662091566&sign=e1ce7e639dcca0a9953708f6c88eeaa1",
                        "template_name": "超级大惠",
                        "dimension": {
                            "ratio_width": 9,
                            "ratio_height": 16,
                            "min_width": 720,
                            "min_height": 1280,
                            "file_size_kblimit": 512000,
                            "min_duration": 5,
                            "max_duration": 300,
                            "creative_template_ids": [
                                721
                            ],
                            "media_type": "video",
                            "min_occurs": 1,
                            "max_occurs": 3
                        }
                    },
                    {
                        "material_derive_preview_id": 662091568,
                        "template_id": 12682848,
                        "template_preview_url": "https://video.e.qq.com/tacc/creative_preview?uid=41701304&materialDeriveId=151006938&materialGroupId=286925030&materialDerivePreviewId=662091568&sign=ca7ddf56821463568ebed9e28d99c2aa",
                        "template_name": "[AIGC] 16-9 转 1-1（3D-04）",
                        "dimension": {
                            "ratio_width": 1,
                            "ratio_height": 1,
                            "min_width": 800,
                            "min_height": 800,
                            "file_size_kblimit": 400,
                            "min_duration": 0,
                            "max_duration": 0,
                            "creative_template_ids": [
                                311
                            ],
                            "media_type": "image",
                            "min_occurs": 1,
                            "max_occurs": 1
                        }
                    }
                ],
                "recommend_templates": [
                    {
                        "dimension": {
                            "ratio_width": 16,
                            "ratio_height": 9,
                            "min_width": 1280,
                            "min_height": 720,
                            "file_size_kblimit": 512000,
                            "min_duration": 5,
                            "max_duration": 300,
                            "creative_template_ids": [
                                720
                            ],
                            "media_type": "video",
                            "min_occurs": 1,
                            "max_occurs": 3
                        },
                        "recommend_template_ids": [
                            10183912,
                            10004714,
                            10006913,
                            10006916,
                            10133157,
                            10168628,
                            10169602
                        ]
                    },
                    {
                        "dimension": {
                            "ratio_width": 16,
                            "ratio_height": 9,
                            "min_width": 1280,
                            "min_height": 720,
                            "file_size_kblimit": 512000,
                            "min_duration": 5,
                            "max_duration": 30,
                            "creative_template_ids": [
                                722
                            ],
                            "media_type": "video",
                            "min_occurs": 1,
                            "max_occurs": 12
                        },
                        "recommend_template_ids": [
                            10183912,
                            10007075,
                            10006892,
                            10006913,
                            10006916,
                            10133157,
                            10168628
                        ]
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
