---
title: 获取客户资质 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/qualifications/get
doc_id: tencent_ads_v3_0_docs_api_qualifications_get
source_id: tencent_ads_v3_0_docs_api_qualifications_get
---
# 获取客户资质 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | qualifications/get |
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
| qualification_type* | enum | 资质类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_qualification_type) 可选值：{ INDUSTRY_QUALIFICATION, AD_QUALIFICATION, ADDITIONAL_INDUSTRY_QUALIFICATION } |
| filtering | struct[] | 过滤条件，此字段不传或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组长度为 1 |
| field* | string | 过滤字段 可选值：{ qualification_id } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 qualification_id 时，可选值：{ EQUALS, IN } |
| values* | string[] | 字段取值 当 field 取值 qualification_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 当 field 取值 qualification_id 且 operator 取值 EQUALS 时， 数组长度为 1 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/qualifications/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'qualification_type=AD_QUALIFICATION' \
-d 'filtering=[
    {
        "values": []
    }
]'
curl -v -G 'https://api.e.qq.com/v3.0/qualifications/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'qualification_type=AD_QUALIFICATION' \
-d 'filtering=[
    {
        "values": []
    }
]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| industry_qualifications | struct[] | 行业资质信息 |
| qualification_id | integer | 资质 id |
| system_industry_id | integer | 行业 id，请填写二级行业 id，详见 [\[行业分类\]](https://developers.e.qq.com/v3.0/pages/docs/reference/industry_v6.1) |
| business_scope_id | integer | 业务范围 id |
| qualification_code | string | 资质编码，详见 [\[资质编码列表\]](https://developers.e.qq.com/docs/reference/qualification_v5.1) |
| image_id_list | string[] | 资质图片 id 列表，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) 上传图片后获得 |
| expand_field_list | struct[] | 资质扩展字段 |
| field_name | string | 扩展字段名，参考 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) 返回的 field_name |
| value | string | 扩展字段值，字段约束详见 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) |
| qualification_status | enum | 资质状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_qualification_status) |
| expired_date | string | 资质有效日期，日期格式：YYYY-MM-DD，空代表永久有效 |
| reject_message | string | 审核消息 |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| ad_qualifications | struct[] | 广告资质信息 |
| qualification_id | integer | 资质 id |
| qualification_code | string | 资质编码，详见 [\[资质编码列表\]](https://developers.e.qq.com/docs/reference/qualification_v5.1) |
| image_id_list | string[] | 资质图片 id 列表，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) 上传图片后获得 |
| expand_field_list | struct[] | 资质扩展字段 |
| field_name | string | 扩展字段名，参考 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) 返回的 field_name |
| value | string | 扩展字段值，字段约束详见 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) |
| qualification_status | enum | 资质状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_qualification_status) |
| expired_date | string | 资质有效日期，日期格式：YYYY-MM-DD，空代表永久有效 |
| is_mdm_shared | enum | 资质共享状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_ad_qualification_shared_status) |
| reject_message | string | 审核消息 |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| additional_industry_qualifications | struct[] | 附加行业资质信息 |
| qualification_id | integer | 资质 id |
| system_industry_id | integer | 行业 id，请填写二级行业 id，详见 [\[行业分类\]](https://developers.e.qq.com/v3.0/pages/docs/reference/industry_v6.1) |
| business_scope_id | integer | 业务范围 id |
| qualification_code | string | 资质编码，详见 [\[资质编码列表\]](https://developers.e.qq.com/docs/reference/qualification_v5.1) |
| image_id_list | string[] | 资质图片 id 列表，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) 上传图片后获得 |
| expand_field_list | struct[] | 资质扩展字段 |
| field_name | string | 扩展字段名，参考 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) 返回的 field_name |
| value | string | 扩展字段值，字段约束详见 [\[获取广告主资质结构接口\]](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) |
| qualification_status | enum | 资质状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_qualification_status) |
| expired_date | string | 资质有效日期，日期格式：YYYY-MM-DD，空代表永久有效 |
| reject_message | string | 审核消息 |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "industry_qualifications": [
            {
                "qualification_id": "<QUALIFICATION_ID>",
                "system_industry_id": 21474840687,
                "image_id_list": [],
                "expand_field_list": [],
                "reject_message": "Reject message example",
                "created_time": 1491019858,
                "last_modified_time": 1491098468
            }
        ],
        "ad_qualifications": [
            {
                "qualification_id": "<QUALIFICATION_ID>",
                "image_id_list": [],
                "expand_field_list": [],
                "reject_message": "Reject message example",
                "created_time": 1491019858,
                "last_modified_time": 1491098468
            }
        ],
        "additional_industry_qualifications": [
            {
                "qualification_id": "<QUALIFICATION_ID>",
                "system_industry_id": 21474840687,
                "image_id_list": [],
                "expand_field_list": [],
                "reject_message": "Reject message example",
                "created_time": 1491019858,
                "last_modified_time": 1491098468
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
