---
title: 数据源文件上传接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3170&menuId=3923
doc_id: kuaishou_3170
source_id: kuaishou_3170
---
# 数据源文件上传接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3170 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | DMP |
| createTime | 2024-12-24T07:44:22.107Z |

## 概述

注意事项 1、接口调用次数限制：单次调用只能上传一个文件，同一个广告主ID的文件不支持并行上传，当前文件上传成功或失败后才可以进行下一个文件上传 2、文件大小限制：单个文件最大1G（为了您的传输速度，建议文件大小<250M），单日上传总容量50G（特殊需求可申请扩容） 3、文件过期时间：1个月（文件过期不影响数据源使用） 4、数据接入模版地址：https://docs.qingque.cn/d/home/eZQD-P3F8mtjrcunjVClKMAgq?identityId=1oEBSuyY8Dz#section=h.8gf7xii41zde

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dmp/v1/datasource/file/upload |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| match_type | Integer | 是 |  | 匹配类型 | 枚举值：IMEI、IDFA、IMEI_MD5、IDFA_MD5、OAID、OAID_MD5、MOBILE_MD5、MOBILE_SHA256 |
| file | File | 是 |  | 上传的文件 | 数据接入模版地址：https://docs.qingque.cn/d/home/eZQD-P3F8mtjrcunjVClKMAgq?identityId=1oEBSuyY8Dz#section=h.8gf7xii41zde。支持上传.csv文件 |
| advertiser_id | Long | 是 |  | 广告主ID | 在获取 access_token 的时候返回 |
| schema_type | Integer | 是 |  | 模版类型 | 枚举值：YX、JY、DS、JR、BD、JK、QC、XS、SJ、QT。枚举值含义：YX:游戏行业模板、JY:教育行业模板、DS:电商行业模板、JR:金融行业模板、BD:本地行业模板、JK:大健康行业模板、QC:汽车行业模板、XS:小说行业模板、SJ:社交行业模板、QT:其他通用模板 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| data | FileUploadResponseMapiData886 |  |  | 数据 |  |
| - account_id | Long |  |  | 广告主ID |  |
| - match_type | String |  |  | 匹配类型 |  |
| - md5 | String |  |  | md5 |  |
| - file_key | String |  |  | 文件路径 |  |
| - file_size | Long |  |  | 文件大小 |  |
| - upload_file_type | String |  |  | 文件类型 |  |
| - record_size | Long |  |  | 文件行数 |  |
| - match_size | Long |  |  | 匹配行数 |  |
| - schema_type | Integer |  |  | 模版类型 |  |
| message | String |  |  | 消息 |  |
