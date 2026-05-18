---
title: 获取商品 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/product_items/get
doc_id: tencent_ads_v3_0_docs_api_product_items_get
source_id: tencent_ads_v3_0_docs_api_product_items_get
---
# 获取商品 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | product_items/get |
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
| product_catalog_id* | integer | 商品库 id |
| filtering | struct[] | 过滤条件，1、若此字段不传，或传空则视为无限制条件，默认只返回 Top 100 匹配商品。如需展示所有商品，请于 youhuo.qq.com 或者 youhuo.tencent.com 中查看。2、此接口为非实时接口，最大 2 小时延迟。 数组最小长度 1，最大长度 10 |
| field* | string | 过滤字段 可选值：{ product_set_id, product_name, product_outer_id, first_category_id, second_category_id, third_category_id, fourth_category_id, sdpa_or_mdpa, category_ids, landing_page_types, filter_video, limit, high_info_tag } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 product_set_id 时，可选值：{ EQUALS } 当 field 取值 product_name 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 product_outer_id 时，可选值：{ EQUALS, IN } 当 field 取值 first_category_id 时，可选值：{ EQUALS, IN } 当 field 取值 second_category_id 时，可选值：{ EQUALS, IN } 当 field 取值 third_category_id 时，可选值：{ EQUALS, IN } 当 field 取值 fourth_category_id 时，可选值：{ EQUALS, IN } 当 field 取值 sdpa_or_mdpa 时，可选值：{ EQUALS } 当 field 取值 category_ids 时，可选值：{ EQUALS, IN } 当 field 取值 landing_page_types 时，可选值：{ EQUALS, CONTAINS, IN } 当 field 取值 filter_video 时，可选值：{ EQUALS } 当 field 取值 limit 时，可选值：{ EQUALS } 当 field 取值 sort_by 时，可选值：{ EQUALS } 当 field 取值 high_info_tag 时，可选值：{ EQUALS } 当 field 取值 product_status 时，可选值：{ EQUALS, CONTAINS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关 数组最小长度 1，最大长度 100，当 field 取值 product_set_id 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 product_outer_id 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 product_name 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 first_category_id 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 second_category_id 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 third_category_id 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 fourth_category_id 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 sdpa_or_mdpa 时，数组长度为 1 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 category_ids 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 landing_page_types 时，数组最小长度 1，最大长度 5 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 filter_video 时，数组最小长度 1，最大长度 5 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 limit 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 sort_by 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 high_info_tag 时，数组最小长度 1，最大长度 5 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 product_status 时，数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 255 字节 当 field 取值 query_key 时，数组长度为 1 字段长度最小 1 字节，长度最大 100 字节 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/product_items/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=111111111' \
-d 'product_catalog_id=<CATALOG_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]'
curl -v -G 'https://api.e.qq.com/v3.0/product_items/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=111111111' \
-d 'product_catalog_id=<CATALOG_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| product_outer_id | string | 广告主商品 id |
| product_name | string | 商品名称 |
| product_image_url | string | 商品预览图 |
| product_short_name | string | 商品简称 |
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
| brand_id | integer | 品牌 id |
| description | string | 商品描述 |
| custom_data | string | 商品自定义属性 |
| is_video | boolean | 是否视频商品，（true\|false） |
| data_source | string | 搜索结果来源名称 |
| product_select_score | float | 爆量分 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "product_outer_id": "xly_123",
                "price": 12.99
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
