---
title: 创建商品库 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/product_catalogs/add
doc_id: tencent_ads_v3_0_docs_api_product_catalogs_add
source_id: tencent_ads_v3_0_docs_api_product_catalogs_add
---
# 创建商品库 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | product_catalogs/add |
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
| account_id* | integer | 广告主 id，有操作权限的广告主 id，如果已经升级了工作台，则填写 bm_id 默认值：默认值：1，最小值 1，最大值 99999 |
| catalog_name* | string | 商品库名称 字段长度最小 1 字节，长度最大 255 字节 |
| catalog_scale_type* | enum | 商品库规模，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_catalog_scale) 可选值：{ CATALOG_SCALE_TYPE_NORMAL, CATALOG_SCALE_TYPE_HUGE } |
| catalog_type* | enum | 商品库类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#dpa_api_catalog_type) 可选值：{ CATALOG_TYPE_UNKNOWN, CATALOG_TYPE_STANDARD, CATALOG_TYPE_FENGYE, CATALOG_TYPE_LOCAL_STORE } |
| industry_type* | enum | 商品库行业类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#dpa_catalog_industry) 可选值：{ INDUSTRY_TYPE_ECOMMERCE, INDUSTRY_TYPE_READING, INDUSTRY_TYPE_EDUCATION, INDUSTRY_TYPE_WEDDING, INDUSTRY_TYPE_VIDEO, INDUSTRY_TYPE_INSURANCE, INDUSTRY_TYPE_LOAN, INDUSTRY_TYPE_FINANCIAL, INDUSTRY_TYPE_BANKCARD, INDUSTRY_TYPE_SECURITIES, INDUSTRY_TYPE_ESTATE, INDUSTRY_TYPE_CARRIER, INDUSTRY_TYPE_MERCHANTS, INDUSTRY_TYPE_BUSINESS_SERVICE, INDUSTRY_TYPE_DECORATION_BUILDING_MATERIAL, INDUSTRY_TYPE_HOTEL, INDUSTRY_TYPE_CAR_ONLINE_PLATFORM, INDUSTRY_TYPE_CAR_AFTERMARKET, INDUSTRY_TYPE_CAR_TRAVEL_SERVICE } |
| catalog_version | integer | 商品库版本号，2：2.0 版商品库，3：3.0 版商品库，默认为 2.0 商品库 |
| business_unit_id | integer | 业务单元 id |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/product_catalogs/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 111111111
}'
curl 'https://api.e.qq.com/v3.0/product_catalogs/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": 111111111
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| product_catalog_id | integer | 商品库 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "product_catalog_id": "123456"
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
