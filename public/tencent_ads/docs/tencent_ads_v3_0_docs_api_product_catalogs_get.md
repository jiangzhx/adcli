---
title: 获取商品库 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/product_catalogs/get
doc_id: tencent_ads_v3_0_docs_api_product_catalogs_get
source_id: tencent_ads_v3_0_docs_api_product_catalogs_get
---
# 获取商品库 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | product_catalogs/get |
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
| catalog_id | integer | 商品库 id |
| catalog_name | string | 商品库名称 字段长度最小 1 字节，长度最大 255 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/product_catalogs/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=111111111' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/product_catalogs/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=111111111' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| product_catalog_id | integer | 商品库 id |
| product_catalog_name | string | 商品库名称 |
| product_catalog_type | enum | 商品库类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#dpa_api_catalog_type) |
| product_catalog_vertical | enum | 商品库行业类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#catalog_vertical) |
| product_catalog_status | enum | 商品库状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#catalog_status) |
| product_recommend_methods | struct[] | 推荐方式集合 |
| method_id | integer | 推荐方式 id |
| method_name | string | 推荐方式名称 |
| method_description | string | 推荐方式描述名称 |
| sub_method_operators | enum[] | 推荐方式逻辑操作符集合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#recommend_method_operator) |
| sub_methods | struct[] | 子推荐方式集合 |
| sub_method_id | integer | 推荐方式 id |
| sub_method_name | string | 推荐方式名称 |
| sub_method_description | string | 推荐方式描述名称 |
| deep_link_enabled | struct | 应用直达选项 |
| ios_deep_link_enabled | boolean | 是否支持 ios 应用直达，false：不支持，true：支持 |
| android_deep_link_enabled | boolean | 是否支持 ios 应用直达，false：不支持，true：支持 |
| h5_deep_link_enabled | boolean | 是否支持 ios 应用直达，false：不支持，true：支持 |
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
                "product_catalog_id": 1,
                "product_catalog_name": "示例商品库",
                "product_catalog_type": "PRODUCT_CATALOG_TYPE_STANDARD",
                "product_catalog_vertical": "VERTICAL_EC",
                "product_catalog_status": "PRODUCT_CATALOG_STATUS_NORMAL",
                "deep_link_enabled": {
                    "ios_deep_link_enabled": false,
                    "android_deep_link_enabled": true,
                    "h5_deep_link_enabled": true
                },
                "product_recommend_methods": [
                    {
                        "method_id": 1,
                        "method_name": "再营销智能推荐",
                        "method_description": "再营销智能推荐",
                        "sub_method_operators": [
                            "LOGISTIC_OR"
                        ],
                        "sub_methods": [
                            {
                                "sub_method_id": 11,
                                "sub_method_name": "精确推荐",
                                "sub_method_description": "最近浏览过的商品"
                            }
                        ]
                    }
                ]
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
