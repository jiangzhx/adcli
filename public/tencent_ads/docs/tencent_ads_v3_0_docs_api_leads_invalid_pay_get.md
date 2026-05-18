---
title: 获取无效赔付明细 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/leads_invalid_pay/get
doc_id: tencent_ads_v3_0_docs_api_leads_invalid_pay_get
source_id: tencent_ads_v3_0_docs_api_leads_invalid_pay_get
---
# 获取无效赔付明细 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights,account_management,audience_management,user_actions |
| --- | --- |
| 请求地址 | leads_invalid_pay/get |
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
| month* | string | 月份，格式 YYYY-MM 字段长度为 7 字节 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/leads_invalid_pay/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=123456' \
-d 'month=2022-01'
curl -v -G 'https://api.e.qq.com/v3.0/leads_invalid_pay/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=123456' \
-d 'month=2022-01'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 确认赔付信息 |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| account_name | string | 广告主名称 |
| is_real_pay | boolean | 是否产生真实赔付，true-是，false-否 |
| no_pay_reason | string | 未产生赔付的原因，未真实产生赔付时有值 |
| pay_total_amount | float | 赔付总金额，单位：元 |
| pay_details | struct[] | 确认赔付明细，未赔付是空列表 |
| leads_id | integer | 线索 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "account_id": 123456,
                "account_name": "账户名称 1",
                "is_real_pay": true,
                "pay_total_amount": 103.25,
                "pay_details": [
                    {
                        "leads_id": 101
                    },
                    {
                        "leads_id": 102
                    }
                ]
            },
            {
                "account_id": 223456,
                "account_name": "账户名称 2",
                "is_real_pay": false,
                "pay_total_amount": 0,
                "no_pay_reason": "本账号本月未满足无效赔付政策要求 48h 内线索标注率>=50%，导致“确认赔付”标签失效，不进行真实赔付。",
                "pay_details": []
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
