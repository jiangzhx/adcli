---
title: 获取动态商品视频模板 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_video_templates/get
doc_id: tencent_ads_v3_0_docs_api_dynamic_ad_video_templates_get
source_id: tencent_ads_v3_0_docs_api_dynamic_ad_video_templates_get
---
# 获取动态商品视频模板 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | dynamic_ad_video_templates/get |
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
| account_id* | integer | 广告主 id，有操作权限的广告主 id |
| product_catalog_id* | integer | 商品库 id 最小值 0，最大值 2147483647 |
| adcreative_template_id* | integer | 创意形式 id 最小值 0，最大值 2147483647 |
| product_mode* | enum | 标明适用的动态商品广告类型，SINGLE 表示适用于 SDPA，MULTIPLE 表示适用于 MDPA，目前仅支持 MULTIPLE，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_product_mode) 可选值：{ SINGLE, MULTIPLE } |
| support_channel | boolean | 模板是否支持视频号 可选值：{ true, false } |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| template_id_list | integer[] | 模板 id 列表筛选 |
| template_name | string | 模板名称模糊查询 |
| dynamic_ad_template_ownership_type | enum | 动态商品模板所属类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#dynamic_ad_video_template_ownership_type) 可选值：{ SELF_OWNED, PRODUCT_VIDEO_STRAIGHT_OUT } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/dynamic_ad_video_templates/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=20458' \
-d 'product_catalog_id=1' \
-d 'adcreative_template_id=720' \
-d 'page=1' \
-d 'page_size=10' \
-d 'template_id_list=[]'
curl -v -G 'https://api.e.qq.com/v3.0/dynamic_ad_video_templates/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=20458' \
-d 'product_catalog_id=1' \
-d 'adcreative_template_id=720' \
-d 'page=1' \
-d 'page_size=10' \
-d 'template_id_list=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| template_id | integer | 模板 id |
| template_name | string | 模板名称 |
| template_type | enum | 模板类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#video_template_type) |
| product_catalog_id | integer | 商品库 id |
| adcreative_template_id | integer | 创意形式 id |
| cover_image_url | string | 模板示例图片 URL |
| intro_video_url | string | 模板示例视频 URL |
| delivery_video_url | string | 投放用视频 URL |
| support_channel | boolean | 模板是否支持视频号 |
| coverage | float | 覆盖率，百分数 |
| min_video_duration | float | 模板支持的视频最小时长，单位 s |
| max_video_duration | float | 模板支持的视频最大时长，单位 s |
| video_product_fields | array | 模板视频使用到的商品字段列表 |
| image_product_fields | array | 模板图片使用到的商品字段列表 |
| extra | struct | 模板扩展信息 |
| cover_image_template_id | integer | 视频号场景封面图模板 id |
| cover_image_template_intro_url | string | 视频号场景封面图模板示例图片 URL |
| image_template_id | integer | 视频号场景浮层页卡图片模板 id |
| image_template_intro_url | string | 视频号场景浮层页卡图片模板示例图片 URL |
| desc | string | 视频号场景商品视频原生文案，1-1000 字，示例 {{product.product_name}} |
| floating_zone_name | string | 视频号场景浮层卡片上层文案，1-10 字，示例 {{product.product_short_name}} |
| floating_zone_desc | string | 视频号场景浮层卡片下层文案，1-14 字，示例 {{product.slogan}} |
| sub_template_list | struct[] | 子模板列表 |
| sample_video_url | string | 模板示例视频 URL |
| template_type | enum | 模板类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#video_template_type) |
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
                "template_id": 100223274,
                "template_name": "模板名称 111111",
                "template_type": "VIDEO_TEMPLATE_TYPE_TRANSPARENT",
                "product_catalog_id": 22781,
                "adcreative_template_id": 720,
                "cover_image_url": "https://videomaker-30171.sz.gfp.tencent-cloud.com/3a1026df411da6ad8e451cad8fafcbb99ef691ab",
                "intro_video_url": "https://videomaker-30171.sz.gfp.tencent-cloud.com/2f07091636a802735cbf41ea5dc2a5411bb22cca",
                "delivery_video_url": "'",
                "sub_template_list": [
                    {
                        "sample_video_url": "https://videomaker-30171.sz.gfp.tencent-cloud.com/2f07091636a802735cbf41ea5dc2a5411bb22cca",
                        "template_type": "VIDEO_TEMPLATE_TYPE_TRANSPARENT"
                    },
                    {
                        "sample_video_url": "https://videomakertest-30171.sz.gfp.tencent-cloud.com/render_res/135886/video.mp4",
                        "template_type": "VIDEO_TEMPLATE_TYPE_TRANSPARENT"
                    }
                ]
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 20,
            "total_number": 2,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
