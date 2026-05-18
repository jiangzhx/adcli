---
title: oCPC/oCPM 智能出价广告
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/ocpx_smart_bid
doc_id: tencent_ads_v3_0_pages_ocpx_smart_bid
source_id: tencent_ads_v3_0_pages_ocpx_smart_bid
---
# oCPC/oCPM 智能出价广告

## oCPC/oCPM 智能出价广告：引领广告投放新时代

随着互联网技术的飞速发展，广告投放已经成为企业营销的重要手段。在这个信息爆炸的时代，如何有效地吸引用户的注意力并提高广告转化率成为了广告主和平台方共同关注的焦点。为了解决这一问题，业内推出了以 oCPC/oCPM 为核心的智能出价广告模式，为广告投放带来了全新的变革。

## 什么是 oCPC/oCPM 智能出价广告？

oCPC（Optimized Cost Per Click，优化点击成本）和 oCPM（Optimized Cost Per Mille，优化千次展示成本）是两种广告出价模式。智能出价是一种针对效果广告的智能最大转化量投放策略。它们通过对用户行为、广告效果等数据的分析，实时调整广告出价，以提高广告投放的精准度和转化率。

广告主可以根据实际的推广需求，自定义广告的优化目标（例如激活、下单、表单预约）。广告系统将自动对投放进行智能优化，精准触达高转化率用户。当广告主在广告投放流程中选定特定的优化目标（例如：应用的激活、网站的下单），并及时、准确回传相应的转化数据，我们将借助转化预估模型，实时预估每一次曝光或点击对广告主的转化价值，并基于转化价值，智能调控出价，竞拍每次曝光，确保最大化地实现广告主的优化目标。

## oCPC/oCPM 智能出价广告的优势

精准定位目标用户：通过分析用户的行为、兴趣、年龄、地域等信息，广告主可以精准定位到潜在客户，提高广告投放的针对性。

提高广告转化率：oCPC/oCPM 智能出价广告模式可以根据广告效果实时调整出价，使得广告资源得到更合理的分配，从而提高广告转化率。

降低广告成本：通过对广告投放效果的实时监测和分析，广告主可以避免无效投放，降低广告成本。

灵活调整策略：oCPC/oCPM 智能出价广告模式可以根据广告主的需求和市场需求，灵活调整广告策略，以应对市场变化。

## 如何通过 Marketing API 3.0 投放智能出价广告？

通过 [API3.0 创建广告组](https://developers.e.qq.com/v3.0/docs/api/adgroups/add) 接口，选择对应的优化目标(optimization_goal)，可用范围参考 [优化目标类型说明](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal)；

选择所需的出价方式(bid_mode)；

| 出价方式 | 描述 |
| --- | --- |
| BID_MODE_OCPC | 优化点击计费 |
| BID_MODE_OCPM | 优化曝光计费 |

选择对应的出价类型(smart_bid_type)，使用最大转化量投放(SMART_BID_TYPE_SYSTEMATIC)；

| 出价方式 | 描述 |
| --- | --- |
| SMART_BID_TYPE_CUSTOM | 手动出价 |
| SMART_BID_TYPE_SYSTEMATIC | 最大转化量投放 |

腾讯广告智能出价广告同时支持智能深度优化 ROI 期望能力。通过 [API3.0 创建广告组](https://developers.e.qq.com/v3.0/docs/api/adgroups/add) 接口，选择对应的 ROI 目标，可用范围参考 [ROI 目标类型说明](https://developers.e.qq.com/v3.0/docs/enums#api_deep_conversion_worth_goal)；

| ROI 设置（如下方式二选一） | 描述 |
| --- | --- |
| deep_conversion_spec.deep_conversion_worth_spec | 方式 1：通过优化目标组合传入 |
| conversion_id | 方式 2：通过转化规则传入 |

### 游戏行业通过“投放场景”投放智能出价广告

针对游戏行业选择对应的“最大转化量投放”投放场景(BID_SCENE_NORMAL_MAX) 来投放智能出价广告。可用范围参考 [投放场景类型说明](https://developers.e.qq.com/v3.0/docs/enums#bid_scene)

| 投放场景 | 描述 |
| --- | --- |
| BID_SCENE_NORMAL_AVERAGE | 常规投放 |
| BID_SCENE_NORMAL_MAX | 最大转化量投放 |
