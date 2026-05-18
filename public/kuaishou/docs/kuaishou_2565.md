---
title: 创建广告计划
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2565&menuId=3288
doc_id: kuaishou_2565
source_id: kuaishou_2565
---
# 创建广告计划

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2565 |
| documentType | 2 |
| version | 0.0.7 |
| bizName | 效果广告 |
| createTime | 2026-04-01T07:52:51.491Z |

## 概述

【注】创建搜索广告计划。每个广告主账号下最多可允许创建500个计划

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/campaign/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| smart_material_supply | Integer |  |  | 智能素材补充开关 |  |
| put_status | Integer |  | 2 | 投放状态，1=投放中；2=暂停投放 | 投放状态，1=投放中（默认值）；2=暂停投放。本接口不支持传入除1、2之外的枚举值。不是所有营销目标都支持创建暂停态的投放物料，具体可咨询运营同学或遇到报错后反馈。请注意，当使用了周期稳投功能（periodic_delivery_type=1）时，不支持创建暂停态的物料。 |
| periodic_delivery_type | Integer |  |  | 周期稳投开关 | 0-关闭，1-开启。不设置默认为关闭。周期稳投功能需要联系产运加白才可使用。周期稳投计划下仅支持广告主创建一个广告组 |
| range_budget | Long |  |  | 周期总预算 | 单位：厘；仅在计划的periodic_delivery_type=1时生效，同时支持进行修改，只能增高不支持降低。不低于3500元且不超过100000元。不支持不限/统一/分日预算填写。单位元，oCPM下至少≥2000元；MCB≥3500元。如不足则报报错，建议录入30个转化的预算或7000元以上。周期总预算填写后，不支持客户填写 day_budget 和 day_budget_schedule |
| continue_period_type | Integer |  |  | 周期稳投续投开关 | 仅在periodic_delivery_type=1时生效，可修改。1-关闭，2-开启。开启周期稳投条件下，如果不设置默认为开启。 |
| periodic_days | Integer |  |  | 投放周期 | 默认值为7天；加白后支持选择为5天 |
| ad_type | Integer |  |  | 广告计划类型 | 0:信息流，1:搜索；不填默认信息流 |
| auto_adjust | Integer |  |  | 自动调控开关 | 0：关闭，1：开启 |
| bid_type | Integer |  |  | 出价类型 | 0:默认1:最大转化（添加后不可修改） |
| campaign_name | String | 是 |  | 广告计划名称 | 长度为 1-100 个字符，同一个账号下面计划名称不能重复 |
| day_budget | Long |  |  | 单日预算金额 | 单位：厘，指定 0 表示预算不限，默认为 0；不小于 500 元，不超过 100000000 元，仅支持输入数字；修改预算不得低于该计划当日花费的 120% 和修改前预算的较小者，与 day_budget_schedule 不能同时传，不能低于该计划下任一广告组出价。当 bid_type = 1时，day_budget 或者 budget_schedule 二选一必填 |
| day_budget_schedule | Long[] |  |  | 分日预算 | 单位：厘，指定 0 表示预算不限，默认为 0；每天不小于 500 元，不超过 100000000 元，仅支持输入数字；修改预算不得低于该计划当日花费的 120% 和修改前预算的较小者，与 day_budget 不能同时传，均不能低于该计划下任一广告组出价。事例：时间周期为周一到周日，样例："day_budget_schedule":[11110000,22220000,0,0,0,0,0]，优先级高于day_budget。当 bid_type = 1时，day_budget 或者 budget_schedule 二选一必填 |
| type | Integer | 是 |  | 营销目标类型 | 2：提升应用安装；3：获取电商下单(2024年5月20日已下线，禁止新建)；4：推广品牌活动；5：收集销售线索；7：提高应用活跃；9：商品库推广（此营销目标下创建的默认为DPA广告）；16：粉丝/直播推广；19：快手小程序/小游戏推广；30：快手号-短剧推广；32：微信小程序/小游戏推广；34: 快手号-小说推广；35：电商下单推广。周期稳投计划仅支持[5、24、35、2、7] |
| advertiser_id | Long | 是 |  | 账号id | 账号ID，在获取 access_token 的时候返回 |
| auto_build | Integer |  |  | 自动基建 | 0：关闭，1：开启 |
| auto_build_name_rule | AutoBuildNameRuleParamForGateway |  |  | 自动基建命名规则 | 仅在auto_build为1时，此字段生效，开启自动基建时必填命名规则，组、创意命名规则均必须同时包含[日期]和[序号]宏变量【注：白名单功能】 |
| - unit_name_rule | String |  |  | 单元命名规则 | 必须同时包含[日期]和[序号]宏变量，eg: 系统自动搭建_[日期][序号] |
| - creative_name_rule | String |  |  | 创意命名规则 | 必须同时包含[日期]和[序号]宏变量，eg: 系统自动搭建_[日期][序号] |
| cap_roi_ratio | Double |  |  | ROI约束 | 默认0表示“不限”，新建计划时仅支持“不限”，当计划下存在广告组选择ROI出价，编辑时支持修为该约束 |
| cap_bid | Long |  |  | Cost Cap的成本约束 | 默认0表示“不限”，新建计划时仅支持“不限”，当计划下存在广告组选择非ROI出价，编辑时支持修为该约束 |
| constraint_cpa | Long |  |  | 浅层约束目标的成本 | 默认0表示“不限”，新建计划时仅支持“不限”，当计划下存在广告组选择自然日次日留存，编辑时支持修为该约束 |
| auto_manage | Integer |  | - | 智能投放开关 | 0：关闭，1：开启 【注：此字段设置为开启时， 需要开启auto_adjust和auto_build 字段】 。周期稳投开启的情况下，需要开启全自动auto_manage=1 |
| auto_photo_scope | Integer |  | - | 基建素材选取范围 | 0：系统优选，系统根据历史数据挑选效果最优视频，1-素材包，系统将挑选您配置的素材包内的视频 |
| photo_package_info | Long[] |  | - | 素材包ID | 素材包ID，当auto_photo_scope=1时必填 |
| periodic_delivery_put_type | Integer |  |  | 夜间投放标识 | 在periodic_delivery_type=1开启周期稳投时，传 2-夜间稳投，不传表示常规稳投 |

