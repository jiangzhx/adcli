---
title: 隐藏视频同步个人主页
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2699&menuId=3434
doc_id: kuaishou_2699
source_id: kuaishou_2699
---
# 隐藏视频同步个人主页

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2699 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:23:02.056Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/photo/pushToProfile |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| photo_ids | String | 是 | 1,2,3,4 | 视频ID 英文逗号隔开 |  |
| advertiser_id | Long | 是 |  | advertiser_id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
  "advertiser_id": "7869843",
  "photo_ids":"5234590257606454449,5244160403187106228,5197717034195986380"
  ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 结果 | 0-成功 非0-失败 |
| message | String |  | "OK" | 失败原因 |  |
| data | PhotoUploadProfileResultSnake |  |  | 同步结果 |  |
| - success_count | Integer |  |  | 成功个数 |  |
| - fail_count | Integer |  |  | 失败个数 |  |
| - fail_details | FailPhotoDetailSnake[] |  |  | 失败具体原因 |  |
| - photo_id | String |  |  | 失败视频ID 字符串类型 |  |
| - author_id | Long |  |  | 作者ID |  |
| - photo_name | String |  |  | 视频名称 |  |
| - reason | String |  |  | 同步失败具体原因描述 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code":0,
    "data":{
        "fail_details":[
            {
                "reason":"视频已经在个人主页",
                "photo_name":"这是我的视频.mp4",
                "photo_id":"5197717034195986380",
                "author_id":1743291153
            }
        ],
        "success_count":2,
        "fail_count":1
    },
    "message":"OK",
    "request_id":"EO60gICQgpGOChiwByDan-DAqzEooues3wI="
}
```
