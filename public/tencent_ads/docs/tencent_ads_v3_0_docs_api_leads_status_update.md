---
title: 外部线索状态更新 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/leads_status/update
doc_id: tencent_ads_v3_0_docs_api_leads_status_update
source_id: tencent_ads_v3_0_docs_api_leads_status_update
---
# 外部线索状态更新 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights,account_management,audience_management,user_actions |
| --- | --- |
| 请求地址 | leads_status/update |
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
| account_id* | integer | 广告主账号 id，直客账号或子客账号 |
| match_type | enum | 线索匹配类型，不填认为是 OUTERLEADSID，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#leads_match_type) 可选值：{ LEADSID, OUTERLEADSID, CONTACT, CLICKID } |
| leads_conversion_status_list* | struct[] | 回传线索信息的列表 数组最小长度 1，最大长度 50 |
| outer_leads_id | string | 外部线索 id，作为线索管理平台的线索与客户侧 CRM 系统的线索关联的唯一标识 match_type=OUTERLEADSID 时必填 字段长度最小 1 字节，长度最大 64 字节 |
| leads_id | integer | 线索 id match_type=LEADSID 时必填 |
| leads_tel | string | 手机号，match_type=CONTACT 时 leads_tel、leads_qq、leads_wechat 至少填写一个 字段长度最小 1 字节，长度最大 32 字节 |
| leads_qq | integer | QQ 号，大于等于 1 小于 2^63。match_type=CONTACT 时 leads_tel、leads_qq、leads_wechat 至少填写一个 |
| leads_wechat | string | 微信号，match_type=CONTACT 时 leads_tel、leads_qq、leads_wechat 至少填写一个 字段长度最小 1 字节，长度最大 64 字节 |
| click_id | string | 点击 id，用于线索归因，也可填写曝光 id（trace_id） match_type=CLICKID 时必填 字段长度最小 1 字节，长度最大 64 字节 |
| leads_convert_type | string | 线索状态，枚举列表：{ LEADS_CONVERT_STATUS_DEPRECATED, LEADS_CONVERT_STATUS_POTENTIAL_CUSTOMER, LEADS_CONVERT_STATUS_HIGH_INTENTION_CUSTOMER, LEADS_CONVERT_STATUS_TRANS_COMPLETED } |
| leads_ineffect_reason | string | 无效原因，枚举列表：{ LEADS_INEFFECT_REASON_EMPTY, LEADS_INEFFECT_REASON_IDENTITY_MISMATCHED, LEADS_INEFFECT_REASON_REGION_MISMATCHED, LEADS_INEFFECT_REASON_DATA_DUPLICATION, LEADS_INEFFECT_REASON_TEL_NOT_CONNECTED, LEADS_INEFFECT_REASON_NO_INTENTION, LEADS_INEFFECT_REASON_UNKNOWN } |
| outer_leads_convert_type | string | 外部线索状态，自定义取值 字段长度最小 1 字节，长度最大 64 字节 |
| outer_leads_ineffect_reason | string | 外部无效原因，外部线索状态为无效时填写 字段长度最小 1 字节，长度最大 32 字节 |
| customized_tags | struct[] | 自定义标签集合 数组最小长度 1，最大长度 50 |
| tag_group_name | string | 回传的标签组名称，必须与所回传的标签是对应关系，否则可能出现错误 字段长度最小 0 字节，长度最大 32 字节 |
| tag_name_list | string[] | 标签集合 数组最大长度 100 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/leads_status/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "leads_conversion_status_list": [
        {
            "customized_tags": [
                {
                    "tag_name_list": []
                }
            ]
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/leads_status/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "leads_conversion_status_list": [
        {
            "customized_tags": [
                {
                    "tag_name_list": []
                }
            ]
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| fail_leads_list | struct[] | 返回失败的信息列表 |
| index | integer | 线索在请求参数中的索引，当请求参数中包含 N 条数据时，每条数据的索引即为 0 ～ N-1 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "fail_leads_list": []
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
