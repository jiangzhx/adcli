---
title: 组件化创意衍生预览模版替换接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview_template/update
doc_id: tencent_ads_v3_0_docs_api_programmed_commponent_preview_template_update
source_id: tencent_ads_v3_0_docs_api_programmed_commponent_preview_template_update
---
# 组件化创意衍生预览模版替换接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | programmed_commponent_preview_template/update |
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
| material_derive_id* | integer | 衍生全局 id |
| component_id* | integer | 创意组件 id |
| material_preview_id* | integer | 预览 id |
| template_id* | integer | 模版 id |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/programmed_commponent_preview_template/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "material_derive_id": 112972
}'
curl 'https://api.e.qq.com/v3.0/programmed_commponent_preview_template/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "material_derive_id": 112972
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| material_derive_id | integer | 衍生全局 id |
| derive_data_version | enum | 衍生数据版本，区分组件化衍生和素材衍生，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#derive_data_version) |
| component_id | integer | 创意组件 id |
| material_preview_id | integer | 预览 id |
| template_id | integer | 模版 id |
| template_preview_url | string | 预览链接 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "material_derive_id": 128830,
        "derive_data_version": "DERIVE_DATA_VERSION_V3",
        "component_id": 1086718,
        "material_preview_id": 39521,
        "template_id": 20001019,
        "template_preview_url": "https://video.e.qq.com/tacc/creative_preview_v2?account_id=20458&material_derive_id=128830&component_id=1086718&material_preview_id=39521&timestamp=1733795369&sign=a89a7b451239b56adca1ee9412ae6bd4"
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
