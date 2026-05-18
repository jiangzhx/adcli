---
title: 获取线索优选开关状态
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3105&menuId=3846
doc_id: kuaishou_3105
source_id: kuaishou_3105
---
# 获取线索优选开关状态

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3105 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2024-09-13T07:36:24.833Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/clueOptimize/ocpxSwitch |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | ClueOptimizeSwitchViewStructSnake[] |  |  | 返回数据：可用线索优选目标 |  |
| - clue_optimize_switch | Integer |  |  | 线索优选开关类型 | 表单-53，私信留资-786，添加企业微信-763 |
| - name | String |  |  | 线索优选开关名字 | 表单-53，私信留资-786，添加企业微信-763 |
| - status | Boolean |  |  | 开关状态 | true-开启，false-关闭 |
| message | String |  |  | 返回信息 |  |
| code | Integer |  |  | 返回码 |  |

## 原始内容

```
获取线索优选开关状态 /rest/openapi/gw/dsp/clueOptimize/ocpxSwitch advertiser_id Long 广告主id data ClueOptimizeSwitchViewStructSnake[] 返回数据：可用线索优选目标 clue_optimize_switch Integer 线索优选开关类型 name String 线索优选开关名字 status Boolean 开关状态 message String 返回信息 code Integer 返回码
```
