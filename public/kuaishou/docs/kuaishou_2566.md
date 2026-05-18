---
title: 修改广告计划
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2566&menuId=3289
doc_id: kuaishou_2566
source_id: kuaishou_2566
---
# 修改广告计划

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2566 |
| documentType | 2 |
| version | 0.0.3 |
| bizName | 效果广告 |
| createTime | 2025-02-20T11:51:11.509Z |

## 概述

【注】创建搜索广告计划。每个广告主账号下最多可允许创建500个计划

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/campaign/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| range_budget | Long |  |  | 周期稳投总预算 | 仅在计划的periodic_delivery_type=1时此字段生效，同时支持进行修改，只支持调高不支持调低。不支持不限/统一/分日预算填写。单位元，oCPM下至少≥2000元；MCB≥3500元。如不足则报报错，建议录入30个转化的预算或7000元以上 |
| put_status | Integer |  |  | 计划状态 | 1-投放中、2-暂停、3-删除（注：请勿使用该接口进行计划的删除，请使用「修改广告计划状态」接口）。 |
| auto_adjust | Integer |  |  | 自动调控开关 | 0：关闭，1：开启 |
| auto_build | Integer |  |  | 自动基建开关 | 0：关闭，1：开启。 |
| auto_build_name_rule | AutoBuildNameRuleParamForGateway |  |  | 自动基建广告命名规则 | 仅在 auto_build 为1时，此字段生效。在auto_build为1时，可以进行更改，开启自动基建时命名规则必填且组、创意命名规则均必须包含[日期]和[序号]宏变量 |
| - unit_name_rule | String |  |  | 单元命名规则 | 必须同时包含[日期]和[序号]宏变量，eg: 系统自动搭建_[日期][序号] |
| - creative_name_rule | String |  |  | 创意命名规则 | 必须同时包含[日期]和[序号]宏变量，eg: 系统自动搭建_[日期][序号] |
| campaign_id | Long | 是 |  | 广告计划 ID |  |
| campaign_name | String |  |  | 广告计划名称 | 长度为 1-100 个字符，计划名称不能重复 |
| cap_bid | Long |  |  | cost cap的成本约束(广告成本约束-非ROI单/双约束) | 单位：厘，范围：0~8000元，该计划下必须存在在投广告组,且在投广告组的ocpx_action_type为非ROI出价才可使用 |
| cap_roi_ratio | Double |  |  | cost cap的roi约束(广告成本约束-ROI约束) | 范围：0~100，该计划下必须存在在投广告组,且在投广告组的ocpx_action_type为ROI出价才可使用 |
| constraint_cpa | Long |  |  | 浅层成本约束(广告成本约束-非ROI双约束) | 单位：厘，范围：0~8000元，该计划下必须存在在投广告组,且在投广告组的ocpx_action_type为自然日次日留存才可使用，并且需要同时填写cap_bid字段 |
| day_budget | Long |  |  | 单日预算金额 | 单位：厘，指定 0 表示预算不限，默认为 0；不小于 500 元，不超过 100000000 元，仅支持输入数字；修改预算不得低于该计划当日花费的 120% 和修改前预算的较小者，与 day_budget_schedule 不能同时传，不能低于该计划下任一广告组出价。当 bid_type = 1时，day_budget 或者 budget_schedule 二选一必填。清空预算时传0，传null表示不更新此字段 |
| day_budget_schedule | String[] |  |  | 分日预算 | 单位：厘，指定 0 表示预算不限，默认为 0；每天不小于 500 元，不超过 100000000 元，仅支持输入数字；修改预算不得低于该计划当日花费的 120% 和修改前预算的较小者，与 day_budget 不能同时传，均不能低于该计划下任一广告组出价。清空预算时传空数组 [] ，传null表示不更新此字段 |
| auto_manage | Integer |  |  | 智投 | 0：关闭，1：开启 【注：此字段设置为开启时， 需要开启auto_adjust和auto_build 字段】 根据行业区分UAA&UAL具体详情可联系对应运营加白。周期稳投计划下不支持修改 |
| campaign_ocpx_action_type | Integer |  |  | 智投浅层优化目标 |  |
| campaign_deep_conversion_type | Integer |  |  | 智投深层优化目标 |  |
| advertiser_id | Long | 是 |  | accountId |  |

## 请求样例

### 请求样例 (jsonc)

```
{
 "advertiser_id":20007185,
 "campaign_id":2342843,
 "campaign_name":"信息类_收集线索销售0",
 "day_budget_schedule":[888000,999000,777000,666000,555000,998000,887000]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | UpdateCampaignData |  |  | 创编计划、广告组、创意返回id参数 |  |
| - campaign_id | Long |  | 1 | 广告计划id |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "campaign_id": 25134251
    },
    "request_id": "cfede2bc06ab461fb415435fc426a3e1"
}
```

## 原始内容

```
修改广告计划 /rest/openapi/gw/dsp/campaign/update { "advertiser_id":20007185, "campaign_id":2342843, "campaign_name":"信息类_收集线索销售0", "day_budget_schedule":[888000,999000,777000,666000,555000,998000,887000] } { "code": 0, "message": "OK", "data": { "campaign_id": 25134251 }, "request_id": "cfede2bc06ab461fb415435fc426a3e1" } range_budget Long 周期稳投总预算 put_status Integer 计划状态 auto_adjust Integer 自动调控开关 auto_build Integer 自动基建开关 auto_build_name_rule AutoBuildNameRuleParamForGateway 自动基建广告命名规则 unit_name_rule String 单元命名规则 creative_name_rule String 创意命名规则 campaign_id Long 广告计划 ID campaign_name String 广告计划名称 cap_bid Long cost cap的成本约束(广告成本约束-非ROI单/双约束) cap_roi_ratio Double cost cap的roi约束(广告成本约束-ROI约束) constraint_cpa Long 浅层成本约束(广告成本约束-非ROI双约束) day_budget Long 单日预算金额 day_budget_schedule String[] 分日预算 auto_manage Integer 智投 campaign_ocpx_action_type Integer 智投浅层优化目标 campaign_deep_conversion_type Integer 智投深层优化目标 advertiser_id Long accountId data UpdateCampaignData 创编计划、广告组、创意返回id参数 campaign_id Long 广告计划id code Integer 返回码 message String 返回信息
```
