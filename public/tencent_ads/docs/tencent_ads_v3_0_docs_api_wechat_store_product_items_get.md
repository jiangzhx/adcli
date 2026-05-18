---
title: 获取微信小店商品 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wechat_store_product_items/get
doc_id: tencent_ads_v3_0_docs_api_wechat_store_product_items_get
source_id: tencent_ads_v3_0_docs_api_wechat_store_product_items_get
---
# 获取微信小店商品 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | wechat_store_product_items/get |
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
| account_id* | integer | 广告主 id |
| product_catalog_id* | integer | 商品库 id |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件 数组最小长度 1，最大长度 10 |
| field* | string | 过滤字段 可选值：{ product_outer_id, query_key, wechat_store_product_status, price, sort } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 product_outer_id 时，可选值：{ EQUALS, IN } 当 field 取值 query_key 时，可选值：{ CONTAINS } 当 field 取值 wechat_store_product_status 时，可选值：{ EQUALS, IN } 当 field 取值 price 时，可选值：{ GREATER_EQUALS, LESS_EQUALS } 当 field 取值 sort 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关 数组最小长度 1，最大长度 100，当 field 取值 product_outer_id 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 query_key 时，数组长度为 1 字段长度最小 1 字节，长度最大 100 字节 当 field 取值 wechat_store_product_status 时，数组最小长度 1，最大长度 5 字段长度最小 1 字节，长度最大 100 字节 当 field 取值 price 时，数组长度为 1 字段长度最小 1 字节，长度最大 100 字节 当 field 取值 sort 时，数组长度为 1 可选值：{ SORT_PRICE_ASC, SORT_PRICE_DESC, SORT_SALES_NUM_ASC, SORT_SALES_NUM_DESC } |
| page | integer | 搜索页码 最小值 1，最大值 9999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/wechat_store_product_items/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/wechat_store_product_items/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
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
| product_outer_id | string | 广告主商品 id |
| product_name | string | 商品名称 |
| description | string | 商品描述 |
| product_primary_image_urls | string[] | 微信小店商品主图列表 |
| product_detail_image_urls | string[] | 微信小店商品详情图列表 |
| price | float | 商品日常售价，大于等于 0，至多 2 位小数 |
| first_category_id | integer | 一级分类 id |
| first_category_name | string | 一级分类名称 |
| second_category_id | integer | 二级分类 id |
| second_category_name | string | 二级分类名称 |
| third_category_id | integer | 三级分类 id |
| third_category_name | string | 三级分类名称 |
| fourth_category_id | integer | 四级分类 id |
| fourth_category_name | string | 四级分类名称 |
| brand_name | string | 品牌名称 |
| sales_volume | integer | 已售卖数 |
| comment_num | integer | 商品评价数 |
| spu_link_status | enum | spu 关联状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#spu_link_status) |
| link_spu_id | string | 关联的 spu_id |
| link_spu_name | string | 关联的 spu 名称 |
| wechat_store_product_status | integer | 微信小店商品状态，0：初始值，5：上架，6：回收站，11：自主下架，13：违规下架/风控系统下架，14：保证金不足下架，15：品牌过期下架，20：商品被封禁 |
| wechat_store_product_ad_status | integer | 微信小店商品可投放广告状态，1：可投放，0：不可投放 |
| wechat_store_product_ad_unavailable_cause | string[] | 微信小店商品不可投放广告原因 |
| store_price_item_list | struct[] | 微信小店商品套装信息 |
| store_id | string | 小店 id |
| wx_store_product_operate_type | integer | 小店商品审核状态，0:初始值;1:封禁;2:解封;3:不可播;4:首次投放未审核 |
| sku_stock_status | integer | 小店商品库存状态，1:库存大于 0 , 2:库存小于等于 0 常见为售罄 |
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
                "product_primary_image_urls": [],
                "product_detail_image_urls": [],
                "wechat_store_product_ad_unavailable_cause": [],
                "store_price_item_list": []
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

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
