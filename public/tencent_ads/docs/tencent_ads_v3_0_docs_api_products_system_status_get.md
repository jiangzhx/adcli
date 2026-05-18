---
title: 获取审核失败的商品 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/products_system_status/get
doc_id: tencent_ads_v3_0_docs_api_products_system_status_get
source_id: tencent_ads_v3_0_docs_api_products_system_status_get
---
# 获取审核失败的商品 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | products_system_status/get |
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
| account_id* | integer | 广告主 id，如果已经升级了工作台，则填写 bm_id，有操作权限的广告主 id |
| product_catalog_id* | integer | 商品库 id |
| feed_id | integer | 商品文件 id |
| page | integer | 搜索页码 默认值：默认值：1，最小值 1，最大值 99999 |
| page_size | integer | 一页显示的数据条数 默认值：默认值：1，最小值 1，最大值 99999 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/products_system_status/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'product_catalog_id=101' \
-d 'feed_id=980' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/products_system_status/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'product_catalog_id=101' \
-d 'feed_id=980' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 商品失败信息 List 默认值：默认值：1，最小值 1，最大值 99999 |
| feed_id | integer | 商品文件 id 默认值：默认值：1，最小值 1，最大值 99999 |
| product_id | string | 商品 id |
| system_status | enum | 商品审核状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_audit_status) |
| reject_message | string | 商品审核结果 |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：默认值：1，最小值 1，最大值 99999 |
| page_size | integer | 一页显示的数据条数 默认值：默认值：1，最小值 1，最大值 99999 |
| total_number | integer | 总条数 默认值：默认值：1，最小值 1，最大值 99999 |
| total_page | integer | 总页数 默认值：默认值：1，最小值 1，最大值 99999 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "feed_id": 980,
                "product_id": 2305900746661547423,
                "system_status": "PRODUCT_STATUS_REJECTED",
                "reject_message": "自动审核不通过，文案命中“创意”和“落地页”的 1 级或 2 级黑词：aaa"
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 479449,
            "total_page": 47945
        }
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
