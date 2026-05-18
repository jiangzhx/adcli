---
title: 获取日报表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/daily_reports/get
doc_id: tencent_ads_v3_0_docs_api_daily_reports_get
source_id: tencent_ads_v3_0_docs_api_daily_reports_get
---
# 获取日报表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_insights |
| --- | --- |
| 请求地址 | daily_reports/get |
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
| account_id | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| level* | enum | 获取报表类型级别，当查询业务单元的报表时,level 只支持组件层级，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_report_daily_level) 可选值：{ REPORT_LEVEL_ADVERTISER, REPORT_LEVEL_ADGROUP, REPORT_LEVEL_DYNAMIC_CREATIVE, REPORT_LEVEL_COMPONENT, REPORT_LEVEL_CHANNEL, REPORT_LEVEL_BIDWORD, REPORT_LEVEL_QUERYWORD, REPORT_LEVEL_MATERIAL_IMAGE, REPORT_LEVEL_MATERIAL_VIDEO, REPORT_LEVEL_MARKETING_ASSET, REPORT_LEVEL_PRODUCT_CATALOG, REPORT_LEVEL_PROJECT, REPORT_LEVEL_PROJECT_CREATIVE, REPORT_LEVEL_VIDEO_HIGHLIGHT, REPORT_LEVEL_PRODUCT_CREATIVE_TEMPLATE, REPORT_LEVEL_WECHAT_SHOP_PRODUCT, REPORT_LEVEL_PLAYLET } |
| date_range* | struct | 日期范围，最早支持查询 1 年内（365 天）的数据 |
| start_date* | string | 开始日期，日期格式：YYYY-MM-DD，且小于等于 end_date 字段长度为 10 字节 |
| end_date* | string | 结束日期，日期格式：YYYY-MM-DD，且大于等于 begin_date 字段长度为 10 字节 |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，若获取联盟广告位信息此字段必填，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 40 |
| field* | string | 过滤字段 可选值：{ adgroup_id, dynamic_creative_id, component_id, component_type, bidword_id, channel_id, image_id, video_id, marketing_target_type, marketing_asset_id, smart_delivery_platform, md5, product_catalog_id, product_series_id, product_outer_id, creative_template_group_id } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 adgroup_id 时，可选值：{ EQUALS, IN } 当 field 取值 dynamic_creative_id 时，可选值：{ EQUALS, IN } 当 field 取值 component_id 时，可选值：{ EQUALS, IN } 当 field 取值 component_type 时，可选值：{ EQUALS, IN } 当 field 取值 channel_id 时，可选值：{ EQUALS, IN } 当 field 取值 bidword_id 时，可选值：{ EQUALS, IN } 当 field 取值 image_id 时，可选值：{ EQUALS, IN } 当 field 取值 video_id 时，可选值：{ EQUALS, IN } 当 field 取值 marketing_target_type 时，可选值：{ EQUALS, IN } 当 field 取值 marketing_asset_id 时，可选值：{ EQUALS, IN } 当 field 取值 product_catalog_id 时，可选值：{ EQUALS, IN } 当 field 取值 product_series_id 时，可选值：{ EQUALS, IN } 当 field 取值 product_outer_id 时，可选值：{ EQUALS, IN } 当 field 取值 smart_delivery_platform 时，可选值：{ EQUALS, NOT_EQUALS } 当 field 取值 creative_template_group_id 时，可选值：{ EQUALS, IN } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 100 字段长度最大 64 字节 |
| group_by* | string[] | 聚合参数，例：["date"]，见 [\[聚合规则\]](https://developers.e.qq.com/v3.0/pages/reference/groupby) 数组最小长度 1，最大长度 10 字段长度最大 255 字节 |
| order_by | struct[] | 排序字段 数组最小长度 1，最大长度 2 |
| sort_field* | string | 排序字段 |
| sort_type* | enum | 排序方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#sorted) 可选值：{ ASCENDING, DESCENDING } |
| time_line | enum | 时间口径，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#time_line) 可选值：{ REQUEST_TIME, REPORTING_TIME, ACTIVE_TIME } |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数，默认值：10。最小值 1，最大值 2000 默认值：10 |
| fields* | string[] | 指定返回的字段列表 数组最小长度 1，最大长度 1024 字段长度最小 1 字节，长度最大 64 字节 |
| organization_id | integer | 业务单元 id 最小值 0，最大值 9999999999 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/daily_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'level=REPORT_LEVEL_MATERIAL_VIDEO' \
-d 'time_line=REQUEST_TIME' \
-d 'page_size=10' \
-d 'date_range={
    "start_date": "2024-01-01",
    "end_date": "2024-01-01"
}' \
-d 'page=1'
curl -v -G 'https://api.e.qq.com/v3.0/daily_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'level=REPORT_LEVEL_MATERIAL_VIDEO' \
-d 'time_line=REQUEST_TIME' \
-d 'page_size=10' \
-d 'date_range={
    "start_date": "2024-01-01",
    "end_date": "2024-01-01"
}' \
-d 'page=1'
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
                "video_id": "145000001",
                "site_set": "SITE_SET_MOMENTS",
                "date": "2024-01-01",
                "view_count": 0
            },
            {
                "adgroup_id": 123000002,
                "adgroup_name": "广告名称 002",
                "video_id": "145000002",
                "site_set": "SITE_SET_SEARCH_SCENE",
                "date": "2024-01-01",
                "view_count": 100
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

## 场景组合示例

枚举值会自动根据已选条件变化，只展示有示例数据的枚举值

```
暂无数据
```

## 可视化调试工具

请求

## 相关阅读

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
