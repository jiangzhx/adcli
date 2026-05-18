---
title: 官方落地页使用指引
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/page_type_official
doc_id: tencent_ads_v3_0_pages_page_type_official
source_id: tencent_ads_v3_0_pages_page_type_official
---
# 官方落地页使用指引

# 官方落地页的制作

广告主可以在腾讯广告投放端跳转到官方落地页建站平台，在官方落地页建站平台中制作和管理官方落地页。

# 官方落地页的要求

官方落地页仅在 “审核中” 和 “已发布” 状态下可以用于创建广告创意。

官方落地页在广告创意上使用时，应满足营销目的、营销载体、版位、创意形式等广告上下文的要求，常见的规则如下（仅做举例参考，以接口实际返回为准）：

营销载体类型为 Android 应用（MARKETING_CARRIER_TYPE_APP_ANDROID）时，官方落地页中必须包含应用下载组件，并且应用下载组件使用的应用 id 必须与营销载体 id 一致。

营销载体类型为 IOS 应用（MARKETING_CARRIER_TYPE_APP_IOS）时，官方落地页中必须包含应用下载组件，并且应用下载组件使用的应用 id 必须与营销载体 id 一致。

营销载体类型为 微信小游戏（MARKETING_CARRIER_TYPE_WECHAT_MINI_GAME）时，官方落地页中必须包含微信小游戏组件，并且微信小游戏组件使用的微信小游戏 id 必须与营销载体 id 一致。

营销载体类型为 快应用（MARKETING_CARRIER_TYPE_APP_QUICK_APP）时，官方落地页中必须包含快应用组件，并且快应用组件使用的快应用 id 必须与营销载体 id 一致。

版位包含 微信朋友圈（SITE_SET_MOMENTS）、创意形式为常规大图（311）、常规多图（641、642、643）、橱窗图片（2107）、橱窗视频（2109）时，官方落地页中必须包含引用外层素材组件。

# 官方落地页的查询

[获取落地页列表](https://developers.e.qq.com/v3.0/docs/api/pages/get) pages/get 接口 请求参数示例：

```
{
    "account_id": "25610",
    "filtering": [
        {
            "field": "page_type",
            "operator": "EQUALS",
            "values": [
                "PAGE_TYPE_OFFICIAL"
            ]
        }
    ],
    "page": 1,
    "page_size": 10,
    "ad_context": {
        "marketing_goal": "MARKETING_GOAL_USER_GROWTH",
        "marketing_sub_goal": "MARKETING_SUB_GOAL_NEW_GAME_LAUNCH value",
        "marketing_carrier_type": "MARKETING_CARRIER_TYPE_APP_ANDROID",
        "marketing_target_type": "MARKETING_TARGET_TYPE_APP_ANDROID",
        "marketing_carrier_detail": {
            "marketing_carrier_id": "12345"
        },
        "site_set": [
            "SITE_SET_MOMENTS",
            "SITE_SET_WECHAT"
        ],
        "creative_template_id": 311
    }
}
```

返回字段示例：

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "page_type": "PAGE_TYPE_OFFICIAL",
                "page_id": 11111,
                "page_name": "官方落地页-测试-引用外层素材",
                "page_url": "https://h5.gdt.qq.com/xjviewer/nemo/111?xj_nocdn=1",
                "page_status": "NORMAL",
                "owner_account_id": 25610,
                "created_time": 1712558946,
                "last_modified_time": 1712558984,
                "disable_code": 0,
                "disable_message": "success"
            },
            {
                "page_type": "PAGE_TYPE_OFFICIAL",
                "page_id": 22222,
                "page_name": "官方落地页-测试-非引用外层素材",
                "page_url": "https://h5.gdt.qq.com/xjviewer/nemo/222?xj_nocdn=1",
                "page_status": "NORMAL",
                "owner_account_id": 25610,
                "created_time": 1712558946,
                "last_modified_time": 1712558984,
                "disable_code": 70102,
                "disable_message": "缺少必要组件:[引用外层素材组件]"
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 2,
            "total_page": 1
        }
    }
}
```

注意：

请求参数 filtering 中的 page_type 参数为必填项。

请求参数 ad_context 为选填项，如果填写该字段，会根据广告上下文限制对返回数据做过滤和校验；如果不需要广告上下文限制，只需要查询指定的落地页数据，不需要填写该字段。

返回字段 owner_account_id 表示创建当前落地页的广告主账号 id，默认情况下会拉取到当前广告主自建的落地页和被授权的落地页；可以在请求参数 filtering 中使用 owner_account_id 进行筛选。

返回字段 disable_code 非 0 时，说明当前落地页 id 不满足广告上下文限制要求，需要按照 disable_message 字段中的不可用原因信息调整后再用于这种广告上下文的创建创建。

# 官方落地页在广告创意上的使用

使用官方落地页创建广告创意 [创建动态创意](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/add) dynamic_creatives/add 接口 请求参数示例：

```
{
    "creative_components": {
        "main_jump_info": [
            {
                "value": {
                    "page_type": "PAGE_TYPE_OFFICIAL",
                    "page_spec": {
                        "official_spec": {
                            "page_id": "<官方落地页 id>"
                        }
                    }
                }
            }
        ]
    }
}
```

使用自定义落地页更新广告创意 [更新动态创意](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/update) dynamic_creatives/update 接口 请求参数示例：

```
{
    "creative_components": {
        "main_jump_info": [
            {
                "value": {
                    "page_type": "PAGE_TYPE_OFFICIAL",
                    "page_spec": {
                        "official_spec": {
                            "page_id": "<官方落地页 id>"
                        }
                    }
                }
            }
        ]
    }
}
```
