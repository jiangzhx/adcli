---
title: 获取可选的深度转化目标
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2667&menuId=3077
doc_id: kuaishou_2667
source_id: kuaishou_2667
---
# 获取可选的深度转化目标

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2667 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:03:19.016Z |

## 概述

门槛标准： 1.应用下载类—— 1)账户维度，相应的 event_type 回传 >=1; 或 2)应用包维度，用转化追踪联调通过相应的 event_type 2.落地页类 账户维度，相应的 event_type 回传 >=1;

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/ocpx/deepTypes |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| scene_category | Integer | 是 | 0 | 场景分类 | 0=普通创编、1=追踪工具、2=常规托管、3=搜索广告 |
| campaign_type | Integer |  | 0 | 计划类型 | 在scene_category=1即追踪工具时可不填，其他场景必填。 2：提升应用安装 3：获取电商下单（提示：该营销目标将于1月4日停止新建计划， 当前阶段投放状态不受影响） 4：推广品牌活动 5：收集销售线索 7：提高应用活跃 9：商品库推广；16：粉丝/直播推广 |
| scene_ids | Integer[] |  | [1] | 资源位 | 在scene_category=1即追踪工具时可不填，其他场景必填 1：优选广告位（当账户在联盟优选白名单中且 campaign_type=2/3/5/7 时为主站&联盟优选广告位 ）；5：联盟广告；（对应DSP后台unit层级选择联盟广告位）；6：上下滑大屏广告（计划 campaignType=16 粉丝直播推广时，仅支持填写 6）；10：联盟场景 6、10 可多选;当账户在联盟优选白名单中且 campaign_type = 2/3/5/7，可传 10；当账户不在联盟优选白名单中或 campaign_type 不等于 2/3/5/7 时，不可传 10；（对应DSP后台创意层级选择联盟广告位）；24:激励视频（需要加白后可选）；27：开屏广告位（白名单功能且 splash_ad_switch 为 true 是可选）；39：搜索广告 |
| traceutil_type | Integer |  | 3 | 追踪工具类型 | 在scene_category=1即追踪工具时必填，其他场景不填 1=js、2=xpath、3=sdk、7=api、12=kwai attribution |
| app_id | Long |  | 12 | 应用id | 追踪工具类型时不需要本参数；其他类型时，本参数会决定可拉到的优化目标列表（即会融合追踪工具联调的结果） |
| hosting_scene | Integer |  | 0 | 智能托管细分场景 | 0=常规推广、1=测书工具、2=账户预热、5=最大转化 当scene_category=2时本字段可用 |
| ocpx_action_type | Integer |  | 180 | 浅度目标 | 在scene_category=1即追踪工具时不填，其他场景可填 即单元创建时的ocpx_action_type字段 |
| advertiser_id | Long | 是 | 20000654 | 广告主id | 在获取 access_token 的时候返回 |
| bid_type | Integer |  | 10 | 出价类型 | 10 - OCPM, 12 - MCB |
| site_id | Long |  | 1 | 魔力建站的页面id | 按需传入，如果是收集销售线索（campaign_type=5）这类的落地页并且使用的是魔力建站的页面，可以传入本id。此时如果页面包括了微信小程序，则可用优化目标会包括经由追踪工具的追踪小程序联调通过的小程序的目标。具体功能可见追踪工具-追踪小游戏 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/ocpx/deepTypes' \
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
    "traceutil_type": 0,
    "ocpx_action_type": 180
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | code |  |
| message | String |  | "" | message |  |
| data | DeepTypeStructForGatewayView |  | "" | 深度目标列表 |  |
| - deep_types | DeepTypeStructForGateway[] |  | "" | 深度目标列表 |  |
| - event_type | Integer |  | 3 | 深度类型 |  |
| - name | String |  | 付费 | eventType的描述 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "deep_types": [
            {
                "event_type": 3,
                "name": "付费"
            },
            {
                "event_type": 7,
                "name": "自然日次日留存"
            },
            {
                "event_type": 8,
                "name": "7日留存"
            }
        ]
    },
    "message": "OK",
    "request_id": "6ff1c93634d648dfac3c15bcebdb13bf"
}
```
