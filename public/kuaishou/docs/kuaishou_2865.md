---
title: 创建或更新账户信息和开户资质
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2865&menuId=3599
doc_id: kuaishou_2865
source_id: kuaishou_2865
---
# 创建或更新账户信息和开户资质

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2865 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-09-04T07:10:18.251Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/agent/advertiser/cert/submit |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| agent_id | Long | 是 |  | 代理商id |  |
| industry_id | Long | 是 |  | 二级行业id |  |
| corporation_name | String | 是 |  | 公司名称 | 不能超过50个字符 |
| web_site | String | 是 |  | 公司网站 | http://或https://开头，可以访问的网站 |
| contact_name | String |  |  | 联系人姓名 | 中文或英文，不能超过50个字符 |
| email | String |  |  | 邮箱 | xxx@ |
| phone | String |  |  | 手机号码 | 不加区号，11位 |
| product_name | String | 是 |  | 产品名/品牌名 |  |
| marketing_content_type | Integer | 是 |  | 推广内容类型 | 1-推广内容链接，2-推广应用 |
| licence_id | String | 是 |  | 营业执照编号 | 只能有数字和字母 |
| licence_location | String | 是 |  | 营业执照注册地 | 注册地列表的地区，格式是"xx省-xx市" |
| cert_list | CertParam[] | 是 |  | 开户资质列表 | 只传开户资质（cert_category包括1-营业执照，2-ICP备案，3-投放承诺函，4-行业资质） |
| - cert_id | Long |  |  | 资质id | 新增时传0，非0的只能是已有资质的id |
| - cert_category | Integer |  |  | 资质类型 | 1-营业执照，必填，传1个文件，需要有效期；2-ICP备案，选填，传1个文件，永久有效，不需要有效期，expire_time可以不传或传任意值；3-投放承诺函，非必填，最多10个文件，需要有效期；4行业资质，选填，最多50个文件，需要有效期；5-投放资质，选填，最多50个文件，永久有效，不需要有效期, expire_time可以不传或传任意值；开户资质接口：/rest/openapi/v1/agent/advertiser/cert/submit只能涉及开户资质1、2、3、4；投放资质接口：/rest/openapi/v1/agent/advertiser/delivery_cert/submit可以涉及全部资质1、2、3、4、5，但5只能在开户后提交 |
| - file_token | String |  |  | 资质文件标识 | 传入上传资质接口返回的file_token字段 |
| - expire_time | String |  |  | 资质有效期 | 时间格式如 yyyy-MM-dd，空字符串表示长期有效 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| result | Boolean |  |  | 是否成功 |  |

## 原始内容

```
创建或更新账户信息和开户资质 /rest/openapi/v1/agent/advertiser/cert/submit advertiser_id Long 广告主id agent_id Long 代理商id industry_id Long 二级行业id corporation_name String 公司名称 web_site String 公司网站 contact_name String 联系人姓名 email String 邮箱 phone String 手机号码 product_name String 产品名/品牌名 marketing_content_type Integer 推广内容类型 licence_id String 营业执照编号 licence_location String 营业执照注册地 cert_list CertParam[] 开户资质列表 cert_id Long 资质id cert_category Integer 资质类型 file_token String 资质文件标识 expire_time String 资质有效期 result Boolean 是否成功
```
