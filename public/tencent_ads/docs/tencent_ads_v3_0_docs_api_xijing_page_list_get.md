---
title: 蹊径-获取落地页列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/xijing_page_list/get
doc_id: tencent_ads_v3_0_docs_api_xijing_page_list_get
source_id: tencent_ads_v3_0_docs_api_xijing_page_list_get
---
# 蹊径-获取落地页列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | xijing_page_list/get |
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
| page_id | int64 | 落地页 id，由蹊径生成的 id，主要用于在蹊径平台内查询落地页、删除落地页、送审落地页等相关落地页本身的操作使用 |
| page_service_id | string | 落地页服务 id，主要用于广告主在投放端搭建广告创意选择落地页时使用 字段长度最小 0 字节，长度最大 256 字节 |
| page_name | string | 落地页名称-用于管理，当 page_source 为 GRANT 时不支持该参数 字段长度最小 1 字节，长度最大 20 字节 |
| page_type | enum[] | 蹊径落地页类型，当 page_source 为 GRANT 时不支持该参数，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#x_j_page_type) 数组最小长度 0，最大长度 8 可选值：{ XJ_DEFAULT_H5, XJ_ANDROID_APP_H5, XJ_IOS_APP_H5, XJ_WEBSITE_H5, XJ_ANDROID_APP_NATIVE, XJ_IOS_APP_NATIVE, XJ_WEBSITE_NATIVE, XJ_FENGLING_LBS } |
| page_last_modify_start_time | string | 蹊径落地页最近更新时间 字段长度最小 0 字节，长度最大 30 字节 |
| page_last_modify_end_time | string | 蹊径落地页最近更新时间 字段长度最小 0 字节，长度最大 30 字节 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| page_index | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_publish_status | enum[] | 蹊径落地页发布状态，当 page_source 为 GRANT 时不支持该参数，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_publish_status) 数组最小长度 0，最大长度 5 可选值：{ LANDING_PAGE_STATUS_UNPUBLISH, LANDING_PAGE_STATUS_PUBLISHED, LANDING_PAGE_STATUS_OFFLINE, LANDING_PAGE_STATUS_DELETING, LANDING_PAGE_STATUS_DELETED } |
| page_status | enum[] | 蹊径落地页状态，当 page_source 为 GRANT 时不支持该参数，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_audit_status) 数组最小长度 0，最大长度 5 可选值：{ LANDING_PAGE_STATUS_EDITING, LANDING_PAGE_STATUS_PENDING, LANDING_PAGE_STATUS_APPROVED, LANDING_PAGE_STATUS_REJECTED, LANDING_PAGE_STATUS_DELETED } |
| page_source | enum | 查询类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_source) 可选值：{ GRANT, OWNER } 默认值：OWNER |
| page_owner_id | integer | 授权落地页的拥有者 id，包括代理商和广告主帐号 id。当 page_source 为 GRANT 时，支持该参数 |
| app_id | integer | 蹊径落地页绑定的 app id |
| app_type | enum | 蹊径落地页绑定的 app 类型，参数取值限定:ANDROID,IOS，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#app_type) 可选值：{ ANDROID, IOS } |
| query_type | enum | 落地页状态查询方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_list_query_type) 可选值：{ DEFAULT, DELETED, ALL } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/xijing_page_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page_type=[]' \
-d 'page_size=10' \
-d 'page_index=1' \
-d 'page_publish_status=[]' \
-d 'page_status=[]'
curl -v -G 'https://api.e.qq.com/v3.0/xijing_page_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'page_type=[]' \
-d 'page_size=10' \
-d 'page_index=1' \
-d 'page_publish_status=[]' \
-d 'page_status=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 蹊径落地页返回数据结构 |
| page_id | int64 | 落地页 id，由蹊径生成的 id，主要用于在蹊径平台内查询落地页、删除落地页、送审落地页等相关落地页本身的操作使用 |
| page_service_id | string | 落地页服务 id，主要用于广告主在投放端搭建广告创意选择落地页时使用 |
| page_name | string | 落地页名称-用于管理 |
| page_type | enum | 蹊径落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#x_j_page_type) |
| page_publish_status | enum | 蹊径落地页发布状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_publish_status) |
| page_status | enum | 蹊径落地页状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_audit_status) |
| page_last_modify_time | string | 蹊径落地页最近更新时间 |
| page_owner_id | integer | 授权落地页的拥有者 id，包括代理商和广告主帐号 id |
| publish_url | string | 蹊落地页 Url，落地页未审核通过下不支持返还落地页链接 |
| reject_reason | string | 落地页审核被拒理由 |
| playable_type | enum | 互动落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#x_j_playable_type) |
| publish_app_id | struct | 已发布版本落地页 App 信息 |
| android_app_id | integer | 蹊径落地页绑定的 app id |
| ios_app_id | integer | 蹊径落地页绑定的 app id |
| unpublish_app_id | struct | 未发布版本落地页 App 信息 |
| android_app_id | integer | 蹊径落地页绑定的 app id |
| ios_app_id | integer | 蹊径落地页绑定的 app id |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |
| total_pages | integer | 总页数 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| page_index | integer | 搜索页码 默认值：1 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "page_id": 523034383985764607,
                "page_service_id": 523034383985764607,
                "page_type": "XJ_ANDROID_APP_H5",
                "page_name": "落地页-名称",
                "page_publish_status": "LANDING_PAGE_STATUS_PUBLISHED",
                "page_status": "LANDING_PAGE_STATUS_EDITING",
                "page_last_modify_time": "2020-07-30 20:45:19",
                "page_owner_id": 204583434,
                "publish_url": "https://www.qq.com",
                "reject_reason": "审批拒绝理由",
                "playable_type": "TEMPLATE_GAME",
                "publish_app_id": {
                    "android_app_id": 123,
                    "ios_app_id": 123
                },
                "unpublish_app_id": {
                    "android_app_id": 123,
                    "ios_app_id": 123
                }
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        },
        "total_pages": 324,
        "page_size": 10,
        "page_index": 1
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
