---
title: 数据源更新接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3172&menuId=3925
doc_id: kuaishou_3172
source_id: kuaishou_3172
---
# 数据源更新接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3172 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | DMP |
| createTime | 2024-12-24T03:15:36.277Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dmp/v1/datasource/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主ID |  |
| operation_type | Integer |  |  | 操作类型 | 枚举值：0和1。枚举值说明：0-全量更新；1-增量更新 |
| data_source_id | Long |  |  | 数据源ID |  |
| file_keys | String[] |  |  | 文件路径数组 | 通过调用【数据源文件上传接口】得到的文件路径，每次最多填写10个、总大小<3G的文件 |
| match_type | String |  |  | 匹配类型 | 枚举值：IMEI、IDFA、IMEI_MD5、IDFA_MD5、OAID、OAID_MD5、MOBILE_MD5、MOBILE_SHA256 |
| schema_type | String |  |  | 模版类型 | 枚举值：YX、JY、DS、JR、BD、JK、QC、XS、SJ、QT。枚举值含义：YX:游戏行业模板、JY:教育行业模板、DS:电商行业模板、JR:金融行业模板、BD:本地行业模板、JK:大健康行业模板、QC:汽车行业模板、XS:小说行业模板、SJ:社交行业模板、QT:其他通用模板 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 消息 |  |
| data | DataSourceMapiVOSnake |  |  | 数据 |  |
| - account_id | Long |  |  | 广告主ID |  |
| - match_type | Integer |  |  | 匹配类型 | 枚举值：IMEI、IDFA、IMEI_MD5、IDFA_MD5、OAID、OAID_MD5、MOBILE_MD5、MOBILE_SHA256 |
| - data_source_name | String |  |  | 数据源名称 |  |
| - schema_type | String |  |  | 模版类型 | 枚举值：YX、JY、DS、JR、BD、JK、QC、XS、SJ、QT。枚举值含义：YX:游戏行业模板、JY:教育行业模板、DS:电商行业模板、JR:金融行业模板、BD:本地行业模板、JK:大健康行业模板、QC:汽车行业模板、XS:小说行业模板、SJ:社交行业模板、QT:其他通用模板 |
| - all_file_size | Long |  |  | 文件大小 |  |
| - create_time | Long |  |  | 创建时间戳 |  |
| - data_source_id | Long |  |  | 数据源ID |  |
| - calcu_status | Integer |  |  | 数据源状态 | 0：未计算，1：计算中，2：计算成功，3：计算失败 |
| - error_message | String |  |  | 错误信息，计算失败时会有值 |  |
