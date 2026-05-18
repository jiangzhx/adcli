---
title: 创建视频号授权 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wechat_channels_authorization/add
doc_id: tencent_ads_v3_0_docs_api_wechat_channels_authorization_add
source_id: tencent_ads_v3_0_docs_api_wechat_channels_authorization_add
---
# 创建视频号授权 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | wechat_channels_authorization/add |
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
| wechat_channels_account_name | string | 视频号名称 字段长度最小 0 字节，长度最大 255 字节 |
| authorization_certification_list | struct[] | 资质列表 数组最大长度 255 |
| certification_image | string | 营业执照/企业资质证明图片 URL 地址 字段长度最小 1 字节，长度最大 255 字节 |
| certification_image_page_no | integer | 图片页码，0-正面，1-反面，2-手持半身,大于 0 小于 2 最小值 0，最大值 2 |
| certification_code* | string | 资质类型 |
| certification_name | string | 资质名称 |
| certification_number | string | 资质编码 |
| certification_id | integer | 资质 id |
| certification_image_id | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| authorization_relationship | enum | 视频号授权资质主体关系，(已废弃)，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#wechat_channels_certification_relationship) 可选值：{ RELATIONSHIP_UNKNOWN, RELATIONSHIP_CORPORATION, RELATIONSHIP_EMPLOYMENT } |
| authorization_scope | enum | 授权范围，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#wechat_channels_auth_scope) 可选值：{ DEFAULT, ALL, VIDEO, LIVE } |
| authorization_begin_time | integer | 授权开始时间，授权开始时间的时间戳 最小值 0，最大值 9999999999 |
| authorization_ttl | integer | 授权有效时间，单位 s,最大值为 3122064000(99 年,授权时展示为不限);如果超过最大值，将默认被设置为为 3122064000。 最小值 0，最大值 9999999999 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/wechat_channels_authorization/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "authorization_certification_list": [
        {
            "certification_image": "https://tencent.com/certification_example.png",
            "certification_number": "",
            "certification_image_id": "<IMAGE_ID>"
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/wechat_channels_authorization/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "authorization_certification_list": [
        {
            "certification_image": "https://tencent.com/certification_example.png",
            "certification_number": "",
            "certification_image_id": "<IMAGE_ID>"
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| finder_username | string | 视频号账号 id 已废弃 |
| authorization_qr_code_url | string | 授权码图片链接，扫码后在微信打开 |
| authorization_description | string | 授权信息描述 |
| authorization_expired_time | integer | 授权流程过期时间，授权流程过期时间（时间戳） |
| authorization_agreement | string | 视频号授权协议 url |
| wechat_channels_account_id | string | 视频号账号 id |

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
