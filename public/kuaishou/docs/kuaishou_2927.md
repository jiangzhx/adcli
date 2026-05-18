---
title: 创建历史数据查询任务
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2927&menuId=3677
doc_id: kuaishou_2927
source_id: kuaishou_2927
---
# 创建历史数据查询任务

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2927 |
| documentType | 2 |
| version | 0.0.3 |
| bizName | 效果广告 |
| createTime | 2025-09-10T11:49:20.699Z |

## 概述

【注】创建查询广告组、广告创意(自定义创意)、程序化创意维度的任务时不包括省心投物料

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/async_task/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主 ID（注：非账户快手 ID），在获取 accessToken 时返回 |  |
| task_name | String |  |  | 任务名称，最大不超过 50字符，不能为空；每个账户提交的任务名称不能重复 |  |
| task_params | TaskParams |  |  | 报表任务参数，详见下方 |  |
| - start_date | String | 是 |  | 查询开始日期 | 格式如：yyyy-MM-dd，时间跨度不能超过 6 个月 |
| - end_date | String | 是 |  | 查询结束日期 | 格式如：yyyy-MM-dd，不大于查询开始日期 |
| - view_type | Integer | 是 |  | 查询维度 | 1：账户维度查询，2: 广告计划维度查询，3：广告组维度查询，4：广告创意维度查询(自定义创意) 5：视频报表 报表 7：封面报表 8：便利贴报表 10：程序化创意 2.0&智能创意 报表 21：关键词报表 25：搜索词报表 |
| - campaign_ids | Long[] |  |  | 广告计划 ID 集 |  |
| - unit_ids | Long[] |  |  | 广告组 ID 集 |  |
| - word_info_ids | Long[] |  |  | 推广关键词ID集，过滤筛选条件，单次查询数量不超过 5000,推广关键词ID集可通过获取关键词列表接口获取 | 仅veiw_type=21,25可使用 |
| - query | String[] |  |  | 用户搜索词，过滤筛选条件，单次查询数量不超过5000 | 仅view_type=25可使用 |
| - creative_ids | Long[] |  |  | 广告创意 ID 集 |  |
| - photo_ids | Long[] |  |  | 视频 ID 集 | 仅 view_type=5、7、8 可使用 |
| - cover_ids | Long[] |  |  | 封面 ID 集 | 仅 view_type=5、7、8 可使用 |
| - virtual_creative_ids | Long[] |  |  | 程序化创意 ID 集 | 进行 virtual_creative_id 的筛选 |
| - report_dims | String |  |  | 投放场景 | "adScene"：按广告场景；不传/传空/传空数组：不限 |
| - temporal_granularity | String |  |  | 时间粒度 | “DAILY”：天粒度；“HOURLY”：小时粒度；默认按天粒度进行聚合 |
| - status | Integer |  |  | 状态 | 1：投放中；2：已暂停；3：已删除 |
| - selected_columns | String[] |  |  | 自定义列 | 仅view_type=21或25支持使用，支持列名及其关联字段详见：https://docs.qingque.cn/d/home/eZQB-fLBIZLvGG50L7vFkHL3J?identityId=1oE314hFZmG |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 20000681,
    "task_name": "Z异步数据指标拉齐-027",
    "task_params": {
            "start_date": "2022-02-07",
            "end_date": "2022-02-15",
            "view_type": 25,
            "query": ["无糖拿铁"],
            "temporal_granularity": "DAILY"
    }
}

{
    "advertiser_id": 20000681,
    "task_name": "Z异步数据指标拉齐-028",
    "task_params": {
            "start_date": "2022-02-07",
            "end_date": "2022-02-15",
            "view_type": 21,
            "word_info_ids": ["2800010"],
            "temporal_granularity": "DAILY"
    }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AsyncTaskCreateData |  |  | JSON 返回值 |  |
| - advertiser_id | Long |  |  | 广告主 ID |  |
| - task_id | Long |  |  | 任务 ID |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "advertiser_id": 20000681,
        "task_id": 1230104
    },
    "request_id": "a1ad2f9a5dbd4450946ad85e9f7441e1"
}
```
