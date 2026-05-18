---
title: 获取视频号动态详情 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/channels_finderobject/get
doc_id: tencent_ads_v3_0_docs_api_channels_finderobject_get
source_id: tencent_ads_v3_0_docs_api_channels_finderobject_get
---
# 获取视频号动态详情 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | channels_finderobject/get |
| 请求方法 | GET |

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
| export_id* | string | 互选小任务接单视频 id 字段长度最小 1 字节，长度最大 256 字节 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/channels_finderobject/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>'
curl -v -G 'https://api.e.qq.com/v3.0/channels_finderobject/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| object | struct | 动态详情 |
| export_id | string | 动态 id |
| create_time | integer | 创建时间 |
| delete_flag | integer | 删除标记，0 表示未删除 |
| description | string | 动态标题 |
| medias | struct[] | 媒体信息列表 |
| thumb_url | string | 首帧图片 URL 地址，地址非长期有效 |
| cover_url | string | 封面图 URL 地址，地址非长期有效 |
| media_type | integer | 动态资源类型 |
| width | float | 宽度 |
| height | float | 高度 |
| url | string | 视频 URL 地址，地址非长期有效 |
| video_play_len | integer | 视频时长 |
| finder_username | string | 视频号账号 id 已废弃 |
| wechat_channels_account_id | string | 视频号账号 id |
| created_source | enum | 视频号创建来源，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_created_source_type) |
| wechat_channels_components | struct[] | 视频号动态组件列表 |
| component_type | enum | 视频号原生动态组件类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#wechat_channels_component_type) |
| icon | string | 视频号动态组件图标 |
| wording | string | 视频号动态组件文案 |
| component_uuid | string | 视频号动态组件 id，如小店商品 id、iOS/Android 应用 id |
| feeds_source_type | enum | 视频号动态类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#feeds_source_type) |
| is_disable | boolean | 是否可使用，如不可使用，创建广告/创意将被拦截 |
| disable_message | string | 禁用原因 |
| audit_status | enum | 视频号动态审核状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#ad_status) |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "object": {
            "medias": [],
            "wechat_channels_components": []
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
