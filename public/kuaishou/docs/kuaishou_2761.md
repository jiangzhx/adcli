---
title: 创建投前预估任务
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2761&menuId=3498
doc_id: kuaishou_2761
source_id: kuaishou_2761
---
# 创建投前预估任务

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2761 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:16:47.370Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/pre_put/predication_task/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 1111 | 广告主id |  |
| tasks | AdPredicationTask[] | 是 | [] | 投前预估创建任务的参数 |  |
| - photo_id | String |  | 49194904380 | 视频id |  |
| - file_name | String |  | IMG_3437.mp4 | 视频文件名 |  |
| - ocpx_action_type | Long |  | 180 | 优化目标，53表示表单提交，180表示激活 |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 11440033,
    "tasks": [
        {
            "photo_id": 64312188979,
            "file_name": "测试4",
            "ocpx_action_type": 53
        }
    ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 响应状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | RealTaskResult |  |  | 投前预估创建结果 |  |
| - task_succeeded_reason_list | TaskReason[] |  | [{}] | 成功列表 |  |
| - refer_task_id | Long |  | 47494281 | 创建失败：md5重复的时候对应的任务id；创建成功：成功创建的任务id |  |
| - element_json | String |  |  | 任务的创建入参 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "task_succeeded_reason_list": [
            {
                "refer_task_id": 1123512,
                "element_json": "{"photoId":96412359598,"photoFileName":"2月14日筹码 信息.mp4","ocpxActionType":53}"
            }
        ]
    },
    "message": "OK",
    "request_id": "d1d5de0bc04c4f1da3f2a0acb946e0d4"
}
```
