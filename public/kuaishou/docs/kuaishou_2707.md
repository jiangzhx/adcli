---
title: 图文音频文件上传
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2707&menuId=3070
doc_id: kuaishou_2707
source_id: kuaishou_2707
---
# 图文音频文件上传

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2707 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:41:02.265Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/upload/atlasAudioFile |
| httpMethod | POST |
| httpContentType | FORM |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| file | File | 是 |  | 占位符，请添加参数 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/upload/atlasAudioFile' \
--header 'Access-Token: d5a5e11a297dd4a7ff29a356d68aa228' \
--form 'file=@"/Users/heran03/Downloads/图片库/audio_1.mp4"' \
--form 'advertiser_id="12078245"'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | FileUploadResponseSnake |  |  | 请补充描述详情 |  |
| - blob_store_key | String |  |  | 请补充描述详情 |  |
| - bucket_name | String |  |  | 请补充描述详情 |  |
| message | String |  |  | 请补充描述详情 |  |
| code | Integer |  |  | 请补充描述详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "blob_store_key": "bbe4752a305d47d5949814d4cebf9445"
    },
    "message": "OK",
    "request_id": "ELyAgIDg4YmxChjaAiCMitDDsjEorPSUoAM="
}
```
