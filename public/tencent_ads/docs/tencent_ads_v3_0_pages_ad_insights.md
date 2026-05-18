---
title: 广告数据洞察
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/ad_insights
doc_id: tencent_ads_v3_0_pages_ad_insights
source_id: tencent_ads_v3_0_pages_ad_insights
---
# 广告数据洞察

通过本章节您将了解到 Marketing API 提供的广告数据洞察能力。

广告数据洞察接口为您提供广告投放后的数据报表和分析服务。我们的报表将涵盖推广帐号、广告、创意、素材等多个层级的数据，并支持按日、小时的时间维度进行查询。所有报表数据均涵盖曝光量、点击量、费用、APP 下载/转化/激活等常见的基础指标，如果需要平均点击单价（CPC）、平均千次展示价格（CPM）、平均转化率、平均转化成本等更多指标数据，您可以根据我们提供的基础数据自行计算得出。

依赖广告数据洞察相关接口提供的数据，您可以了解到不同广告在不同时段以及不同人群上的表现，并可以据此进一步优化广告投放。您可以通过以下章节了解广告数据洞察服务的具体功能： ● [获取日报表](https://developers.e.qq.com/v3.0/docs/api/daily_reports/get)：以天为维度查询各层级的报表数据； ● [获取小时报表](https://developers.e.qq.com/v3.0/docs/api/hourly_reports/get)：以小时为维度查询各层级的报表数据； ● [获取定向标签报表](https://developers.e.qq.com/v3.0/docs/api/targeting_tag_reports/get)：以定向人群的性别、年龄、地域为维度查询报表数据。 ● [创建异步任务](https://developers.e.qq.com/v3.0/docs/api/async_reports/add)：异步获取全量报表数据。

除了解 Marketing API 提供的数据报表维度和指标维度外，您可能还需要了解数据洞察中会涉及到的报表聚合规则以及返回数据条目。接下来，将为您介绍这两个规则。

## 聚合规则

不同类型的报表可选择聚合规则略有差异。首先，将分别介绍日报表、小时报表、定向标签报表可选择的聚合条件。 1、日报表默认按 date（天）聚合，且不同 level 下支持的聚合条件如下：

当 level 为 ADVERTISER 时，支持按 date 聚合。

当 level 为 ADGROUP 时，支持按 date、adgroup_id、site_set 聚合。

当 level 为 DYNAMIC_CREATIVE 时，支持按 date、adgroup_id、dynamic_creative_id、site_set 聚合。

当 level 为 COMPONENT 时，支持按 date、dynamic_creative_id、component_id、component_type、adgroup_id、site_set 聚合。

当 level 为 CHANNEL 时，支持按 date、channel_id、site_set 聚合。

当 level 为 MATERIAL_VIDEO 时，支持按 date、image_id、adgroup_id、site_set 聚合。

当 level 为 MATERIAL_IMAGE 时，支持按 date、video_id、adgroup_id、site_set 聚合。

当 level 为 BIDWORD 时，支持按 date、bidword_id、adgroup_id、site_set 聚合。

当 level 为 QUERYWORD 时，支持 date、bidword_id、queryword、site_set 聚合。

当 level 为 MARKETING_ASSET 时，支持 date、marketing_target_type、marketing_asset_id、site_set 聚合。

当 level 为 PRODUCT_CATALOG 时，支持 date、product_catalog_id、product_series_id、product_outer_id、adgroup_id、site_set 聚合

2、小时报表默认按 hour（小时）聚合，且不同 level 下支持的聚合条件如下：

当 level 为 ADVERTISER 时，支持按 hour 聚合。

当 level 为 ADGROUP 时，支持按 hour、adgroup_id 聚合。

当 level 为 DYNAMIC_CREATIVE 时，支持按 hour、adgroup_id、dynamic_creative_id 聚合。

当 level 为 CHANNEL 时，支持按 hour、adgroup_id、channel_id 聚合。

当 level 为 BIDWORD 时，支持按 hour、adgroup_id、bidword_id 聚合。

3、定向标签报表不同 type 下支持的聚合条件如下：

当 type 为 GENDER 时，支持按 date、gender_id、adgroup_id 聚合

当 type 为 AGE 时，支持按 date、age_id、adgroup_id 聚合

当 type 为 REGION 时，支持按 date、region_id、adgroup_id 聚合

当 type 为 CITY 时，支持按 date、city_id、adgroup_id 聚合

## 聚合示例

聚合条件会影响最终的输出结果，接下来将通过几个示例说明各聚合条件的规则 1、日报表（daily_reports/get）

假设某帐号下共有 10 个广告组，且在 2018/08/01-2018/08/11 均有投放数据，若查询该帐号在 2018/08/01-2018/08/11 广告组维度（level = ADGROUP）的报表数据：

选择按天聚合（GROUP BY date），则一共返回 11 条记录，各项指标为所有广告组在各天的综合指标，返回数据节点中的 adgroup_id 无意义；

选择按广告组聚合（GROUP BY adgroup_id），则一共返回 10 条数据，各项指标为各广告组 10 天的综合指标，返回的数据节点中的 date（天）无意义；

选择同时按天以及广告组聚合（GROUP BY date,adgroup_id），则一共返回 110 条数据，各项指标为各广告组在各天的效果指标，返回的数据节点中的 adgroup_id、date 均有意义。

2、小时报表（hourly_reports/get）

假设某帐号下共有 10 个广告组，且在 2018/08/01 的 24 小时内均有投放数据，若查询该帐号在 2018/08/01 广告组维度（level = ADGROUP）的小时数据：

选择按小时聚合（GROUP BY hour），则一共有 24 条数据，各项指标为所有广告组在每小时的综合指标，返回数据节点中的 adgroup_id 无意义；

选择按广告组聚合（GROUP BY adgroup_id），则一共返回 10 条数据，各项指标为各广告组当天的综合指标，返回的数据节点中的 hour（小时）无意义；

选择同时按小时以及广告组聚合（GROUP BY hour,adgroup_id），则一共返回 240 条数据，各项指标为各广告组在各小时的效果指标，返回的数据节点中的 adgroup_id、hour 均有意义。

3、定向标签报表（targeting_tag_reports/get） 假设某帐号下共有 10 个广告组，且在 2018/08/01-2018/08/11 均有投放数据，若查询该帐号在 2018/08/01-2018/08/11 期间某广告组的性别数据：

选择按天聚合（GROUP BY date），则一共返回 11 条记录，各项指标为该广告组在各天的综合指标，返回数据节点中的 gender 无意义;

选择按性别聚合（GROUP BY gender_id），则一共返回 2 条数据，各项指标为该广告组 11 天分性别的综合指标，返回的数据节点中的 date（天）无意义;

选择同时按天以及性别聚合（GROUP BY date,gender_id），则一共返回 22 条数据，各项指标为该广告组分性别在这 11 天内的明细数据，返回的数据节点中的 date、gender 均有意义。

## 数据条目

返回的数据条目除了与聚合规则有关，还与数据。所有报表接口中，返回的数据将只包含至少有曝光量的条目数据，即报表返回中不会含有所有指标均为 0 的条目。

例如通过日报表接口查询某月 1 号到 10 号的帐号层级每日数据且按天聚合，而实际这个帐号只有 1、2、3 号有投放广告，则报表返回中只有 3 条记录，不会包含 4 号-10 号这几天的条目。

## 使用限制

广告效果报表接口，除了需要受通用的接口调用频次限制外，还有以下限制（异步任务下载报表不受此限制）：

分页获取的数据总条数限制为 10000 条，即 page*page_size 不能超过 10000，超过后会被拦截。

10 秒内查询匹配到的数据累计总条数限制为 40000 条，详细逻辑为：针对日报表（daily_reports/get）的每个层级（level）、小时报表（hourly_reports/get）的每个层级（level）、定向标签报表（targeting_tag_reports/get）每种类型（type）的每个层级（level），分别设置配额（quota）

配额以 10 秒为周期，以周期内查询命中总数据量为计算依据

周期内超出配额，将冻结对应请求的访问

冻结时间根据本周期当前累计 quota 消耗进行计算，冻结时间 = 本周期剩余时长 + 向下取整( 本周期当前累计 quota 消耗 / 40000) * 10 秒
