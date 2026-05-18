---
title: 批量模板合成SDPA创意视频
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2735&menuId=3468
doc_id: kuaishou_2735
source_id: kuaishou_2735
---
# 批量模板合成SDPA创意视频

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2735 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:50:24.941Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/creative/video/generate |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 900015391 | 账号ID |  |
| library_id | Long | 是 | 202112201878 | 商品库ID |  |
| product_id | Long |  | 156243 | 商品ID | (优先于"outer_id"生效)与"outer_id"至少必填其一 |
| outer_id | String |  | 6919350870610940890 | 商品第三方ID | 与"product_id"至少必填其一 |
| templates | TemplateSneak[] | 是 | { "templateId": 590566, "packageId": 163 } | 视频模板信息(模板ID+配置包ID) |  |
| - template_id | Long | 是 | 590566 | 模板ID |  |
| - package_id | Long | 是 | 163 | 配置包ID |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 900015391,
    "library_id": 202112203923,
    "product_id": 411002,
    "outer_id": "test01",
    "templates": [
        {
            "template_id": 824433492,
            "package_id": 455159
        },
        {
            "template_id": 8010697,
            "package_id": 526
        },
        {
            "template_id": 8007665,
            "package_id": 509
        }
    ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回状态码 |  |
| message | String |  |  | 返回提示信息 |  |
| data | GeneratedVideoInfoList |  |  | 合成视频信息 |  |
| - video_infos | GenerateVideoResultSneak[] |  |  | 视频信息列表 |  |
| - photo_id | Long |  | 253937 | Photo ID |  |
| - template_id | Long |  | 590566 | 模板ID |  |
| - product_id | Long |  | 156243 | 商品ID |  |
| - outer_id | String |  | 6919350870610940890 | 商品第三方ID |  |
| - product_name | String |  | Gap男童直筒运动短裤方法682045 2022春12季新款童装帅气速干裤工装裤 | 商品名称 |  |
| - video_url | String |  | https://kcdn.staging.kuaishou.com/bs2/ad-procedural-creative/af6439a911284185ba0430e309d78f77.mp4 | 视频URL |  |
| - code | String |  | null | 失败状态码 |  |
| - message | String |  | null | 失败信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "video_infos": [
            {
                "video_url": "https://kcdn.staging.kuaishou.com/bs2/ad-procedural-creative/e8adb0efed094d2c92a87c45a45d0bd1.mp4",
                "code": null,
                "photo_id": 282409,
                "product_id": 411002,
                "template_id": 824433492,
                "message": null,
                "product_name": "模板合成视频",
                "outer_id": "test01"
            },
            {
                "video_url": "https://kcdn.staging.kuaishou.com/bs2/ad-procedural-creative/4b2b87d5b65f43e9a1b2c5080dca1bdc.mp4",
                "code": null,
                "photo_id": 282410,
                "product_id": 411002,
                "template_id": 8010697,
                "message": null,
                "product_name": "模板合成视频",
                "outer_id": "test01"
            },
            {
                "video_url": "https://kcdn.staging.kuaishou.com/bs2/ad-procedural-creative/63b08d2982cc47509a9e704921fc489f.mp4",
                "code": null,
                "photo_id": 282411,
                "product_id": 411002,
                "template_id": 8007665,
                "message": null,
                "product_name": "模板合成视频",
                "outer_id": "test01"
            }
        ]
    },
    "message": "OK",
    "request_id": "EMyAgICwtsOOrAEYgwIggauYu7swKLOAoB0="
}
```
