---
title: 获取蹊径落地页模板 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/xijing_template/get
doc_id: tencent_ads_v3_0_docs_api_xijing_template_get
source_id: tencent_ads_v3_0_docs_api_xijing_template_get
---
# 获取蹊径落地页模板 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | xijing_template/get |
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
| template_id* | string | 蹊径落地页模板 id，公共的营销模板 id，或有权限的私有模板 id 字段长度最小 1 字节，长度最大 32 字节 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/xijing_template/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'template_id=1006'
curl -v -G 'https://api.e.qq.com/v3.0/xijing_template/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'template_id=1006'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| page_template_id | string | 蹊径落地页模板 id，公共的营销模板 id，或有权限的私有模板 id |
| page_type | enum | 蹊径落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#templates_page_type) |
| page_name | string | 落地页名称-用于管理 |
| clipboard | string | 剪贴板内容 |
| page_deeplink | string | 页面级 deeplink，部分流量尚不支持，请咨询相关运营同学 |
| page_title | string | 落地页标题-用于展示 |
| component_spec_list | struct[] | 组件列表，[\[template_components_support\]](https://i.gtimg.cn/ams-web/public/landing-page-api/xijing-marketing-api-1.1.3.html) |
| mobile_app_id | string | AppId，落地页类型需为 PAGE_TYPE_XIJING_ANDROID 或 PAGE_TYPE_XIJING_IOS |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "page_template_id": 1006,
        "page_type": "TEMPLATE_TYPE_ANDROID",
        "page_name": "",
        "page_title": "",
        "component_spec_list": [
            {
                "type": "COMPONENT_TYPE_VIDEO",
                "video_spec": {
                    "video_id": ""
                }
            },
            {
                "type": "COMPONENT_TYPE_TEXT",
                "text_spec": {
                    "text": ""
                }
            },
            {
                "type": "COMPONENT_TYPE_IMAGES",
                "image_list_spec": {
                    "image_list": [
                        {
                            "image_id": ""
                        }
                    ]
                }
            },
            {
                "type": "COMPONENT_TYPE_BUTTON",
                "button_spec": {
                    "text": ""
                }
            },
            {
                "type": "COMPONENT_TYPE_APP_INFO_BUTTON",
                "app_info_button_spec": {
                    "text": ""
                }
            },
            {
                "type": "COMPONENT_TYPE_FIXED_BUTTON",
                "fixed_button_spec": {
                    "desc": ""
                }
            }
        ],
        "mobile_app_id": ""
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
