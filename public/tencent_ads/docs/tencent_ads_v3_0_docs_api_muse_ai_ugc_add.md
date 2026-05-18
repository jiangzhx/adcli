---
title: 二次编辑素材回传接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/muse_ai_ugc/add
doc_id: tencent_ads_v3_0_docs_api_muse_ai_ugc_add
source_id: tencent_ads_v3_0_docs_api_muse_ai_ugc_add
---
# 二次编辑素材回传接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | muse_ai_ugc/add |
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
| muse_material_id* | integer | 妙思素材 id，通过描述 AI 生成的素材 id,若采纳该素材，请通过妙思 AI 素材接口 [\[妙思 AI - 选择并保存妙思 AI 素材\]](https://developers.e.qq.com/v3.0/docs/api/muse_ai_material/add) 推送到素材库 |
| media_base64_str* | string | 文件 base64 文件流 字段长度最小 1 字节，长度最大 999999999 字节 |
| file_name | string | 文件名 字段长度最小 1 字节，长度最大 200 字节 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/muse_ai_ugc/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "muse_material_id": 2479,
    "media_base64_str": "..",
    "file_name": "123"
}'
curl 'https://api.e.qq.com/v3.0/muse_ai_ugc/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "muse_material_id": 2479,
    "media_base64_str": "..",
    "file_name": "123"
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| media_id | string | 素材库 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "media_id": 107565
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
