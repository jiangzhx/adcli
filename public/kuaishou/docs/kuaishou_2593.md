---
title: 批量导出关键词
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2593&menuId=3317
doc_id: kuaishou_2593
source_id: kuaishou_2593
---
# 批量导出关键词

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2593 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:16:13.794Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/search/keyword/file/export |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 0 | 广告主账号ID |  |
| campaign_id | Long |  | 0 | 计划ID |  |
| unit_id | Long |  | 0 | 单元ID |  |
| start_time | Long | 是 | 0 | 起始时间 | 关键词创建时间(毫秒时间戳)注：起始～截止时间跨度不超过180天 |
| end_time | Long | 是 | 0 | 截止时间 | 关键词创建时间(毫秒时间戳)注：起始～截止时间跨度不超过180天 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 900015071,
    "start_time": 1675094400000,
    "end_time": 1675180800000
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 响应状态码 |  |
| data | SearchKeywordExportFileInfo |  | 0 | 文件信息 |  |
| - file_id | Long |  | 0 | 文件ID |  |
| message | String |  |  | 错误信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "file_id": 2
    },
    "message": "OK",
    "request_id": "EMOAgIDAwpiOrAEY5QIgzbCizeYwKPH_9M0E"
}
```
