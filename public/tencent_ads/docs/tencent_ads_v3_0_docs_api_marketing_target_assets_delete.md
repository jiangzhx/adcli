---
title: 删除推广内容资产 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/marketing_target_assets/delete
doc_id: tencent_ads_v3_0_docs_api_marketing_target_assets_delete
source_id: tencent_ads_v3_0_docs_api_marketing_target_assets_delete
---
# 删除推广内容资产 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights |
| --- | --- |
| 请求地址 | marketing_target_assets/delete |
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
| organization_id* | integer | 业务单元 id 最小值 0，最大值 9999999999 |
| marketing_asset_id* | integer | 产品 id 最小值 0，最大值 9999999999 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/marketing_target_assets/delete?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "organization_id": 23919277,
    "marketing_asset_id": "123456"
}'
curl 'https://api.e.qq.com/v3.0/marketing_target_assets/delete?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "organization_id": 23919277,
    "marketing_asset_id": "123456"
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

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
