---
title: 获取任务状态
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2928&menuId=3678
doc_id: kuaishou_2928
source_id: kuaishou_2928
---
# 获取任务状态

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2928 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:31:30.898Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/async_task/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID（注：非账户快手 ID），在获取 accessToken 时返回 |  |
| task_ids | Long[] |  |  | 任务 ID 集，不超过 10 个 |  |
| page | Integer |  |  | 页码，默认 1 |  |
| page_size | Integer |  |  | 每页行数，默认 20 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AsyncTaskListData |  |  | JSON 返回值 |  |
| - total_count | Integer |  |  | 任务总数 |  |
| - details | AsyncTaskListDetail[] |  |  | 详情 |  |
| - advertiser_id | Long |  |  | 广告主 ID |  |
| - task_id | Long |  |  | 任务 ID |  |
| - task_name | String |  |  | 任务名称 |  |
| - create_time | String |  |  | 任务创建时间 | 格式如：yyyy-MM-dd HH:mm:ss |
| - task_status | Integer |  |  | 任务状态 | 0：新建，1：处理中，2：处理成功，3：处理失败 |
| - file_size | Integer |  |  | 文件大小 | 字节数 |
