---
title: 视频号开户资质上传 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account_certification_file/add
doc_id: tencent_ads_v3_0_docs_api_wechat_channels_ad_account_certification_file_add
source_id: tencent_ads_v3_0_docs_api_wechat_channels_ad_account_certification_file_add
---
# 视频号开户资质上传 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | wechat_channels_ad_account_certification_file/add |
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
| signature* | string | 文件签名，使用文件的 md5 值，用于检查上传文件的完整性 字段长度最小 1 字节，长度最大 256 字节 |
| file_bytes* | string | 文件二进制 base64 编码 字段长度最小 1 字节，长度最大 10485760 字节 |
| file_name* | string | 文件名称 字段长度最小 1 字节，长度最大 256 字节 |
| file_type* | enum | 文件类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#file_type) 可选值：{ PDF, DOC } |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/wechat_channels_ad_account_certification_file/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
curl 'https://api.e.qq.com/v3.0/wechat_channels_ad_account_certification_file/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| file_id | string | 资质文件 id，文件 id，通过 [\[资质文件上传 模块\]](https://developers.e.qq.com/docs/api/business_assets/asset_wechat_channels/file_add) 上传文件后获得 |
| file_name | string | 文件名称 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "file_id": "<FILE_ID>"
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
