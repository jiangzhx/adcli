---
title: 获取在线预览二维码 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/online_preview_qrcode/get
doc_id: tencent_ads_v3_0_docs_api_online_preview_qrcode_get
source_id: tencent_ads_v3_0_docs_api_online_preview_qrcode_get
---
# 获取在线预览二维码 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | online_preview_qrcode/get |
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
| user_id_type | enum | 受众 id 类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_viewer_id_type) 可选值：{ USER_ID_TYPE_WECHAT_ID, USER_ID_TYPE_QQ_ID } |
| dynamic_creative_id* | integer | 广告创意 id |
| preview_creative_components | struct | 通过指定视频/图片组件以及文案组件的组件 id 指定要预览的组件组合 |
| resource_component_id | integer | 指定要预览的视频/图片组件 id |
| text_component_id | integer | 指定要预览的文案组件 id |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/online_preview_qrcode/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'preview_creative_components=[]'
curl -v -G 'https://api.e.qq.com/v3.0/online_preview_qrcode/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'preview_creative_components=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| qrcode_url | string | 二维码链接 |
| expiration_time | integer | 过期时间，Unix 时间戳 |
| user_id_type | enum | 受众 id 类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_viewer_id_type) |

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
