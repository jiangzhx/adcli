---
title: 上传样本文件接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2712&menuId=3447
doc_id: kuaishou_2712
source_id: kuaishou_2712
---
# 上传样本文件接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2712 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 建模平台 |
| createTime | 2024-10-22T10:03:21.240Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/ad_model/v1/sample/upload |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| source_platform | String |  |  | DMP私有建模:2，其他不用传 |  |
| file | File | 是 | test.zip | csv的压缩zip文件 | 支持直接上传.csv（UTF-8)；支持将单个/多个.csv文件经过zip格式压缩上传 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/ad_model/v1/sample/upload' \
--header 'Access-Token: xxxxxxxxxxxx' \
--header 'Cookie: Cookie_1=value; apdid=22aa3170-fecc-4e3d-aaf3-b83825191ca119473a5d1ce8417a307644cdc2c666cd:1680154657:1; accessproxy_session=e5c8db0b-ca32-490f-a0a2-74d9178a8cd5' \
--form 'file=@"/Users/test/Documents/test.csv.zip"' \
--form 'advertiser_id="00000001"'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | 消息 | 消息 |  |
| data | UploadGatewayResponse |  |  | 返回消息体 |  |
| - token | String |  | token | token |  |
| - upload_file_name | String |  | sss | 上传文件名 |  |
| - transform_date | String |  |  | 基准日期 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "upload_file_name": "test.zip",
        "token": "Cg51cGxvYWRlci50b2tlbhKLAgQ2EQ8tdql4zKud5_x3Bmx1HwK1n9CXABEirTPCkzrS3s13oNHfRrv1m8SB-awqoTH7cWoT0SMPH3zdlUYXpjAPbw0Cply8eLW7c9ZghPtArNFEyVe"
    },
    "message": "OK",
    "request_id": "EMeAgICgxLm2ChjaBiD9taz19zAo3_W43g8="
}
```

## 原始内容

```
上传样本文件接口 /rest/openapi/gw/ad_model/v1/sample/upload curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/ad_model/v1/sample/upload' \ --header 'Access-Token: xxxxxxxxxxxx' \ --header 'Cookie: Cookie_1=value; apdid=22aa3170-fecc-4e3d-aaf3-b83825191ca119473a5d1ce8417a307644cdc2c666cd:1680154657:1; accessproxy_session=e5c8db0b-ca32-490f-a0a2-74d9178a8cd5' \ --form 'file=@"/Users/test/Documents/test.csv.zip"' \ --form 'advertiser_id="00000001"' { "code": 0, "data": { "upload_file_name": "test.zip", "token": "Cg51cGxvYWRlci50b2tlbhKLAgQ2EQ8tdql4zKud5_x3Bmx1HwK1n9CXABEirTPCkzrS3s13oNHfRrv1m8SB-awqoTH7cWoT0SMPH3zdlUYXpjAPbw0Cply8eLW7c9ZghPtArNFEyVe" }, "message": "OK", "request_id": "EMeAgICgxLm2ChjaBiD9taz19zAo3_W43g8=" } code Integer 状态码 message String 消息 data UploadGatewayResponse 返回消息体 token String token upload_file_name String 上传文件名
```
