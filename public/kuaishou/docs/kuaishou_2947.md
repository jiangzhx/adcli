---
title: 创建或更新投放资质
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2947&menuId=3699
doc_id: kuaishou_2947
source_id: kuaishou_2947
---
# 创建或更新投放资质

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2947 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-08-06T02:17:02.559Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/agent/advertiser/delivery_cert/submit |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| agent_id | Long | 是 |  | 代理商id | 和access_token保持一致 |
| cert_list | CertParam[] |  |  | 投放资质列表 | 只传投放资质（cert_category为5)如果不填，代表删除所有投放资质 |
| - cert_id | Long |  |  | 资质id | 新增时传0，非0的只能是已有资质的id |
| - cert_category | Integer |  |  | 资质类型 | 1-营业执照，必填，传1个文件，需要有效期；2-ICP备案，选填，传1个文件，永久有效，不需要有效期，expire_time可以不传或传任意值；3-投放承诺函，必填，最多10个文件，需要有效期；4行业资质，选填，最多50个文件，需要有效期；5-投放资质，选填，最多50个文件，永久有效，不需要有效期, expire_time可以不传或传任意值；开户资质接口：/rest/openapi/v1/agent/advertiser/cert/submit只能涉及开户资质1、2、3、4；投放资质接口：/rest/openapi/v1/agent/advertiser/delivery_cert/submit可以涉及全部资质1、2、3、4、5，但5只能在开户后提交 |
| - file_token | String |  |  | 资质文件标识 | 传入上传资质接口返回的file_token字段 |
| - expire_time | String |  |  | 资质有效期 | 时间格式如 yyyy-MM-dd，空字符串表示长期有效 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| result | Boolean |  |  | 是否成功 |  |

## 原始内容

```
创建或更新投放资质 /rest/openapi/v1/agent/advertiser/delivery_cert/submit advertiser_id Long 广告主id agent_id Long 代理商id cert_list CertParam[] 投放资质列表 cert_id Long 资质id cert_category Integer 资质类型 file_token String 资质文件标识 expire_time String 资质有效期 result Boolean 是否成功
```
