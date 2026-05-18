---
title: 查询客户信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/advertiser/get
doc_id: tencent_ads_v3_0_docs_api_advertiser_get
source_id: tencent_ads_v3_0_docs_api_advertiser_get
---
# 查询客户信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management,ads_management,ads_insights,audience_management,user_actions |
| --- | --- |
| 请求地址 | advertiser/get |
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
| agency_id | integer | 服务商账号 id，服务商主体请求时必填、其他 token 忽略此参数 最小值 1 |
| account_id | integer | 广告主帐号 id，直客客户必须填写，代理商可不填写; 如代理商不填写，则获取代理商下全部子客户的信息 |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组长度为 1 |
| field* | string | 过滤字段 可选值：{ corporation_name } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 corporation_name 时，可选值：{ EQUALS, CONTAINS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 corporation_name 时，数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 |
| fields* | string[] | 指定返回的字段列表 数组最小长度 1，最大长度 256 字段长度最小 1 字节，长度最大 64 字节 |
| pagination_mode* | enum | 分页方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_pagination_mode) 可选值：{ PAGINATION_MODE_NORMAL, PAGINATION_MODE_CURSOR } |
| page | integer | 搜索页码，普通翻页模式必填 最小值 1，最大值 1000 |
| page_size* | integer | 一页显示的数据条数 最小值 1，最大值 100 |
| cursor | integer | 游标值，游标翻页模式使用，第一次拉取无需填写、后续拉取传递上一次返回的 cursor 数值 最小值 1 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/advertiser/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"corporation_name","operator":"EQUALS","values":["腾讯计算机系统有限公司"]}]' \
-d 'fields=[]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/advertiser/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"corporation_name","operator":"EQUALS","values":["腾讯计算机系统有限公司"]}]' \
-d 'fields=[]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| account_id | integer | 广告主帐号 id |
| daily_budget | integer | 竞价广告账户日预算，单位为分，0 表示不设预算（即不限） |
| registration_type | enum | 账户主体类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#customer_registration_type) |
| corporation_name | string | 【企业账号】企业名称 【个人账号】个人姓名 |
| corporation_licence | string | 【企业账号】企业营业执照注册号 【个人账号】不使用 |
| certification_image_id | string | 【企业账号】营业执照/企业资质证明图片 id 【个人账号】不使用 |
| certification_image | string | 【企业账号】营业执照/企业资质证明图片 URL 地址 【个人账号】不使用 |
| individual_qualification | struct | 身份证明， 【企业账号】法人身份证明 【个人账号】个人身份证明 |
| name | string | 姓名 |
| identification_number | string | 身份证号码 |
| identification_front_image_id | string | 身份证正面图片 id，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) 上传图片后获得 |
| identification_back_image_id | string | 身份证反面图片 id，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) 上传图片后获得 |
| area_code | integer | 所在地，具体值参照附录中的 [\[地域信息\]](https://developers.e.qq.com/docs/reference/region) 【企业账号】公司所在地 【个人账号】不使用 |
| mdm_id | integer | 客户主体 id |
| mdm_name | string | 客户主体名称 |
| system_industry_id | integer | 行业 id，详见 [\[行业分类\]](https://developers.e.qq.com/v3.0/pages/docs/reference/industry_v6.1) |
| customized_industry | string | 调用方行业名称 |
| introduction_url | string | 业务介绍页地址，可填写公司网站、APP 下载页、H5 链接等，作为开户信息参考 |
| corporate_brand_name | string | 品牌名称 |
| memo | string | 账户备注 |
| system_status | enum | 客户系统状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_customer_system_status) |
| reject_message | string | 审核消息 |
| is_adx | boolean | 是否为 ADX 程序化投放账号 |
| business_alias | string | 客户工作台账号标签 |
| contact_person | string | 联系人姓名 |
| contact_person_email | string | 联系人 email |
| contact_person_telephone | string | 联系人座机电话号码，格式为：区号-座机号，例如：0755-8601338 |
| contact_person_mobile | string | 联系人手机号码，例如：+8613900000000 或 13900000000 |
| websites | struct[] | 推广链接列表，当且仅当输入参数 account_id 不为空时有效 |
| website_domain | string | 推广链接域名，无需 http 前缀，如 www.qq.com |
| icp_image_id | string | 网站 icp 备案证书扫描图片，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) 上传图片后获得 |
| system_status | enum | 推广链接系统状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#website_status) |
| reject_message | string | 审核消息 |
| agency_account_id | integer | 代理商 account_id |
| operators | struct[] | 运营人员列表 |
| operator_id | integer | 运营人员 id |
| operator_name | string | 运营人员名称 |
| qq | integer | 登录 QQ 号码 |
| wechat_account_id | string | 微信账号 id |
| is_master | boolean | 是否是主要运营人员，true：是，false：否 |
| page_info | struct | 分页配置信息，普通翻页模式返回 |
| page | number | 搜索页码 |
| page_size | integer | 一页显示的数据条数 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |
| cursor_page_info | struct | 分页配置信息，游标翻页模式返回 |
| page_size | integer | 一页显示的数据条数 |
| total_number | integer | 总条数 |
| has_more | boolean | 是否有下一页，返回 false 表示已无下一页，此时务必停止拉取 |
| cursor | integer | 下一次拉取的游标值 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "account_id": "<ACCOUNT_ID>",
                "daily_budget": 2000,
                "corporation_name": "腾讯计算机系统有限公司",
                "corporation_licence": "888888888888888888",
                "certification_image_id": "<IMAGE_ID>",
                "certification_image": "https://tencent.com/certification_example.png",
                "individual_qualification": {
                    "name": "张三",
                    "identification_number": "110101200001011234",
                    "identification_front_image_id": "<IMAGE_ID>",
                    "identification_back_image_id": "<IMAGE_ID>"
                },
                "area_code": "110100",
                "system_industry_id": 21474840687,
                "introduction_url": "https://www.tencent.com",
                "memo": "账户备注",
                "system_status": "CUSTOMER_STATUS_NORMAL",
                "reject_message": "Reject message example",
                "contact_person": "Name",
                "contact_person_email": "example@qq.com",
                "contact_person_telephone": "0755-86013388",
                "contact_person_mobile": "13900000000",
                "websites": [
                    {
                        "website_domain": "www.tencent.com",
                        "icp_image_id": "<IMAGE_ID>",
                        "system_status": "WEBSITE_STATUS_DENIED",
                        "reject_message": "Reject message example"
                    }
                ],
                "operators": []
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        },
        "cursor_page_info": {
            "page_size": 10,
            "total_number": 1
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
