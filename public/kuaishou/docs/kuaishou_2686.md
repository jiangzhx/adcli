---
title: 定向模板同步
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2686&menuId=3420
doc_id: kuaishou_2686
source_id: kuaishou_2686
---
# 定向模板同步

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2686 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T02:41:54.746Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/target/template/unit_sync |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| sync_unit_ids | String[] |  |  | 同步的广告组ID列表 |  |
| sync_unit_type | Integer | 是 |  | 同步模式 | 1：同步定向模板关联的所有广告组，此时sync_unit_ids应该为空或者不传；2：同步到定向模板下指定的部分广告组，此时sync_unit_ids应该有值；3：同步到定向模板下的排除掉 sync_unit_ids 列表中的所有广告组。当 sync_unit_type = 2/3 时，对应的 sync_unit_ids 字段可从接口「/rest/openapi/gw/dsp/target/template/related_unit_list」获取相关联的广告组ID |
| template_id | Long | 是 |  | 模板ID |  |

## 请求样例

### 请求样例 (jsonc)

```
{
  "sync_unit_type": 1,
  "template_id": 213123
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | TemplateSyncRespSnake |  |  | 返回的json数据 |  |
| - async_task | Boolean |  |  | 是否是异步任务 |  |
| - has_task | Boolean |  |  | 是否存在同步任务 | 仅当模板同步时同步到的广告组为空时，该字段为 true |
| - in_time | Boolean |  |  | 请补充描述详情 |  |
| - task_id | Long |  |  | 同步的任务ID | 返回的 task_id 可根据接口 「/rest/openapi/gw/dsp/target/template/sync_history」查询相关的同步详情 |
| - template_id | Long |  |  | 同步的模板ID |  |
| - unit_error_count | Integer |  |  | 同步失败的广告组数量 | 仅同步任务时会返回此字段 |
| - unit_success_count | Integer |  |  | 同步成功的广告组数据 | 仅同步任务时会返回此字段 |
| message | String |  |  | 错误详情 |  |
| code | Integer |  |  | 返回码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "unit_error_count": null,
        "async_task": true,
        "template_id": 3102,
        "task_id": 204572,
        "unit_success_count": null,
        "has_task": true
    },
    "message": "OK",
    "request_id": "EMyAgICw0JiOrAEY3wIg2aeu7-YwKMmZ_ZEM"
}
```
