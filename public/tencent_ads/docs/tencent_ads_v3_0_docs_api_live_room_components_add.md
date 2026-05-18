---
title: 创建直播间组件 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/live_room_components/add
doc_id: tencent_ads_v3_0_docs_api_live_room_components_add
source_id: tencent_ads_v3_0_docs_api_live_room_components_add
---
# 创建直播间组件 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | live_room_components/add |
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
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| component_name* | string | 直播间组件名称名称 字段长度最小 1 字节，长度最大 512 字节 |
| component_type* | enum | 直播间组件类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#creative_component_type) 可选值：{ LIVE_IMAGE_UNKNOWN, LIVE_IMAGE_COMPONENT, LIVE_CONV_COMPONENT } |
| finder_username | string | 视频号账号 id 已废弃 字段长度最小 1 字节，长度最大 1024 字节 |
| component_spec* | struct | 直播间组件详情 |
| live_image_component | struct | 喝彩图&背景图直播间组件详情 |
| bg_img_url | string | 背景图 url 字段长度最小 0 字节，长度最大 1024 字节 |
| bg_img_id | string | 背景图 id 字段长度最小 0 字节，长度最大 64 字节 |
| cheer_icon | struct[] | 背景图列表信息 数组最大长度 4 |
| icon_url | string | 喝彩图 url 字段长度最小 0 字节，长度最大 1024 字节 |
| icon_img_id | string | 喝彩图 id 字段长度最小 0 字节，长度最大 64 字节 |
| samp_rate | integer | samp_rate |
| is_use_cheer_icon | integer | 是否启用喝彩图 最小值 0，最大值 1 |
| is_use_bg_img | integer | 是否启用背景图 最小值 0，最大值 1 |
| live_begin_time | integer | 直播间预期开播时间，时间戳 最小值 0，最大值 2147483647 |
| live_conv_component | struct | 直播间转化组件详情 |
| page_id | int64 | 原生页 id |
| page_type | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) 可选值：{ PAGE_TYPE_UNKNOWN, PAGE_TYPE_ANDROID_APP, PAGE_TYPE_IOS_APP, PAGE_TYPE_XJ_ANDROID_APP_H5, PAGE_TYPE_XJ_IOS_APP_H5, PAGE_TYPE_XJ_WEB_H5, PAGE_TYPE_FENGYE_ECOMMERCE, PAGE_TYPE_XJ_QUICK, PAGE_TYPE_QQ_APP_MINI_PROGRAM, PAGE_TYPE_QQ_MINI_GAME, PAGE_TYPE_APP_DEEP_LINK, PAGE_TYPE_APP_MARKET, PAGE_TYPE_ANDROID_QUICK_APP, PAGE_TYPE_WECHAT_CANVAS, PAGE_TYPE_WECHAT_OFFICIAL_ACCOUNT_DETAIL, PAGE_TYPE_WECHAT_SIMPLE_CANVAS, PAGE_TYPE_WECHAT_MINI_GAME, PAGE_TYPE_WECHAT_CANVAS_MINI_PROGRAM, PAGE_TYPE_WECHAT_FOCUS_DAILOG, PAGE_TYPE_WECHAT_MINI_PROGRAM, PAGE_TYPE_WECHAT_CHANNELS_FEED, PAGE_TYPE_WECHAT_CHANNELS_WATCH_LIVE, PAGE_TYPE_WECHAT_CHANNELS_RESERVE_LIVE, PAGE_TYPE_WECHAT_APPOINTMENT_CARD, PAGE_TYPE_WECHAT_CONSULT, PAGE_TYPE_WECOM_CONSULT, PAGE_TYPE_ANDROID_DIRECT_DOWNLOAD, PAGE_TYPE_H5_PROFILE, PAGE_TYPE_SEARCH_BRAND_AREA, PAGE_TYPE_WECHAT_CHANNELS_PROFILE, PAGE_TYPE_H5, PAGE_TYPE_WECHAT_CHANNELS_FOLLOW_ACCOUNT, PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT, PAGE_TYPE_APP_HARMONY, PAGE_TYPE_WECHAT_SHOP, PAGE_TYPE_OFFICIAL } |
| title | string | 素材标题，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 250 字节 |
| img_url | string | 左侧图像 url 字段长度最小 0 字节，长度最大 1024 字节 |
| img_id | string | 左侧图像 id 字段长度最小 0 字节，长度最大 64 字节 |
| desc | string | 左下方的简短描述 字段长度最小 1 字节，长度最大 20480 字节 |
| button_text | string | 跳转按钮文字 字段长度最小 1 字节，长度最大 96 字节 |
| wechat_channels_account_id | string | 视频号账号 id 字段长度最小 1 字节，长度最大 1024 字节 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/live_room_components/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "component_spec": {
        "live_image_component": {
            "cheer_icon": []
        },
        "live_conv_component": []
    }
}'
curl 'https://api.e.qq.com/v3.0/live_room_components/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "component_spec": {
        "live_image_component": {
            "cheer_icon": []
        },
        "live_conv_component": []
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| component_id | integer | 直播间组件 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": ""
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
