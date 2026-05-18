---
title: 获取种子人群包列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2675&menuId=3409
doc_id: kuaishou_2675
source_id: kuaishou_2675
---
# 获取种子人群包列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2675 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:07:06.985Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/population/seed/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| name | String |  |  | 人群包名称 |  |
| advertiser_id | Long |  |  | 账户ID |  |

## 请求样例

### 请求样例 (jsonc)

```
{

"advertiser_id":138234

}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 响应码 |  |
| message | String |  |  | 响应信息 |  |
| data | SeedPopulationResult |  |  | 结果集 |  |
| - list | SeedPopulationView[] |  |  | 种子人群包列表 |  |
| - id | Long |  |  | 种子人群包ID |  |
| - name | String |  |  | 种子人群包名称 |  |
| - account_id | Long |  |  | 账户ID |  |
| - population_type | String |  |  | 人群包类型名 |  |
| - record_size | Long |  |  | 上传数量 |  |
| - match_size | Long |  |  | 匹配数量 |  |
| - cover_num | Long |  |  | 覆盖人群 |  |
| - status | Integer |  |  | 状态 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "list": [
            {
                "account_id": 138234,
                "match_size": 553453,
                "name": "dmp-2022-ios-31",
                "record_size": 267332,
                "id": 114523017,
                "cover_num": 624458,
                "population_type": "上传人群",
                "status": 4
            }
```
