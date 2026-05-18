---
title: 素材标注 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/material_ai_annotation/add
doc_id: tencent_ads_v3_0_docs_api_material_ai_annotation_add
source_id: tencent_ads_v3_0_docs_api_material_ai_annotation_add
---
# 素材标注 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | material_ai_annotation/add |
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
| organization_id | integer | account_id 或 organization_id 传其中一个即可 |
| annotation_list* | struct[] | 标注列表 |
| resource_id* | string | 素材 id |
| aigc_flag* | enum | AIGC 标识，标记素材的 AI 生产平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#aigc_flag) 可选值：{ AIGC_FLAG_UNKNOWN, AIGC_FLAG_NOT_AI, AIGC_FLAG_USE_MUSE_AI, AIGC_FLAG_USE_OTHERS_AI } |
| resource_type* | string | 素材类型，IMAGE-图片 字段长度最小 1 字节，长度最大 250 字节 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/material_ai_annotation/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "annotation_list": []
}'
curl 'https://api.e.qq.com/v3.0/material_ai_annotation/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "annotation_list": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| success_list | struct[] | 标注成功结果列表 |
| resource_id | string | 素材 id |
| resource_type | string | 素材类型，IMAGE-图片 |
| aigc_flag | enum | AIGC 标识，标记素材的 AI 生产平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#aigc_flag) |
| aigc_source | enum | AIGC 来源，标记素材的来源，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#aigc_source) |
| user_aigc_status | enum | 用户标注的 AIGC 状态，来自用户标注，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#aigc_status) |
| system_aigc_status | enum | 系统标注的 AIGC 状态，来自系统自动标注，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#aigc_status) |
| fail_list | struct[] | 标注失败结果列表 |
| resource_id | string | 素材 id |
| resource_type | string | 素材类型，IMAGE-图片 |
| reason | string | 失败原因 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "success_list": [],
        "fail_list": []
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
