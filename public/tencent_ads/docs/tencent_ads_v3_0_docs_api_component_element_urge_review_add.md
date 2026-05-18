---
title: 创意组件元素催审 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/component_element_urge_review/add
doc_id: tencent_ads_v3_0_docs_api_component_element_urge_review_add
source_id: tencent_ads_v3_0_docs_api_component_element_urge_review_add
---
# 创意组件元素催审 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | component_element_urge_review/add |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| dynamic_creative_id* | integer | 广告创意 id |
| urge_dimension* | enum | 催审维度，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#urge_dimension) 可选值：{ URGE_DIMENSION_COMPONENT, URGE_DIMENSION_ELEMENT } |
| urge_dimension_value* | string | 催审纬度对应的值，催审维度：URGE_DIMENSION_COMPONENT 时，字段值为 component_id;催审维度：URGE_DIMENSION_ELEMENT 时，字段值为 element_fingerprint 字段长度最小 0 字节，长度最大 128 字节 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/component_element_urge_review/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
curl 'https://api.e.qq.com/v3.0/component_element_urge_review/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| urge_result | enum | 催审结果，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#urge_result) |
| urge_failed_reason | enum | 催审失败原因，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#urge_failed_reason) |
| reason_msg | string | 催审失败结果枚举说明 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": ""
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
