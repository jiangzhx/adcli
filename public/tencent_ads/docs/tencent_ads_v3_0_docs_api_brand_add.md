---
title: 创建品牌形象 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/brand/add
doc_id: tencent_ads_v3_0_docs_api_brand_add
source_id: tencent_ads_v3_0_docs_api_brand_add
---
# 创建品牌形象 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | brand/add |
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
| name* | string | 品牌形象名字，品牌形象名字必须填写，1~100 个字符 字段长度最小 1 字节，长度最大 100 字节 |
| brand_image_file* | file | 品牌形象图片文件，图片尺寸仅支持 512x512，大小不超过 400KB，格式：*.jpg、*.jpeg、*.png |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/brand/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-F 'account_id=111111111' \
-F 'name=bmw-logo' \
-F 'brand_image_file=@bmw.jpg'
curl 'https://api.e.qq.com/v3.0/brand/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-F 'account_id=111111111' \
-F 'name=bmw-logo' \
-F 'brand_image_file=@bmw.jpg'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| name | string | 品牌形象名字，品牌形象名字必须填写，1~100 个字符 |
| image_id | string | 品牌形象图片 id |
| width | integer | 宽 |
| height | integer | 高 |
| image_url | string | 品牌形象 URL |
| created_time | integer | 创建时间，时间戳 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "account_id": 111111111,
        "name": "bmw-logo",
        "image_id": "<IMAGE_ID>",
        "width": 512,
        "height": 512,
        "image_url": "<IMAGE_URL>",
        "created_time": 1584451858
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
