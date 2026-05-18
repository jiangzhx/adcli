---
title: 文件上传接口(新)
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2663&menuId=3391
doc_id: kuaishou_2663
source_id: kuaishou_2663
---
# 文件上传接口(新)

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2663 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | DMP |
| createTime | 2024-07-04T12:28:11.527Z |

## 概述

注意事项 1、接口调用次数限制：单次调用只能上传一个文件，同一个广告主ID的文件不支持并行上传，当前文件上传成功或失败后才可以进行下一个文件上传 2、文件大小限制：单个文件最大1G（为了您的传输速度，建议文件大小<250M），单日上传总容量50G（特殊需求可申请扩容） 3、文件过期时间：1个月（文件过期不影响人群包投放）

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dmp/v2/dmp/population/file/upload |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| type | Integer | 是 |  | 匹配类型 | 1：IMEI；2：IDFA；3：IMEI_MD5；4：IDFA_MD5；5：手机号-MD5；7：OAID；8：OAID_MD5 9: 手机号_SHA256;16：CAID |
| file | File | 是 |  | 上传的文件 | 支持直接上传.txt（UTF-8)文本；支持将单个/多个.txt文件经过zip格式压缩上传 |
| advertiser_id | Long | 是 |  | 广告主ID | 在获取 access_token 的时候返回 |

## 请求样例

### 请求样例 (shell)

```
curl -X POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dmp/v2/dmp/population/file/upload' \
-H 'Access-Token: 1000000ddcffea82bb2348e804de5f36' \
-H 'Content-Type: multipart/form-data' \
-F 'advertiser_id="12345678"' \
-F 'file=@"/Users/xxxxxxx03/Desktop/测试人群包/imei-md5.txt"' \
-F 'type="3"'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| data | FileUploadResponseMapiData |  |  | 数据 |  |
| - advertiser_id | Long |  |  | 广告主ID |  |
| - match_type | String |  |  | 匹配类型 |  |
| - md5 | String |  |  | md5 |  |
| - file_path | String |  |  | 文件路径 | 包含作为文件唯一标识的字符串 |
| - file_size | Long |  |  | 文件大小 |  |
| - upload_file_type | String |  |  | 文件类型 | TXT或ZIP |
| - record_size | Long |  |  | 文件行数 |  |
| - type | Integer |  |  | 匹配类型 | 1：IMEI；2：IDFA；3：IMEI_MD5；4：IDFA_MD5；5：手机号-MD5；7：OAID；8：OAID_MD5 9: 手机号_SHA256;16：CAID |
| message | String |  |  | 消息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "file_path": "12345678_3_0d0bdfaaab8df08cf052d0ea41b6e05f.txt",
        "upload_file_type": "TXT",
        "record_size": 1367738,
        "match_type": "IMEI_MD5",
        "type": 3,
        "file_size": 45135769,
        "md5": "0d0bdfaaab8df08cf052d0ea41b6e05f",
        "advertiser_id": 12345678
    },
    "message": "OK",
    "request_id": "89399f2f9e91472c833d0a78937f6a0e"
}
```
