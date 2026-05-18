---
title: 查询直播间组件信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/live_room_components/get
doc_id: tencent_ads_v3_0_docs_api_live_room_components_get
source_id: tencent_ads_v3_0_docs_api_live_room_components_get
---
# 查询直播间组件信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | live_room_components/get |
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
| field* | string | 过滤字段 可选值：{ component_id, component_type } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#filter_operator) 当 field 取值 component_id 时，可选值：{ EQUALS, IN } 当 field 取值 component_type 时，可选值：{ EQUALS, IN } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 component_id 时，数组长度为 1 当 field 取值 component_type 时，数组长度为 1 可选值：{ LIVE_IMAGE_UNKNOWN, LIVE_IMAGE_COMPONENT, LIVE_CONV_COMPONENT } |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/live_room_components/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/live_room_components/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| account_id | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| component_name | string | 直播间组件名称名称 |
| component_id | integer | 直播间组件 id |
| component_type | enum | 直播间组件类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#creative_component_type) |
| finder_username | string | 视频号账号 id 已废弃 |
| finder_nickname | string | 视频号昵称 |
| status | enum | 组件状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_sys_status) |
| audit_status | enum | 审核状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#creative_component_audit_status) |
| audit_msg | string | 审核原因 |
| component_spec | struct | 直播间组件详情 |
| live_image_component | struct | 喝彩图&背景图直播间组件详情 |
| bg_img_url | string | 背景图 url |
| bg_img_id | string | 背景图 id |
| cheer_icon | struct[] | 背景图列表信息 |
| icon_url | string | 喝彩图 url |
| icon_img_id | string | 喝彩图 id |
| samp_rate | integer | samp_rate |
| is_use_cheer_icon | integer | 是否启用喝彩图 |
| is_use_bg_img | integer | 是否启用背景图 |
| live_begin_time | integer | 直播间预期开播时间，时间戳 |
| live_conv_component | struct | 直播间转化组件详情 |
| page_id | int64 | 原生页 id |
| page_type | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) |
| title | string | 素材标题，仅在规格支持时传入，详见规格详情 |
| img_url | string | 左侧图像 url |
| img_id | string | 左侧图像 id |
| desc | string | 左下方的简短描述 |
| button_text | string | 跳转按钮文字 |
| component_wechat_channel_spec | struct | 微信视频号信息 |
| icon_url | string | 喝彩图 url |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| is_publish_enabled | boolean | 是否可上架，是否可上架,示例值(true) |
| wechat_channels_account_id | string | 视频号账号 id |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "account_id": "<ACCOUNT_ID>",
                "component_spec": {
                    "live_image_component": {
                        "cheer_icon": []
                    },
                    "live_conv_component": []
                },
                "component_wechat_channel_spec": [],
                "created_time": 1491019858,
                "last_modified_time": 1491098468
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
