---
title: 绑定标签素材关联关系 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/material_labels/bind
doc_id: tencent_ads_v3_0_docs_api_material_labels_bind
source_id: tencent_ads_v3_0_docs_api_material_labels_bind
---
# 绑定标签素材关联关系 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | material_labels/bind |
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
| image_id_list | string[] | 图片 id 列表 |
| media_id_list | string[] | 视频 id 列表 |
| label_id_list* | array | 标签 id 列表 |
| binding_type | enum | 标签绑定类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#binding_type) 可选值：{ LABEL_BINDING_TYPE_OVERWRITE, LABEL_BINDING_TYPE_ADD, LABEL_BINDING_TYPE_DELETE } |
| business_scenario | enum | 业务场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#business_scenario) 可选值：{ BUSINESS_SCENARIO_UNKNOWN, BUSINESS_SCENARIO_CONTENT, BUSINESS_SCENARIO_DELIVERY } |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/material_labels/bind?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "image_id_list": [],
    "media_id_list": [],
    "label_id_list": []
}'
curl 'https://api.e.qq.com/v3.0/material_labels/bind?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "image_id_list": [],
    "media_id_list": [],
    "label_id_list": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| success_id_list | string[] | 素材 id 列表 |
| fail_id_list | string[] | 素材 id 列表 |
| fail_reason_list | struct[] | 失败原因列表 |
| material_id | string | 素材 id |
| label_id | integer | 标签 id |
| label_name | string | 标签名称 |
| reason | string | 失败原因 |
| relation_tid_list | array | 关联创意 id 列表 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "success_id_list": [],
        "fail_id_list": [],
        "fail_reason_list": [
            {
                "relation_tid_list": []
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
