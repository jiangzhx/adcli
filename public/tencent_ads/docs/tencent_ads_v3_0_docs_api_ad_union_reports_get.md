---
title: 联盟广告位报表接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/ad_union_reports/get
doc_id: tencent_ads_v3_0_docs_api_ad_union_reports_get
source_id: tencent_ads_v3_0_docs_api_ad_union_reports_get
---
# 联盟广告位报表接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_insights |
| --- | --- |
| 请求地址 | ad_union_reports/get |
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
| filtering | struct | 过滤字段结构，union_position_id |
| union_position_id | integer[] | 广告位 id 列表，广告位个数不大于 20 个, 如：["51213","51214","51215"] 最多 20 个 数组最小长度 1，最大长度 20 |
| date_range* | struct | 日期范围，最早支持查询 1 年内（365 天）的数据 |
| start_date* | string | 开始日期，日期格式：YYYY-MM-DD，且小于等于 end_date 字段长度为 10 字节 |
| end_date* | string | 结束日期，日期格式：YYYY-MM-DD，且大于等于 begin_date 字段长度为 10 字节 |
| group_by | string[] | 聚合参数，group by 取值仅限于 union_position_id,date,industry_parent_id,placement_type 这些字段 数组最小长度 1，最大长度 5 字段长度最大 255 字节 |
| order_by | struct[] | 排序字段 数组最小长度 1，最大长度 2 |
| sort_field* | string | 排序字段 |
| sort_type* | enum | 排序方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#sorted) 可选值：{ ASCENDING, DESCENDING } |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| fields* | string[] | 指定返回的字段列表 数组最小长度 1，最大长度 1024 字段长度最小 1 字节，长度最大 64 字节 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/ad_union_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'date_range={
    "end_date": "2024-03-19",
    "start_date": "2024-03-19"
}' \
-d 'fields=[
    "promoted_object_type",
    "union_position_id",
    "placement_name",
    "industry_parent_name",
    "cost",
    "first_pay_count",
    "first_pay_cost",
    "view_count",
    "valid_click_count",
    "activated_count",
    "register_count_combined",
    "deep_conversions_count",
    "checkout_count_combined",
    "download_count",
    "install_count",
    "order_count_combined"
]' \
-d 'group_by=[
    "date",
    "union_position_id",
    "placement_type",
    "industry_parent_id"
]'
curl -v -G 'https://api.e.qq.com/v3.0/ad_union_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'date_range={
    "end_date": "2024-03-19",
    "start_date": "2024-03-19"
}' \
-d 'fields=[
    "promoted_object_type",
    "union_position_id",
    "placement_name",
    "industry_parent_name",
    "cost",
    "first_pay_count",
    "first_pay_cost",
    "view_count",
    "valid_click_count",
    "activated_count",
    "register_count_combined",
    "deep_conversions_count",
    "checkout_count_combined",
    "download_count",
    "install_count",
    "order_count_combined"
]' \
-d 'group_by=[
    "date",
    "union_position_id",
    "placement_type",
    "industry_parent_id"
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
                "activated_count": 0,
                "cost": 1,
                "deep_conversions_count": 0,
                "download_count": 0,
                "first_pay_cost": 0,
                "first_pay_count": 0,
                "industry_parent_name": "移动音乐",
                "install_count": 0,
                "placement_name": "开屏",
                "union_position_id": 30393177,
                "valid_click_count": 0,
                "view_count": 1
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
