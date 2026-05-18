---
title: 获取关键词导出文件
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2594&menuId=3318
doc_id: kuaishou_2594
source_id: kuaishou_2594
---
# 获取关键词导出文件

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2594 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:16:38.773Z |

## 概述

注：导出文件有效期30天，过期自动删除

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/search/keyword/file/query |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 0 | 广告主账号ID |  |
| file_id | Long | 是 | 0 | 文件ID |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 900015364,
    "file_id": 5
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 响应状态码 |  |
| data | SearchKeywordExportFileInfoSnake |  |  | 文件信息 |  |
| - file_id | Long |  | 0 | 文件ID |  |
| - file_status | Integer |  | 0 | 文件状态 | 0-未知，1-生成中，2-生成成功，3-导出失败，4-上传失败 |
| - file_url | String |  |  | 文件地址 |  |
| - file_update_time | Long |  | 0 | 文件更新时间 | 毫秒时间戳 |
| message | String |  |  | 错误信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "file_url": "https://xxx.kuaishou.com/bs2/ad-dsp-search-keyword-export-file/900015364_0_0_1651374348000_1651979148000.csv",
        "file_status": 2,
        "file_id": 5,
        "file_update_time": 1676950815824
    },
    "message": "OK",
    "request_id": "EMqAgICQ5JmOrAEY5wIg9uj7kOcwKOSDtckN"
}
```
