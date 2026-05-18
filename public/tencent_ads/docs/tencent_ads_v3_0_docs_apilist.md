---
title: 接口清单
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/apilist
doc_id: tencent_ads_v3_0_docs_apilist
source_id: tencent_ads_v3_0_docs_apilist
---
# 接口清单

本节将为您介绍 Marketing API 中涉及的接口信息，具体接口清单如下所示：

| 模块 | 接口 | 描述 | 所属权限（scope） |
| --- | --- | --- | --- |
| OAuth 授权 | [oauth/authorize](https://developers.e.qq.com/v3.0/docs/api/oauth/authorize) | 获取 Authorization Code | ads_management account_management ads_insights audience_management user_actions |
| [oauth/token](https://developers.e.qq.com/v3.0/docs/api/oauth/token) | 获取 Token | ads_management account_management ads_insights audience_management user_actions |  |
| [oauth/refresh_token](https://developers.e.qq.com/v3.0/docs/api/oauth/refresh_token) | 刷新 Refresh Token | ads_management account_management ads_insights audience_management user_actions |  |
| 订阅任务账户管理 | [subscription_task_account/add](https://developers.e.qq.com/v3.0/docs/api/subscription_task_account/add) | 创建订阅账户 | ads_management |
| [subscription_task_account/delete](https://developers.e.qq.com/v3.0/docs/api/subscription_task_account/delete) | 删除订阅账户 | ads_management |  |
| [subscription_task_account/get](https://developers.e.qq.com/v3.0/docs/api/subscription_task_account/get) | 查询订阅账户 | ads_management |  |
| 客户账号 | [advertiser/add](https://developers.e.qq.com/v3.0/docs/api/advertiser/add) | 添加服务商子客 | account_management |
| [advertiser/update](https://developers.e.qq.com/v3.0/docs/api/advertiser/update) | 更新客户信息 | account_management |  |
| [advertiser/get](https://developers.e.qq.com/v3.0/docs/api/advertiser/get) | 查询客户信息 | account_management ads_management ads_insights audience_management user_actions |  |
| [advertiser_daily_budget/update](https://developers.e.qq.com/v3.0/docs/api/advertiser_daily_budget/update) | 更新竞价账户日预算 | account_management |  |
| [advertiser_daily_budget/get](https://developers.e.qq.com/v3.0/docs/api/advertiser_daily_budget/get) | 获取竞价账户日预算 | account_management |  |
| [user_organization_authentication/get](https://developers.e.qq.com/v3.0/docs/api/user_organization_authentication/get) | 查询用户组织认证 | account_management |  |
| 服务商账号 | [agency/get](https://developers.e.qq.com/v3.0/docs/api/agency/get) | 查询服务商信息 | account_management |
| 资质 | [qualification_images/add](https://developers.e.qq.com/v3.0/docs/api/qualification_images/add) | 上传资质图片 | account_management |
| [qualification_images/get](https://developers.e.qq.com/v3.0/docs/api/qualification_images/get) | 获取资质图片信息 | account_management |  |
| [qualification_structure/get](https://developers.e.qq.com/v3.0/docs/api/qualification_structure/get) | 获取客户资质结构 | account_management |  |
| [qualifications/add](https://developers.e.qq.com/v3.0/docs/api/qualifications/add) | 创建客户资质 | account_management |  |
| [qualifications/update](https://developers.e.qq.com/v3.0/docs/api/qualifications/update) | 更新客户资质 | account_management |  |
| [qualifications/delete](https://developers.e.qq.com/v3.0/docs/api/qualifications/delete) | 删除客户资质 | account_management |  |
| [qualifications/get](https://developers.e.qq.com/v3.0/docs/api/qualifications/get) | 获取客户资质 | account_management |  |
| 资金账户 | [funds/get](https://developers.e.qq.com/v3.0/docs/api/funds/get) | 获取资金账户信息 | account_management |
| [wallet/get](https://developers.e.qq.com/v3.0/docs/api/wallet/get) | 获取钱包信息 | account_management |  |
| [daily_balance_report/get](https://developers.e.qq.com/v3.0/docs/api/daily_balance_report/get) | 获取资金账户日结明细（新） | account_management |  |
| [fund_transfer/add](https://developers.e.qq.com/v3.0/docs/api/fund_transfer/add) | 发起代理商与子客户之间的转账 | account_management |  |
| [fund_statements_detailed/get](https://developers.e.qq.com/v3.0/docs/api/fund_statements_detailed/get) | 获取资金账户流水 | account_management |  |
| [realtime_cost/get](https://developers.e.qq.com/v3.0/docs/api/realtime_cost/get) | 获取账号实时消耗 | account_management |  |
| [agency_realtime_cost/get](https://developers.e.qq.com/v3.0/docs/api/agency_realtime_cost/get) | 获取服务商实时消耗 | account_management |  |
| [merge_fund_type_subcustomer_transfer/add](https://developers.e.qq.com/v3.0/docs/api/merge_fund_type_subcustomer_transfer/add) | 资金合并类型同商务管家子客间转账 | account_management |  |
| [merge_fund_type_funds/get](https://developers.e.qq.com/v3.0/docs/api/merge_fund_type_funds/get) | 获取资金合并类资金账户信息 | account_management |  |
| [merge_fund_type_daily_balance_report/get](https://developers.e.qq.com/v3.0/docs/api/merge_fund_type_daily_balance_report/get) | 获取资金合并类资金账户日结明细 | account_management |  |
| [merge_fund_type_fund_statements_detailed/get](https://developers.e.qq.com/v3.0/docs/api/merge_fund_type_fund_statements_detailed/get) | 获取资金合并类型资金流水 | account_management |  |
| [subcustomer_transfer/add](https://developers.e.qq.com/v3.0/docs/api/subcustomer_transfer/add) | 同商务管家子客间转账 | account_management |  |
| [agency_wallet_list/get](https://developers.e.qq.com/v3.0/docs/api/agency_wallet_list/get) | 获取代理商创建的共享钱包信息列表 | account_management |  |
| [wallet_transfer/add](https://developers.e.qq.com/v3.0/docs/api/wallet_transfer/add) | 发起代理商与钱包之间转账 | account_management |  |
| [wallet_invoice/get](https://developers.e.qq.com/v3.0/docs/api/wallet_invoice/get) | 获取共享钱包流水 | account_management |  |
| [wallet_basic_info/get](https://developers.e.qq.com/v3.0/docs/api/wallet_basic_info/get) | 钱包视角查询共享钱包基础信息 | account_management |  |
| [wallet_get_binding_advertiser/get](https://developers.e.qq.com/v3.0/docs/api/wallet_get_binding_advertiser/get) | 查询单个共享钱包下的关联账户信息 | account_management |  |
| [wallet_create/add](https://developers.e.qq.com/v3.0/docs/api/wallet_create/add) | 创建共享钱包 | account_management |  |
| [wallet_edit/add](https://developers.e.qq.com/v3.0/docs/api/wallet_edit/add) | 编辑共享钱包基础信息 | account_management |  |
| [wallet_bind_advertiser/add](https://developers.e.qq.com/v3.0/docs/api/wallet_bind_advertiser/add) | 共享钱包绑定或解绑账户 | account_management |  |
| [subsidy_account_bind/add](https://developers.e.qq.com/v3.0/docs/api/subsidy_account_bind/add) | 补贴账号绑定或解绑账户 | account_management |  |
| [subsidy_bound_account_list/get](https://developers.e.qq.com/v3.0/docs/api/subsidy_bound_account_list/get) | 获取补贴账号关联的账号列表 | account_management |  |
| [account_subsidy/get](https://developers.e.qq.com/v3.0/docs/api/account_subsidy/get) | 获取客户关联的补贴账号 | account_management |  |
| 组织账号关系 | [organization_account_relation/get](https://developers.e.qq.com/v3.0/docs/api/organization_account_relation/get) | 查询组织下账户信息 | account_management ads_management ads_insights audience_management user_actions |
| [business_unit/add](https://developers.e.qq.com/v3.0/docs/api/business_unit/add) | 创建客户业务单元 | account_management |  |
| [business_unit_account/update](https://developers.e.qq.com/v3.0/docs/api/business_unit_account/update) | 更新客户业务单元所属账号 | account_management |  |
| [business_unit_list/get](https://developers.e.qq.com/v3.0/docs/api/business_unit_list/get) | 查询客户业务单元列表 | account_management |  |
| [business_unit_account/get](https://developers.e.qq.com/v3.0/docs/api/business_unit_account/get) | 查询账号所属的业务单元 | account_management |  |
| 服务商业务单元管理 | [agency_business_unit/add](https://developers.e.qq.com/v3.0/docs/api/agency_business_unit/add) | 创建服务商业务单元 | account_management |
| [agency_business_unit/update](https://developers.e.qq.com/v3.0/docs/api/agency_business_unit/update) | 修改服务商业务单元 | account_management |  |
| [agency_business_unit_list/get](https://developers.e.qq.com/v3.0/docs/api/agency_business_unit_list/get) | 查询服务商业务单元列表 | account_management |  |
| [agency_business_unit_list_account/get](https://developers.e.qq.com/v3.0/docs/api/agency_business_unit_list_account/get) | 查询服务商业务单元下的账号列表 | account_management |  |
| [agency_business_unit_list_by_account/get](https://developers.e.qq.com/v3.0/docs/api/agency_business_unit_list_by_account/get) | 查询账号所属的服务商业务单元 | account_management |  |
| 营销单元 | [adgroups/get](https://developers.e.qq.com/v3.0/docs/api/adgroups/get) | 获取营销单元 | ads_management ads_insights |
| [adgroups/add](https://developers.e.qq.com/v3.0/docs/api/adgroups/add) | 创建营销单元 | ads_management |  |
| [adgroups/update](https://developers.e.qq.com/v3.0/docs/api/adgroups/update) | 更新营销单元 | ads_management |  |
| [adgroups/delete](https://developers.e.qq.com/v3.0/docs/api/adgroups/delete) | 删除营销单元 | ads_management |  |
| 定向模板 | [targetings/get](https://developers.e.qq.com/v3.0/docs/api/targetings/get) | 查询定向模板 | ads_management |
| 创意 | [dynamic_creatives/get](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/get) | 获取创意 | ads_management |
| [dynamic_creatives/add](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/add) | 创建创意 | ads_management |  |
| [dynamic_creatives/update](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/update) | 更新创意 | ads_management |  |
| [dynamic_creatives/delete](https://developers.e.qq.com/v3.0/docs/api/dynamic_creatives/delete) | 删除创意 | ads_management |  |
| 创意组件 | [components/get](https://developers.e.qq.com/v3.0/docs/api/components/get) | 获取创意组件 | ads_management ads_insights |
| [components/add](https://developers.e.qq.com/v3.0/docs/api/components/add) | 创建创意组件 | ads_management |  |
| [components/delete](https://developers.e.qq.com/v3.0/docs/api/components/delete) | 删除创意组件 | ads_management |  |
| [component_sharing/update](https://developers.e.qq.com/v3.0/docs/api/component_sharing/update) | 修改组件共享 | ads_management |  |
| [component_sharing/get](https://developers.e.qq.com/v3.0/docs/api/component_sharing/get) | 查询组件共享 | ads_management |  |
| [component_detail/get](https://developers.e.qq.com/v3.0/docs/api/component_detail/get) | 查询创意组件详情 | ads_management |  |
| 关键词 | [bidword/add](https://developers.e.qq.com/v3.0/docs/api/bidword/add) | 创建关键词 | ads_management |
| [bidword/update](https://developers.e.qq.com/v3.0/docs/api/bidword/update) | 更新关键词 | ads_management |  |
| [bidword/delete](https://developers.e.qq.com/v3.0/docs/api/bidword/delete) | 删除关键词 | ads_management |  |
| [bidword/get](https://developers.e.qq.com/v3.0/docs/api/bidword/get) | 查询关键词 | ads_management ads_insights |  |
| 否定词 | [adgroup_negativewords/add](https://developers.e.qq.com/v3.0/docs/api/adgroup_negativewords/add) | 新增否定词 | ads_management |
| [adgroup_negativewords/update](https://developers.e.qq.com/v3.0/docs/api/adgroup_negativewords/update) | 更新否定词 | ads_management |  |
| [adgroup_negativewords/get](https://developers.e.qq.com/v3.0/docs/api/adgroup_negativewords/get) | 查询否定词 | ads_management |  |
| [negativewords/add](https://developers.e.qq.com/v3.0/docs/api/negativewords/add) | 新增否定词 | ads_management |  |
| [negativewords/update](https://developers.e.qq.com/v3.0/docs/api/negativewords/update) | 更新否定词 | ads_management |  |
| [negativewords/get](https://developers.e.qq.com/v3.0/docs/api/negativewords/get) | 查询否定词 | ads_management |  |
| 批量操作 | [batch_requests/add](https://developers.e.qq.com/v3.0/docs/api/batch_requests/add) | 批量操作 | ads_management |
| [adgroups/update_daily_budget](https://developers.e.qq.com/v3.0/docs/api/adgroups/update_daily_budget) | 批量修改营销单元日预算 | ads_management |  |
| [adgroups/update_configured_status](https://developers.e.qq.com/v3.0/docs/api/adgroups/update_configured_status) | 批量修改营销单元开启/暂停状态 | ads_management |  |
| [adgroups/update_bid_amount](https://developers.e.qq.com/v3.0/docs/api/adgroups/update_bid_amount) | 批量修改营销单元出价 | ads_management |  |
| [adgroups/update_datetime](https://developers.e.qq.com/v3.0/docs/api/adgroups/update_datetime) | 批量修改营销单元投放起止时间 | ads_management |  |
| [advertiser/update_daily_budget](https://developers.e.qq.com/v3.0/docs/api/advertiser/update_daily_budget) | 批量修改账户日预算 | ads_management |  |
| [batch_async_requests/add](https://developers.e.qq.com/v3.0/docs/api/batch_async_requests/add) | 创建批量异步请求任务 | ads_management |  |
| [batch_async_requests/get](https://developers.e.qq.com/v3.0/docs/api/batch_async_requests/get) | 获取批量异步请求任务列表 | ads_management |  |
| [batch_async_request_specification/get](https://developers.e.qq.com/v3.0/docs/api/batch_async_request_specification/get) | 获取批量异步请求任务详情 | ads_management |  |
| 搜索投放 | [search_adgroups/add](https://developers.e.qq.com/v3.0/docs/api/search_adgroups/add) | 创建营销单元 | ads_management |
| [search_adgroups/update](https://developers.e.qq.com/v3.0/docs/api/search_adgroups/update) | 更新营销单元 | ads_management |  |
| 搜索创意 | [search_dynamic_creatives/add](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add) | 创建创意 | ads_management |
| [search_dynamic_creatives/update](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/update) | 更新创意 | ads_management |  |
| 推广内容资产 | [marketing_target_assets/add](https://developers.e.qq.com/v3.0/docs/api/marketing_target_assets/add) | 创建推广内容资产 | ads_management ads_insights |
| [marketing_target_assets/update](https://developers.e.qq.com/v3.0/docs/api/marketing_target_assets/update) | 更新推广内容资产 | ads_management ads_insights |  |
| [marketing_target_assets/delete](https://developers.e.qq.com/v3.0/docs/api/marketing_target_assets/delete) | 删除推广内容资产 | ads_management ads_insights |  |
| [marketing_target_asset_detail/get](https://developers.e.qq.com/v3.0/docs/api/marketing_target_asset_detail/get) | 获取推广内容资产详情 | ads_management ads_insights |  |
| [marketing_target_assets/get](https://developers.e.qq.com/v3.0/docs/api/marketing_target_assets/get) | 获取可投放推广内容资产列表 | ads_management ads_insights |  |
| [marketing_target_types/get](https://developers.e.qq.com/v3.0/docs/api/marketing_target_types/get) | 获取可投放推广内容资产类型名称 | ads_management ads_insights |  |
| [marketing_target_asset_categories/get](https://developers.e.qq.com/v3.0/docs/api/marketing_target_asset_categories/get) | 获取可用的推广内容资产类目 | ads_management ads_insights |  |
| [marketing_target_asset_properties/get](https://developers.e.qq.com/v3.0/docs/api/marketing_target_asset_properties/get) | 获取可用的推广内容资产属性 | ads_management ads_insights |  |
| [marketing_target_asset_property_values/get](https://developers.e.qq.com/v3.0/docs/api/marketing_target_asset_property_values/get) | 获取可用的推广内容资产属性值 | ads_management ads_insights |  |
| 视频 | [videos/get](https://developers.e.qq.com/v3.0/docs/api/videos/get) | 获取视频 | ads_management |
| [videos/add](https://developers.e.qq.com/v3.0/docs/api/videos/add) | 创建视频 | ads_management |  |
| [videos/update](https://developers.e.qq.com/v3.0/docs/api/videos/update) | 更新视频 | ads_management |  |
| [videos/delete](https://developers.e.qq.com/v3.0/docs/api/videos/delete) | 删除视频 | ads_management |  |
| 音频 | [muse_audios/get](https://developers.e.qq.com/v3.0/docs/api/muse_audios/get) | 获取妙思版权音频列表 | ads_management |
| 图片 | [images/get](https://developers.e.qq.com/v3.0/docs/api/images/get) | 获取图片 | ads_management account_management |
| [images/add](https://developers.e.qq.com/v3.0/docs/api/images/add) | 创建图片 | ads_management account_management |  |
| [images/update](https://developers.e.qq.com/v3.0/docs/api/images/update) | 更新图片 | ads_management account_management |  |
| [images/delete](https://developers.e.qq.com/v3.0/docs/api/images/delete) | 删除图片 | ads_management account_management |  |
| 品牌形象 | [brand/add](https://developers.e.qq.com/v3.0/docs/api/brand/add) | 创建品牌形象 | ads_management |
| [brand/get](https://developers.e.qq.com/v3.0/docs/api/brand/get) | 获取品牌形象列表 | ads_management |  |
| 朋友圈头像昵称跳转页 | [profiles/add](https://developers.e.qq.com/v3.0/docs/api/profiles/add) | 创建朋友圈头像昵称跳转页 | ads_management |
| [profiles/delete](https://developers.e.qq.com/v3.0/docs/api/profiles/delete) | 删除朋友圈头像昵称跳转页 | ads_management |  |
| [profiles/get](https://developers.e.qq.com/v3.0/docs/api/profiles/get) | 获取朋友圈头像昵称跳转页 | ads_management |  |
| 应用分包 | [extend_package/add](https://developers.e.qq.com/v3.0/docs/api/extend_package/add) | 创建应用分包 | ads_management |
| [extend_package/update](https://developers.e.qq.com/v3.0/docs/api/extend_package/update) | 更新应用分包 | ads_management |  |
| [extend_package/get](https://developers.e.qq.com/v3.0/docs/api/extend_package/get) | 获取应用分包 | ads_management |  |
| 落地页 | [pages/get](https://developers.e.qq.com/v3.0/docs/api/pages/get) | 获取落地页列表 | ads_management |
| [wechat_pages/get](https://developers.e.qq.com/v3.0/docs/api/wechat_pages/get) | 原生页-获取原生页列表 | ads_management |  |
| [wechat_pages/add](https://developers.e.qq.com/v3.0/docs/api/wechat_pages/add) | 原生页-模板创建原生页 | ads_management |  |
| [wechat_pages/delete](https://developers.e.qq.com/v3.0/docs/api/wechat_pages/delete) | 原生页-删除原生页 | ads_management |  |
| [wechat_pages_custom/add](https://developers.e.qq.com/v3.0/docs/api/wechat_pages_custom/add) | 原生页-组件创建原生页 | ads_management |  |
| [xijing_template_list/get](https://developers.e.qq.com/v3.0/docs/api/xijing_template_list/get) | 蹊径-获取模板列表 | ads_management |  |
| [xijing_template/get](https://developers.e.qq.com/v3.0/docs/api/xijing_template/get) | 蹊径-获取落地页指定模板 | ads_management |  |
| [xijing_complex_template/get](https://developers.e.qq.com/v3.0/docs/api/xijing_complex_template/get) | 蹊径-获取落地页互动模板配置 | ads_management |  |
| [xijing_page_list/get](https://developers.e.qq.com/v3.0/docs/api/xijing_page_list/get) | 蹊径-查询落地页列表 | ads_management |  |
| [xijing_page/add](https://developers.e.qq.com/v3.0/docs/api/xijing_page/add) | 蹊径-基于模板创建落地页 | ads_management |  |
| [xijing_page_by_components/add](https://developers.e.qq.com/v3.0/docs/api/xijing_page_by_components/add) | 蹊径-基于组件创建落地页 | ads_management |  |
| [xijing_page_interactive/add](https://developers.e.qq.com/v3.0/docs/api/xijing_page_interactive/add) | 蹊径-创建互动落地页 | ads_management |  |
| [xijing_page/update](https://developers.e.qq.com/v3.0/docs/api/xijing_page/update) | 蹊径-落地页送审 | ads_management |  |
| [xijing_page/delete](https://developers.e.qq.com/v3.0/docs/api/xijing_page/delete) | 蹊径-删除落地页 | ads_management |  |
| [official_landing_page_component/add](https://developers.e.qq.com/v3.0/docs/api/official_landing_page_component/add) | 落地页-基于组件创建官方落地页 | ads_management |  |
| [official_landing_page_detail/get](https://developers.e.qq.com/v3.0/docs/api/official_landing_page_detail/get) | 落地页-获取官方落地页详情 | ads_management |  |
| [official_landing_page_list/get](https://developers.e.qq.com/v3.0/docs/api/official_landing_page_list/get) | 落地页-获取官方落地页列表 | ads_management |  |
| [official_landing_page_submit/update](https://developers.e.qq.com/v3.0/docs/api/official_landing_page_submit/update) | 落地页-送审官方落地页 | ads_management |  |
| [official_landing_page/delete](https://developers.e.qq.com/v3.0/docs/api/official_landing_page/delete) | 落地页-删除官方落地页 | ads_management |  |
| 短剧售卖策略 | [landing_page_sell_strategy/get](https://developers.e.qq.com/v3.0/docs/api/landing_page_sell_strategy/get) | 短剧售卖策略-查询售卖策略列表 | ads_management |
| [landing_page_sell_strategy/add](https://developers.e.qq.com/v3.0/docs/api/landing_page_sell_strategy/add) | 短剧售卖策略-创建售卖策略 | ads_management |  |
| 视频号 | [wechat_channels_accounts/get](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_accounts/get) | 获取可投视频号列表 | ads_management |
| [channels_userpageobjects/get](https://developers.e.qq.com/v3.0/docs/api/channels_userpageobjects/get) | 获取视频号动态列表 | ads_management |  |
| [channels_finderobject/get](https://developers.e.qq.com/v3.0/docs/api/channels_finderobject/get) | 获取视频号动态详情 | ads_management |  |
| [channels_livenoticeinfo/get](https://developers.e.qq.com/v3.0/docs/api/channels_livenoticeinfo/get) | 获取视频号直播预约记录列表 | ads_management |  |
| 视频号授权 | [wechat_channels_authorization/add](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_authorization/add) | 新增视频号授权 | ads_management |
| [wechat_channels_authorization/update](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_authorization/update) | 更新视频号授权 | ads_management |  |
| [wechat_channels_authorization/get](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_authorization/get) | 拉取授权视频号列表 | ads_management |  |
| [wechat_channels_authorization/delete](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_authorization/delete) | 删除视频号授权 | ads_management |  |
| 视频号投放专用账号 | [wechat_channels_ad_account_wechat_binding/add](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account_wechat_binding/add) | 绑定微信 | ads_management |
| [wechat_channels_ad_account_wechat_binding/get](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account_wechat_binding/get) | 查询微信绑定状态 | ads_management |  |
| [wechat_channels_ad_account_validation/get](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account_validation/get) | 校验开户数据 | ads_management |  |
| [wechat_channels_ad_account/add](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account/add) | 新增投放专用视频号账号 | ads_management |  |
| [wechat_channels_ad_account/update](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account/update) | 更新投放专用视频号账号 | ads_management |  |
| [wechat_channels_ad_account/get](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account/get) | 拉取投放专用视频号账号列表 | ads_management |  |
| [wechat_channels_ad_account/delete](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account/delete) | 删除投放专用视频号账号 | ads_management |  |
| [wechat_channels_ad_account_certification_file/add](https://developers.e.qq.com/v3.0/docs/api/wechat_channels_ad_account_certification_file/add) | 上传资质文件 | ads_management |  |
| 微信小店 | [wechat_shop/get](https://developers.e.qq.com/v3.0/docs/api/wechat_shop/get) | 查询微信小店信息 | ads_management |
| [wechat_shop_authorization_validation/get](https://developers.e.qq.com/v3.0/docs/api/wechat_shop_authorization_validation/get) | 微信小店授权校验 | ads_management |  |
| [wechat_shop_authorization/get](https://developers.e.qq.com/v3.0/docs/api/wechat_shop_authorization/get) | 查询微信小店授权列表信息 | ads_management |  |
| [wechat_shop_authorization/add](https://developers.e.qq.com/v3.0/docs/api/wechat_shop_authorization/add) | 发起微信小店授权 | ads_management |  |
| [wechat_shop_authorization_status/update](https://developers.e.qq.com/v3.0/docs/api/wechat_shop_authorization_status/update) | 修改微信小店授权状态 | ads_management |  |
| 公众号 | [wechat_official_accounts/get](https://developers.e.qq.com/v3.0/docs/api/wechat_official_accounts/get) | 获取可投公众号列表 | ads_management |
| Android 渠道包 | [android_channel/get](https://developers.e.qq.com/v3.0/docs/api/android_channel/get) | 获取 Android 渠道包 | ads_management |
| 优量汇流量包 | [union_position_packages/get](https://developers.e.qq.com/v3.0/docs/api/union_position_packages/get) | 获取优量汇流量包 | ads_management |
| [union_position_packages/add](https://developers.e.qq.com/v3.0/docs/api/union_position_packages/add) | 创建优量汇流量包 | ads_management |  |
| [union_position_packages/update](https://developers.e.qq.com/v3.0/docs/api/union_position_packages/update) | 更新优量汇流量包 | ads_management |  |
| [union_position_packages/delete](https://developers.e.qq.com/v3.0/docs/api/union_position_packages/delete) | 删除优量汇流量包 | ads_management |  |
| 弹幕 | [barrage/add](https://developers.e.qq.com/v3.0/docs/api/barrage/add) | 添加弹幕 | ads_management |
| [barrage/get](https://developers.e.qq.com/v3.0/docs/api/barrage/get) | 获取弹幕 | ads_management |  |
| [barrage_recommend/get](https://developers.e.qq.com/v3.0/docs/api/barrage_recommend/get) | 获取推荐弹幕 | ads_management |  |
| 本地门店 | [local_stores/add](https://developers.e.qq.com/v3.0/docs/api/local_stores/add) | 批量录入门店 | ads_management |
| [local_stores/update](https://developers.e.qq.com/v3.0/docs/api/local_stores/update) | 批量编辑门店 | ads_management |  |
| [local_stores/delete](https://developers.e.qq.com/v3.0/docs/api/local_stores/delete) | 批量删除门店信息 | ads_management |  |
| [local_stores/get](https://developers.e.qq.com/v3.0/docs/api/local_stores/get) | 查询门店信息 | ads_management |  |
| [local_stores_address_parsing_result/get](https://developers.e.qq.com/v3.0/docs/api/local_stores_address_parsing_result/get) | 解析门店地址 | ads_management |  |
| [local_stores_search_info/get](https://developers.e.qq.com/v3.0/docs/api/local_stores_search_info/get) | 搜索门店 | ads_management |  |
| [local_stores_wxpay_merchants/get](https://developers.e.qq.com/v3.0/docs/api/local_stores_wxpay_merchants/get) | 查询微信支付商户号 | ads_management |  |
| [local_stores_categories/get](https://developers.e.qq.com/v3.0/docs/api/local_stores_categories/get) | 查询门店类目 | ads_management |  |
| [local_store_packages/add](https://developers.e.qq.com/v3.0/docs/api/local_store_packages/add) | 创建门店包 | ads_management |  |
| [local_store_packages/get](https://developers.e.qq.com/v3.0/docs/api/local_store_packages/get) | 获取门店包 | ads_management |  |
| [local_store_packages/update](https://developers.e.qq.com/v3.0/docs/api/local_store_packages/update) | 更新门店包 | ads_management |  |
| [local_store_packages/delete](https://developers.e.qq.com/v3.0/docs/api/local_store_packages/delete) | 删除门店包 | ads_management |  |
| 直播间组件 | [live_room_components/add](https://developers.e.qq.com/v3.0/docs/api/live_room_components/add) | 创建直播间组件 | ads_management |
| [live_room_components/update](https://developers.e.qq.com/v3.0/docs/api/live_room_components/update) | 更新直播间组件 | ads_management |  |
| [live_room_components/get](https://developers.e.qq.com/v3.0/docs/api/live_room_components/get) | 查询直播间组件 | ads_management |  |
| [live_room_components/delete](https://developers.e.qq.com/v3.0/docs/api/live_room_components/delete) | 删除直播间组件 | ads_management |  |
| [live_room_component_status/update](https://developers.e.qq.com/v3.0/docs/api/live_room_component_status/update) | 更新直播间组件状态 | ads_management |  |
| 动态商品图片 | [dynamic_ad_images/add](https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_images/add) | 根据 DPA 模板生成图片 | ads_management |
| [dynamic_ad_images/get](https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_images/get) | 获取 DPA 模板生成的图片 | ads_management |  |
| 动态商品视频 | [dynamic_ad_video/add](https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_video/add) | 根据 DPA 模板生成视频 | ads_management |
| [dynamic_ad_video/get](https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_video/get) | 获取 DPA 模板生成的视频 | ads_management |  |
| 商品库 | [product_catalogs/add](https://developers.e.qq.com/v3.0/docs/api/product_catalogs/add) | 创建商品库 | ads_management |
| [product_catalogs/get](https://developers.e.qq.com/v3.0/docs/api/product_catalogs/get) | 获取商品库 | ads_management |  |
| [product_items/add](https://developers.e.qq.com/v3.0/docs/api/product_items/add) | 添加商品 | ads_management |  |
| [product_items/update](https://developers.e.qq.com/v3.0/docs/api/product_items/update) | 更新商品信息 | ads_management |  |
| [product_items/delete](https://developers.e.qq.com/v3.0/docs/api/product_items/delete) | 删除商品信息 | ads_management |  |
| [product_items/batch_update](https://developers.e.qq.com/v3.0/docs/api/product_items/batch_update) | 批量更新商品信息 | ads_management |  |
| [product_series/add](https://developers.e.qq.com/v3.0/docs/api/product_series/add) | 创建商品系列 | ads_management |  |
| [product_items/get](https://developers.e.qq.com/v3.0/docs/api/product_items/get) | 获取商品 | ads_management |  |
| [product_items_detail/get](https://developers.e.qq.com/v3.0/docs/api/product_items_detail/get) | 获取商品详情 | ads_management |  |
| [product_items_verticals/get](https://developers.e.qq.com/v3.0/docs/api/product_items_verticals/get) | 获取行业列表 | ads_management |  |
| [products_system_status/get](https://developers.e.qq.com/v3.0/docs/api/products_system_status/get) | 获取审核失败的商品 | ads_management |  |
| [product_categories_list/get](https://developers.e.qq.com/v3.0/docs/api/product_categories_list/get) | 获取商品类目 | ads_management |  |
| [product_series/get](https://developers.e.qq.com/v3.0/docs/api/product_series/get) | 获取商品系列 | ads_management |  |
| [categories/get](https://developers.e.qq.com/v3.0/docs/api/categories/get) | 获取腾讯系商品类目 | ads_management |  |
| [categories_attribute/get](https://developers.e.qq.com/v3.0/docs/api/categories_attribute/get) | 获取商品属性 | ads_management |  |
| [wechat_store_catalogs/get](https://developers.e.qq.com/v3.0/docs/api/wechat_store_catalogs/get) | 获取微信小店商品库 | ads_management |  |
| [wechat_store_product_items/get](https://developers.e.qq.com/v3.0/docs/api/wechat_store_product_items/get) | 获取微信小店商品 | ads_management |  |
| 营销链路 | [conversion_links/get](https://developers.e.qq.com/v3.0/docs/api/conversion_links/get) | 获取可用营销链路模板 | ads_management ads_insights |
| [conversion_link_assets/add](https://developers.e.qq.com/v3.0/docs/api/conversion_link_assets/add) | 新建营销链路 | ads_management ads_insights |  |
| [conversion_link_assets/get](https://developers.e.qq.com/v3.0/docs/api/conversion_link_assets/get) | 获取营销链路列表 | ads_management ads_insights |  |
| [conversion_link_assets/update](https://developers.e.qq.com/v3.0/docs/api/conversion_link_assets/update) | 更新营销链路 | ads_management ads_insights |  |
| [conversion_link_asset_available/get](https://developers.e.qq.com/v3.0/docs/api/conversion_link_asset_available/get) | 获取可投放营销链路列表 | ads_management |  |
| 投放数据洞察 | [daily_reports/get](https://developers.e.qq.com/v3.0/docs/api/daily_reports/get) | 获取日报表 | ads_insights |
| [hourly_reports/get](https://developers.e.qq.com/v3.0/docs/api/hourly_reports/get) | 获取小时报表 | ads_insights |  |
| [targeting_tag_reports/get](https://developers.e.qq.com/v3.0/docs/api/targeting_tag_reports/get) | 获取定向标签报表 | ads_insights |  |
| [ad_union_reports/get](https://developers.e.qq.com/v3.0/docs/api/ad_union_reports/get) | 获取联盟广告位报表 | ads_insights |  |
| [async_reports/add](https://developers.e.qq.com/v3.0/docs/api/async_reports/add) | 创建异步报表任务 | ads_insights |  |
| [async_reports/get](https://developers.e.qq.com/v3.0/docs/api/async_reports/get) | 获取异步报表任务 | ads_insights |  |
| [async_report_files/get](https://developers.e.qq.com/v3.0/docs/api/async_report_files/get) | 获取文件接口 | ads_insights |  |
| 创意资产洞察 | [dc_component_summary_info/get](https://developers.e.qq.com/v3.0/docs/api/dc_component_summary_info/get) | 获取创意资产总结 | ads_insights |
| 订单数据 | [ecommerce_order/get](https://developers.e.qq.com/v3.0/docs/api/ecommerce_order/get) | 获取订单数据 | ads_insights |
| [ecommerce_order/update](https://developers.e.qq.com/v3.0/docs/api/ecommerce_order/update) | 更新订单状态 | ads_insights |  |
| 线索管理 | [leads_list/get](https://developers.e.qq.com/v3.0/docs/api/leads_list/get) | 获取线索列表 | ads_management ads_insights account_management audience_management user_actions |
| [leads/add](https://developers.e.qq.com/v3.0/docs/api/leads/add) | 新增线索 | ads_management ads_insights account_management audience_management user_actions |  |
| [leads_status/update](https://developers.e.qq.com/v3.0/docs/api/leads_status/update) | 更新线索状态 | ads_management ads_insights account_management audience_management user_actions |  |
| [leads/update](https://developers.e.qq.com/v3.0/docs/api/leads/update) | 更新线索信息 | ads_management ads_insights account_management audience_management user_actions |  |
| [leads_claim/update](https://developers.e.qq.com/v3.0/docs/api/leads_claim/update) | 更新线索归因信息 | ads_management ads_insights account_management audience_management user_actions |  |
| [leads_action_type_report/add](https://developers.e.qq.com/v3.0/docs/api/leads_action_type_report/add) | 新增线索行为上报 | ads_management ads_insights account_management audience_management user_actions |  |
| [leads_invalid_pay/get](https://developers.e.qq.com/v3.0/docs/api/leads_invalid_pay/get) | 获取线索无效赔付 | ads_management ads_insights account_management audience_management user_actions |  |
| [leads_call_virtual_number/get](https://developers.e.qq.com/v3.0/docs/api/leads_call_virtual_number/get) | 获取中间号 | ads_management ads_insights account_management audience_management user_actions |  |
| [leads_call_record/get](https://developers.e.qq.com/v3.0/docs/api/leads_call_record/get) | 获取通话结果 | ads_management ads_insights account_management audience_management user_actions |  |
| [leads_call_records/get](https://developers.e.qq.com/v3.0/docs/api/leads_call_records/get) | 获取一个账号下的全部通话结果 | ads_management ads_insights account_management audience_management user_actions |  |
| [leads_voip_call_token/get](https://developers.e.qq.com/v3.0/docs/api/leads_voip_call_token/get) | 获取网络电话 token | ads_management ads_insights account_management audience_management user_actions |  |
| [leads_voip_call/add](https://developers.e.qq.com/v3.0/docs/api/leads_voip_call/add) | 网络电话呼叫 | ads_management ads_insights account_management audience_management user_actions |  |
| 汽车视频号厂店平台 | [video_channel_live_data/get](https://developers.e.qq.com/v3.0/docs/api/video_channel_live_data/get) | 视频号直播数据拉取 | ads_management ads_insights account_management audience_management user_actions |
| [video_channel_leads_data/get](https://developers.e.qq.com/v3.0/docs/api/video_channel_leads_data/get) | 视频号线索数据拉取 | ads_management ads_insights account_management audience_management user_actions |  |
| [video_channel_fans_data/get](https://developers.e.qq.com/v3.0/docs/api/video_channel_fans_data/get) | 视频号粉丝数据拉取 | ads_management ads_insights account_management audience_management user_actions |  |
| [video_channel_dealer_data/get](https://developers.e.qq.com/v3.0/docs/api/video_channel_dealer_data/get) | 视频号经销商聚合数据拉取 | ads_management ads_insights account_management audience_management user_actions |  |
| 文案助手 | [creativetools_text/get](https://developers.e.qq.com/v3.0/docs/api/creativetools_text/get) | 获取创意文案 | ads_management |
| 图片处理 | [image_processing/add](https://developers.e.qq.com/v3.0/docs/api/image_processing/add) | 进行图片处理 | ads_management |
| 通配符 | [wildcards/get](https://developers.e.qq.com/v3.0/docs/api/wildcards/get) | 获取落地页通配符 | ads_management |
| 自动生成创意 | [programmed_commponent_preview/add](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview/add) | 组件化衍生预览创建 | ads_management |
| [programmed_commponent_preview/update](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview/update) | 组件化衍生预览更新 | ads_management |  |
| [programmed_commponent_preview/delete](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview/delete) | 组件化衍生预览删除 | ads_management |  |
| [programmed_commponent_preview/get](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview/get) | 组件化衍生预览查询 | ads_management |  |
| [programmed_commponent_preview_template/update](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_preview_template/update) | 组件化衍生模版替换 | ads_management |  |
| [programmed_commponent_result/get](https://developers.e.qq.com/v3.0/docs/api/programmed_commponent_result/get) | 组件化衍生成品查询 | ads_management |  |
| [programmed_template/get](https://developers.e.qq.com/v3.0/docs/api/programmed_template/get) | 获取模板列表 | ads_management |  |
| [programmed/get](https://developers.e.qq.com/v3.0/docs/api/programmed/get) | 获取模板预览(待废弃) | ads_management |  |
| [programmed_material_mappings/get](https://developers.e.qq.com/v3.0/docs/api/programmed_material_mappings/get) | 获取衍生素材的原素材关系(待废弃) | ads_management |  |
| 素材标注 | [material_ai_annotation/add](https://developers.e.qq.com/v3.0/docs/api/material_ai_annotation/add) | 素材 AI 标注 | ads_management |
| 素材标签 | [material_labels/add](https://developers.e.qq.com/v3.0/docs/api/material_labels/add) | 创建素材标签 | ads_management |
| [material_labels/delete](https://developers.e.qq.com/v3.0/docs/api/material_labels/delete) | 删除素材标签 | ads_management |  |
| [material_labels/update](https://developers.e.qq.com/v3.0/docs/api/material_labels/update) | 更新素材标签 | ads_management |  |
| [material_labels/get](https://developers.e.qq.com/v3.0/docs/api/material_labels/get) | 获取素材标签列表 | ads_management |  |
| [material_labels/bind](https://developers.e.qq.com/v3.0/docs/api/material_labels/bind) | 绑定标签素材关联关系 | ads_management |  |
| 词包 | [ad_param/get](https://developers.e.qq.com/v3.0/docs/api/ad_param/get) | 获取词包 | ads_management ads_insights |
| 动态商品图片模板 | [dynamic_ad_image_templates/get](https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_image_templates/get) | 获取动态商品图片模板 | ads_management |
| 动态商品视频模板 | [dynamic_ad_video_templates/get](https://developers.e.qq.com/v3.0/docs/api/dynamic_ad_video_templates/get) | 获取动态商品视频模板 | ads_management |
| 动态内容素材 | [material_dcatag/add](https://developers.e.qq.com/v3.0/docs/api/material_dcatag/add) | 创建动态内容素材标签绑定 | ads_management |
| [material_dcatag/get](https://developers.e.qq.com/v3.0/docs/api/material_dcatag/get) | 获取动态内容素材标签绑定 | ads_management |  |
| [material_dcaset/add](https://developers.e.qq.com/v3.0/docs/api/material_dcaset/add) | 创建动态内容素材集合绑定 | ads_management |  |
| 妙思 AI 工具 | [muse_ai_task/add](https://developers.e.qq.com/v3.0/docs/api/muse_ai_task/add) | 创建妙思任务 | ads_management |
| [muse_ai_task/get](https://developers.e.qq.com/v3.0/docs/api/muse_ai_task/get) | 获取妙思任务结果 | ads_management |  |
| [muse_ai_material/add](https://developers.e.qq.com/v3.0/docs/api/muse_ai_material/add) | 选择并保存妙思 AI 素材 | ads_management |  |
| [muse_ai_ugc/add](https://developers.e.qq.com/v3.0/docs/api/muse_ai_ugc/add) | 二次编辑素材回传接口 | ads_management |  |
| 警示语工具（待下线） | [watermarks/add](https://developers.e.qq.com/v3.0/docs/api/watermarks/add) | 添加素材警示语 | ads_management |
| [watermarks/get](https://developers.e.qq.com/v3.0/docs/api/watermarks/get) | 获取警示语添加记录 | ads_management |  |
| 素材异步任务(警示语) | [material_async_tasks/add](https://developers.e.qq.com/v3.0/docs/api/material_async_tasks/add) | 添加异步任务(警示语) | ads_management |
| [material_async_tasks/get](https://developers.e.qq.com/v3.0/docs/api/material_async_tasks/get) | 获取异步任务(警示语) | ads_management |  |
| 创意增强 MAX | [muse_derive_switch_settings/get](https://developers.e.qq.com/v3.0/docs/api/muse_derive_switch_settings/get) | 查询生成偏好设置 | ads_management |
| 预估能力 | [estimation/get](https://developers.e.qq.com/v3.0/docs/api/estimation/get) | 获取预估覆盖人数 | ads_management |
| [bid_simulation/get](https://developers.e.qq.com/v3.0/docs/api/bid_simulation/get) | 获取出价模拟信息 | ads_management |  |
| 联合预算工具 | [joint_budget_rules/get](https://developers.e.qq.com/v3.0/docs/api/joint_budget_rules/get) | 获取联合预算 | ads_management |
| [joint_budget_rules/add](https://developers.e.qq.com/v3.0/docs/api/joint_budget_rules/add) | 创建联合预算 | ads_management |  |
| [joint_budget_rules/update](https://developers.e.qq.com/v3.0/docs/api/joint_budget_rules/update) | 更新联合预算 | ads_management |  |
| 微信原生页 | [wechat_pages_grantinfo/get](https://developers.e.qq.com/v3.0/docs/api/wechat_pages_grantinfo/get) | 获取原生页授权方信息 | ads_management |
| [wechat_pages_csgrouplist/get](https://developers.e.qq.com/v3.0/docs/api/wechat_pages_csgrouplist/get) | 获取企业微信组件客服组 | ads_management |  |
| [wechat_pages_csgrouplist/add](https://developers.e.qq.com/v3.0/docs/api/wechat_pages_csgrouplist/add) | 增加企业微信组件客服组 | ads_management |  |
| [wechat_pages_csgrouplist/update](https://developers.e.qq.com/v3.0/docs/api/wechat_pages_csgrouplist/update) | 更新企业微信组件客服组 | ads_management |  |
| [wechat_pages_csgroup_user/get](https://developers.e.qq.com/v3.0/docs/api/wechat_pages_csgroup_user/get) | 获取企业微信组件客服列表 | ads_management |  |
| [wechat_pages_csgroup_status/update](https://developers.e.qq.com/v3.0/docs/api/wechat_pages_csgroup_status/update) | 更新企业微信客服状态 | ads_management |  |
| 游戏特征信息 | [game_feature_tags/get](https://developers.e.qq.com/v3.0/docs/api/game_feature_tags/get) | 获取游戏特征标签 | ads_management |
| [game_feature/add](https://developers.e.qq.com/v3.0/docs/api/game_feature/add) | 添加游戏 App 特征 | ads_management |  |
| [game_feature/get](https://developers.e.qq.com/v3.0/docs/api/game_feature/get) | 获取游戏 App 特征 | ads_management |  |
| [game_feature_v6/add](https://developers.e.qq.com/v3.0/docs/api/game_feature_v6/add) | 添加游戏 App 特征 V6 版本 | ads_management |  |
| [game_feature_v6/get](https://developers.e.qq.com/v3.0/docs/api/game_feature_v6/get) | 获取游戏 App 特征 V6 版本 | ads_management |  |
| 转化归因 | [conversions/add](https://developers.e.qq.com/v3.0/docs/api/conversions/add) | 新增转化归因 | ads_management ads_insights |
| [conversions/get](https://developers.e.qq.com/v3.0/docs/api/conversions/get) | 获取转化归因 | ads_management ads_insights |  |
| 投放能力 | [optimization_goal_permissions/get](https://developers.e.qq.com/v3.0/docs/api/optimization_goal_permissions/get) | 查询优化目标权限 | ads_management |
| 创意形式 | [creative_template/get](https://developers.e.qq.com/v3.0/docs/api/creative_template/get) | 创意形式详情信息查询 | ads_management ads_insights |
| [creative_template_list/get](https://developers.e.qq.com/v3.0/docs/api/creative_template_list/get) | 获取创意形式列表 | ads_management ads_insights |  |
| [component_depends/get](https://developers.e.qq.com/v3.0/docs/api/component_depends/get) | 获取创意形式详情中组件选项依赖关系 | ads_management ads_insights |  |
| 创意组件元数据 | [components_metadata/get](https://developers.e.qq.com/v3.0/docs/api/components_metadata/get) | 创意组件元数据查询 | ads_management |
| 搜索推广工具 | [keyword_recommend/get](https://developers.e.qq.com/v3.0/docs/api/keyword_recommend/get) | 查询关键词推荐结果 | ads_management |
| [bidword_flow/get](https://developers.e.qq.com/v3.0/docs/api/bidword_flow/get) | 查询关键词流量 | ads_management |  |
| [business_point/get](https://developers.e.qq.com/v3.0/docs/api/business_point/get) | 查询行业业务点 | ads_management |  |
| 投放预览 | [adcreative_previews/add](https://developers.e.qq.com/v3.0/docs/api/adcreative_previews/add) | 创建预览(即将下线) | ads_management |
| [adcreative_previews/get](https://developers.e.qq.com/v3.0/docs/api/adcreative_previews/get) | 获取广告预览记录 | ads_management |  |
| [adcreative_previews_qrcode/get](https://developers.e.qq.com/v3.0/docs/api/adcreative_previews_qrcode/get) | 获取广告预览二维码 | ads_management |  |
| [dynamic_creative_previews/add](https://developers.e.qq.com/v3.0/docs/api/dynamic_creative_previews/add) | 创建创意在线预览(即将下线) | ads_management |  |
| [online_preview_qrcode/get](https://developers.e.qq.com/v3.0/docs/api/online_preview_qrcode/get) | 获取微信流量广告预览二维码 | ads_management |  |
| 创意预览 | [creative_template_previews/get](https://developers.e.qq.com/v3.0/docs/api/creative_template_previews/get) | 获取广告创意预览 | ads_management |
| 创意标签 | [ad_label/get](https://developers.e.qq.com/v3.0/docs/api/ad_label/get) | 获取创意标签 | ads_management |
| 定向标签 | [targeting_tags/get](https://developers.e.qq.com/v3.0/docs/api/targeting_tags/get) | 获取定向标签 | ads_management |
| [targeting_tags_uv/get](https://developers.e.qq.com/v3.0/docs/api/targeting_tags_uv/get) | 获取行为/兴趣/意向标签覆盖人群数 | ads_management |  |
| 获取场景定向标签 | [scene_spec_tags/get](https://developers.e.qq.com/v3.0/docs/api/scene_spec_tags/get) | 获取场景定向标签 | ads_management |
| 获取营销表达组合 | [marketing_rules/get](https://developers.e.qq.com/v3.0/docs/api/marketing_rules/get) | 获取营销表达组合 | ads_management |
| 异步任务 | [async_tasks/add](https://developers.e.qq.com/v3.0/docs/api/async_tasks/add) | 创建异步任务 | ads_management |
| [async_tasks/get](https://developers.e.qq.com/v3.0/docs/api/async_tasks/get) | 获取异步任务 | ads_management |  |
| 3.0 切换工具 | [account_version/get](https://developers.e.qq.com/v3.0/docs/api/account_version/get) | 获取广告主 3.0 投放状态版本 | ads_management |
| 视频号精选评论管理 | [finder_ad_object_list/get](https://developers.e.qq.com/v3.0/docs/api/finder_ad_object_list/get) | 拉取广告视频动态列表 | ads_management |
| [comment_list/get](https://developers.e.qq.com/v3.0/docs/api/comment_list/get) | 拉取广告视频动态评论 | ads_management |  |
| [object_comment_flag/update](https://developers.e.qq.com/v3.0/docs/api/object_comment_flag/update) | 设置开启、关闭精选评论 | ads_management |  |
| [channels_comment/add](https://developers.e.qq.com/v3.0/docs/api/channels_comment/add) | 视频号动态新增评论 | ads_management |  |
| [channels_comment/delete](https://developers.e.qq.com/v3.0/docs/api/channels_comment/delete) | 视频号动态删除评论 | ads_management |  |
| rta 策略管理 | [rta_info/get](https://developers.e.qq.com/v3.0/docs/api/rta_info/get) | 获取 rta 信息 | ads_management |
| [rtatarget/get](https://developers.e.qq.com/v3.0/docs/api/rtatarget/get) | 获取 rta 策略信息 | ads_management |  |
| [rtatarget/add](https://developers.e.qq.com/v3.0/docs/api/rtatarget/add) | 创建 rta 策略信息 | ads_management |  |
| [rtatarget/delete](https://developers.e.qq.com/v3.0/docs/api/rtatarget/delete) | 删除 rta 策略信息 | ads_management |  |
| [rtatarget_bind/get](https://developers.e.qq.com/v3.0/docs/api/rtatarget_bind/get) | 获取 rta 策略绑定信息 | ads_management |  |
| [rtatarget_bind/add](https://developers.e.qq.com/v3.0/docs/api/rtatarget_bind/add) | 创建 rta 策略绑定信息 | ads_management |  |
| [rtatarget_bind/delete](https://developers.e.qq.com/v3.0/docs/api/rtatarget_bind/delete) | 删除 rta 策略绑定信息 | ads_management |  |
| rta 实验数据查询 | [rtaexp/get](https://developers.e.qq.com/v3.0/docs/api/rtaexp/get) | 获取 rta 实验信息 | ads_management |
| [rtaexp_dsp_tag_data/get](https://developers.e.qq.com/v3.0/docs/api/rtaexp_dsp_tag_data/get) | 获取 rta 的 dsp_tag 数据 | ads_management |  |
| [rtaexp_data_roi/get](https://developers.e.qq.com/v3.0/docs/api/rtaexp_data_roi/get) | 获取 rta 实验数据 | ads_management |  |
| 微信小游戏相关 | [get_wx_game_app_gift_pack/get](https://developers.e.qq.com/v3.0/docs/api/get_wx_game_app_gift_pack/get) | 获取微信小游戏礼包信息 | ads_management |
| [wx_game_playable_page/get](https://developers.e.qq.com/v3.0/docs/api/wx_game_playable_page/get) | 获取微信小游戏试玩页 | ads_management |  |
| 操作日志 | [operation_log_list/get](https://developers.e.qq.com/v3.0/docs/api/operation_log_list/get) | 获取操作日志 | ads_management |
| 创意建议 | [creative_recommend/get](https://developers.e.qq.com/v3.0/docs/api/creative_recommend/get) | 获取创意建议 | ads_management |
| 客户投放偏好 | [advertiser_config/add](https://developers.e.qq.com/v3.0/docs/api/advertiser_config/add) | 设置客户投放偏好 | ads_management |
| [advertiser_config/get](https://developers.e.qq.com/v3.0/docs/api/advertiser_config/get) | 获取客户投放偏好 | ads_management |  |
| 资产相似度 | [asset_similarity_detail/get](https://developers.e.qq.com/v3.0/docs/api/asset_similarity_detail/get) | 获取创意资产相似度检测详情 | ads_management |
| [asset_similarity_detail/update](https://developers.e.qq.com/v3.0/docs/api/asset_similarity_detail/update) | 更新创意资产相似度状态 | ads_management |  |
| 客户人群 | [custom_audiences/add](https://developers.e.qq.com/v3.0/docs/api/custom_audiences/add) | 创建客户人群 | audience_management ads_management user_actions |
| [custom_audiences/get](https://developers.e.qq.com/v3.0/docs/api/custom_audiences/get) | 获取客户人群 | audience_management ads_management user_actions |  |
| [custom_audiences/update](https://developers.e.qq.com/v3.0/docs/api/custom_audiences/update) | 更新客户人群 | audience_management ads_management user_actions |  |
| [custom_audiences/delete](https://developers.e.qq.com/v3.0/docs/api/custom_audiences/delete) | 删除客户人群 | audience_management ads_management user_actions |  |
| 客户人群数据文件 | [custom_audience_files/add](https://developers.e.qq.com/v3.0/docs/api/custom_audience_files/add) | 上传客户人群数据文件 | audience_management ads_management user_actions |
| [custom_audience_files/get](https://developers.e.qq.com/v3.0/docs/api/custom_audience_files/get) | 获取客户人群数据文件 | audience_management ads_management user_actions |  |
| 人群授权 | [audience_grant_relations/add](https://developers.e.qq.com/v3.0/docs/api/audience_grant_relations/add) | 添加人群授权 | audience_management ads_management user_actions |
| [audience_grant_relations/get](https://developers.e.qq.com/v3.0/docs/api/audience_grant_relations/get) | 获取人群授权信息 | audience_management ads_management user_actions |  |
| 客户人群数预估 | [custom_audience_estimations/get](https://developers.e.qq.com/v3.0/docs/api/custom_audience_estimations/get) | 人群覆盖数预估 | audience_management ads_management user_actions |
| 标签人群 | [labels/get](https://developers.e.qq.com/v3.0/docs/api/labels/get) | 标签广场标签获取 | audience_management ads_management user_actions |
| 用户行为数据源 | [user_action_sets/add](https://developers.e.qq.com/v3.0/docs/api/user_action_sets/add) | 创建用户行为数据源 | ads_management audience_management user_actions |
| [user_action_sets/get](https://developers.e.qq.com/v3.0/docs/api/user_action_sets/get) | 获取用户行为数据源 | ads_management audience_management user_actions |  |
| [user_action_set_reports/get](https://developers.e.qq.com/v3.0/docs/api/user_action_set_reports/get) | 获取用户行为数据源报表 | ads_management audience_management user_actions |  |
| [data_source_dispatch/get](https://developers.e.qq.com/v3.0/docs/api/data_source_dispatch/get) | 获取数据源分发关系 | ads_management audience_management user_actions |  |
| 用户行为数据 | [user_actions/add](https://developers.e.qq.com/v3.0/docs/api/user_actions/add) | 上传用户行为数据 | ads_management audience_management user_actions |
| 审核结果 | [dynamic_creative_review_results/get](https://developers.e.qq.com/v3.0/docs/api/dynamic_creative_review_results/get) | 获取创意审核结果 | ads_management |
| [component_review_results/get](https://developers.e.qq.com/v3.0/docs/api/component_review_results/get) | 获取组件审核结果 | ads_management |  |
| 元素申诉复审 | [element_appeal_review/get](https://developers.e.qq.com/v3.0/docs/api/element_appeal_review/get) | 获取元素申诉复审结果 | ads_management |
| [element_appeal_review/add](https://developers.e.qq.com/v3.0/docs/api/element_appeal_review/add) | 发起元素申诉复审 | ads_management |  |
| [element_appeal_quota/get](https://developers.e.qq.com/v3.0/docs/api/element_appeal_quota/get) | 获取元素申诉复审配额 | ads_management |  |
| 组件元素催审 | [component_element_urge_review/get](https://developers.e.qq.com/v3.0/docs/api/component_element_urge_review/get) | 获取创意组件元素催审状态 | ads_management |
| [component_element_urge_review/add](https://developers.e.qq.com/v3.0/docs/api/component_element_urge_review/add) | 组件元素催审 | ads_management |  |
| 素材风险检测 | [review_element_prereview_results/get](https://developers.e.qq.com/v3.0/docs/api/review_element_prereview_results/get) | 获取元素预审结果 | ads_management |
| 违规处罚 | [punishment_config/get](https://developers.e.qq.com/v3.0/docs/api/punishment_config/get) | 获取处罚系统配置 | ads_management |
| [punishment_query/get](https://developers.e.qq.com/v3.0/docs/api/punishment_query/get) | 获取违规处罚列表 | ads_management |  |
| [punish_metrics/get](https://developers.e.qq.com/v3.0/docs/api/punish_metrics/get) | 获取计量处罚指标 | ads_management |  |
| [punish_uid_metrics/get](https://developers.e.qq.com/v3.0/docs/api/punish_uid_metrics/get) | 获取计量处罚 UID 指标 | ads_management |  |
| [punish_detail/get](https://developers.e.qq.com/v3.0/docs/api/punish_detail/get) | 获取计量处罚明细 | ads_management |  |
| [illegal_complaint/get](https://developers.e.qq.com/v3.0/docs/api/illegal_complaint/get) | 获取违规申诉列表 | ads_management |  |
| [illegal_complaint/add](https://developers.e.qq.com/v3.0/docs/api/illegal_complaint/add) | 创建违规申诉 | ads_management |  |

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
