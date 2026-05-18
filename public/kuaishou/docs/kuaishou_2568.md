---
title: 查询广告计划
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2568&menuId=3290
doc_id: kuaishou_2568
source_id: kuaishou_2568
---
# 查询广告计划

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2568 |
| documentType | 2 |
| version | 0.0.5 |
| bizName | 效果广告 |
| createTime | 2026-04-01T07:55:18.366Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/campaign/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| ad_type | Integer |  |  | 请补充描述详情 |  |
| campaign_id | Long |  |  | 广告计划 ID | 过滤筛选条件，若不传或传空则视为无限制条件 |
| campaign_ids | Long[] |  |  | 广告计划Id集 | 不超200个 |
| campaign_name | String |  |  | 计划名称 | 过滤筛选条件，若不传或传空则视为无限制条件 |
| campaign_type | Integer |  |  | 请补充描述详情 |  |
| end_date | String |  |  | 结束时间 | 与 start_date 同时传或同时不传；过滤筛选条件，格式为"yyyy-MM-dd"，参数值对应 update_time 信息 |
| page | Integer |  |  | 请求的页码数 | 默认为 1 |
| page_size | Integer |  |  | 请求的每页行数 | 默认为 20 |
| put_status_list | Integer[] |  |  | 计划投放状态筛选 | 1：投放；2：暂停；3：删除。备注：备注：传了该参数会覆盖status参数筛选，因为二者是相同筛选项 |
| start_date | String |  |  | 开始时间 | 与 end_date 同时传或同时不传；过滤筛选条件，格式为"yyyy-MM-dd"，参数值对应 update_time 信息 |
| status | Integer |  |  | 计划状态 | 过滤筛选条件；1：广告计划已暂停；4：有效；5：广告计划已删除； -2 不限 |
| time_filter_type | Integer |  |  | 按创建时间，还是更新时间进行筛选 | 1.如传入此字段时不传"start_date"，与"end_date"字段，则不根据时间筛选。2.传入"start_date"，与"end_date"字段，且此字段为 1 时，按照创建时间进行筛选。3.传入"start_date"，与"end_date"字段，此字段不传，或传值为 0 时，则按照更新时间进行筛选 |
| advertiser_id | Long | 是 |  | 广告主id | 在获取 access_token 的时候返回 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id":20007185,
    "campaign_id":227785633
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AdMarketCampaignView |  |  | 返回数据 |  |
| - details | Details152[] |  | [{}] | 结果详情 |  |
| - campaign_name | String |  | market api测试计划-1262 | 计划名称 |  |
| - update_time | String |  | 2021-10-19 18:22:31 | 更新时间 |  |
| - ad_type | Integer |  | 0 | 计划类型 | `0：信息流，1：搜索 |
| - create_time | String |  | 2021-10-19 18:22:31 | 创建时间 |  |
| - campaign_type | Integer |  | 2 | 计划类型 |  |
| - campaign_sub_type | Integer |  | 0 | 计划子类型 | 商品库推广计划类型的老数据会返回【后续会进行下线】。4：DPA，5：SDPA |
| - put_status | Integer |  | 1 | 计划状态 | 1：投放中；2：暂停 3：删除 |
| - campaign_id | Long |  | 24961423 | 计划ID |  |
| - status | Integer |  | 6 | 计划状态 | 1：广告计划已暂停；3：广告计划超预算；4：有效；5：广告计划已删除；6：账户余额不足； -2：不限 |
| - day_budget_schedule | Long[] |  | 12345 | 分日预算 | 优先级高于day_budget |
| - day_budget | Long |  | 0 | 单日预算金额 |  |
| - bid_type | Integer |  | 1 | 出价类型 |  |
| - constraint_action_type | Integer |  | 1 | 浅层约束目标`0：无；1：千次曝光；2：点击；53：表单；180：激活；190：付费；191：ROI |  |
| - constraint_cpa | Long |  | 10000 | 浅层成本约束(广告成本约束-非ROI双约束) | 单位：厘，范围：0~8000元 |
| - auto_adjust | Integer |  |  | 自动调控开关 | 0:关闭，1:开启 |
| - auto_build | Integer |  |  | 自动基建开关 | 0:关闭，1:开启 |
| - auto_build_name_rule | AutoBuildNameRuleParamForGateway |  |  | 自动基建命名规则 |  |
| - unit_name_rule | String |  |  | 单元命名规则 | 必须同时包含[日期]和[序号]宏变量，eg: 系统自动搭建_[日期][序号] |
| - creative_name_rule | String |  |  | 创意命名规则 | 必须同时包含[日期]和[序号]宏变量，eg: 系统自动搭建_[日期][序号] |
| - dsp_version | Integer |  |  | 版本 |  |
| - auto_manage | Integer |  |  | 智投 | 0:关闭，1:开启 |
| - campaign_ocpx_action_type | Integer |  |  | 智能模式下的优化目标 |  |
| - campaign_ocpx_action_type_name | String |  |  | 智投计划优化目标名称 |  |
| - campaign_deep_conversion_type | Integer |  |  | 智投计划深度优化目标 |  |
| - campaign_deep_conversion_type_name | String |  |  | 智投计划深度优化目标名称 |  |
| - cap_roi_ratio | Double |  |  | cost cap的roi约束(广告成本约束-ROI约束) | 范围：0~100 |
| - cap_bid | Long |  |  | cost cap的广告成本约束(广告成本约束-非ROI单/双约束) | 单位：厘，范围：0~8000元 |
| - auto_photo_scope | Integer |  | - | 素材包范围 | 0-系统优选 1-素材包 |
| - photo_package_details | GatePhotoPackageDetail[] |  | - | 素材包详情 |  |
| - photo_package_id | Long |  | - | 素材包ID | - |
| - name | String |  | - | 素材包名称 | - |
| - status | Integer |  | - | 素材包状态 0-删除 1-有效 |  |
| - photo_id_info | String[] |  | - | 素材包下视频ID信息 | - |
| - periodic_delivery_type | Integer |  |  | 周期稳投开关 |  |
| - continue_period_type | Integer |  |  | 周期稳投续投开关 |  |
| - range_budget | Long |  |  | 周期稳投总预算 |  |
| - periodic_days | Integer |  |  | 稳投周期天数 |  |
| - smart_material_supply | Integer |  |  | 智能素材补充开关 |  |
| - periodic_delivery_put_type | Integer |  |  | 夜间投放 | periodic_delivery_type =1时该字段=2表示夜间稳投，periodic_delivery_type=1时该字段=1表示常规稳投 |
| - total_count | Long |  | 449 | 计划总数 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "total_count": 1,
        "details": [
            {
                "status": 6,
                "campaign_id": 227785633,
                "campaign_name": "提高应用活跃_20211105_19:12",
                "put_status": 1,
                "create_channel": 0,
                "day_budget": 0,
                "day_budget_schedule": [],
                "campaign_type": 7,
                "campaign_sub_type": 0,
                "create_time": "2021-11-05 19:12:11",
                "update_time": "2021-11-05 19:12:11",
                "cap_roi_ratio": 98.0,
                "constraint_cpa": 0,
                "cap_bid": 0,
            }
        ]
    },
    "request_id": "f209ef62972e456faccdd80989d6e516"
}
```

## 原始内容

```
查询广告计划 /rest/openapi/gw/dsp/campaign/list { "advertiser_id":20007185, "campaign_id":227785633 } { "code": 0, "message": "OK", "data": { "total_count": 1, "details": [ { "status": 6, "campaign_id": 227785633, "campaign_name": "提高应用活跃_20211105_19:12", "put_status": 1, "create_channel": 0, "day_budget": 0, "day_budget_schedule": [], "campaign_type": 7, "campaign_sub_type": 0, "create_time": "2021-11-05 19:12:11", "update_time": "2021-11-05 19:12:11", "cap_roi_ratio": 98.0, "constraint_cpa": 0, "cap_bid": 0, } ] }, "request_id": "f209ef62972e456faccdd80989d6e516" } ad_type Integer 请补充描述详情 campaign_id Long 广告计划 ID campaign_ids Long[] 广告计划Id集 campaign_name String 计划名称 campaign_type Integer 请补充描述详情 end_date String 结束时间 page Integer 请求的页码数 page_size Integer 请求的每页行数 put_status_list Integer[] 计划投放状态筛选 start_date String 开始时间 status Integer 计划状态 time_filter_type Integer 按创建时间，还是更新时间进行筛选 advertiser_id Long 广告主id data AdMarketCampaignView 返回数据 details Details152[] 结果详情 campaign_name String 计划名称 update_time String 更新时间 ad_type Integer 计划类型 create_time String 创建时间 campaign_type Integer 计划类型 campaign_sub_type Integer 计划子类型 put_status Integer 计划状态 campaign_id Long 计划ID status Integer 计划状态 day_budget_schedule Long[] 分日预算 day_budget Long 单日预算金额 bid_type Integer 出价类型 constraint_action_type Integer 浅层约束目标`0：无；1：千次曝光；2：点击；53：表单；180：激活；190：付费；191：ROI constraint_cpa Long 浅层成本约束(广告成本约束-非ROI双约束) auto_adjust Integer 自动调控开关 auto_build Integer 自动基建开关 auto_build_name_rule AutoBuildNameRuleParamForGateway 自动基建命名规则 unit_name_rule String 单元命名规则 creative_name_rule String 创意命名规则 dsp_version Integer 版本 auto_manage Integer 智投 campaign_ocpx_action_type Integer 智能模式下的优化目标 campaign_ocpx_action_type_name String 智投计划优化目标名称 campaign_deep_conversion_type Integer 智投计划深度优化目标 campaign_deep_conversion_type_name String 智投计划深度优化目标名称 cap_roi_ratio Double cost cap的roi约束(广告成本约束-ROI约束) cap_bid Long cost cap的广告成本约束(广告成本约束-非ROI单/双约束) auto_photo_scope Integer 素材包范围 photo_package_details GatePhotoPackageDetail[] 素材包详情 photo_package_id Long 素材包ID name String 素材包名称 status Integer 素材包状态 0-删除 1-有效 photo_id_info String[] 素材包下视频ID信息 periodic_delivery_type Integer 周期稳投开关 continue_period_type Integer 周期稳投续投开关 range_budget Long 周期稳投总预算 periodic_days Integer 稳投周期天数 smart_material_supply Integer 智能素材补充开关 periodic_delivery_put_type Integer 夜间投放 total_count Long 计划总数 code Integer 返回码 message String 返回信息
```
