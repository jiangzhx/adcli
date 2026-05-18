---
title: 修改线索优选开关状态
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3106&menuId=3847
doc_id: kuaishou_3106
source_id: kuaishou_3106
---
# 修改线索优选开关状态

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3106 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2024-09-13T07:42:05.652Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/clueOptimize/ocpxSwitch/mod |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| clue_optimize_switch_types | ClueOptimizeSwitchModStructSnake[] | 是 |  | 线索优选开关 | 白名单可用，线索优选开关状态（表单-53，私信留资-786，添加企业微信-763） |
| - clue_optimize_type | Integer | 是 |  | 目标类型 | 表单转化-53，线索提交数-786，添加企业微信-763 |
| - status | Boolean | 是 |  | 开关状态 | true-开启，false-关闭 |
| advertiser_id | Long | 是 |  | 广告主id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | ClueOptimizeSwitchModStructSnake[] |  |  | 线索优选开关 json返回值 |  |
| - clue_optimize_type | Integer |  |  | 目标类型 | 表单转化-53，线索提交数-786，添加企业微信-763 |
| - status | Boolean |  |  | 开关状态 | true-开启，false-关闭 |
| message | String |  |  | 返回信息 |  |
| code | Integer |  |  | 返回码 |  |

## 原始内容

```
修改线索优选开关状态 /rest/openapi/gw/dsp/clueOptimize/ocpxSwitch/mod clue_optimize_switch_types ClueOptimizeSwitchModStructSnake[] 线索优选开关 clue_optimize_type Integer 目标类型 status Boolean 开关状态 advertiser_id Long 广告主id data ClueOptimizeSwitchModStructSnake[] 线索优选开关 json返回值 clue_optimize_type Integer 目标类型 status Boolean 开关状态 message String 返回信息 code Integer 返回码
```
