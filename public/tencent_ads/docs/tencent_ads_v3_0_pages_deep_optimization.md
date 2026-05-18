---
title: oCPC/oCPM 深度转化优化广告
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/deep_optimization
doc_id: tencent_ads_v3_0_pages_deep_optimization
source_id: tencent_ads_v3_0_pages_deep_optimization
---
# oCPC/oCPM 深度转化优化广告

本节将为您讲解如何使用 Marketing API 投放 oCPC/oCPM 深度转化优化广告。

## oCPC/oCPM 深度转化优化广告介绍

广告主提供两个优化目标和出价。系统优化深度目标成本接近出价，同时对浅层成本进行一定控制，在此基础上最大化获取深度转化量。浅层目标信息会用于系统学习，帮助优化深度效果。

## 适用场景

1.关注深度转化效果，但深度数据稀疏、回流慢，直接作为优化目标投放无法起量、成本波动大。例如：希望优化授信/付费/下单，但直接投放效果不符预期； 2.关注深度转化效果，但同时也关注浅层效果。例如：1）游戏客户优化付费时，付费成本稳定的前提下，激活成本也需要控制在出价的一定范围内，降低 ROI 不达标的风险； 2）网服、生态、休闲游戏客户优化次日留存时，激活成本也需要符合出价，才能符合整体考核要求。

## 如何通过 Marketing API 3.0 深度转化优化广告？

使用 oCPC/oCPM 投放深度转化优化，提供两个优化目标和出价：

优化目标：希望优化的浅层转化行为，或转化链路上较为关键的浅层行为，如激活、表单预约。通过 [API3.0 创建广告组](https://developers.e.qq.com/v3.0/docs/api/adgroups/add) 接口 选择优化目标（optimization_goal），可用范围参考 [优化目标类型说明](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal)；

选择所需的出价方式(bid_mode)；

| 出价方式 | 描述 |
| --- | --- |
| BID_MODE_OCPC | 优化点击计费 |
| BID_MODE_OCPM | 优化曝光计费 |

优化目标出价：通过 [API3.0 创建广告组](https://developers.e.qq.com/v3.0/docs/api/adgroups/add) 接口输入出价（bid_amount)；

深度优化目标：希望优化的深度转化行为，如首次付费、下单。对应[API3.0 创建广告组](https://developers.e.qq.com/v3.0/docs/api/adgroups/add) 接口 deep_conversion_spec 结构体；

结构体中 deep_conversion_type 选择“ DEEP_CONVERSION_BEHAVIOR ”代表深度优化类型选择优化转化行为；

deep_conversion_behavior_spec 结构体中 goal 代表深度优化目标；

深度优化目标出价：deep_conversion_behavior_spec 结构体中 bid_amount 代表深度优化目标出价。

| 深度转化优化设置（如下方式二选一） | 描述 |
| --- | --- |
| deep_conversion_spec.deep_conversion_worth_spec | 方式 1：通过优化目标组合传入 |
| conversion_id | 方式 2：通过转化规则传入 |

### 需注意：

请按照实际转化链路来选择优化目标、深度优化目标，一条广告的优化目标和深度优化目标不能相同。可通过 [查询优化目标权限](https://developers.e.qq.com/v3.0/docs/api/optimization_goal_permissions/get) 接口进行查询；

优化目标和深度优化目标均不支持修改。
