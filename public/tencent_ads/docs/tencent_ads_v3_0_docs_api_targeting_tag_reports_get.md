---
title: 获取定向标签报表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/targeting_tag_reports/get
doc_id: tencent_ads_v3_0_docs_api_targeting_tag_reports_get
source_id: tencent_ads_v3_0_docs_api_targeting_tag_reports_get
---
# 获取定向标签报表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_insights |
| --- | --- |
| 请求地址 | targeting_tag_reports/get |
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
| type* | string | 接口类型 可选值：{ GENDER, AGE, REGION, CITY, CUSTOM_AUDIENCE, OS } |
| level* | string | 获取定向标签报表类型级别，当 type 为 GENDER,AGE,REGION,CITY,OS 时，支持{ADVERTISER,ADGROUP},type 为 CUSTOM_AUDIENCE 时，支持{ADVERTISER,ADGROUP,DYNAMIC_CREATIVE} 可选值：{ ADVERTISER, ADGROUP, DYNAMIC_CREATIVE } |
| date_range* | struct | 日期范围，最早支持查询 1 年内（365 天）的数据 |
| start_date* | string | 开始日期，日期格式：YYYY-MM-DD，且小于等于 end_date 字段长度为 10 字节 |
| end_date* | string | 结束日期，日期格式：YYYY-MM-DD，且大于等于 begin_date 字段长度为 10 字节 |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，当 level 为 ADGROUP 或 DYNAMIC_CREATIVE 时，该字段必填，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 2 |
| field* | string | 过滤字段 可选值：{ adgroup_id, gender } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 adgroup_id 时，可选值：{ EQUALS, IN } 当 field 取值 gender 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 100 字段长度最大 64 字节 |
| group_by* | string[] | 聚合参数，例：["date"]，见 [\[聚合规则\]](https://developers.e.qq.com/v3.0/pages/ad_insights) 数组最小长度 1，最大长度 10 字段长度最大 64 字节 |
| order_by | struct[] | 排序字段 数组最小长度 1，最大长度 2 |
| sort_field* | string | 排序字段 |
| sort_type* | enum | 排序方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#sorted) 可选值：{ ASCENDING, DESCENDING } |
| time_line | enum | 时间口径，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#time_line) 可选值：{ REQUEST_TIME, REPORTING_TIME, ACTIVE_TIME } |
| page | integer | 搜索页码 最小值 1，最大值 100 默认值：1 |
| page_size | integer | 一页显示的数据条数，默认值：10。最小值 1，最大值 2000 默认值：10 |
| fields* | string[] | 指定返回的字段列表 数组最小长度 1，最大长度 1024 字段长度最小 1 字节，长度最大 64 字节 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/targeting_tag_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'type=REGION' \
-d 'level=ADGROUP' \
-d 'date_range={
    "start_date": "2024-01-01",
    "end_date": "2024-01-01"
}' \
-d 'group_by=[
    "date",
    "region_id",
    "adgroup_id",
    "site_set"
]' \
-d 'time_line=REQUEST_TIME' \
-d 'page=1' \
-d 'page_size=10' \
-d 'fields=[
    "date",
    "adgroup_id",
    "region_id",
    "view_count"
]'
curl -v -G 'https://api.e.qq.com/v3.0/targeting_tag_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'type=REGION' \
-d 'level=ADGROUP' \
-d 'date_range={
    "start_date": "2024-01-01",
    "end_date": "2024-01-01"
}' \
-d 'group_by=[
    "date",
    "region_id",
    "adgroup_id",
    "site_set"
]' \
-d 'time_line=REQUEST_TIME' \
-d 'page=1' \
-d 'page_size=10' \
-d 'fields=[
    "date",
    "adgroup_id",
    "region_id",
    "view_count"
]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
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
                "adgroup_id": 123000001,
                "adgroup_name": "广告名称 001",
                "region_id": 1,
                "date": "2024-01-01",
                "view_count": 1000
            },
            {
                "adgroup_id": 123000002,
                "adgroup_name": "广告名称 002",
                "region_id": 2,
                "date": "2024-01-01",
                "view_count": 2000
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

## 相关阅读

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
