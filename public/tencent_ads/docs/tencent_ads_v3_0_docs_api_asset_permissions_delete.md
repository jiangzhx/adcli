---
title: 资产权限回收 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/asset_permissions/delete
doc_id: tencent_ads_v3_0_docs_api_asset_permissions_delete
source_id: tencent_ads_v3_0_docs_api_asset_permissions_delete
---
# 资产权限回收 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | asset_permissions/delete |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和账户 id |
| licensing_account_id | integer | 被授权账号 id，当被授权账号的类型：ACCOUNT 类型（为指定账户授权），传入需要回收的被授予的账号 id |
| asset_type* | enum | 资产类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#asset_type) 可选值：{ ASSET_TYPE_NDMP, ASSET_TYPE_XIJING, ASSET_TYPE_CANVAS_WECHAT, ASSET_TYPE_CANVAS_IMAGE, ASSET_TYPE_CANVAS_VIDEO, ASSET_TYPE_FENGYE, ASSET_TYPE_DYNAMIC_AD_TEMPLATE, ASSET_TYPE_AD_QUALIFICATION, ASSET_TYPE_CATALOG, ASSET_TYPE_ACTION_SET, ASSET_TYPE_CONVERSION_SPEC, ASSET_TYPE_UNION_PACKAGE, ASSET_TYPE_ACCOUNT_WECHAT_CANVAS, ASSET_TYPE_PROFILE, ASSET_TYPE_LOCAL_STORE, ASSET_TYPE_INTERACTIVE_PRIVATE_TEMPLATE, ASSET_TYPE_DN_DATA_SOURCE, ASSET_TYPE_DN_DATA_SET, ASSET_TYPE_DN_FILE, ASSET_TYPE_SEARCH_BRAND_AREA } |
| asset_permission_grant_type* | enum | 资产权限授予类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#asset_permission_grant_type) 可选值：{ ASSET_PERMISSION_GRANT_TYPE_ASSET, ASSET_PERMISSION_GRANT_TYPE_ACCOUNT } |
| asset_id | integer | 资产 id，当资产权限授予类型为 ASSET_PERMISSION_GRANT_TYPE_ASSET 需要传入 |
| licensing_id_type | enum | 被授权账号类型，指明被授权账号的类型：ACCOUNT 类型为指定账户授权，GROUP 类型为对账号组内所有账号授权，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#asset_account_type) 可选值：{ ASSET_TYPE_ACCOUNT_BM, ASSET_TYPE_ACCOUNT_MDM, ASSET_TYPE_GROUP_BM, ASSET_TYPE_GROUP_MDM, ASSET_TYPE_GROUP_POINT_TO_POINT, ASSET_TYPE_AGENCY } |
| path_id | integer | 被授权帐号 id 对应的商务管家 id 或 MDM id |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/asset_permissions/delete?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
curl 'https://api.e.qq.com/v3.0/asset_permissions/delete?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
```

## 应答字段

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": ""
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯营销反馈中心在线提交问题，我们的人工客服将为你服务
