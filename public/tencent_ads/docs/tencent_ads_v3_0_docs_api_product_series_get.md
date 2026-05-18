---
title: 获取商品系列 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/product_series/get
doc_id: tencent_ads_v3_0_docs_api_product_series_get
source_id: tencent_ads_v3_0_docs_api_product_series_get
---
# 获取商品系列 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | product_series/get |
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
| account_id* | integer | 广告主 id，有操作权限的广告主 id，如果已经升级了工作台，则填写 bm_id |
| catalog_id* | integer | 商品库 id |
| filtering | struct[] | 过滤条件 |
| field* | string | 过滤字段 可选值：{ product_series_id, product_series_name } |
| operator* | enum | 操作符，可选操作符和过滤字段有关，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#product_set_spec_filtering_operator) 当 field 取值 product_series_id 时，可选值：{ EQUALS } 当 field 取值 product_series_name 时，可选值：{ CONTAINS } |
| value* | string | 字段取值 字段长度最小 1 字节，长度最大 100 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/product_series/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'catalog_id=<CATALOG_ID>' \
-d 'filtering=[]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/product_series/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'catalog_id=<CATALOG_ID>' \
-d 'filtering=[]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| product_series_id | integer | 商品系列 id |
| product_series_name | string | 商品系列名称 |
| product_series_description | string | 商品系列描述 |
| product_series_type | enum | 商品系列类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#product_series_type) |
| product_series | struct | 商品系列详情 |
| logic_operator | enum | 商品系列逻辑操作符，枚举值，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#product_series_spec_logic_operator) |
| filters | struct[] | 商品系列条件 |
| field | string | 过滤字段 |
| operator | enum | 商品系列字段值操作符，操作符和过滤字段有关，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#product_set_spec_field_value_operator) |
| values | struct[] | 字段取值，values 数组的个数限制与 operator 的取值相关 |
| field_value | string | 字段取值 |
| field_value_range | struct | 区间字段取值 |
| min | integer | 下区间 |
| max | integer | 上区间 |
| min_exclusive | boolean | 是否不包含下区间 |
| max_exclusive | boolean | 是否不包含上区间 |
| currency_type | enum | 字段取值货币类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#currency_type) |
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
                "product_series_id": 11050,
                "product_series_name": "不限",
                "product_series_description": "包含商品库内所有的商品",
                "product_series_type": "PRODUCT_SERIES_TYPE_UNLIMITED",
                "product_series": {
                    "logic_operator": "LOGIC_OPERATOR_OR",
                    "filters": [
                        {
                            "field": "unlimited",
                            "operator": "EQUALS",
                            "values": [
                                {
                                    "field_value": "不限"
                                }
                            ]
                        }
                    ]
                }
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
