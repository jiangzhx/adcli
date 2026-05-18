---
title: 更新客户信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/advertiser/update
doc_id: tencent_ads_v3_0_docs_api_advertiser_update
source_id: tencent_ads_v3_0_docs_api_advertiser_update
---
# 更新客户信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | advertiser/update |
| 请求方法 | POST |
| Content-Type | application/json |

## 全局参数

全局参数是指每一个接口都需要使用到的参数。详情[参考](https://developers.e.qq.com/v3.0/pages/send_request)，代码案例[参考](https://developers.e.qq.com/v3.0/pages/send_request)。

| 参数名称 | 参数类型 |
| --- | --- |
| access_token | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/docs/start/authorization)章节 |
| timestamp | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。 MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2017-05-15 17:21:59 |
| nonce | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性 |

## 特定请求参数

该参数为实名认证要求参数,调用受限接口时必传，注意不是放在 header 中

| 参数名称 | 参数类型 |
| --- | --- |
| user_token | 实名认证完成获取的令牌，获取方式参考[API 身份验证升级公告](https://docs.qq.com/doc/DSVdkdk1LQ1hOam5n)中的开发者对接文档 |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| daily_budget | integer | 竞价广告账户日预算，仅对竞价广告生效，合约广告不受影响单位为分，设置为 0 表示不设预算（即不限） 要求介于 5,000 分– 4,000,000,000 分之间（50 元-40,000,000 元，单位为人民币） 每次修改幅度不能低于 5,000 分（50 元，单位为人民币）；微信公众号平台小程序账户，每次提高幅度不能低于 50,000 分（500 元，单位为人民币） 修改账户日预算不能低于今日已消耗金额的 1.2 倍加上冻结金；且不能低于今日已消耗金额加上 5,000 分（50 元，单位为人民币） |
| corporation_name | string | 【企业账号】企业名称 【个人账号】不使用 字段长度最小 1 字节，长度最大 120 字节 |
| corporation_licence | string | 【企业账号】企业营业执照注册号 【个人账号】不使用 字段长度最小 1 字节，长度最大 18 字节 |
| certification_image_id | string | 【企业账号】营业执照/企业资质证明图片 id，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add)上传图片后获得 【个人账号】不使用 字段长度最小 1 字节，长度最大 64 字节 |
| individual_qualification | struct | 身份证明， 【企业账号】法人身份证明 【个人账号】个人身份证明 |
| name | string | 必填，姓名 字段长度最小 1 字节，长度最大 64 字节 |
| identification_number | string | 必填，身份证号码 字段长度最小 1 字节，长度最大 64 字节 |
| identification_front_image_id* | string | 身份证正面图片 id，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| identification_back_image_id* | string | 身份证反面图片 id，通过 [\[资质模块\]](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| area_code | integer | 【企业账号】公司所在地（需与营业执照注册地域一致），具体值参照附录中的 [\[地域信息\]](https://developers.e.qq.com/docs/reference/region) 【个人账号】不使用 |
| system_industry_id | integer | 开户行业 id，请填写二级行业 id，详见 [\[行业分类\]](https://developers.e.qq.com/v3.0/pages/docs/reference/industry_v6.1) |
| introduction_url | string | 业务介绍页地址，可填写公司网站、APP 下载页、H5 链接等，作为开户信息参考 字段长度最小 1 字节，长度最大 255 字节 |
| corporate_brand_name | string | 品牌名称 字段长度最小 0 字节，长度最大 256 字节 |
| contact_person_telephone | string | 联系人座机电话号码，格式为：区号-座机号，例如：0755-8601338 字段长度最小 0 字节，长度最大 20 字节 |
| contact_person_mobile | string | 联系人手机号码，例如：+8613900000000 或 13900000000 字段长度最小 0 字节，长度最大 20 字节 |
| business_alias | string | 客户工作台账号标签 字段长度最小 0 字节，长度最大 256 字节 |
| websites | struct[] | 推广链接列表 数组最小长度 0，最大长度 255 |
| website_domain* | string | 推广链接域名，无需 http 前缀，如 www.qq.com 字段长度最小 1 字节，长度最大 1024 字节 |
| icp_image_id* | string | 网站 icp 备案证书扫描图片，通过 [\[images 模块\]](https://developers.e.qq.com/v3.0/docs/api/images/add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/advertiser/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "daily_budget": 2000,
    "corporation_name": "腾讯计算机系统有限公司",
    "corporation_licence": "888888888888888888",
    "certification_image_id": "<IMAGE_ID>",
    "individual_qualification": {
        "name": "张三",
        "identification_number": "110101200001011234",
        "identification_front_image_id": "<IMAGE_ID>",
        "identification_back_image_id": "<IMAGE_ID>"
    },
    "area_code": "110100",
    "system_industry_id": 21474840687,
    "introduction_url": "https://www.tencent.com",
    "contact_person_telephone": "0755-86013388",
    "contact_person_mobile": "13900000000",
    "websites": [
        {
            "website_domain": "www.tencent.com",
            "icp_image_id": "<IMAGE_ID>"
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/advertiser/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "daily_budget": 2000,
    "corporation_name": "腾讯计算机系统有限公司",
    "corporation_licence": "888888888888888888",
    "certification_image_id": "<IMAGE_ID>",
    "individual_qualification": {
        "name": "张三",
        "identification_number": "110101200001011234",
        "identification_front_image_id": "<IMAGE_ID>",
        "identification_back_image_id": "<IMAGE_ID>"
    },
    "area_code": "110100",
    "system_industry_id": 21474840687,
    "introduction_url": "https://www.tencent.com",
    "contact_person_telephone": "0755-86013388",
    "contact_person_mobile": "13900000000",
    "websites": [
        {
            "website_domain": "www.tencent.com",
            "icp_image_id": "<IMAGE_ID>"
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id | integer | 广告主帐号 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "account_id": "<ACCOUNT_ID>"
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
