---
title: 「 AIGC 素材推荐」组件化升级
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/programmed_commponent_preview/add
doc_id: tencent_ads_v3_0_pages_programmed_commponent_preview_add
source_id: tencent_ads_v3_0_pages_programmed_commponent_preview_add
---
# 「 AIGC 素材推荐」组件化升级

# 一、背景介绍

3.0 升级以来「组件化创意」投放模式已作为广告主创意投放主阵地，如何高效新建组件、引用组件、管理组件是投放平台在持续演进迭代的能力；上半年已完成单广告账户下的组件管理基础能力（组件基础知识& 功能详细指引：[【全新】 3.0 组件化管理功能指引](https://doc.weixin.qq.com/doc/w3_ALsAcQaSAD4XDeCP6CyQ6S5G7Vk98?scode=AJEAIQdfAAosvfc81CALsAcQaSAD4)） 同时，为了保证「组件化创意」投放理解与体验，确保广告主创建创意时不论是「客户自建」的、还是「 AIGC 素材推荐」的，都能够统一以“组件”的方式提交。 本次做了「 AIGC 素材推荐」的组件化升级：旨在将原素材衍生流程统一升级为组件化流程。此外还针对历史反馈问题优化若干体验问题，简化交互流程。

### 具体的功能介绍

从投放端流程入手：组件化创意页面全新升级组件化衍生流程，支持广告主选择组件或者素材，衍生出新的素材组件。

### 衍生的组件化创意创建流程

### 与原素材衍生流程的差异

与创意创建主流程解耦合，创建创意时 dynamic_creative_type 指定动态创意类型: DYNAMIC_CREATIVE_TYPE_PROGRAM 时，不再强制需要关联衍生全局 id material_derive_id，仅当指定全局 id 才会触发衍生流程，即：不在是衍生不在组件化创意必填项

简化流程。废弃使用素材和素材组发起自动化衍生预览的流程，以创建接口为例。

原接口：[开发文档 | 开发者专区 - 腾讯广告 - 创建模板预览接口](https://developers.e.qq.com/v3.0/docs/api/programmed/add)

新接口：[开发文档 | 开发者专区 - 腾讯广告 - 组件化创意衍生预览创建接口](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview/add)

# 二、接口文档

能力灰度阶段请参考：[广告 3.0 关于衍生素材的 MktAPI 接入指引](https://doc.weixin.qq.com/doc/w3_AGYAlQbdAFwgmNG9ktWTrCigWq57t?scode=AJEAIQdfAAomd114YUAGYAlQbdAFw)

### 1.创意创建流程

创建广告 [开发文档 | 开发者专区 - 腾讯广告 - 创建广告组接口](https://developers.e.qq.com/v3.0/docs/api/adgroups/add)

创建创意组件 [开发文档 | 开发者专区 - 腾讯广告 - 创建创意组件接口](https://developers.e.qq.com/v3.0/docs/api/components/add)

创建创意 [开发文档 | 开发者专区 - 腾讯广告 - 创建创意接口](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/add)

创建组件化预览：[开发文档 | 开发者专区 - 腾讯广告 - 组件化创意衍生预览创建接口](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview/add)

备注 1：本接口仅支持图片(image)、视频(video)、图集(image_list)组件，且指定的组件必须要包含在后续创意创建/更新时的入参 creative_components 中, 否则创意创建和编辑流程会报错

备注 2：本接口生成的预览信息并不会立即生成衍生组件，可再次更新、删除衍生预览，仅当返回的 material_derive_id 在创意模块流程中被使用才会触发组件衍生流程，并根据实际衍生规则来达成最终任务

### 2.创意更新流程：

更新创意 [开发文档 | 开发者专区 - 腾讯广告 - 更新创意接口](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/update)

更新组件化预览 [开发文档 | 开发者专区 - 腾讯广告 - 组件化创意衍生预览更新接口](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview/update)

备注：同创建组件化预览接口

### 3. 更多组件化相关流程：

组件化创意衍生预览查询接口[开发文档 | 开发者专区 - 腾讯广告 - 组件化创意衍生预览查询接口](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview/get)

查询到的组件衍生预览信息，可根据实际需要通过 template_preview_url 链接进行预览，链接有效期为 1 天，预览删除链接同步失效

组件化创意衍生预览删除接口 [开发文档 | 开发者专区 - 腾讯广告 - 组件化创意衍生预览删除接口](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview/delete)

备注：指定删除某个衍生组件或组件下的预览记录，注意:需要保证 material_derive_id 下的组件数量与提交(创建/更新)创意时一致

本接口若指定删除组件，注意必须要在后续创意创建/更新时的入参creative_components 中同步删除, 否则创意编辑流程会报错

组件化创意衍生成品查询接口 [开发文档 | 开发者专区 - 腾讯广告 - 组件化创意衍生成品查询接口](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_result/get)

本接口返回 material_derive_id 下原组件和衍生组件的关联关系，若该 id 未被创意流程使用, 且未成功达成衍生任务前，返回信息为空

本接口仅返回最新的任务结果，即若原组件或者组件衍生预览信息发生变化, 且重新编辑了创意，会重新尝试达成新的衍生任务，任务完成后衍生成品信息与新任务的结果一致，历史任务衍生成品将被删除

# 三、升级注意事项

### 开发者提示

新版流程预期将于 2024 年 11 月 21 开始灰度，预计 2024 年 12 月底全量，届时原流程将会在 12 月底下线，请您按照指引合理安排时间进行升级。

详细升级流程参考：背景介绍 --> 衍生的组件化创意创建流程

### 升级注意事项

升级后，创意创建时，使用组件化方式创建创意(dynamic_creative_type: DYNAMIC_CREATIVE_TYPE_PROGRAM)不再强依赖衍生预览创建流程(可不指定 program_creative_info 信息);

衍生预览创建流程的入参数全面升级为组件，原指定素材发起预览的方式将下线。

组件化创意衍生流程与原素材衍生流程不可交叉使用，新建广告可以按照组件化的方式创建预览
