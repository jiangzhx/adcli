---
title: 获取可选的浅度转化目标
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2668&menuId=3400
doc_id: kuaishou_2668
source_id: kuaishou_2668
---
# 获取可选的浅度转化目标

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2668 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-09-04T11:08:24.331Z |

## 概述

门槛标准： 1.应用下载类—— 1)账户维度，相应的 event_type 回传 >=1; 或 2)应用包维度，用转化追踪联调通过相应的 event_type 2.落地页类 账户维度，相应的 event_type 回传 >=1; 提示：返回列表的ocpx_action_type，即用户此种传参下可用优化目标。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/ocpx/ocpxTypes |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| book_pay_mode | Integer |  |  | 小说付费模式 | 按需传入 "1"："全文付费"，"2"："全文付费+章节付费"，"3"："免费" |
| series_pay_mode | Integer |  |  | 短剧付费模式 |  |
| periodic_delivery_type | Integer |  |  | 是否稳投为稳投计划 |  |
| plc_biz_type | Integer |  |  | 快手号营销目标-线索留资-推广目标-组件类型 |  |
| schema_uri | String |  |  | - |  |
| uri | String |  |  | api转化追踪增加参数 |  |
| live_component_type | Integer |  |  | 直播组件类型 |  |
| ocpx_action_type | Integer |  |  | - |  |
| im_message_mount | Boolean |  |  | 是否挂载私信收集组件 |  |
| scene_category | Integer | 是 | 0 | 场景分类 | 0=普通创编、1=追踪工具、2=常规托管（智能模式）、3=搜索广告 |
| campaign_type | Integer |  | 2 | 计划类型 | 在scene_category=1即追踪工具时可不填，其他场景必填 |
| scene_ids | Integer[] |  | [1] | 资源位 | 在scene_category=1即追踪工具时可不填，其他场景必填。 |
| traceutil_type | Integer |  | 1 | 追踪工具类型 | 在scene_category=1即追踪工具时必填，其他场景不填 1=js、2=xpath、3=sdk、7=api、12=kwai attribution |
| app_id | Long |  | 12 | 应用id | 追踪工具类型时不需要本参数；其他类型时，本参数会决定可拉到的优化目标列表（即会融合追踪工具联调的结果） |
| hosting_scene | Integer |  | 0 | 追踪工具类型 | 当scene_category=2时本字段可用 0=常规推广、1=测书工具、2=账户预热、5=最大转化 |
| advertiser_id | Long | 是 | 20000654 | 广告主id | 在获取 access_token 的时候返回 |
| bid_type | Integer |  | 1 | 出价类型 | 当scene_category=0时本字段可用 10=ocpm12=mcb（计划层级选择最大转化类型时） |
| site_id | Long |  | 1 | 建站id | 按需传入，如果是收集销售线索（campaign_type=5）这类的落地页并且使用的是魔力建站的页面，可以传入本id。此时如果页面包括了微信小程序，则可用优化目标会包括经由追踪工具的追踪小程序联调通过的小程序的目标。具体功能可见追踪工具-追踪小游戏 |
| unit_material_type | Integer |  | 1 | 单元组件类型 | 按需传入，1=快手小程序、2=快手小游戏、3=微信小程序；4=微信小游戏 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/ocpx/ocpxTypes' \
--header 'Content-Type: application/json;charset=UTF-8' \
--header 'Access-Token: b191e15b467e4771d22ef1beba72abe4' \
--data-raw '{
    "advertiser_id": 20000654,
    "scene_category": 0,
    "campaign_type": 2,
    "scene_ids": [
        6
    ],
    "app_id": 0,
    "traceutil_type": 0
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | code |  |
| message | String |  | "" | message |  |
| data | OcpxActionTypeStructForGatewayView |  |  | 优化目标列表视图 |  |
| - ocpx_types | OcpxActionTypeStructForGateway[] |  |  | 优化目标列表 |  |
| - ocpx_action_type | Integer |  | 2 | 优化目标的id数字 |  |
| - name | String |  | 行为数 | ocpxActionType的中文描述 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "ocpx_types": [
            {
                "name": "行为数",
                "ocpx_action_type": 2
            },
            {
                "name": "激活",
                "ocpx_action_type": 180
            },
            {
                "name": "付费",
                "ocpx_action_type": 190
            },
            {
                "name": "首日ROI（24h）",
                "ocpx_action_type": 191
            }
        ]
    },
    "message": "OK",
    "request_id": "1efffed1b47c428cb6bfd322613c8b23"
}
```

## 原始内容

```
获取可选的浅度转化目标 /rest/openapi/gw/dsp/v1/ocpx/ocpxTypes curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/ocpx/ocpxTypes' \ --header 'Content-Type: application/json;charset=UTF-8' \ --header 'Access-Token: b191e15b467e4771d22ef1beba72abe4' \ --data-raw '{ "advertiser_id": 20000654, "scene_category": 0, "campaign_type": 2, "scene_ids": [ 6 ], "app_id": 0, "traceutil_type": 0 }' { "code": 0, "data": { "ocpx_types": [ { "name": "行为数", "ocpx_action_type": 2 }, { "name": "激活", "ocpx_action_type": 180 }, { "name": "付费", "ocpx_action_type": 190 }, { "name": "首日ROI（24h）", "ocpx_action_type": 191 } ] }, "message": "OK", "request_id": "1efffed1b47c428cb6bfd322613c8b23" } im_message_mount Boolean 是否挂载私信收集组件 scene_category Integer 场景分类 campaign_type Integer 计划类型 scene_ids Integer[] 资源位 traceutil_type Integer 追踪工具类型 app_id Long 应用id hosting_scene Integer 追踪工具类型 advertiser_id Long 广告主id bid_type Integer 出价类型 site_id Long 建站id unit_material_type Integer 单元组件类型 code Integer code message String message data OcpxActionTypeStructForGatewayView 优化目标列表视图 ocpx_types OcpxActionTypeStructForGateway[] 优化目标列表 ocpx_action_type Integer 优化目标的id数字 name String ocpxActionType的中文描述
```
