---
title: 获取用户行为数据源报表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/user_action_set_reports/get
doc_id: tencent_ads_v3_0_docs_api_user_action_set_reports_get
source_id: tencent_ads_v3_0_docs_api_user_action_set_reports_get
---
# 获取用户行为数据源报表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,audience_management,user_actions |
| --- | --- |
| 请求地址 | user_action_set_reports/get |
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
| user_action_set_id* | integer | 用户行为源 id，通过 [\[user_action_sets 接口\]](https://developers.e.qq.com/docs/api/user_data/user_action_set/user_action_sets_add) 创建用户行为源时分配的唯一 id。请注意，当填写的用户行为数据源类型为 {WECHAT, WECHAT_MINI_PROGRAM, WECHAT_MINI_GAME} 时，必填 user_id 字段中的 wechat_openid (或 wechat_unionid) 及 wechat_app_id。 |
| date_range* | struct | 时间范围，日期格式，{"start_date":"2017-03-01","end_date":"2017-04-02"} |
| start_date* | string | 开始时间点对应的时间戳，小于或等于 end_date 字段长度为 10 字节 |
| end_date* | string | 结束时间点对应的时间戳，小于或等于今天，且大于或等于 start_date 字段长度为 10 字节 |
| time_granularity* | enum | 时间粒度，针对流量的粒度，可选值：DAILY（按天汇总）, HOURLY（按小时汇总），默认小时，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#audience_time_granularity) 可选值：{ DAILY, HOURLY } |
| aggregation | enum | 聚合维度，是否将结果按照指定类型细分，可选值'DOMAIN', 'ACTION_TYPE'，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_aggregation) 可选值：{ DOMAIN, ACTION_TYPE } |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/user_action_set_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'user_action_set_id=1111111111' \
-d 'date_range={"start_date":"YYYY-MM-DD","end_date":"YYYY-MM-DD"}' \
-d 'time_granularity=HOURLY' \
-d 'aggregation=DOMAIN'
curl -v -G 'https://api.e.qq.com/v3.0/user_action_set_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'user_action_set_id=1111111111' \
-d 'date_range={"start_date":"YYYY-MM-DD","end_date":"YYYY-MM-DD"}' \
-d 'time_granularity=HOURLY' \
-d 'aggregation=DOMAIN'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回数组列表 |
| date | string | 采样日期，格式：yyyy-MM-dd |
| hour | integer | 小时，当 time_granularity=HOURLY 时有值，返回格式 HH |
| domain | string | 行为发生的域名，当 aggregation=DOMAIN 时有值 |
| action_type | enum | 标准行为类型，当 aggregation=ACTION_TYPE 时有值，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_action_type) |
| custom_action | string | 自定义行为类型，当 aggregation=ACTION_TYPE 时有值 |
| raw_action_count | integer | 原始上报行为数 |
| identified_action_count | integer | 可识别的行为数 |
| identified_user_count | integer | 可识别的独立用户数，当没有指定 aggregation 时，有值 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "date": "2017-04-25",
                "hour": "11",
                "domain": "https://example.com",
                "raw_action_count": 4000,
                "identified_action_count": 2100,
                "identified_user_count": 1400
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
