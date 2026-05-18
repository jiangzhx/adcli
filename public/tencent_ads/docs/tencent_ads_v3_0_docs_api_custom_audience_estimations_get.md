---
title: 人群覆盖数预估 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/custom_audience_estimations/get
doc_id: tencent_ads_v3_0_docs_api_custom_audience_estimations_get
source_id: tencent_ads_v3_0_docs_api_custom_audience_estimations_get
---
# 人群覆盖数预估 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | audience_management,ads_management,user_actions |
| --- | --- |
| 请求地址 | custom_audience_estimations/get |
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
| type* | string | 人群类型，目前仅支持 COMBINE 类型的人群 |
| audience_spec* | struct | 人群信息，AudienceSpec 内部字段，和 type 相关 |
| combine_spec | struct | 组合人群信息，当 type=COMBINE 时必填，最多允许用 500 个人群做组合 |
| include* | struct[] | 包含的人群，注意这是个二维数组，第一层数组元素之间为 AND 关系，第二层数组元素之间为 OR 关系 数组最小长度 1，最大长度 500 |
| audience_id* | integer | 人群 id 或标签 id，不支持 LOOKALIKE 和 COMBINE 人群的 id |
| time_window | integer | 时间窗，仅对客户标签有效,目前仅支持以下几个时间窗选项：1、3、7、10、15、30、90、180、365 最小值 1，最大值 365 |
| exclude | struct[] | 排除的人群，注意这是个二维数组，第一层数组元素之间为 AND 关系，第二层数组元素之间为 OR 关系 数组最大长度 500 |
| audience_id* | integer | 人群 id 或标签 id，不支持 LOOKALIKE 和 COMBINE 人群的 id |
| time_window | integer | 时间窗，仅对客户标签有效,目前仅支持以下几个时间窗选项：1、3、7、10、15、30、90、180、365 最小值 1，最大值 365 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/custom_audience_estimations/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'type=COMBINE' \
-d 'audience_spec={"combine_spec":{"include":[[{"audience_id":1234567},{"audience_id":7654321}]]}}'
curl -v -G 'https://api.e.qq.com/v3.0/custom_audience_estimations/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'type=COMBINE' \
-d 'audience_spec={"combine_spec":{"include":[[{"audience_id":1234567},{"audience_id":7654321}]]}}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| user_count | integer | 预估出来的人群覆盖数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "user_count": 21343
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
