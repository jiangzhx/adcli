---
title: 视频号开户 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account/add
doc_id: tencent_ads_v3_0_docs_api_wechat_channels_ad_account_add
source_id: tencent_ads_v3_0_docs_api_wechat_channels_ad_account_add
---
# 视频号开户 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | wechat_channels_ad_account/add |
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
| wechat_bind_auth_token* | string | 视频号绑定微信授权 Token 字段长度最小 0 字节，长度最大 1024 字节 |
| nickname* | string | 视频号用户昵称 字段长度最小 1 字节，长度最大 1024 字节 |
| head_image_id* | string | 视频号头像图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得,head_image_id 对应的图片高、宽均为 512px、大小限制 400KB 字段长度最小 1 字节，长度最大 64 字节 |
| certification_list | struct[] | 资质列表 数组最大长度 255 |
| certification_code* | string | 资质类型 |
| certification_id | integer | 资质 id |
| certification_file_list | struct[] | 资质文件列表 数组最大长度 255 |
| certification_file_id | string | 资质文件 id，文件 id，通过 [\[资质文件上传 模块\]](https://developers.e.qq.com/docs/api/business_assets/asset_wechat_channels/file_add) 上传文件后获得 字段长度最小 1 字节，长度最大 64 字节 |
| certification_file_name | string | 文件名称 字段长度最小 1 字节，长度最大 256 字节 |
| certification_file | string | 视频号资质文件 URL 地址 字段长度最小 1 字节，长度最大 1024 字节 |
| certification_image_list | struct[] | 资质图片列表 数组最大长度 255 |
| certification_image_id | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/image) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| certification_image | string | 营业执照/企业资质证明图片 URL 地址 字段长度最小 1 字节，长度最大 255 字节 |
| client_ip | string | 客户端 IP，开户时客户端 IP 字段长度最小 1 字节，长度最大 20 字节 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/wechat_channels_ad_account/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "certification_list": [
        {
            "certification_file_list": [],
            "certification_image_list": [
                {
                    "certification_image_id": "<IMAGE_ID>",
                    "certification_image": "https://tencent.com/certification_example.png"
                }
            ]
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/wechat_channels_ad_account/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "certification_list": [
        {
            "certification_file_list": [],
            "certification_image_list": [
                {
                    "certification_image_id": "<IMAGE_ID>",
                    "certification_image": "https://tencent.com/certification_example.png"
                }
            ]
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| wechat_channels_ad_account_id | integer | 视频号广告开户 id |

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
