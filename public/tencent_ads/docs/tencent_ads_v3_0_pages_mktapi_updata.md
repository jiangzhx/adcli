---
title: 新投放 MKTAPI 升级概述
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/mktapi/updata
doc_id: tencent_ads_v3_0_pages_mktapi_updata
source_id: tencent_ads_v3_0_pages_mktapi_updata
---
# 新投放 MKTAPI 升级概述

# 概述

新版 3.0 腾讯广告投放平台，进行了广告投放的重新设计，以更精简高效的投放体验支持完整的营销内容表达。并且进行系统全面升级，以更稳定的系统优化，打破“卷基建”的起量玄学。

新版本功能包括：

投放层级精简，由原有的“计划-广告-创意” 3 层结构简化为“广告-创意” 2 层结构

贴近行业经营的投放表达，通过营销目的代替推广目标，更精细化刻画行业的生意经营

明确投放导向，新建广告环节增加“卷基建”判断，杜绝无序创建，聚合转化数据以提升拿量效果

为适配新投放场景，MKTAPI 升级为 3.0 版本，支持开发者更容易、更便捷地进行广告创编和资产管理

| 业务核心升级点 | before | after |  |
| --- | --- | --- | --- |
| 授权相关 | 账户组织管理升级 | 仅支持商务管家 组织管理层级 | 支持 集团、主体、业务单元 3 个新组织管理层级，支持开发者跨账户进行管理 |
| 投放相关 | 投放层级简化 | 投放层级：计划-广告-创意 campaign/adgroup/ad/adcreative 或者是 campaign/adgroup/dynamic_creative | 投放层级：广告-创意 新广告：adgroup 新创意：dynamic_creative |
| 推广目标升级为营销相关概念 | 使用推广目标 promoted_object_type、promoted_object_id 相关概念 | 使用营销目的、营销载体、推广产品等 marketing_goal、marketing_sub_goal、marketing_target_type、marketing_carrier_type、marketing_carrier_id 等 |  |
| 资产升级 | 支持各类推广内容资产 | 无推广内容资产库概念 | 支持组织单元维度（organization_id）进行推广内容资产创编 |

对外接口清单明细：[接口升级 list](https://doc.weixin.qq.com/sheet/e3_AVUAGwafAIQjk4t8QunTSCgIIXLPj?scode=AJEAIQdfAAoJ9llqYHAVUAGwafAIQ&tab=BB08J2) 3.0 接口文档：[https://developers.e.qq.com/v3.0/docs/apilist](https://developers.e.qq.com/v3.0/docs/apilist) MKTAPI 升级课程：[https://eschool.qq.com/lb/course-v4/wjbjrUMP?name=n_rmztxq_kc-66](https://eschool.qq.com/lb/course-v4/wjbjrUMP?name=n_rmztxq_kc-66)
