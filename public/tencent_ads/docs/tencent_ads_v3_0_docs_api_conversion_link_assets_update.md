---
title: 更新营销链路 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/conversion_link_assets/update
doc_id: tencent_ads_v3_0_docs_api_conversion_link_assets_update
source_id: tencent_ads_v3_0_docs_api_conversion_link_assets_update
---
# 更新营销链路 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights |
| --- | --- |
| 请求地址 | conversion_link_assets/update |
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
| conversion_link_asset_id* | integer | 营销链路 id |
| version* | integer | 营销链路版本 最小值 1，最大值 2147483647 |
| name | string | 营销链路名称 字段长度最小 1 字节，长度最大 64 字节 |
| feedback_id | integer | 监测链接组 id |
| optional_og_nodes_index | integer[] | 备选优化目标节点序号列表 数组最小长度 1， 最小值 0，最大值 2147483647 |
| custom_report_nodes_index | integer[] | 用户需回传数据的节点序号列表，由回传要求为必传的节点+用户自定义上报节点组成。数据来源为「广告主上报」且回传要求不是「必传」的节点可以作为用户自定义上报节点 数组最小长度 0， 最小值 0，最大值 2147483647 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/conversion_link_assets/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "optional_og_nodes_index": [],
    "custom_report_nodes_index": []
}'
curl 'https://api.e.qq.com/v3.0/conversion_link_assets/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "optional_og_nodes_index": [],
    "custom_report_nodes_index": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| conversion_link_asset_id | integer | 营销链路 id |
| version | integer | 营销链路版本 |

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
