---
title: 获取SDPA创意视频模板
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2734&menuId=3467
doc_id: kuaishou_2734
source_id: kuaishou_2734
---
# 获取SDPA创意视频模板

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2734 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:50:07.752Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/creative/template/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 900015391 | 账号ID |  |
| library_id | Long | 是 | 202112201878 | 商品库ID |  |
| product_id | Long |  | 156243 | 商品ID | 填写则返回"canSelect"，优先于"outer_id"生效 |
| outer_id | String |  | 6919350870610940890 | 商品第三方ID | 填写则返回"canSelect" |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 900015391,
    "library_id": 202112203923,
    "product_id": 411002,
    "outer_id": "test01",
    "page_info": {
        "page_size": 10,
        "current_page": 1
    }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回状态码 |  |
| message | String |  |  | 返回错误信息 |  |
| data | TemplateList |  |  | 视频模板信息 |  |
| - template_list | TemplateInfoSneak[] |  |  | 视频模板信息 |  |
| - template_id | Long |  | 824433492 | 模板ID |  |
| - package_id | Long |  | 1226211675 | 配置包ID |  |
| - image | String |  | https://tx-ad.a.yximgs.com/bs2/creativeCenter/0514e600-dea0-475e-8ce6-a89824f0fc90.jpg | 封面图URL |  |
| - demo_url | String |  | https://tx-ad.a.yximgs.com/bs2/creativeCenter/0514e600-dea0-475e-8ce6-a89824f0fc90.jpg | 样例视频URL |  |
| - template_type | Long |  | 1 | 模板类型：1-图片模板, 2-视频模板, 3-图片视频模板 |  |
| - can_select | Boolean |  | true | 可用状态：true-可用, false-不可用 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "template_list": [
            {
                "image": "http://blobstore-nginx.staging.kuaishou.com/bs2/creativeCenter/8beea4d1116b4279a7990a64fc7a518e.jpeg",
                "demo_url": "http://blobstore-nginx.staging.kuaishou.com/bs2/creativeCenter/83a461bae009435383fe5f78c47c136b.zip",
                "template_id": 824433492,
                "template_type": 1,
                "package_id": 455159,
                "can_select": true
            },
            {
                "image": "http://blobstore-nginx.staging.kuaishou.com/bs2/creativeCenter/97081de199ed461e8a5763826e8e9b1c.jpeg",
                "demo_url": "http://blobstore-nginx.staging.kuaishou.com/bs2/creativeCenter/7346e081cce54738b9cf8acef78bf106.zip",
                "template_id": 8010697,
                "template_type": 3,
                "package_id": 526,
                "can_select": true
            },
            {
                "image": "http://blobstore-nginx.staging.kuaishou.com/bs2/creativeCenter/04eab1dd9dac41d2b0db09322c43d4b9.jpeg",
                "demo_url": "http://blobstore-nginx.staging.kuaishou.com/bs2/creativeCenter/5049e5b515d74fd3a3b127bf4ee63b79.zip",
                "template_id": 8007665,
                "template_type": 2,
                "package_id": 509,
                "can_select": true
            }
        ],
        "page_info": {
            "total_count": 3,
            "current_page": 1,
            "page_size": 10
        }
    },
    "message": "OK",
    "request_id": "EMyAgICwtsOOrAEYhAIg-JuLu7swKPDQtpwI"
}
```
