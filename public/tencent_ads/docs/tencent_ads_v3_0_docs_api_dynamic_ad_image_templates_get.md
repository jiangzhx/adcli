---
title: 获取动态商品图片模板 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_image_templates/get
doc_id: tencent_ads_v3_0_docs_api_dynamic_ad_image_templates_get
source_id: tencent_ads_v3_0_docs_api_dynamic_ad_image_templates_get
---
# 获取动态商品图片模板 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | dynamic_ad_image_templates/get |
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
| product_catalog_id* | integer | 商品目录 id 最小值 0，最大值 2147483647 |
| product_mode* | enum | 标明适用的动态商品广告类型，SINGLE 表示适用于 SDPA，MULTIPLE 表示适用于 MDPA，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_product_mode) 可选值：{ SINGLE, MULTIPLE } |
| dynamic_ad_template_ownership_type | enum | 动态商品模板所属类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#dynamic_ad_template_ownership_type) 可选值：{ ALL, SELF_OWNED, GRANTED, COMMON, PRODUCT_CATALOG_OWNED } |
| dynamic_ad_template_width* | integer | 动态商品模板宽度，单位 px，同比例下的传参，会返回最大尺寸的实际模板，确保投放可用，具体宽高数值详见 [\[动态商品模板宽高合法入参\]](https://developers.e.qq.com/docs/guide/ads/dynamictemplatevalidwidthheight) 最小值 1，最大值 2000 |
| dynamic_ad_template_height* | integer | 动态商品模板高度，单位 px，同比例下的传参，会返回最大尺寸的实际模板，确保投放可用，具体宽高数值详见 [\[动态商品模板宽高合法入参\]](https://developers.e.qq.com/docs/guide/ads/dynamictemplatevalidwidthheight) 最小值 1，最大值 2000 |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件 数组长度为 1 |
| field* | string | 过滤字段 可选值：{ product_item_display_quantity } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 product_item_display_quantity 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关。当 field 取值 product_item_display_quantity 时：当 product_mode 为 MULTIPLE 时，可选择枚举列表：{ SINGLE, MULTIPLE }，不传默认返回所有可用模板；当 product_mode 为 SINGLE 时，可选择枚举列表：{ SINGLE }，不传默认为 SINGLE |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| template_id_list | integer[] | 模板 id 列表筛选 |
| template_name | string | 模板名称模糊查询 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/dynamic_ad_image_templates/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'product_catalog_id=<PRODUCT_CATALOG_ID>' \
-d 'product_mode=<PRODUCT_MODE>' \
-d 'dynamic_ad_template_ownership_type=ALL' \
-d 'dynamic_ad_template_width=1280' \
-d 'dynamic_ad_template_height=720' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10' \
-d 'template_id_list=[]'
curl -v -G 'https://api.e.qq.com/v3.0/dynamic_ad_image_templates/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'product_catalog_id=<PRODUCT_CATALOG_ID>' \
-d 'product_mode=<PRODUCT_MODE>' \
-d 'dynamic_ad_template_ownership_type=ALL' \
-d 'dynamic_ad_template_width=1280' \
-d 'dynamic_ad_template_height=720' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10' \
-d 'template_id_list=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| dynamic_ad_template_id | integer | 动态商品模板 id |
| dynamic_ad_template_name | string | 动态商品模板名称 |
| product_item_display_quantity | enum | 模板中展示的商品数量，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_product_item_display_quantity) |
| dynamic_ad_template_width | integer | 动态商品模板宽度，单位 px，同比例下的传参，会返回最大尺寸的实际模板，确保投放可用，具体宽高数值详见 [\[动态商品模板宽高合法入参\]](https://developers.e.qq.com/docs/guide/ads/dynamictemplatevalidwidthheight) |
| dynamic_ad_template_height | integer | 动态商品模板高度，单位 px，同比例下的传参，会返回最大尺寸的实际模板，确保投放可用，具体宽高数值详见 [\[动态商品模板宽高合法入参\]](https://developers.e.qq.com/docs/guide/ads/dynamictemplatevalidwidthheight) |
| image_url | string | 动态商品模板示例图链接 |
| image_product_fields | array | 模板图片使用到的商品字段列表 |
| fill_type | enum | 素材填充方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#template_image_fill_type) |
| coverage | float | 覆盖率，百分数 |
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
                "dynamic_ad_template_id": 123,
                "dynamic_ad_template_name": "模板名称",
                "product_item_display_quantity": "SINGLE",
                "dynamic_ad_template_width": 1000,
                "dynamic_ad_template_height": 560,
                "image_url": "http://example.org/example.jpg"
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
