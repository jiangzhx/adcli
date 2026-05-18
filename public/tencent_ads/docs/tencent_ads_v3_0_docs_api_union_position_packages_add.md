---
title: 联盟流量包模块 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/union_position_packages/add
doc_id: tencent_ads_v3_0_docs_api_union_position_packages_add
source_id: tencent_ads_v3_0_docs_api_union_position_packages_add
---
# 联盟流量包模块 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | union_position_packages/add |
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
| account_id* | integer | 广告主 id，有操作权限的广告主 id |
| union_package_name* | string | 流量包名称，同一帐号下的流量包名称不允许重复，最多可创建 300 个流量包（字段长度最小 1 个等宽字符，长度最大 60 等宽字符（即字段最大长度为 60 个中文字或全角标点，120 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 1 字节，长度最大 180 字节 |
| union_package_type* | enum | 流量包类型，流量包类型 枚举列表：UNION_PACKAGE_TYPE_INCLUDE（定投）、UNION_PACKAGE_TYPE_EXCLUDE（屏蔽），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_union_package_type) 可选值：{ UNION_PACKAGE_TYPE_INCLUDE, UNION_PACKAGE_TYPE_EXCLUDE } |
| union_position_id_list* | integer[] | 腾讯广告联盟广告位 id 列表 数组最小长度 1，最大长度 2000 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/union_position_packages/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "union_position_id_list": [
        13978
    ]
}'
curl 'https://api.e.qq.com/v3.0/union_position_packages/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "union_position_id_list": [
        13978
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| union_package_id | integer | 流量包 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "union_package_id": 16417
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
