---
title: 新增策略绑定 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/rtatarget_bind/add
doc_id: tencent_ads_v3_0_docs_api_rtatarget_bind_add
source_id: tencent_ads_v3_0_docs_api_rtatarget_bind_add
---
# 新增策略绑定 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | rtatarget_bind/add |
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
| data* | struct[] | 新增 RTA 策略绑定信息列表 数组最小长度 1，最大长度 10 |
| Id* | integer | 待绑定的 id，可以是广告 id、广告主 id，微信广告主 id 若来自 mp 平台则需同时提供直客 UID 和子客 UID |
| TargetType* | integer | ID 类型，1：广告 id 3：广告主 id |
| OuterTargetId | string | 外部策略 id，规范见 [\[此文档\]](https://docs.qq.com/doc/DVHppWU95amZjUVVG)。 字段长度最小 1 字节，长度最大 32 字节 |
| IsMp | integer | 是否微信广告，1：是 0：否，TargetType 为 1 时请务必准确填写，TargetType 为 3 时可不填。当广告投放来自 mp 平台则选择“是”，来自 eqq 或者 adq 平台则选择“否” |
| UId* | integer | 广告对应的广告主 id，TargetType 为 1 时请务必准确填写（MP 投放端的必须填写直客 id），TargetType 为 3 时可不填 |
| OptPlatform | integer | 绑定操作来源，0：API（广告主）1：API（第三方）2：ADQ 3：MP 4：MKT-API |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/rtatarget_bind/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "data": []
}'
curl 'https://api.e.qq.com/v3.0/rtatarget_bind/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "data": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| success | struct[] | 绑定成功的记录列表 |
| Id | integer | 已绑定的 id，可以是广告 id、广告主 id |
| OuterTargetId | string | 外部策略 id，规范见 [\[此文档\]](https://docs.qq.com/doc/DVHppWU95amZjUVVG)。 |
| TargetType | integer | ID 类型，1：广告 id 3：广告主 id |
| IsMp | integer | 是否微信广告，广告投放来源是否 mp 投放端，1：是 0：否 |
| UId | integer | 广告对应的广告主 id |
| error | struct[] | 绑定失败的记录列表 |
| Id | integer | 已绑定的 id，可以是广告 id、广告主 id |
| OuterTargetId | string | 外部策略 id，规范见 [\[此文档\]](https://docs.qq.com/doc/DVHppWU95amZjUVVG)。 |
| TargetType | integer | ID 类型，1：广告 id 3：广告主 id |
| IsMp | integer | 是否微信广告，广告投放来源是否 mp 投放端，1：是 0：否 |
| UId | integer | 广告对应的广告主 id |
| reason | string | 操作失败原因 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "success": [],
        "error": []
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
