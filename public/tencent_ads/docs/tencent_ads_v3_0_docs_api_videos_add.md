---
title: 添加视频文件 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/videos/add
doc_id: tencent_ads_v3_0_docs_api_videos_add
source_id: tencent_ads_v3_0_docs_api_videos_add
---
# 添加视频文件 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | videos/add |
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
| account_id | integer | 广告主账户 id，有操作权限的帐号 id，包括代理商和广告主帐号 id ； account_id 和 organization_id 需必填其一 |
| organization_id | integer | 业务单元 id，有操作权限的业务单元 id ； account_id 和 organization_id 需必填其一 |
| video_file* | file | 被上传的视频文件，视频二进制流，支持上传的视频文件类型为：mp4、mov、avi, 最大支持 100M 视频上传 |
| signature* | string | 视频文件签名 字段长度为 32 字节 |
| description | string | 视频文件描述，不支持@等特殊符号 字段长度最小 0 字节，长度最大 255 字节 |
| adcreative_template_id | integer | 创意形式 id，仅可以上传微信规格 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/videos/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-F 'account_id=<ACCOUNT_ID>' \
-F 'video_file=@/usr/local/my/video.mp4' \
-F 'signature=19efcaeda3c30e1cf28170d86ecbf5e0' \
-F 'description=media_description' \
-F 'adcreative_template_id=<ADCREATIVE_TEMPLATE_ID>'
curl 'https://api.e.qq.com/v3.0/videos/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-F 'account_id=<ACCOUNT_ID>' \
-F 'video_file=@/usr/local/my/video.mp4' \
-F 'signature=19efcaeda3c30e1cf28170d86ecbf5e0' \
-F 'description=media_description' \
-F 'adcreative_template_id=<ADCREATIVE_TEMPLATE_ID>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| video_id | integer | 视频 id |
| cover_image_id | integer | 视频封面图 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "video_id": "<VIDEO_ID>"
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
