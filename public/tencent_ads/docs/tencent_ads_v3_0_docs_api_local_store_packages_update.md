---
title: 更新门店包信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/local_store_packages/update
doc_id: tencent_ads_v3_0_docs_api_local_store_packages_update
source_id: tencent_ads_v3_0_docs_api_local_store_packages_update
---
# 更新门店包信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | local_store_packages/update |
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
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| local_store_package_id* | integer | 门店包 id |
| local_store_package_name* | string | 门店包名称 字段长度最小 1 字节，长度最大 150 字节 |
| local_store_list* | struct[] | 门店列表 数组最大长度 500 |
| poi_id | string | poi id 字段长度最小 1 字节，长度最大 64 字节 |
| local_store_name | string | 门店名称 字段长度最小 1 字节，长度最大 128 字节 |
| owner_account_id | integer | 门店授权方 uid 默认值：该字段默认值为 0, 表示拉取当前广告主帐号下的门店 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/local_store_packages/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "local_store_list": []
}'
curl 'https://api.e.qq.com/v3.0/local_store_packages/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "local_store_list": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| local_store_package_id | integer | 门店包 id |

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

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