## 请求样例

### 请求样例 (jsonc)

```
{
 "advertiser_id":20007185,
 "campaign_name":"信息类_收集线索销售0",
 "ad_type":1,
 "type":5,
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
创建广告计划 /rest/openapi/gw/dsp/campaign/create { "advertiser_id":20007185, "campaign_name":"信息类_收集线索销售0", "ad_type":1, "type":5, "day_budget_schedule":[888000,999000,777000,666000,555000,998000,887000] } { "code": 0, "message": "OK", "data": { "campaign_id": 25134251 }, "request_id": "cfede2bc06ab461fb415435fc426a3e1" } smart_material_supply Integer 智能素材补充开关 put_status Integer 投放状态，1=投放中；2=暂停投放 periodic_delivery_type Integer 周期稳投开关 range_budget Long 周期总预算 continue_period_type Integer 周期稳投续投开关 periodic_days Integer 投放周期 ad_type Integer 广告计划类型 auto_adjust Integer 自动调控开关 bid_type Integer 出价类型 campaign_name String 广告计划名称 day_budget Long 单日预算金额 day_budget_schedule Long[] 分日预算 type Integer 营销目标类型 advertiser_id Long 账号id auto_build Integer 自动基建 auto_build_name_rule AutoBuildNameRuleParamForGateway 自动基建命名规则 unit_name_rule String 单元命名规则 creative_name_rule String 创意命名规则 cap_roi_ratio Double ROI约束 cap_bid Long Cost Cap的成本约束 constraint_cpa Long 浅层约束目标的成本 auto_manage Integer 智能投放开关 auto_photo_scope Integer 基建素材选取范围 photo_package_info Long[] 素材包ID periodic_delivery_put_type Integer 夜间投放标识 data UpdateCampaignData 创编计划、广告组、创意返回id参数 campaign_id Long 广告计划id code Integer 返回码 message String 返回信息
```
