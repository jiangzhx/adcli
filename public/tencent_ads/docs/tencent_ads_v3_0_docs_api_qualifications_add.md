---
title: 创建客户资质 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/qualifications/add
doc_id: tencent_ads_v3_0_docs_api_qualifications_add
source_id: tencent_ads_v3_0_docs_api_qualifications_add
---
# 创建客户资质 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | qualifications/add |
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
| qualification_type* | enum | 资质类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_qualification_type) 可选值：{ INDUSTRY_QUALIFICATION, AD_QUALIFICATION, ADDITIONAL_INDUSTRY_QUALIFICATION } |
| qualification_spec* | struct | 资质信息 |
| industry_spec | struct | 行业资质信息，当且仅当 qualification_type=INDUSTRY_QUALIFICATION 时可填且必填 |
| system_industry_id* | integer | 行业 id，请填写二级行业 id，详见 [\[行业分类\]](https://developers.e.qq.com/v3.0/pages/docs/reference/industry_v6.1) |
| business_scope_id | integer | 业务范围 id |
| qualification_code* | string | 资质编码，详见 [\[资质编码列表\]](https://developers.e.qq.com/docs/reference/qualification_v5.1) 字段长度为 4 字节 |
| image_id_list* | string[] | 资质图片 id 列表，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) 上传图片后获得 数组最小长度 1，最大长度 10 字段长度最小 1 字节，长度最大 64 字节 |
| expand_field_list | struct[] | 资质扩展字段 |
| field_name* | string | 扩展字段名，参考 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) 返回的 field_name |
| value* | string | 扩展字段值，字段约束详见 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) |
| ad_spec | struct | 广告资质信息，当且仅当 qualification_type=AD_QUALIFICATION 时可填且必填 |
| qualification_code* | string | 资质编码，详见 [\[资质编码列表\]](https://developers.e.qq.com/docs/reference/qualification_v5.1) 字段长度为 4 字节 |
| image_id_list* | string[] | 资质图片 id 列表，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) 上传图片后获得 数组最小长度 1，最大长度 10 字段长度最小 1 字节，长度最大 64 字节 |
| expand_field_list | struct[] | 资质扩展字段 |
| field_name* | string | 扩展字段名，参考 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) 返回的 field_name |
| value* | string | 扩展字段值，字段约束详见 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) |
| additional_industry_spec | struct | 附加行业资质信息，当且仅当 qualification_type=ADDITIONAL_INDUSTRY_QUALIFICATION 时可填且必填 |
| system_industry_id* | integer | 行业 id，请填写二级行业 id，详见 [\[行业分类\]](https://developers.e.qq.com/v3.0/pages/docs/reference/industry_v6.1) |
| business_scope_id | integer | 业务范围 id |
| qualification_code* | string | 资质编码，详见 [\[资质编码列表\]](https://developers.e.qq.com/docs/reference/qualification_v5.1) 字段长度为 4 字节 |
| image_id_list* | string[] | 资质图片 id 列表，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) 上传图片后获得 数组最小长度 1，最大长度 10 字段长度最小 1 字节，长度最大 64 字节 |
| expand_field_list | struct[] | 资质扩展字段 |
| field_name* | string | 扩展字段名，参考 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) 返回的 field_name |
| value* | string | 扩展字段值，字段约束详见 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/qualifications/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "qualification_type": "AD_QUALIFICATION",
    "qualification_spec": {
        "industry_spec": {
            "system_industry_id": 21474840687,
            "image_id_list": [],
            "expand_field_list": []
        },
        "ad_spec": {
            "image_id_list": [],
            "expand_field_list": []
        },
        "additional_industry_spec": {
            "system_industry_id": 21474840687,
            "image_id_list": [],
            "expand_field_list": []
        }
    }
}'
curl 'https://api.e.qq.com/v3.0/qualifications/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "qualification_type": "AD_QUALIFICATION",
    "qualification_spec": {
        "industry_spec": {
            "system_industry_id": 21474840687,
            "image_id_list": [],
            "expand_field_list": []
        },
        "ad_spec": {
            "image_id_list": [],
            "expand_field_list": []
        },
        "additional_industry_spec": {
            "system_industry_id": 21474840687,
            "image_id_list": [],
            "expand_field_list": []
        }
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| qualification_id | integer | 资质 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "qualification_id": "<QUALIFICATION_ID>"
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
