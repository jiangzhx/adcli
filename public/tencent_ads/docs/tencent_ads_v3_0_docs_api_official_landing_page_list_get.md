---
title: 官方落地页-获取落地页列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/official_landing_page_list/get
doc_id: tencent_ads_v3_0_docs_api_official_landing_page_list_get
source_id: tencent_ads_v3_0_docs_api_official_landing_page_list_get
---
# 官方落地页-获取落地页列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | official_landing_page_list/get |
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
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件 数组最小长度 1，最大长度 10 |
| field* | string | 过滤字段 可选值：{ page_id, page_name, page_status } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 page_id 时，可选值：{ EQUALS } 当 field 取值 page_name 时，可选值：{ EQUALS } 当 field 取值 page_status 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值 当 field 取值 page_id 且 operator 取值 EQUALS 时， 数组长度为 1 当 field 取值 page_name 时，数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 当 field 取值 page_status 时，数组最小长度 1，最大长度 2 可选值：{ LANDING_PAGE_STATUS_EDITING, LANDING_PAGE_STATUS_PENDING, LANDING_PAGE_STATUS_APPROVED, LANDING_PAGE_STATUS_REJECTED, LANDING_PAGE_STATUS_OFFLINE } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/official_landing_page_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'filtering=[]' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page_size=10' \
-d 'page=1'
curl -v -G 'https://api.e.qq.com/v3.0/official_landing_page_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'filtering=[]' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page_size=10' \
-d 'page=1'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 官方落地页列表数据 |
| page_id | int64 | 落地页服务 id，用于广告投放端搭建广告创意选择落地页时使用 |
| landing_page_id | integer | 官方落地页 id，仅用于官方落地页模块时使用 |
| page_name | string | 落地页名称-用于编辑器管理，不支持 emoji |
| page_title | string | 落地页标题-用于页面展示，不支持 emoji |
| page_type | enum | 官方落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#official_page_type) |
| page_status | enum | 官方落地页状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#official_page_status) |
| page_info | struct | 分页信息 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| page | integer | 搜索页码 默认值：1 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "page_info": {
            "total_number": 1,
            "total_page": 1,
            "page": 1,
            "page_size": 10
        },
        "list": [
            {
                "page_id": "12345678"
            }
        ]
    }
}
```

## 场景组合示例

枚举值会自动根据已选条件变化，只展示有示例数据的枚举值

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
