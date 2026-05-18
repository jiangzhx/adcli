---
title: 创建异步报表任务 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/async_reports/add
doc_id: tencent_ads_v3_0_docs_api_async_reports_add
source_id: tencent_ads_v3_0_docs_api_async_reports_add
---
# 创建异步报表任务 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_insights |
| --- | --- |
| 请求地址 | async_reports/add |
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
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| task_name* | string | 任务名称 字段长度最小 1 字节，长度最大 120 字节 |
| report_fields* | string[] | 指定异步报表返回的字段 数组最小长度 1，最大长度 1024 字段长度最小 1 字节，长度最大 64 字节 |
| level* | enum | 异步报表类型级别，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#async_report_level) 可选值：{ REPORT_LEVEL_ADVERTISER, REPORT_LEVEL_ADGROUP, REPORT_LEVEL_BIDWORD, REPORT_LEVEL_QUERYWORD, REPORT_LEVEL_AGE, REPORT_LEVEL_GENDER, REPORT_LEVEL_REGION, REPORT_LEVEL_CITY, REPORT_LEVEL_DYNAMIC_CREATIVE, REPORT_LEVEL_COMPONENT, REPORT_LEVEL_MATERIAL_IMAGE, REPORT_LEVEL_MATERIAL_VIDEO, REPORT_LEVEL_CHANNEL, REPORT_LEVEL_LANDING_PAGE, REPORT_LEVEL_MARKETING_ASSET, REPORT_LEVEL_AD_UNION, REPORT_LEVEL_PRODUCT_CATALOG, REPORT_LEVEL_PROJECT, REPORT_LEVEL_PROJECT_CREATIVE, REPORT_LEVEL_OS, REPORT_LEVEL_PRODUCT_CREATIVE_TEMPLATE } |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，若获取联盟广告位信息此字段必填，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 5 |
| field* | string | 过滤字段 可选值：{ adgroup_id, dynamic_creative_id, component_id, component_type, bidword_id, image_id, video_id, channel_id, union_position_id, landing_page_type, landing_page_id, md5, hour } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 可选值：{ EQUALS, CONTAINS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER, IN, NOT_EQUALS } |
| values* | string[] | 字段取值，values 数组元素的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 64 字节 |
| time_line | enum | 时间口径，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#time_line) 可选值：{ REQUEST_TIME, REPORTING_TIME, ACTIVE_TIME } |
| group_by | string[] | 聚合参数，所有 level 均可使用：{site_set}；见 [\[聚合规则\]](https://developers.e.qq.com/v3.0/pages/ad_insights) 数组最小长度 1，最大长度 5 字段长度最大 255 字节 |
| granularity* | enum | 异步报表粒度，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#report_granularity) 可选值：{ HOURLY, DAILY } |
| date* | string | 日期，格式 YYYY-MM-DD，当 granularity 为 HOURLY 时，只支持最近 30 天内的数据，当 granularity 为 DAILY 时，只支持最近 365 天内的数据 字段长度为 10 字节 |
| organization_id | integer | 业务单元 id 最小值 0，最大值 9999999999 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/async_reports/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "level": "REPORT_LEVEL_CHANNEL",
    "time_line": "REQUEST_TIME",
    "task_name": "915225_169104810011_1",
    "granularity": "DAILY",
    "date": "2023-11-24"
}'
curl 'https://api.e.qq.com/v3.0/async_reports/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "level": "REPORT_LEVEL_CHANNEL",
    "time_line": "REQUEST_TIME",
    "task_name": "915225_169104810011_1",
    "granularity": "DAILY",
    "date": "2023-11-24"
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| task_id | integer | 任务 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "task_id": "<TASK_ID>"
    }
}
```

## 场景组合示例

枚举值会自动根据已选条件变化，只展示有示例数据的枚举值

## 可视化调试工具

## 相关阅读

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
