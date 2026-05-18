---
title: 创建素材标签 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/material_labels/add
doc_id: tencent_ads_v3_0_docs_api_material_labels_add
source_id: tencent_ads_v3_0_docs_api_material_labels_add
---
# 创建素材标签 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | material_labels/add |
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
| account_id | integer | 广告主帐号 id |
| organization_id | integer | account_id 或 organization_id 传其中一个即可 最小值 0，最大值 9999999999 |
| labels* | struct[] | 标签信息列表 |
| label_name* | string | 标签名称 字段长度最小 1 字节，长度最大 2048 字节 |
| first_label_level_name | string | 一级标签类目名称 字段长度最小 1 字节，长度最大 2048 字节 |
| second_label_level_name | string | 二级标签类目名称 字段长度最小 1 字节，长度最大 2048 字节 |
| business_scenario | enum | 业务场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#business_scenario) 可选值：{ BUSINESS_SCENARIO_UNKNOWN, BUSINESS_SCENARIO_CONTENT, BUSINESS_SCENARIO_DELIVERY } |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/material_labels/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "labels": []
}'
curl 'https://api.e.qq.com/v3.0/material_labels/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "labels": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| success_label_list | string[] | 新增成功标签列表 |
| fail_label_list | string[] | 新增失败标签列表 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "success_label_list": [],
        "fail_label_list": []
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
