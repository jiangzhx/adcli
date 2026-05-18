---
title: 微信朋友圈广告
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/wechatmoments
doc_id: tencent_ads_v3_0_pages_wechatmoments
source_id: tencent_ads_v3_0_pages_wechatmoments
---
# 微信朋友圈广告

目前 Marketing API 可支持品牌活动推广、电商推广和本地门店推广等多种标的物类型的朋友圈竞价广告投放，朋友圈创意形式具体支持的投放目标可通过创意形式查询接口：[creative_template/get](https://developers.e.qq.com/v3.0/docs/api/creative_template/get)进行查询。 具体步骤如下：

## 1. 创建朋友圈头像及昵称跳转页

通过 Marketing API 投放微信朋友圈广告的前提是广告主需要先创建朋友圈头像及昵称跳转页。 您可通过 profiles/add 接口进行创建，或者在投放管理平台提前创建好，通过 profiles/get 接口获取具体的 id 信息等。

## 2. 创建广告组

创建朋友圈广告组您需要设置以下属性： 广告版位（site_set）：朋友圈广告设为 SITE_SET_MOMENTS ； 定向条件（targeting_setting）：用于指定该广告投放给哪些人。 优化目标（optimization_goal）：投放朋友圈广告支持微信 oCPA，具体方式可以参考 [开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/docs/guide/ads/ocpa#ocpa3)； 假设您需要创建一个名为“测试”的广告组投放给北京、上海的 20-30 岁女性，请求示例如下：

```
curl 'https://api.e.qq.com/v1.1/adgroups/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
-d 'account_id=123456' \ 
-d 'adgroup_name=测试' \ 
-d 'site_set=[SITE_SET_MOMENTS]' \ 
-d 'begin_date=2024-01-25' \ 
-d 'end_date=2024-0-01' \ 
-d 'bid_mode=BID_MODE_OCPM' \ 
-d 'bid_amount=20000' \ 
-d 'optimization_goal=OPTIMIZATIONGOAL_ECOMMERCE_ORDER' \ 
-d 'daily_budget=1000000' \ 
-d 'marketing_goal=MARKETING_GOAL_PRODUCT_SALES' \ 
-d 'marketing_carrier_type=MARKETING_CARRIER_TYPE_JUMP_PAGE' \ 
-d 'targeting={gender:[FEMALE],age:[20~30],geo_location:{regions:[110000,310000],location_types:[LIVE_IN]}}' \ 
-d 'time_series=010100100110100010101010010101010101010100101010101010010101010101001010101010100101010101010111110010101001010110110100110001011001010100101010101010110011001010101010100101100101101110101010101010100110100110010100110101110111101110110110110110110110101101101101110110011101011101101011101101101101001010110111010111011010110110111011'
```

## 3. 创建朋友圈广告可用的广告创意

当前 API 支持的朋友圈广告形式包括常规图片和视频样式、基础卡片图片和视频样式、标签卡片图片和视频样式、多图样式等，具体创意形式信息可以通过[creative_template/get](https://developers.e.qq.com/v3.0/docs/api/creative_template/get)获取创意形式信息进行了解（筛选条件为 SITE_SET_MOMENTS）。 假设您需要创建一个名为“测试”的 800 × 800 的创意，请求示例如下（前提是已经把 800 × 800 的图片通过 images/add 接口上传至图片库中并获得了图片 id）：

```
curl 'https://api.e.qq.com/v3.0/dynamic_creatives/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
-H 'Content-Type: application/json' \ 
-d '{
    "account_id": <ACCOUNT_ID>,
    "creative_components": {
        "jump_info": [
            {
                "value": {
                    "page_type": "PAGE_TYPE_XJ_QUICK",
                    "page_spec": {
                        "xj_quick_spec": {
                            "page_id": 1
                        }
                    }
                }
            }
        ],
        "text_link": [
            {
                "value": {
                    "link_name_type": "VIEW_DETAILS",
                    "jump_info": {
                        "page_type": "PAGE_TYPE_XJ_QUICK",
                        "page_spec": {
                            "xj_quick_spec": {
                                "page_id": 1
                            }
                        }
                    }
                }
            }
        ],
        "image_list": [
            {
                "value": {
                    "list": [
                        {
                            "image_id": "<IMAGE_ID>"
                        }
                    ]
                }
            }
        ],
        "description": [
            {
                "value": {
                    "content": "将疲惫一扫而光，然后优雅地出发吧！"
                }
            }
        ],
        "brand": [
            {
                "value": {
                    "jump_info": {
                        "page_type": "PAGE_TYPE_H5_PROFILE",
                        "page_spec": {
                            "h5_profile_spec": {
                                "page_id": 2
                            }
                        }
                    }
                }
            }
        ]
    },
    "adgroup_id": <ADGROUP_ID>,
    "dynamic_creative_name": "动态创意-竖版视频 9:16-创意",
    "dynamic_creative_type": "DYNAMIC_CREATIVE_TYPE_COMMON",
    "delivery_mode": "DELIVERY_MODE_COMPONENT",
    "creative_template_id": 311
}'
```

广告投放完后，Marketing API 提供的广告预览接口，支持在广告投放期间预览真实的投放效果，广告预览为真实的广告曝光，但不收取费用，一个推广计划最多允许给 10 个用户进行预览，且预览用户提交后不允许修改。广告预览的调用方式可通过[开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/docs/ads/adcreatives/adcreative_preview)进一步了解。

朋友圈创意形式样式介绍 目前，Marketing API 支持的朋友圈广告样式如下表所示，具体创意形式信息可以通过 [creative_template/get](https://developers.e.qq.com/v3.0/docs/api/creative_template/get)获取创意形式信息进行了解。 以下为 311 创意形式的示意图： 广告主头像&名称：拉取投放广告的 profile 页信息，用户点击可直接跳转 profile 页。 外层文案：广告主自行输入，文案字数限不超过 40 个字，不超过 4 行。 外层图片：广告主自行上传，不同创意形式支持的图片个数以及要求不同。 链接详情页：广告主自行选择，文字链点击后打开落地页。 门店标识：本地门店推广时显示，点击可跳转查看门店详情页。品牌活动页推广无此项。 用户社交互动：允许用户对广告创意进行点赞和评论，让用户“参与”到广告中。 其中 1、5、6 由系统自动完成，2、3、4 由您在广告创意中进行设置。

特别说明： 图片下方的“查看详情”文字链可以通过 text_link 组件中 link_name_type 进行设置，目前支持的枚举值分别为： VIEW_DETAILS（查看详情） GET_COUPONS（领取优惠） MAKE_AN_APPOINTMENT（预约活动） BUY_NOW（立即购买 – 电商推广专用） GO_SHOPPING（去逛逛 – 电商推广专用） ENTER_MINI_PROGRAM（进入小程序 – 投放小程序落地页时专用且必须使用） ENTER_MINI_GAME（进入小游戏 – 投放小游戏推广目标时，落地页选择 PAGE_TYPE_MINI_GAME_WECHAT 时专用且必须使用） 选择“领取优惠”，需在落地页中可直接领取优惠;选择“预约活动”，需在落地页中体现活动预约入口。如不满足上述条件，广告将会被审核驳回。 常规样式创意形式默认使用简版原生页作为图片点击后的落地页，即当用户点击图片后，会跳转至系统根据上传的图片文案等信息自动生成的简版原生页（如未使用简版原生页，点击图片为放大效果）。 对常规样式创意形式，文案支持通过\n 换行，最多支持 3 个换行。

有关朋友圈样式的具体说明可通过[微信广告形态介绍](https://ad.weixin.qq.com/guide/136)进一步了解。
