---
title: 添加图片文件 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/images/add
doc_id: tencent_ads_v3_0_docs_api_images_add
source_id: tencent_ads_v3_0_docs_api_images_add
---
# 添加图片文件 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,account_management |
| --- | --- |
| 请求地址 | images/add |
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
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| organization_id | integer | 业务单元 id，有操作权限的业务单元 id ； account_id 和 organization_id 需必填其一 |
| upload_type* | enum | 上传方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_image_upload_type) 可选值：{ UPLOAD_TYPE_FILE, UPLOAD_TYPE_BYTES } |
| signature* | string | 图片文件签名，使用图片文件的 md5 值，用于检查上传图片文件的完整性 字段长度为 32 字节 |
| file | file | 被上传的图片文件，当且仅当 upload_type=UPLOAD_TYPE_FILE 时，该字段可填且必填，图片二进制流，支持文件类型：jpg、png、gif 文件大小限制：小于等于 10M，单位换算规则：1KB=1024B、1M=1024KB，gif 播放时长：小于等于 5s |
| bytes | string | 图片 base64 编码，当且仅当 upload_type=UPLOAD_TYPE_BYTES 时，该字段可填且必填，支持文件类型：jpg、png、gif 文件大小限制：小于等于 10M，单位换算规则：1KB=1024B、1M=1024KB，gif 播放时长：小于等于 5s 字段长度最小 1 字节，长度最大 10485760 字节 |
| image_usage | enum | 图片用途，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_image_usage) 可选值：{ IMAGE_USAGE_DEFAULT, IMAGE_USAGE_MARKETING_PENDANT, IMAGE_USAGE_SHOP_IMG } |
| description | string | 图片文件描述，不支持@等特殊符号 字段长度最小 0 字节，长度最大 255 字节 |
| resize_width | integer | 图片宽度，单位 px 最小值 1，最大值 4000 |
| resize_height | integer | 图片高度，单位 px 最小值 1，最大值 4000 |
| resize_file_size | integer | 图片大小，单位 B(byte) |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/images/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-F 'account_id=<ACCOUNT_ID>' \
-F 'upload_type=UPLOAD_TYPE_FILE' \
-F 'signature=f4c8a3bc4deb305fb74cb08ed395b98c' \
-F 'file=@/usr/local/my/image.jpg'
curl 'https://api.e.qq.com/v3.0/images/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-F 'account_id=<ACCOUNT_ID>' \
-F 'upload_type=UPLOAD_TYPE_FILE' \
-F 'signature=f4c8a3bc4deb305fb74cb08ed395b98c' \
-F 'file=@/usr/local/my/image.jpg'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| image_id | string | 图片 id |
| image_width | integer | 图片宽度，单位 px |
| image_height | integer | 图片高度，单位 px |
| image_file_size | integer | 图片大小，单位 B(byte) |
| image_type | enum | 图片类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_image_type) |
| image_signature | string | 图片文件签名，使用图片文件的 md5 值，用于检查上传图片文件的完整性 |
| outer_image_id | string | 调用方图片 id |
| preview_url | string | 预览地址 |
| description | string | 图片文件描述，不支持@等特殊符号 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "image_id": "<IMAGE_ID>",
        "preview_url": "https://example.com/example.jpg"
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
