---
title: 获取创意标签 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/ad_label/get
doc_id: tencent_ads_v3_0_docs_api_ad_label_get
source_id: tencent_ads_v3_0_docs_api_ad_label_get
---
# 获取创意标签 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | ad_label/get |
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
| account_id* | integer | ，广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/ad_label/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>'
curl -v -G 'https://api.e.qq.com/v3.0/ad_label/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| label_category | string | 标签分类 |
| label | string[] | 标签 |
| icon | struct[] | ，图标标签，非所有规格都可以使用图标标签 |
| url | string | 图标标签图片 URL |
| text | string | 图标标签描述 |
| label_type | enum | 标签类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#label_type) |
| label_type_name | string | 标签类型名称 |
| label_remark | struct[] | 标签资质提示列表 |
| label | string | 标签，小于 30 个字符 |
| remark | string | 标签资质提示，小于 1024 个字符 |
| label_structs | struct[] | 新版标签结构列表 |
| text | string | 图标标签描述 |
| value | string | 图标标签描述 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "label": [],
                "icon": [],
                "label_remark": [],
                "label_structs": []
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
