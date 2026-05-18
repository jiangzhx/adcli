---
title: 上传图片
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2767&menuId=3503
doc_id: kuaishou_2767
source_id: kuaishou_2767
---
# 上传图片

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2767 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-11-06T04:02:33.096Z |

## 概述

应用中心的应用图标、应用图片由于投放侧要求，必须使用快手的CDN链接，此接口适用于将广告主的原始图片上传至快手侧，生成快手的CDN下载链接，用于应用中心的创编。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/upload/pic |
| httpMethod | POST |
| httpContentType | FORM |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| file | File | 是 | file | 图片文件 |  |
| type | Integer | 是 | 1 | 图片类型：1=应用图标；2=应用图片；5=单机承诺函；6=APP备案截图；7=备案主体营业执照图片 | 应用图标：尺寸：450 x 450，小于1MB；格式为 PNG/JPG/JPEG。应用图片：宽高比9:20，宽：大于等于720，高：大于等于1280，小于2 MB；格式为 PNG/JPG/JPEG。单机承诺函：小于10MB；格式为 PNG/JPG/JPEG。 |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.kuaishou.com/rest/openapi/gw/dsp/appcenter/upload/pic' \
--header 'Access-Token: 55805d49f17e961b239468479f66672d' \
--form 'file=@"450*450.png"' \
--form 'advertiser_id="900015366"' \
--form 'type="1"'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | UploadPictureResponse |  |  | 返回数据 |  |
| - url | String |  |  | 所上传图片的快手CDN链接 |  |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 状态描述信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "url": "http://blobstore-nginx.staging.kuaishou.com/udata/pkg/3252058c79ec40069cdeafb08cfd3b92.png"
    },
    "message": "OK"
}
```

## 原始内容

```
上传图片 /rest/openapi/gw/dsp/appcenter/upload/pic curl --location 'https://ad.kuaishou.com/rest/openapi/gw/dsp/appcenter/upload/pic' \ --header 'Access-Token: 55805d49f17e961b239468479f66672d' \ --form 'file=@"450*450.png"' \ --form 'advertiser_id="900015366"' \ --form 'type="1"' { "code": 0, "data": { "url": "http://blobstore-nginx.staging.kuaishou.com/udata/pkg/3252058c79ec40069cdeafb08cfd3b92.png" }, "message": "OK" } advertiser_id Long 广告主id file File 图片文件 type Integer 图片类型：1=应用图标；2=应用图片, 5=单机承诺函,6=APP备案截图,7=备案主体营业执照图片 data UploadPictureResponse 返回数据 url String 所上传图片的快手CDN链接 code Integer 状态码 message String 状态描述信息
```
