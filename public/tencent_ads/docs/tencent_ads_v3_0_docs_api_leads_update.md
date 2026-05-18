---
title: 更新线索基本信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/leads/update
doc_id: tencent_ads_v3_0_docs_api_leads_update
source_id: tencent_ads_v3_0_docs_api_leads_update
---
# 更新线索基本信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights,account_management,audience_management,user_actions |
| --- | --- |
| 请求地址 | leads/update |
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
| match_type | enum | 线索匹配类型，不填认为是 OUTERLEADSID，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#leads_match_type) 可选值：{ LEADSID, OUTERLEADSID, CLICKID } |
| leads_contact_list* | struct[] | 回传线索信息的列表 数组最小长度 1，最大长度 50 |
| outer_leads_id | string | 外部线索 id，作为线索管理平台的线索与客户侧 CRM 系统的线索关联的唯一标识 match_type=OUTERLEADSID 时必填 字段长度最小 1 字节，长度最大 64 字节 |
| leads_id | integer | 线索 id match_type=LEADSID 时必填 |
| click_id | string | 点击 id，用于线索归因，也可填写曝光 id（trace_id） match_type=CLICKID 时必填 字段长度最小 1 字节，长度最大 64 字节 |
| leads_user_type | enum | 线索用户类型，线索用户 id 有值时必填，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#leads_user_type) 可选值：{ USER_TYPE_QQ, USER_TYPE_QQ_MD5, USER_TYPE_TEL, USER_TYPE_TEL_MD5, USER_TYPE_IDFA, USER_TYPE_IDFA_MD5, USER_TYPE_IMEI, USER_TYPE_IMEI_MD5, USER_TYPE_GDT_OPENID, USER_TYPE_MAC_ADDRESS, USER_TYPE_MAC_ADDRESS_MD5, USER_TYPE_OAID, USER_TYPE_OAID_MD5, USER_TYPE_WX_OPENID, USER_TYPE_WX_UNIONID, USER_TYPE_OTHERS } |
| leads_user_wechat_appid | string | 线索用户的微信 AppId，（微信公众号/小程序/小游戏的开发者 id）。leads_user_type 为 USER_TYPE_WX_OPENID/USER_TYPE_WX_UNIONID 时此字段必填 字段长度最小 1 字节，长度最大 64 字节 |
| leads_user_id | string | 线索用户 id 字段长度最小 1 字节，长度最大 64 字节 |
| leads_tel | string | 手机号 字段长度最小 1 字节，长度最大 32 字节 |
| leads_qq | integer | QQ 号，大于等于 1 小于 2^63 |
| leads_wechat | string | 微信号 字段长度最小 1 字节，长度最大 64 字节 |
| leads_name | string | 姓名 字段长度最小 0 字节，长度最大 128 字节 |
| leads_gender | enum | 性别，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#leads_gender_type) 可选值：{ GENDER_TYPE_UNKNOWN, GENDER_TYPE_FEMALE, GENDER_TYPE_MALE } |
| leads_email | string | 邮箱 字段长度最小 0 字节，长度最大 64 字节 |
| leads_area | string | 所在地 字段长度最小 0 字节，长度最大 128 字节 |
| bundle | string | 其他线索信息，K-V 键值对, 字符串对字符串的 json 串，key 不能重复 字段长度最小 0 字节，长度最大 1024 字节 |
| memo | string | 备注 字段长度最小 1 字节，长度最大 128 字节 |
| shop_name | string | 门店名称 字段长度最小 0 字节，长度最大 128 字节 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/leads/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "leads_contact_list": [
        {
            "click_id": "1234567"
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/leads/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "leads_contact_list": [
        {
            "click_id": "1234567"
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| fail_leads_list | struct[] | 返回失败的信息列表 |
| index | integer | 线索在请求参数中的索引，当请求参数中包含 N 条数据时，每条数据的索引即为 0 ～ N-1 |
| outer_leads_id | string | 外部线索 id，当请求参数中包含 N 条数据时，每条数据的索引即为 0 ～ N-1 |

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
