---
title: 通过上传方式新建样本接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2713&menuId=3448
doc_id: kuaishou_2713
source_id: kuaishou_2713
---
# 通过上传方式新建样本接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2713 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 建模平台 |
| createTime | 2024-10-22T10:04:31.487Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/ad_model/v1/sample/upload/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| sample_type | Integer |  | 1 | 样本类型 1、正样本 2、负样本 |  |
| source_platform | String |  | 2 | DMP平台：2 ，其他平台：null |  |
| advertiser_id | Long | 是 | 1 | 广告主id |  |
| name | String | 是 | 样本名称 | 样本名称 |  |
| token | String |  | xx | 上传文件接口返回的token |  |
| upload_file_name | String | 是 | test.zip | 上传文件接口返回的文件名 |  |
| upload_type | String | 是 | IMEI | 上传类型IMEI,IDFA,OAID,IMEI_MD5,IDFA_MD5,OAID_MD5,PHONE_MD5,PHONE_SHA256 |  |
| feature_date | String | 是 | 2023-01-01 | 特征计算基准日期 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com//rest/openapi/gw/ad_model/v1/sample/upload/create' \
--header 'Access-Token: xxxxx' \
--header 'Content-Type: application/json' \
--header 'Cookie: Cookie_1=value; apdid=22aa3170-fecc-4e3d-aaf3-b83825191ca119473a5d1ce8417a307644cdc2c666ad:16801541231:1; accessproxy_session=e5c8db0b-ca32-490f-a0a2-74d9178a8sfa' \
--data-raw '{
    "advertiser_id":1,
    "name":"sample-open-01",
    "source_type":"UPLOAD",
    "upload_type":"IMEI_MD5",
    "token":"Cg51cGxvYWRlci50b2tlbhKTAsP6vU_1FHpRIpJjBufBC9rjZu5a8beuBaPG06bozy8ncO0XCMi1HLJG98qdwR-omrhAX2xVP0JSL_sGXcZEtPSpc73bmps9l-HeqnZoyXQV884HQVWar6DPY2xGd2vMJpgRWCmwjcER7I0ZPIo6ygVzRGOlJlCkbZQo8C1Y0lhpdDvuFRWADGstDwbXwOltVNBmZnYesxkFGtsRmSrbkXErYIJQoF1sqIzTpooi8SRCbYof0LXYajHBRZB-rQAi0qXWjSQzfvVHM6mlZaOUdy6zsbJal30YPBQqtrG6ernwi6J7IKtf25O_3l-Cy47E5OsntcxZLS88ZN_rrTVLZZbiBDJmmXNmjwwYZOnIl3zEy3k6GhLBUelXk84QOEwrj1TbGTojbx123123",
    "upload_file_name":"test.zip",
    "feature_date":"2023-01-01"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 200 | 状态码 |  |
| message | String |  | success | 状态消息 |  |
| data | SampleUploadCreateGatewayResponse |  | s | s |  |
| - id | Long |  | 1 | 样本id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "id": 1
    },
    "message": "OK",
    "request_id": "EMeAgICgxLm2Chj0CiD7p8X19zAou_mB9w4="
}
```
