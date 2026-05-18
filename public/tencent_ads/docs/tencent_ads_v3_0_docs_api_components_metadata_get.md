---
title: 查询创意组件元数据 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/components_metadata/get
doc_id: tencent_ads_v3_0_docs_api_components_metadata_get
source_id: tencent_ads_v3_0_docs_api_components_metadata_get
---
# 查询创意组件元数据 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | components_metadata/get |
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
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 4 |
| field* | string | 过滤字段 可选值：{ component_type, component_sub_type } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 component_type 时，可选值：{ IN } 当 field 取值 component_sub_type 时，可选值：{ IN } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 component_type 时，数组最小长度 1，最大长度 100 可选值：{ UNKNOWN, TITLE, DESCRIPTION, IMAGE, IMAGE_LIST, JUMP_INFO, VIDEO, BRAND, CONSULT, PHONE, FORM, ACTION_BUTTON, CHOSEN_BUTTON, LABEL, SHOW_DATA, MARKETING_PENDANT, APP_GIFT_PACK_CODE, SHOP_IMAGE, COUNT_DOWN, BARRAGE, FLOATING_ZONE, TEXT_LINK, END_PAGE, LIVING_DESC, WECHAT_CHANNELS, SHORT_VIDEO, ELEMENT_STORY, WXGAME_PLAYABLE_PAGE, APP_PROMOTION_VIDEO, VIDEO_SHOWCASE, IMAGE_SHOWCASE, MINI_CARD_LINK, CONSULT_LINK, AUDIO, WECHAT_SHOP_ACTIVITY, WXGAME_DIRECT_PAGE, VIDEO_LIST, V2_TITLE, V2_DESCRIPTION, V2_LONG_SUBLINK, V2_SHORT_SUBLINK, V2_LONG_SUBLINK_LIST, V2_SHORT_SUBLINK_LIST, V2_APP_DOWNLOAD, V2_IMAGE_1X1, V2_IMAGE_LIST_1X1, V2_IMAGE_TEXT_1X1, V2_IMAGE_BIG_20X7, V2_VIDEO_16X9_IMAGE_16X9, V2_VIDEO_16X9_IMAGE_4X3, V2_VIDEO_16X9_IMAGE_1X1, V2_QUICK_CONSULT, V2_PHONE, V2_FORM, V2_BRAND, V2_LANDING_PAGE, V2_HOLIDAY_LOGO, V2_ACTION_BUTTON, V2_CHOSEN_BUTTON, V2_VIDEO_9X16_IMAGE_9X16, V2_IMAGE_16X9, V2_LABEL, V2_PROMOTION_SUBLINK, V2_IMAGE_LIST_3X2, V2_IMAGE_LIST_9X16, V2_LIST_SUBLINK, V2_MDPA_TITLE, V2_MDPA_DESCRIPTION } 当 field 取值 component_sub_type 时，数组最小长度 1，最大长度 100 可选值：{ VIDEO_16X9, VIDEO_9X16, VIDEO_4X3, VIDEO_SHOWCASE, SHORT_VIDEO_4X3, IMAGE_16X9, IMAGE_9X16, IMAGE_1X1, IMAGE_3X2, IMAGE_3X4, IMAGE_4X3, IMAGE_5X4, IMAGE_4X5, IMAGE_20X7, IMAGE_7X2, IMAGE_SHOWCASE, IMAGE_100X9, IMAGE_LIST_9X16_4, IMAGE_LIST_1X1_3, IMAGE_LIST_1X1_4, IMAGE_LIST_1X1_6, IMAGE_LIST_3X2_3, IMAGE_LIST_1X1_1, IMAGE_LIST_16X9_1, IMAGE_LIST_1X1_9, IMAGE_LIST_FLEX_N, ELEMENT_STORY, DESCRIPTION, TITLE, ACTION_BUTTON, LABEL, SHOW_DATA, FLOATING_ZONE_IMAGE_TEXT, FLOATING_ZONE_IMAGE, BARRAGE, APP_GIFT_PACK_CODE, SHOP_IMAGE, MARKETING_PENDANT, CHOSEN_BUTTON, COUNT_DOWN, LIVING_DESC, TEXT_LINK, END_PAGE, WXGAME_PLAYABLE_PAGE, SOCIAL_SKILL, MINI_CARD_LINK, FLOATING_ZONE_IMAGE_TEXT_LIST, CONSULT_LINK, AUDIO, WECHAT_SHOP_ACTIVITY_BULK_BUY, WXGAME_DIRECT_PAGE, VIDEO_LIST_FLEX_N, BRAND, BRAND_PAGE, BRAND_SEARCH, BRAND_WECHAT_CHANNEL, BRAND_WECHAT, BRAND_WECOM, BRAND_WECHAT_SHOP, BRAND_CUSTOM_LINK, JUMP_INFO_OFFICIAL, JUMP_INFO_H5, JUMP_INFO_WECHAT_MINI_PROGRAM, JUMP_INFO_WECHAT_CONSULT, JUMP_INFO_WECOM_CONSULT, JUMP_INFO_WECHAT_CHANNELS_WATCH_LIVE, JUMP_INFO_WECHAT_CHANNELS_FEED, JUMP_INFO_WECHAT_OFFICIAL_ACCOUNT_DETAIL, JUMP_INFO_WECHAT_MINI_GAME, JUMP_INFO_ANDROID_APP, JUMP_INFO_IOS_APP, JUMP_INFO_ANDROID_DIRECT_DOWNLOAD, JUMP_INFO_APP_MARKET, JUMP_INFO_APP_DEEP_LINK, JUMP_INFO_WECHAT_CHANNELS_SHOP_PRODUCT, JUMP_INFO_QQ_MINI_GAME } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/components_metadata/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]'
curl -v -G 'https://api.e.qq.com/v3.0/components_metadata/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回创意组件元数据列表 |
| name | string | 创意组件参数名称 |
| component_type | enum | 创意组件类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_type) |
| component_sub_type | enum | 创意组件子类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_sub_type) |
| value_field | struct[] | 创意组件元数据字段列表 |
| name | string | 创意组件参数名称 |
| type | enum | 创意组件字段类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_metadata_field_type) |
| structure | struct[] | 创意组件元数据字段列表 |
| name | string | 创意组件参数名称 |
| type | enum | 创意组件字段类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_metadata_field_type) |
| structure | struct[] | 创意组件元数据字段列表 |
| name | string | 创意组件参数名称 |
| type | enum | 创意组件字段类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_metadata_field_type) |
| is_array | boolean | 当前字段是否为数组 |
| valid | struct | 创意组件字段结构 |
| required | boolean | 当前字段是否为必填 |
| type | enum | 创意组件字段校验类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_metadata_field_valid_type) |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| max_length | integer | 支持最大数量 |
| min_length | integer | 支持最小数量 |
| pattern | string | 匹配正则表达式 |
| min_emoji_occurs | integer | 支持最小 emoji 标签数量 |
| max_emoji_occurs | integer | 支持最大 emoji 标签数量 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_duration | integer | 媒体最小时长，单位秒 |
| max_duration | integer | 媒体最大时长，单位秒 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| joint | struct | 组件 list 内容联合校验 |
| total_length | struct[] | 联合校验总长度 |
| names | string[] | 联合校验总长度的字段名 |
| min_length | integer | 支持最小数量 |
| max_length | integer | 支持最大数量 |
| unique_length | struct[] | 联合校验唯一值总长度 |
| names | string[] | 联合校验唯一值总长度的字段名 |
| min_length | integer | 支持最小数量 |
| default_bool_value | boolean | 当前 bool 字段值 |
| enum_options | struct[] | 校验枚举类型 |
| value | string | 枚举名称 |
| desc | string | 枚举描述 |
| support_trd_link | boolean | 是否支持作为三链落地页 |
| required | boolean | 选项是否必选 |
| min_occurs | integer | 支持最小数量 |
| max_occurs | integer | 支持最大数量 |
| image_format_options | struct[] | 校验枚举类型 |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| min_duration_millisecond | integer | 媒体最小时长，单位毫秒 |
| max_duration_millisecond | integer | 媒体最大时长，单位毫秒 |
| video_format_options | struct[] | 校验枚举类型 |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| min_duration | integer | 媒体最小时长，单位秒 |
| max_duration | integer | 媒体最大时长，单位秒 |
| min_duration_millisecond | integer | 媒体最小时长，单位毫秒 |
| max_duration_millisecond | integer | 媒体最大时长，单位毫秒 |
| is_array | boolean | 当前字段是否为数组 |
| valid | struct | 创意组件字段结构 |
| required | boolean | 当前字段是否为必填 |
| type | enum | 创意组件字段校验类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_metadata_field_valid_type) |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| max_length | integer | 支持最大数量 |
| min_length | integer | 支持最小数量 |
| pattern | string | 匹配正则表达式 |
| min_emoji_occurs | integer | 支持最小 emoji 标签数量 |
| max_emoji_occurs | integer | 支持最大 emoji 标签数量 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_duration | integer | 媒体最小时长，单位秒 |
| max_duration | integer | 媒体最大时长，单位秒 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| joint | struct | 组件 list 内容联合校验 |
| total_length | struct[] | 联合校验总长度 |
| names | string[] | 联合校验总长度的字段名 |
| min_length | integer | 支持最小数量 |
| max_length | integer | 支持最大数量 |
| unique_length | struct[] | 联合校验唯一值总长度 |
| names | string[] | 联合校验唯一值总长度的字段名 |
| min_length | integer | 支持最小数量 |
| default_bool_value | boolean | 当前 bool 字段值 |
| enum_options | struct[] | 校验枚举类型 |
| value | string | 枚举名称 |
| desc | string | 枚举描述 |
| support_trd_link | boolean | 是否支持作为三链落地页 |
| required | boolean | 选项是否必选 |
| min_occurs | integer | 支持最小数量 |
| max_occurs | integer | 支持最大数量 |
| image_format_options | struct[] | 校验枚举类型 |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| min_duration_millisecond | integer | 媒体最小时长，单位毫秒 |
| max_duration_millisecond | integer | 媒体最大时长，单位毫秒 |
| video_format_options | struct[] | 校验枚举类型 |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| min_duration | integer | 媒体最小时长，单位秒 |
| max_duration | integer | 媒体最大时长，单位秒 |
| min_duration_millisecond | integer | 媒体最小时长，单位毫秒 |
| max_duration_millisecond | integer | 媒体最大时长，单位毫秒 |
| is_array | boolean | 当前字段是否为数组 |
| valid | struct | 创意组件字段结构 |
| required | boolean | 当前字段是否为必填 |
| type | enum | 创意组件字段校验类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_metadata_field_valid_type) |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| max_length | integer | 支持最大数量 |
| min_length | integer | 支持最小数量 |
| pattern | string | 匹配正则表达式 |
| min_emoji_occurs | integer | 支持最小 emoji 标签数量 |
| max_emoji_occurs | integer | 支持最大 emoji 标签数量 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_duration | integer | 媒体最小时长，单位秒 |
| max_duration | integer | 媒体最大时长，单位秒 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| joint | struct | 组件 list 内容联合校验 |
| total_length | struct[] | 联合校验总长度 |
| names | string[] | 联合校验总长度的字段名 |
| min_length | integer | 支持最小数量 |
| max_length | integer | 支持最大数量 |
| unique_length | struct[] | 联合校验唯一值总长度 |
| names | string[] | 联合校验唯一值总长度的字段名 |
| min_length | integer | 支持最小数量 |
| default_bool_value | boolean | 当前 bool 字段值 |
| enum_options | struct[] | 校验枚举类型 |
| value | string | 枚举名称 |
| desc | string | 枚举描述 |
| support_trd_link | boolean | 是否支持作为三链落地页 |
| required | boolean | 选项是否必选 |
| min_occurs | integer | 支持最小数量 |
| max_occurs | integer | 支持最大数量 |
| image_format_options | struct[] | 校验枚举类型 |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| min_duration_millisecond | integer | 媒体最小时长，单位毫秒 |
| max_duration_millisecond | integer | 媒体最大时长，单位毫秒 |
| video_format_options | struct[] | 校验枚举类型 |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| min_duration | integer | 媒体最小时长，单位秒 |
| max_duration | integer | 媒体最大时长，单位秒 |
| min_duration_millisecond | integer | 媒体最小时长，单位毫秒 |
| max_duration_millisecond | integer | 媒体最大时长，单位毫秒 |
| label | string |  |
| component_candidate_count | integer | 组件候选数量 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "value_field": [
                    {
                        "structure": [
                            {
                                "structure": [
                                    {
                                        "valid": {
                                            "joint": {
                                                "total_length": [
                                                    {
                                                        "names": []
                                                    }
                                                ],
                                                "unique_length": [
                                                    {
                                                        "names": []
                                                    }
                                                ]
                                            },
                                            "enum_options": [],
                                            "image_format_options": [],
                                            "video_format_options": []
                                        }
                                    }
                                ],
                                "valid": {
                                    "joint": {
                                        "total_length": [
                                            {
                                                "names": []
                                            }
                                        ],
                                        "unique_length": [
                                            {
                                                "names": []
                                            }
                                        ]
                                    },
                                    "enum_options": [],
                                    "image_format_options": [],
                                    "video_format_options": []
                                }
                            }
                        ],
                        "valid": {
                            "joint": {
                                "total_length": [
                                    {
                                        "names": []
                                    }
                                ],
                                "unique_length": [
                                    {
                                        "names": []
                                    }
                                ]
                            },
                            "enum_options": [],
                            "image_format_options": [],
                            "video_format_options": []
                        }
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
