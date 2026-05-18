---
title: 查询待升级模板
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2690&menuId=3424
doc_id: kuaishou_2690
source_id: kuaishou_2690
---
# 查询待升级模板

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2690 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-06-27T09:40:50.171Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/target/template/upgrade_list |
| httpMethod | POST |
| httpContentType | JSON |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | SmartAffectTemplateResp831Snake457[] |  |  | 返回json |  |
| - target_changed_vo | TargetChangedVO996Snake492 |  |  | 模板升级详情 |  |
| - behavior_interest | Boolean |  |  | 行为意向是否发生变更 | true 表示行为意向之前有值被清空 |
| - celebrity | Boolean |  |  | 快手网红是否发生变更 | true 表示快手网红之前有值被清空 |
| - intelli_extend_option | Boolean |  |  | 智能定向是否发生变更 | true 表示智能定向被打开 |
| - template_id | Long |  |  | 模板ID |  |
| - template_name | String |  |  | 模板名称 |  |
| - unit_count | Long |  |  | 关联的广告组数量 |  |
| message | String |  |  | 返回详情 |  |
| code | Integer |  |  | 错误码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": [
        {
            "template_name": "123123123",
            "template_id": 4178,
            "unit_count": 1
        }
    ],
    "message": "OK",
    "request_id": "EMOAgIDAwpiOrAEY4gIghp-a5eYwKPrEmdIC"
}
```

## 原始内容

```
查询待升级模板 /rest/openapi/gw/dsp/target/template/upgrade_list { "code": 0, "data": [ { "template_name": "123123123", "template_id": 4178, "unit_count": 1 } ], "message": "OK", "request_id": "EMOAgIDAwpiOrAEY4gIghp-a5eYwKPrEmdIC" } data SmartAffectTemplateResp831Snake457[] 返回json target_changed_vo TargetChangedVO996Snake492 模板升级详情 behavior_interest Boolean 行为意向是否发生变更 celebrity Boolean 快手网红是否发生变更 intelli_extend_option Boolean 智能定向是否发生变更 template_id Long 模板ID template_name String 模板名称 unit_count Long 关联的广告组数量 message String 返回详情 code Integer 错误码
```
