---
title: 第一步：获取上传token
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2642&menuId=3366
doc_id: kuaishou_2642
source_id: kuaishou_2642
---
# 第一步：获取上传token

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2642 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-12-11T06:14:19.173Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/ad/common/upload/token/generate |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| file_type | String | 是 |  | 文件类型，视频文件传 "mp4"，安卓应用文件传"apk" |  |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/ad/common/upload/token/generate' \
--header 'Access-Token: xxxxxx' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": 11111,
    "file_type": "mp4"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | CommonUploadModel58Snake |  |  | JSON 返回值 |  |
| - upload_token | String |  |  | 文件上传token |  |
| - endpoint | String[] |  |  | 文件上传的域名 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK"
  	"data": {
        	"upload_token": "xxxx"
      		"endpoint": ["upload.kuaishouzt.com"]
    }
}
```
