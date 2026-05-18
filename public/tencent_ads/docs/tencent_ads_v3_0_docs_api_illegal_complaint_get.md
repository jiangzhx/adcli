---
title: 获取直客广告主违规申述列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/illegal_complaint/get
doc_id: tencent_ads_v3_0_docs_api_illegal_complaint_get
source_id: tencent_ads_v3_0_docs_api_illegal_complaint_get
---
# 获取直客广告主违规申述列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | illegal_complaint/get |
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
| account_id_list* | integer[] | 广告主账号列表，token 可操作有权限管理的所有广告主 数组最小长度 1，最大长度 700 |
| illegal_level_list | array | 违规等级列表 数组最小长度 1，最大长度 100 |
| action_type_list | array | 处罚动作列表 数组最小长度 1，最大长度 100 |
| illegal_reason | string | 处罚原因 |
| illegal_date_range | struct | 违规时间范围 |
| start_date | string | 开始日期，日期格式：YYYY-MM-DD，小于等于 end_date 字段长度为 10 字节 |
| end_date | string | 结束日期，日期格式：YYYY-MM-DD，大于等于 begin_date 字段长度为 10 字节 |
| page* | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size* | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/illegal_complaint/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id_list": [],
    "illegal_level_list": [],
    "action_type_list": [],
    "illegal_date_range": [],
    "page": 1,
    "page_size": 10
}'
curl 'https://api.e.qq.com/v3.0/illegal_complaint/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id_list": [],
    "illegal_level_list": [],
    "action_type_list": [],
    "illegal_date_range": [],
    "page": 1,
    "page_size": 10
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |
| list | struct[] | 返回广告主违规申述信息列表 |
| illegal_order_id | string | 违规单 id |
| advertiser_account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| advertiser_name | string | 广告主名称 |
| first_industry | string | 广告主一级行业 |
| second_industry | string | 广告主二级行业 |
| action_type | integer | 处罚动作 |
| illegal_time | string | 时间，格式为 yyyy-MM-dd HH:mm:ss,如 2025-07-01 10:42:56 |
| illegal_level | integer | 违规等级 |
| illegal_reason | string | 处罚原因 |
| complaint_status | enum | 申述状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#illegal_complaint_status) |
| reject_reason | string | 驳回原因 |
| reject_evidence_list | string[] | 驳回凭证 URL 列表 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        },
        "list": [
            {
                "reject_evidence_list": []
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
