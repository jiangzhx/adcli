---
title: 获取客户资质结构 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get
doc_id: tencent_ads_v3_0_docs_api_qualification_structure_get
source_id: tencent_ads_v3_0_docs_api_qualification_structure_get
---
# 获取客户资质结构 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | qualification_structure/get |
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
| qualification_code* | string | 资质编码，详见 [\[资质编码列表\]](https://developers.e.qq.com/docs/reference/qualification_v5.1) 字段长度为 4 字节 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/qualification_structure/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'qualification_code=A674'
curl -v -G 'https://api.e.qq.com/v3.0/qualification_structure/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'qualification_code=A674'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| qualification_code | string | 资质编码，详见 [\[资质编码列表\]](https://developers.e.qq.com/docs/reference/qualification_v5.1) |
| qualification_name | string | 资质编码名称 |
| expand_field_definition | struct[] |  |
| field_name | string | 扩展字段英文名 |
| field_name_cn | string | 扩展字段中文名 |
| field_type | enum | 扩展字段类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#qualification_expand_field_type) |
| required | boolean | 是否必填 |
| max_length | integer | 字符串最大长度，field_type 为 FIELD_TYPE_STRING 时返回 |
| options | string[] | 可选项，field_type 为 FIELD_TYPE_ENUM 时返回 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "qualification_code": "A674",
        "qualification_name": "药品资质",
        "expand_field_definition": [
            {
                "field_name": "product_name",
                "field_name_cn": "药品注册证药品通用名称（中文）",
                "field_type": "FIELD_TYPE_STRING",
                "required": true,
                "max_length": 500
            },
            {
                "field_name": "medicine_type",
                "field_name_cn": "药品种类（甲类药品、乙类药品、保健食品）",
                "field_type": "FIELD_TYPE_ENUM",
                "required": true,
                "options": [
                    "甲类药品",
                    "乙类药品",
                    "保健食品"
                ]
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
