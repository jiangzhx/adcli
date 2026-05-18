---
title: 视频号接入指南
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/wechat_channel
doc_id: tencent_ads_v3_0_pages_wechat_channel
source_id: tencent_ads_v3_0_pages_wechat_channel
---
# 视频号接入指南

# MKTAPI 视频号广告创建接入指引

## 视频号授权

### 1.1 投放端授权视频号

通过 API 投放的客户，也可以在投放端中进行视频号绑定。绑定流程如下： 输入需要授权的视频号的名称，点击校验。默认只能进行同主体视频号授权，如需跨主体授权，可联系对应运营，准备相关资质进行权限开通：

### 1.2 API 授权视频号

进行视频号投放前需要授权视频号，需要调用 [wechat_channels_authorization/add](https://developers.e.qq.com/) 接口

对于同主体直客的视频号，无需上传资质，传参示例：

```
{
    "account_id": 12345,
    "wechat_channels_account_name": "{视频号名称}",
    "authorization_scope": "{授权范围}",
    "authorization_begin_time":"{授权开始时间}"
    "authorization_ttl": 31536000 //授权有效期，单位:秒，起始时间为当前时间，最长授权 1 年
}
```

如同主体校验无误, 接口返回如下: 《视频号授权协议》 [https://ad.weixin.qq.com/main.html#/policy/ggzbsqf](https://ad.weixin.qq.com/main.html#/policy/ggzbsqf)

```
{
  "code": 0,
  "message": "",
  "message_cn": "",
  "data": {
    "finder_username": "export/xxx",
    "authorization_qr_code_url": "",
    "authorization_description": "授权成功,请使用 wechat_channels_account_id 进行广告投放。",
    "authorization_expired_time": 0,
    "authorization_agreement": "https://ad.weixin.qq.com/main.html#/policy/ggzbsqf",
    "wechat_channels_account_id": "export/xxx"
  }
}
```

#### 同主体子客授权

对同主体子客的视频号，需要视频号主扫码授权，接口将返回授权二维码，视频号主授权后，即可通过[wechat_channels_authorization/get](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_authorization/get)接口查询，并用于广告投放，返回示例：

```
{
  "code": 0,
  "message": "",
  "data": {
    "finder_username": "export/xxx",
    "authorization_qr_code_url": "http://pgdt.gtimg.cn/qrcode.jpg",
    "authorization_description": "授权成功,请使用 wechat_channels_account_id 进行广告投放。",
    "authorization_expired_time": 0,
    "authorization_agreement": "https://ad.weixin.qq.com/main.html#/policy/ggzbsqf",
    "wechat_channels_account_id": "export/xxx"
  }
}
```

如校验为非同主体，则返回错误码 code: 1000156,需要重新调用接口，传入跨主体授权的资质等信息。

#### 跨主体授权

对于跨主体的视频号，需调用接口上传资质，并获取二维码，由该视频号管理员扫码授权，目前支持的跨主体关系类型有两种:

RELATIONSHIP_EMPLOYMENT（雇佣关系）

RELATIONSHIP_CORPORATION（同集团公司）

对于 RELATIONSHIP_EMPLOYMENT(雇佣关系),需要上传提供身份证正反面及在职证明两种资质，对应资质类型为:

D003 (视频号用户的身份证资质)

D002 (视频号用户的在职证明)

传参示例：

```
{
    "account_id": 12345,
    "wechat_channels_account_id": "{视频号名称}",
    "auth_ttl": 31536000,
    "authorization_relationship":"RELATIONSHIP_EMPLOYMENT",
    "authorization_scope":"DEFAULT"
    "authorization_certification_list": [
        {
            "certification_image": "http://pgdt.gtimg.cn/img1.jpg",            "certification_image_page_no": 0,//正面
            "certification_code": "D003",
            "certification_name": "张三",
            "certification_number": "" //身份证号,
            "certification_image_id":""
        },
        {
            "certification_image_id":""
            "certification_image_page_no": 1,//反面
            "certification_code": "D003",
            "certification_name": "张三",
            "certification_number": "" //身份证号
        },
        {
            "certification_image_id":""
            "certification_code": "D002"
        }
    ]
}
```

对于 RELATIONSHIP_CORPORATION(同集团公司)，资质类型为:

D001 (子母公司证明或控股证明)

传参示例：

```
{
    "account_id": 12345,
    "wechat_channels_account_id": "{视频号名称}",
    "auth_ttl": 31536000,
    "authorization_relationship":"RELATIONSHIP_CORPORATION",
    "authorization_certification_list": [
        {
            "certification_image": "http://pgdt.gtimg.cn/img3.jpg",
            "certification_code": "D001"
        }
    ]
}
```

获取到跨主体授权二维码后，请视频号主使用微信扫码进行授权，视频号主授权后，待资质审核通过后，即可完成授权。

### 1.3 更新视频号授权

开发文档 | [开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_authorization/update)

### 1.4 删除视频号授权

开发文档 | [开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_authorization/delete)

### 1.5 拉取授权记录

查询广告主与视频号之间的授权关系详情（如状态、有效期）。 开发文档 | [开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_authorization/get)

### 1.6 注意事项

1）如果视频号授权失效，或者视频号被封禁/注销/设置为私密账户导致不可用，相关广告是不可播放的，广告状态会联动下线发生变化。对应广告可以启停，但也不可再编辑。

2）同一个视频号，换一个广告账号绑定，不同授权有效期，也依然是同一个视频号 id。

3）一个账户下最多可授权视频号上限为 200 个。

## 创建广告

在通过 API 创建广告的过程中，需要通过 [adgroups/add](https://developers.e.qq.com/v3.0/docs/api/adgroups/add) 接口，需包含以下 5 部分：

营销内容

广告版位设置

定向

出价与预算

广告设置

来获得 adgroup_id 新广告应答字段，完成广告创建。

获取可用的营销表达组合：[开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/marketing_rules/get)

若创建视频号版位的广告，需要将版位（site_set）设置为 SITE_SET_CHANNELS

出价格方式选择：视频号广告不能选择 CPC 和 oCPC 出价方式，其余出价方式选择范围和营销内容有关

优化目标：不同营销目的、营销载体、版位、出价方式，可选择的优化目标存在差异，可通过[开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/optimization_goal_permissions/get)接口，获取可投放的优化目标组合

### 示例：加粉互动广告

```
{
    "account_id":12345,
    "adgroup_name": "广告名称",
    "marketing_goal": "MARKETING_GOAL_INCREASE_FANS_INTERACTION",
    "marketing_sub_goal": "MARKETING_SUB_GOAL_UNKNOWN",
    "marketing_carrier_type": "MARKETING_CARRIER_TYPE_WECHAT_CHANNELS",
    "marketing_carrier_detail": {
        "marketing_carrier_id": "v2_060000231003b20faec8c4e6891fc4ddc901eb36b077dd047b65ce2a0ed5d2e22f22054380f5@finder",
        "marketing_sub_carrier_id": ""
    },
    "marketing_asset_outer_spec": {
        "marketing_target_type": "MARKETING_TARGET_TYPE_WECHAT_CHANNELS",
        "marketing_asset_outer_id": "v2_060000231003b20faec8c4e6891fc4ddc901eb36b077dd047b65ce2a0ed5d2e22f22054380f5@finder"
    },
    "site_set": [
        "SITE_SET_CHANNELS"
    ],
    "begin_date": "2025-08-22",
    "end_date": "2026-08-21",
    "time_series": "",
    "bid_mode": "BID_MODE_CPM",
    "bid_scene": "BID_SCENE_UNKNOWN",
    "smart_bid_type": "SMART_BID_TYPE_CUSTOM",
    "automatic_site_enabled": false,
    "search_expansion_switch": "SEARCH_EXPANSION_SWITCH_CLOSE",
    "bid_amount": 419,
    "scene_spec": {

    },
    "poi_list": [

    ],
    "audience_model_bid_adjustment": {
        "audience_model_package": [

        ]
    },
    "bid_amount_suggest": {
        "bid_amount": {
            "min": 248,
            "max": 484
        }
    },
    "targeting": {

    }
}
```

### 示例：商品销售广告（含优化目标）

```
{
    "account_id": 12345,
    "adgroup_name": "商品销售广告_08_22_16:50:35",
    "marketing_goal": "MARKETING_GOAL_PRODUCT_SALES",
    "marketing_sub_goal": "MARKETING_SUB_GOAL_UNKNOWN",
    "marketing_carrier_type": "MARKETING_CARRIER_TYPE_JUMP_PAGE",
    "marketing_asset_id": 32473684,
    "site_set": [
        "SITE_SET_CHANNELS"
    ],
    "exploration_strategy": "STEADY_EXPLORATION",
    "begin_date": "2025-08-22",
    "end_date": "2026-08-22",
    "optimization_goal": "OPTIMIZATIONGOAL_ECOMMERCE_ORDER",
    "time_series": " ",
    "bid_mode": "BID_MODE_OCPM",
    "conversion_id": 52450254,
    "smart_bid_type": "SMART_BID_TYPE_CUSTOM",
    "automatic_site_enabled": false,
    "search_expand_targeting_switch": "SEARCH_EXPAND_TARGETING_SWITCH_CLOSE",
    "search_expansion_switch": "SEARCH_EXPANSION_SWITCH_OPEN",
    "enable_steady_exploration": true,
    "search_bidwords": [

    ],
    "bid_amount": 16607,
    "scene_spec": {

    },
    "aoi_optimization_strategy": {
        "aoi_optimization_strategy_enabled": true
    },
    "bid_amount_suggest": {
        "bid_amount": {
            "min": 9858,
            "max": 19201
        }
    },
    "targeting": {

    }
}
```

## 创建创意

创建创意流程参考：[开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/pages/dynamic_creatives/add)

广告创意新建接口：[dynamic_creatives/add](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/add)

视频号版位支持的创意形式 id: 720/721/618，也可通过创意形式查询接口[creative_template_list/get](https://developers.e.qq.com/v3.0/docs/api/creative_template_list/get)查询支持的创意形式列表

### 请求示例

```
{
  "account_id": "123456",
  "adgroup_id": "54554691283",
  "dynamic_creative_type": "DYNAMIC_CREATIVE_TYPE_COMMON",
  "page": 1,
  "page_size": 100,
  "marketing_goal": "MARKETING_GOAL_UNKNOWN",
  "marketing_sub_goal": "MARKETING_SUB_GOAL_UNKNOWN",
  "marketing_target_type": "MARKETING_TARGET_TYPE_UNKNOWN",
  "marketing_carrier_type": "MARKETING_CARRIER_TYPE_UNKNOWN"
}
```

上一步查询的创意形式中的具体元素[组件信息](https://developers.e.qq.com/v3.0/docs/api/creative_template/get)

### 请求示例

```
{
  "account_id": "12345",
  "marketing_goal": "MARKETING_GOAL_INCREASE_FANS_INTERACTION",
  "marketing_sub_goal": "MARKETING_SUB_GOAL_UNKNOWN",
  "marketing_target_type": "MARKETING_TARGET_TYPE_WECHAT_CHANNELS",
  "marketing_carrier_type": "MARKETING_CARRIER_TYPE_WECHAT_CHANNELS",
  "site_set": ["SITE_SET_CHANNELS"],
  "brand_ad_type": "BRAND_AD_TYPE_NONE",
  "adgroup_id": "54554691283",
  "dynamic_creative_type": "DYNAMIC_CREATIVE_TYPE_COMMON",
  "creative_template_id": "618",
  "delivery_mode": "DELIVERY_MODE_COMPONENT"
}
```

调用示例: 以 721 创意形式为例

```
{
    "account_id": "[Account id]",
    "adgroup_id": "[Adgroup id]",
    "dynamic_creative_name": "xxxxxx",
    "creative_template_id": 721,
    "delivery_mode": "DELIVERY_MODE_CUSTOMIZE",
    "dynamic_creative_type": "DYNAMIC_CREATIVE_TYPE_COMMON",
    "creative_components": {
        "description": [
            {
                "value": {
                    "content": "亲测有效！睡前抹它，淡斑美白，皮肤白嫩嫩，便宜好用！"
                }
            }
        ],
        "video": [
            {
                "value": {
                    "video_id": "22580874081",
                    "cover_id": "22580405367"
                }
            }
        ],
        "brand": [
            {
                "value": {
                    "brand_name": "xxxxx",
                    "jump_info": {
                        "page_type": "PAGE_TYPE_WECHAT_CHANNELS_PROFILE",
                        "page_spec": {
                            "wechat_channels_profile_spec": {
                                "username": "export/xxx"
                            }
                        }
                    }
                }
            }
        ],
        "action_button": [
            {
                "value": {
                    "button_text": "观看直播",
                    "jump_info": {
                        "page_type": "PAGE_TYPE_WECHAT_CHANNELS_WATCH_LIVE"
                    }
                }
            }
        ],
        "label": [
            {
                "value": {
                    "list": [
                        {
                            "content": "改善斑点",
                            "type": "LABEL_TYPE_CUSTOMIZETEXT"
                        },
                        {
                            "content": "明星同款",
                            "type": "LABEL_TYPE_CUSTOMIZETEXT"
                        },
                        {
                            "content": "国妆特证",
                            "type": "LABEL_TYPE_CUSTOMIZETEXT"
                        }
                    ]
                }
            }
        ],
        "barrage": [
            {
                "value": {
                    "list": [
                        {
                            "id": 12226315
                        },
                        {
                            "id": 12226319
                        },
                        {
                            "id": 12226276
                        }
                    ]
                }
            }
        ],
        "floating_zone": [
            {
                "value": {
                    "floating_zone_switch": true,
                    "floating_zone_image_id": "22580405xxx",
                    "floating_zone_name": "活动中点击进入直播间",
                    "floating_zone_desc": "全场一折免费试用不满意随时退",
                    "floating_zone_button_text": "观看直播",
                    "floating_zone_type": "FLOATING_ZONE_TYPE_IMAGE_TEXT",
                    "floating_zone_info_type": "FLOATING_ZONE_INFO_TYPE_NORMAL"
                }
            }
        ],
        "jump_info": [
            {
                "value": {
                    "page_type": "PAGE_TYPE_WECHAT_CHANNELS_WATCH_LIVE"
                }
            }
        ],
        "wechat_channels": [
            {
                "value": {
                    "live_promoted_type": "LIVE_PROMOTED_TYPE_SHORT_VIDEO",
                    "username": "v2_xxx",
                    "finder_object_visibility": false
                }
            }
        ],
        "main_jump_info": [
            {
                "value": {
                    "page_type": "PAGE_TYPE_WECHAT_CHANNELS_WATCH_LIVE"
                }
            }
        ]
    },
    "configured_status": "AD_STATUS_SUSPEND",
    "live_promoted_type": "LIVE_PROMOTED_TYPE_SHORT_VIDEO"
}
```

## 广告管理

[获取可投视频号列表](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_accounts/get):查询广告主账号下可用的视频号账户列表（包括授权成功/过期/广告专用视频号），用于选择视频号资源

[获取视频号动态列表/详情](https://developers.e.qq.com/v3.0/docs/api/channels_userpageobjects/get)

[获取视频号动态详情](https://developers.e.qq.com/v3.0/docs/api/channels_finderobject/get)

[获取视频号直播预约信息](https://developers.e.qq.com/v3.0/docs/api/channels_livenoticeinfo/get)

[视频号精选评论管理](https://developers.e.qq.com/v3.0/docs/api/comment_list/get):查询广告主账号下的用户评论数据，包括评论内容、状态、时间及作者回复等详细信息，用于广告评论的监控和管理。

## 账号管理

开通广告专用视频号账号广告专用视频号能力说明: [腾讯营销学堂](https://eschool.qq.com/Solution/ListDetail/pd-8073)

[绑定微信](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account_wechat_binding/add)

[查询微信绑定状态](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account_wechat_binding/get)

[校验开户数据](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account_validation/get)

[新增广告专用视频号账号](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account/add)

[更新广告专用视频号账号](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account/update)

[拉取广告专用视频号账号](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account/get)

[删除广告专用视频号账号](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account/delete)

[上传资质文件](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account_certification_file/add)
