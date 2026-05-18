---
title: 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/qualification_images/add
doc_id: tencent_ads_v3_0_docs_api_qualification_images_add
source_id: tencent_ads_v3_0_docs_api_qualification_images_add
---
# [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | qualification_images/add |
| 请求方法 | POST |
| Content-Type | multipart/form-data |

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
| signature* | string | 图片文件签名，使用图片文件的 md5 值，用于检查上传图片文件的完整性 字段长度为 32 字节 |
| file* | file | 被上传的图片文件，支持文件类型：jpeg、jpg、png、img 文件大小限制：小于等于 5M，单位换算规则：1KB=1024B、1M=1024KB, 宽高不可超过 50000px 且总像素不可超过 2.5 亿 px |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/qualification_images/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-F 'account_id=<ACCOUNT_ID>' \
-F 'file=@/usr/local/my/image.jpg'
curl 'https://api.e.qq.com/v3.0/qualification_images/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-F 'account_id=<ACCOUNT_ID>' \
-F 'file=@/usr/local/my/image.jpg'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| image_id | string | 资质图片 id |
| image_url | string | 图片地址有效期 10 分钟 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "image_id": "<IMAGE_ID>",
        "image_url": "<IMAGE_URL>"
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
