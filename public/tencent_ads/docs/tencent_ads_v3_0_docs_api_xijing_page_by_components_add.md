---
title: 蹊径-基于组件创建落地页 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/xijing_page_by_components/add
doc_id: tencent_ads_v3_0_docs_api_xijing_page_by_components_add
source_id: tencent_ads_v3_0_docs_api_xijing_page_by_components_add
---
# 蹊径-基于组件创建落地页 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | xijing_page_by_components/add |
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
| is_auto_submit* | integer | 是否自动送审 最小值 0，最大值 1 |
| pages* | struct[] | 落地页配置列表 数组最小长度 0，最大长度 10 |
| page_type* | enum | 蹊径落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#components_page_type) 可选值：{ PAGE_TYPE_XIJING_ANDROID, PAGE_TYPE_XIJING_IOS } |
| page_name* | string | 落地页名称-用于管理 字段长度最小 1 字节，长度最大 20 字节 |
| page_title* | string | 落地页标题-用于展示 字段长度最小 1 字节，长度最大 20 字节 |
| clipboard | string | 剪贴板内容 字段长度最小 0 字节，长度最大 300 字节 |
| page_deeplink | string | 页面级 deeplink，部分流量尚不支持，请咨询相关运营同学 字段长度最小 1 字节，长度最大 200 字节 |
| mobile_app_id* | string | AppId，落地页类型需为 PAGE_TYPE_XIJING_ANDROID 或 PAGE_TYPE_XIJING_IOS 字段长度最小 1 字节，长度最大 20 字节 |
| bg_color* | string | 页面背景颜色，rgba(0,0,0,0),rgba(255,255,255,1) |
| bg_image_id* | string | 页面背景图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 字段长度最小 0 字节，长度最大 256 字节 |
| component_spec_list* | struct[] | 组件列表，[\[components_support\]](https://i.gtimg.cn/ams-web/public/landing-page-api/xijing-marketing-api-1.1.4.html) 数组最小长度 0，最大长度 10 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/xijing_page_by_components/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "is_auto_submit": 0,
    "pages": [
        {
            "page_type": "PAGE_TYPE_XIJING_ANDROID",
            "page_name": "落地页名称",
            "page_title": "落地页标题",
            "mobile_app_id": "",
            "clipboard": "剪贴板内容",
            "page_deeplink": "deeplink://deep",
            "bg_color": "rgba(189, 16, 224, 1)",
            "bg_image_id": "",
            "component_spec_list": [
                {
                    "type": "COMPONENT_TYPE_FIXED_BUTTON",
                    "fixed_button_spec": {
                        "button_style": "fixedBtn-1",
                        "common_setting": {
                            "position": "bottom",
                            "white_space": 80,
                            "distance_to_view_port": 1
                        },
                        "btn_setting": {
                            "desc": "xxxx",
                            "background_color": "#1890ff",
                            "color": "rgb(255, 255, 255)"
                        }
                    }
                },
                {
                    "type": "COMPONENT_TYPE_IMAGES",
                    "image_list_spec": {
                        "image_list": [
                            {
                                "image_id": "",
                                "hot_area": [
                                    {
                                        "width": 30,
                                        "height": 30,
                                        "top": 20,
                                        "left": 20
                                    }
                                ],
                                "padding": {
                                    "top": 0,
                                    "right": 0,
                                    "bottom": 0,
                                    "left": 0
                                },
                                "progress_bar": {
                                    "color": "rgb(255, 255, 255)",
                                    "backgroundColor": "#1890ff"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/xijing_page_by_components/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "is_auto_submit": 0,
    "pages": [
        {
            "page_type": "PAGE_TYPE_XIJING_ANDROID",
            "page_name": "落地页名称",
            "page_title": "落地页标题",
            "mobile_app_id": "",
            "clipboard": "剪贴板内容",
            "page_deeplink": "deeplink://deep",
            "bg_color": "rgba(189, 16, 224, 1)",
            "bg_image_id": "",
            "component_spec_list": [
                {
                    "type": "COMPONENT_TYPE_FIXED_BUTTON",
                    "fixed_button_spec": {
                        "button_style": "fixedBtn-1",
                        "common_setting": {
                            "position": "bottom",
                            "white_space": 80,
                            "distance_to_view_port": 1
                        },
                        "btn_setting": {
                            "desc": "xxxx",
                            "background_color": "#1890ff",
                            "color": "rgb(255, 255, 255)"
                        }
                    }
                },
                {
                    "type": "COMPONENT_TYPE_IMAGES",
                    "image_list_spec": {
                        "image_list": [
                            {
                                "image_id": "",
                                "hot_area": [
                                    {
                                        "width": 30,
                                        "height": 30,
                                        "top": 20,
                                        "left": 20
                                    }
                                ],
                                "padding": {
                                    "top": 0,
                                    "right": 0,
                                    "bottom": 0,
                                    "left": 0
                                },
                                "progress_bar": {
                                    "color": "rgb(255, 255, 255)",
                                    "backgroundColor": "#1890ff"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 创建页面返回数据结构 |
| landingPageId | integer | 落地页 id，由蹊径生成的 id，主要用于在蹊径平台内查询落地页、删除落地页、送审落地页等相关落地页本身的操作使用 |
| id | string | 落地页服务 id，主要用于广告主在投放端搭建广告创意选择落地页时使用 |
| code | integer | 返回码 |
| message | string | 英文返回消息 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "landingPageId": 576460752303438398,
                "id": "523034383985764607",
                "message": "操作成功",
                "code": 0
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
