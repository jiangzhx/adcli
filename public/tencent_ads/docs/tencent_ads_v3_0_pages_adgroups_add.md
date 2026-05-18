---
title: 创建新投放
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/adgroups/add
doc_id: tencent_ads_v3_0_pages_adgroups_add
source_id: tencent_ads_v3_0_pages_adgroups_add
---
# 创建新投放

# 1. 新投放广告概述

新版腾讯广告投放平台，进行了广告投放的重新设计，以更精简高效的投放体验支持完整的营销内容表达。并且进行系统全面升级，以更稳定的系统优化，打破“卷基建”的起量玄学。 新版本功能包括： ● 投放层级精简，由原有的“计划-广告-创意” 3 层结构简化为“广告-创意” 2 层结构 ● 贴近行业经营的投放表达，通过营销目的代替推广目标，更精细化刻画行业的生意经营 ● 明确投放导向，新建广告环节增加“卷基建”判断，杜绝无序创建，聚合转化数据以提升拿量效果 为适配新投放场景，MKTAPI 升级为新投放版本，支持开发者更容易、更便捷地进行广告创编和资产管理，广告维度做了以下核心升级：

| 业务核心升级点 | before | after |
| --- | --- | --- |
| 投放层级简化 | 投放层级：计划-广告-创意 campaign/adgroup/ad/adcreative 或者是 campaign/adgroup/dynamic_creative | 投放层级：广告-创意 新广告：adgroup 新创意：dynamic_creative |
| 推广目标升级为营销相关概念 | 使用推广目标 promoted_object_type、promoted_object_id 相关概念 | 使用营销目的、营销载体、推广产品等 marketing_goal、marketing_sub_goal、marketing_target_type、marketing_carrier_type、marketing_carrier_id 等 |
| 广告唯一性限制 | 无 | 新增广告唯一性限制，唯一性校验完全一致的广告，只能创建一条 |

[开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/apilist)

# 2. 如何创建广告

在通过 API 创建广告的过程中，需要通过 adgroups/add 接口，请求参数需要完成 5 部分内容（营销内容、广告版位设置、定向、出价与预算、广告设置）设置来获得 adgroup_id 新广告应答字段，完成广告创建； 创建广告接口文档：[开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/adgroups/add)

## 2.1 营销内容

营销内容主要包含四部分，分别为营销目的（MARKETING_GOAL）、营销载体（MARKETING_CARRIER_TYPE）、推广内容（MARKETING_ASSET_ID）、优化目标（OPTIMIZATIONGOAL），以下分别介绍如何通过 MKTAPI 创建/获取上述四种营销内容：

| 营销内容 | 字段 | 介绍 | 投放端截图（以游戏行业为例） |
| --- | --- | --- | --- |
| 营销目的 | MARKETING_GOAL | 用于表达广告主实际的投放目的 |  |
| 营销载体 | MARKETING_CARRIER_TYPE | 营销载体是推广产品的承载方，是落地页类型的聚类，是需要归因数据和触达的中间载体。 |  |
| 推广内容 | MARKETING_TARGET_TYPE（推广内容类型） MARKETING_ASSET_ID（推广产品 id） | 推广内容类型：是指本次投放推广的标的物类型，如应用、商品、服务、活动等 推广产品 id：是指本次投放推广的标的物具体的 id，入商品 id、应用 id 等 |  |
| 优化目标 | OPTIMIZATIONGOAL | 优化目标是指本次投放要优化的转化动作，如关注、下单、付费、线索收集等 |  |

| 一级营销目的 | 一级营销目的字段 | 说明 | 二级营销目的 | 二级营销目的字段 |
| --- | --- | --- | --- | --- |
| 线索留资 | MARKETING_GOAL_LEAD_RETENTION | 收集意向客户商机，开发潜在客户 | 暂无 | 暂无 |
| 加粉互动 | MARKETING_GOAL_INCREASE_FANS_INTERACTION | 广公众号、视频号等生态帐号，带来更多粉丝与互动 |  |  |
| 品牌宣传 | MARKETING_GOAL_LEAD_RETENTION | 扩大品牌影响力，吸引更多用户参与活动 |  |  |
| 商品销售 | MARKETING_GOAL_PRODUCT_SALES | 推广商品、服务，带来更多的客户和订单 |  |  |
| 用户增长 | MARKETING_GOAL_USER_GROWTH | 推广线上应用、小程序等获取更多用户的激活与长期价值 | / | / |
| 新游预约 | MARKETING_SUB_GOAL_NEW_GAME_RESERVE |  |  |  |
| 新游测试 | MARKETING_SUB_GOAL_NEW_GAME_TEST |  |  |  |
| 新游首发 | MARKETING_SUB_GOAL_NEW_GAME_LAUNCH |  |  |  |
| 平推期投放 | MARKETING_SUB_GOAL_PLATEAU_PHASE_LAUNCH |  |  |  |
| 新客增长 | MARKETING_SUB_GOAL_MINI_GAME_NEW_CUSTOMER_GROWTH |  |  |  |
| 回流触达 | MARKETING_SUB_GOAL_MINI_GAME_RETURN_CUSTOMER_ENGAGEMENT |  |  |  |
| 应用拉新 | MARKETING_SUB_GOAL_APP_ACQUISITION |  |  |  |
| 应用拉活 | MARKETING_SUB_GOAL_APP_ACTIVATION |  |  |  |

（2）营销载体（MARKETING_CARRIER_TYPE） 营销载体是推广产品的承载方，是落地页类型的聚类，是需要归因数据和触达的中间载体，具体类型如下：

| 营销载体类型 | 字段 |
| --- | --- |
| Android 应用 | MARKETING_CARRIER_TYPE_APP_ANDROID |
| IOS 应用 | MARKETING_CARRIER_TYPE_APP_IOS |
| 微信公众号 | MARKETING_CARRIER_TYPE_WECHAT_OFFICIAL_ACCOUNT |
| 页面跳转 | MARKETING_CARRIER_TYPE_JUMP_PAGE |
| 微信小游戏 | MARKETING_CARRIER_TYPE_WECHAT_MINI_GAME |
| 视频号直播 | MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE |
| 视频号账号 | MARKETING_CARRIER_TYPE_WECHAT_CHANNELS |
| 视频直播预约 | MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION |
| 小程序 | MARKETING_CARRIER_TYPE_MINI_PROGRAM_WECHAT |
| 快应用 | MARKETING_CARRIER_TYPE_APP_QUICK_APP |
| 页面跳转 | MARKETING_CARRIER_TYPE_JUMP_PAGE2 |

（3）推广内容 推广内容包括推广内容类型（MARKETING_TARGET_TYPE）和推广产品 id（MARKETING_ASSET_ID），定义如下： ➢ 推广内容类型：是指本次投放推广的标的物类型，如应用、商品、服务、活动等 ➢ 推广产品 id：是指本次投放推广的标的物具体的 id，入商品 id、应用 id 等 推广内容资产的获取通过下面方式实现： ➢ 创建广告时，可通过获取可投放推广内容资产类型名称（marketing_target_types/get）接口查询可投放的推广内容类型、可通过获取可投放推广内容资产相关信息（marketing_target_assets/get）接口查询可投放的推广产品 id（MARKETING_ASSET_ID）以及所属的产品属性，注意：推广内容资产相关信息（marketing_target_assets/get）接口仅支持查询非通用类资产 ➢ 通用类资产（app、小程序、小游戏、视频号、公众号、商品等）通过 adgroup 创建时marketing_asset_outer_spec 表达 注：推广内容类型（MARKETING_TARGET_TYPE）为 电商商品（MARKETING_TARGET_TYPE_CONSUMER_PRODUCT）时，marketing_asset_outer_spec 通过** 获取商品库接口（product_catalogs/get）&获取商品接口（product_items/get）获取对应商品库 id（product_catalog_id）和商品 id（product_outer_id）**

| 推广内容类型（marketing_target_type） | 字段 | 是否为通用类资产 |
| --- | --- | --- |
| Android 应用 | MARKETING_TARGET_TYPE_APP_ANDROID | 是 |
| IOS 应用 | MARKETING_TARGET_TYPE_APP_IOS | 是 |
| 微信公众号 | MARKETING_TARGET_TYPE_WECHAT_OFFICIAL_ACCOUNT | 是 |
| 教育产品 | MARKETING_TARGET_TYPE_PRODUCT | 否 |
| 交通产品 | MARKETING_TARGET_TYPE_TRAFFIC | 否 |
| 房产产品 | MARKETING_TARGET_TYPE_HOUSE_PROPERTY | 否 |
| 本地门店 | MARKETING_TARGET_TYPE_LOCAL_STORE | 是 |
| 微信小游戏 | MARKETING_TARGET_TYPE_WECHAT_MINI_GAME | 是 |
| 电商商品（消费品&平台电商） | MARKETING_TARGET_TYPE_CONSUMER_PRODUCT | 是 |
| 两品一械商品 | MARKETING_TARGET_TYPE_MEDICINE_INDUSTRY_COMMERCIAL | 是 |
| 视频号账号 | MARKETING_TARGET_TYPE_WECHAT_CHANNELS | 是 |
| 视频号直播 | MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE | 是 |
| 视频直播预约 | MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION | 是 |
| 微信小程序 | MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT | 是 |
| 快应用 | MARKETING_TARGET_TYPE_APP_QUICK_APP | 是 |
| 消费医疗 | MARKETING_TARGET_TYPE_CONSUME_MEDICAL | 否 |
| 综合家政 | MARKETING_TARGET_TYPE_COMPREHENSIVE_HOUSEKEEPING | 否 |
| 小说 | MARKETING_TARGET_TYPE_FICTION | 否 |
| 短剧 | MARKETING_TARGET_TYPE_SHORT_DRAMA | 否 |
| 影音文娱 | MARKETING_TARGET_TYPE_AUDIOVISUAL_ENTERTAINMENT | 否 |
| 丽人产品 | MARKETING_TARGET_TYPE_BEAUTY_AND_PERSONAL_CARE | 否 |
| 婚恋摄影 | MARKETING_TARGET_TYPE_WEDDING_AND_PORTRAIT_PHOTOGRAPHY | 否 |
| 加盟品牌 | MARKETING_TARGET_TYPE_FRANCHISE_BRAND | 否 |
| 企业服务 | MARKETING_TARGET_TYPE_ENTERPRISE_SERVICES | 否 |
| 布景会展 | MARKETING_TARGET_TYPE_EXHIBITION_BOOTH_DESIGN | 否 |
| 保险产品 | MARKETING_TARGET_TYPE_INSURANCE | 否 |
| 金融银行 | MARKETING_TARGET_TYPE_BANK | 否 |
| 金融信贷 | MARKETING_TARGET_TYPE_CREDIT | 否 |
| 金融投顾 | MARKETING_TARGET_TYPE_INVESTMENT_CONSULTING | 否 |
| 房产楼盘 | MARKETING_TARGET_TYPE_REAL_ESTATE | 否 |
| 运营商 | MARKETING_TARGET_TYPE_TELECOMMUNICATIONS_OPERATOR | 否 |
| 景点门票 | MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS | 否 |
| 装修服务 | MARKETING_TARGET_TYPE_RENOVATION_SERVICES | 否 |
| 家具建材 | MARKETING_TARGET_TYPE_FURNITURE_AND_BUILDING_MATERIALS | 否 |
| 展会卖场 | MARKETING_TARGET_TYPE_EXHIBITION_SALES | 否 |

除了上述提到的两个接口外，同时支持对推广内容资产管理，支持在 业务单元维度 进行资产创建/更新/删除：

| 接口名称 | 接口地址 | 说明（接口文档，330 上线前补齐） |
| --- | --- | --- |
| 创建推广内容资产 | marketing_target_assets/add | 创建资产 接口文档： |
| 更新推广内容资产 | marketing_target_assets/update | 可更新推广内容资产的附加属性和产品名称 接口文档： |
| 删除推广内容资产 | marketing_target_assets/delete | 只允许处理行业产品库 接口文档： |
| 查询推广内容资产可用的类目 | marketing_target_asset_categories/get | 查询指定条件的类目 接口文档： |
| 查询推广内容资产可用的属性 | marketing_target_asset_properties/get | 指定条件的所有可用属性。属性可选值个数小于 1000 的，直接返回所有可选值；否则通过 marketing_target_asset_property_values/get 获取可选值。 |
| 查询推广内容资产可用的属性值 | marketing_target_asset_property_values/get | 查询可用的属性值 |
| 获取推广内容资产详情 | marketing_target_asset_detail/get | 获取推广内容资产详情 |
| 获取可投放推广内容资产类型名称 | marketing_target_types/get | 查询可投放的推广内容类型 |
| 获取可投放推广内容资产相关信息 | marketing_target_assets/get | 查询可投放的推广产品 id 及所属的产品属性，注意：推广内容资产相关信息仅支持查询非通用类资产，通用类资产（app、小程序、小游戏、视频号、公众号、商品等）通过 adgroup 创建时 marketing_asset_outer_spec 表达； |

商品相关接口：

| 接口名称 | 接口地址 |
| --- | --- |
| 创建商品库 | product_catalogs/add |
| 获取商品库 | product_catalogs/get |
| 添加商品 | product_items/add |
| 获取行业列表 | product_items_verticals/get |
| 获取商品 | product_items/get |
| 获取商品详情 | product_items_detail/get |
| 更新商品信息 | product_items/update |
| 批量更新商品信息 | product_items/batch_update |
| 获取审核失败的商品 | products_system_status/get |
| 获取商品类目 | product_categories_list/get |
| 添加商品集合 | product_series/add |
| 获取商品集合 | product_series/get |
| 电商商品添加 | sku_info/add |
| 电商商品变更 | sku_info/update |
| 线下门店仓库添加 | store/add |
| 线下商品 sku 添加 | sku/add |
| 线下销售信息添加 | salesinfo/add |
| 订单添加 | order/add |
| 售后单添加 | order_after_sale/add |
| 优惠券新增 | coupon/add |
| 订单新增 | order/add |
| 售后信息 | order_after_sale/add |
| 纠纷单信息 | order_complaint/add |
| 订单状态变更 | order/update |
| 售后单状态变更 | order_after_sale/update |
| 纠纷单状态变更 | order_complaint/update |
| 物流单状态变更 | delivery/update |
| 商品评价 | sku_comment/add |
| 类目资质新增 | category_certification/add |
| 品牌资质新增 | brand_certification/add |
| 品牌资质查询 | brand_certification/get |

（4）优化目标 在选择优化目标时，不同营销目的、营销载体、版位、出价方式 可选择的优化目标存在差异，可通过 optimization_goal_permissions/get 接口 获取可投放的优化目标组合，当支持的优化目标枚举如下：

| 优化目标 | 字段 |
| --- | --- |
| 品牌转化 | OPTIMIZATIONGOAL_BRAND_CONVERSION |
| 关注 | OPTIMIZATIONGOAL_FOLLOW |
| 点击 | OPTIMIZATIONGOAL_CLICK |
| 曝光 | OPTIMIZATIONGOAL_IMPRESSION |
| 下载 | OPTIMIZATIONGOAL_APP_DOWNLOAD |
| 激活 | OPTIMIZATIONGOAL_APP_ACTIVATE |
| 注册 | OPTIMIZATIONGOAL_APP_REGISTER |
| 次日留存 | OPTIMIZATIONGOAL_ONE_DAY_RETENTION |
| 付费次数，游戏客户如需优化付费行为，建议使用首次付费作为优化目标 | OPTIMIZATIONGOAL_APP_PURCHASE |
| 下单 | OPTIMIZATIONGOAL_ECOMMERCE_ORDER |
| H5 购买 | OPTIMIZATIONGOAL_ECOMMERCE_CHECKOUT |
| 销售线索 | OPTIMIZATIONGOAL_LEADS |
| 加入购物车 | OPTIMIZATIONGOAL_ECOMMERCE_CART |
| 公众号内注册 | OPTIMIZATIONGOAL_PROMOTION_CLICK_KEY_PAGE |
| 商品详情页浏览 | OPTIMIZATIONGOAL_VIEW_COMMODITY_PAGE |
| 在线咨询 | OPTIMIZATIONGOAL_ONLINE_CONSULTATION |
| 电话拨打 | OPTIMIZATIONGOAL_TELEPHONE_CONSULTATION |
| 表单预约 | OPTIMIZATIONGOAL_PAGE_RESERVATION |
| 发货 | OPTIMIZATIONGOAL_DELIVERY |
| 公众号内发消息 | OPTIMIZATIONGOAL_MESSAGE_AFTER_FOLLOW |
| 公众号内点击菜单栏 | OPTIMIZATIONGOAL_CLICK_MENU_AFTER_FOLLOW |
| 有效在线咨询 (待废弃) | OPTIMIZATIONGOAL_PAGE_EFFECTIVE_ONLINE_CONSULT |
| 完件 | OPTIMIZATIONGOAL_APPLY |
| 有效在线咨询 | OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_CONSULT |
| 有效电话拨打 | OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_PHONE |
| 综合线索收集 | OPTIMIZATIONGOAL_LEADS_COLLECT |
| 首次付费 | OPTIMIZATIONGOAL_FIRST_PURCHASE |
| 预授信 | OPTIMIZATIONGOAL_PRE_CREDIT |
| 授信 | OPTIMIZATIONGOAL_CREDIT |
| 提现 | OPTIMIZATIONGOAL_WITHDRAW_DEPOSITS |
| 关键页面浏览 | OPTIMIZATIONGOAL_PROMOTION_VIEW_KEY_PAGE |
| 小游戏创角 | OPTIMIZATIONGOAL_MOBILE_APP_CREATE_ROLE |
| 跳转按钮点击 | OPTIMIZATIONGOAL_CANVAS_CLICK |
| 领券 | OPTIMIZATIONGOAL_PROMOTION_CLAIM_OFFER |
| 商品收藏 | OPTIMIZATIONGOAL_ECOMMERCE_ADD_TO_WISHLIST |
| 有效表单提交 | OPTIMIZATIONGOAL_CONFIRM_EFFECTIVE_LEADS_RESERVATION |
| 签收 | OPTIMIZATIONGOAL_PAGE_RECEIPT |
| 加企业微信客服 | OPTIMIZATIONGOAL_PAGE_SCAN_CODE |
| 选课 | OPTIMIZATIONGOAL_SELECT_COURSE |
| 电话潜在客户 | OPTIMIZATIONGOAL_CONFIRM_POTENTIAL_CUSTOMER_PHONE |
| 广告变现 | OPTIMIZATIONGOAL_MOBILE_APP_AD_INCOME |
| 小游戏授权 | OPTIMIZATIONGOAL_MOBILE_APP_ACCREDIT |
| 首次会员购买 | OPTIMIZATIONGOAL_PURCHASE_MEMBER_CARD |
| 有效综合线索 | OPTIMIZATIONGOAL_PAGE_CONFIRM_EFFECTIVE_LEADS |
| 微信流量预约行为 | OPTIMIZATIONGOAL_RESERVATION |
| 首次下单 | OPTIMIZATIONGOAL_FIRST_ECOMMERCE_ORDER |
| 点赞 | OPTIMIZATIONGOAL_LIKE |
| 快应用加桌面 | OPTIMIZATIONGOAL_ADD_DESKTOP |
| 外链点击 | OPTIMIZATIONGOAL_EXTERNAL_LINK_CLICK |
| 购券 | OPTIMIZATIONGOAL_BUY_COUPONS |
| 咨询留资 | OPTIMIZATIONGOAL_LEAVE_INFORMATION |
| 关键行为 | OPTIMIZATIONGOAL_CORE_ACTION |
| 次留率 | OPTIMIZATIONGOAL_ONE_DAY_RETENTION_RATIO |
| 阅读文章 | OPTIMIZATIONGOAL_PROMOTION_READ_ARTICLE |
| 24 小时下单 | OPTIMIZATIONGOAL_FIRST_TWENTY_FOUR_HOUR_ECOMMERCE_ORDER |
| 扫码加粉 | OPTIMIZATIONGOAL_ECOMMERCE_SCANCODE_WX |
| 7 日留存 | OPTIMIZATIONGOAL_MOBILE_APP_SEVEN_DAYS_RETENTION |
| 首次到课 | OPTIMIZATIONGOAL_CLASS_PARTICIPATED |
| 保险支付 | OPTIMIZATIONGOAL_INSURANCE_PURCHASE |
| 意向表单 | OPTIMIZATIONGOAL_RESERVATION_CHECK |
| 券商开户 | OPTIMIZATIONGOAL_OPEN_ACCOUNT |
| 7 日下单 | OPTIMIZATIONGOAL_SEVEN_DAY_ECOMMERCE_ORDER |
| 添加个人微信客服 | OPTIMIZATIONGOAL_ADD_WECHAT |
| 加企微后咨询 | OPTIMIZATIONGOAL_WECOM_CONSULT |
| 加群 | OPTIMIZATIONGOAL_ADD_GROUP |
| 快速下单 | OPTIMIZATIONGOAL_QUICK_ORDER |
| 预付定金 | OPTIMIZATIONGOAL_PRE_PAY |
| 主动一句话咨询 | OPTIMIZATIONGOAL_PAGE_ONLINE_CONSULT_ACTIVE_ONE_MSG |
| 通话 30S | OPTIMIZATIONGOAL_CALL_DURATION_THIRTY_SECONDS |
| 领课 | OPTIMIZATIONGOAL_CLAIM_COURSE |
| 退群 | OPTIMIZATIONGOAL_QUIT_GROUP |
| 拉新访问关键页面 | OPTIMIZATIONGOAL_VIEW_ACQUISITION_CONTENT |
| 沉默唤起 | OPTIMIZATIONGOAL_BACK_FLOW |
| 三句话咨询 | OPTIMIZATIONGOAL_PAGE_ONLINE_CONSULT_THREE_MSG |
| 保险续费 | OPTIMIZATIONGOAL_RENEWAL |
| 低价课转化 | OPTIMIZATIONGOAL_LOW_PRICE_COURSE |
| 开口后下单意向 | OPTIMIZATIONGOAL_CONSULT_INTENTION |
| 七日内每次留存成本 | OPTIMIZATIONGOAL_EVERY_DAY_RETENTION |
| 关键页面访问人数 | OPTIMIZATIONGOAL_PROMOTION_VIEW_KEY_PAGE_UV |
| 直播观看一分钟 | OPTIMIZATIONGOAL_LIVE_STREAM_DURATION_1MIN |
| 直播互动 | OPTIMIZATIONGOAL_LIVE_STREAM_INTERACTION |
| 取消订单率 | OPTIMIZATIONGOAL_ECOMMERCE_CANCEL_ORDER |

## 2.2 广告版位设置

腾讯广告平台拥有的流量资源包括：微信视频号、微信朋友圈、微信公众号与小程序、腾讯平台与内容媒体、优量汇、微信搜一搜、QQ 浏览器等，关于各流量广告版位（site_set）的完整介绍，可以通过 [这里](http://e.qq.com/ads/resources) 进行了解。 自动版位（automatic_site_enabled）：自动版位是基于腾讯广告全域流量视角，结合多样化素材适配与智能优化策略，帮助广告主达到更优投放效率与拿量效果的一站式投放产品，详细介绍可见：[腾讯广告 | 帮助中心](https://e.qq.com/ads/helpcenter/detail?cid=3160&pid=9376)，模式枚举如下：

| 自动版位模式 | 枚举值 |
| --- | --- |
| 默认值 | EXPLORATION_UNKNOW |
| 自动探索 | AUTOMATIC_EXPLORATION |
| 稳步探索 | STEADY_EXPLORATION |

选择特定版位投放：区别于【自动版位】，【选择特定版位】允许广告主指定主要投放的流量版位，帮助广告主更灵活地满足特定营销场景，详细介绍可见:[腾讯广告 | 帮助中心](https://e.qq.com/ads/helpcenter/detail?cid=3160&pid=9381)，Marketing API 目前支持投放的广告版位枚举及定义见：

| 名称 | 描述 |
| --- | --- |
| 优量汇 | SITE_SET_MOBILE_UNION |
| 快手 | SITE_SET_KUAISHOU |
| 微信公众号与小程序 | SITE_SET_WECHAT |
| QQ、腾讯看点、腾讯音乐 (待废弃) | SITE_SET_MOBILE_INNER |
| 腾讯新闻 | SITE_SET_TENCENT_NEWS |
| 腾讯视频 | SITE_SET_TENCENT_VIDEO |
| 应用宝 | SITE_SET_MOBILE_YYB |
| QQ、QQ 空间、腾讯音乐、PC 版位 | SITE_SET_PCQQ |
| QQ 浏览器（原腾讯看点） | SITE_SET_KANDIAN |
| QQ、腾讯音乐及游戏 | SITE_SET_QQ_MUSIC_GAME |
| 微信朋友圈 | SITE_SET_MOMENTS |
| 微信生态内的小游戏场景 | SITE_SET_MINI_GAME_WECHAT |
| 手机 QQ 生态内的小游戏场景 | SITE_SET_MINI_GAME_QQ |
| 集合腾讯游戏和优量汇联盟生态的手机端游戏 | SITE_SET_MOBILE_GAME |
| QQ 购物 | SITE_SET_QQSHOPPING |
| 微信视频号 | SITE_SET_CHANNELS |
| 微信新闻插件 | SITE_SET_WECHAT_PLUGIN |
| 搜索场景 | SITE_SET_SEARCH_SCENE |

由于每个广告版位上可能有多个位置资源可以投放广告，具体您的广告会出现在指定广告版位上哪一个位置，会由广告创意上的创意形式来决定。详情参见 [【业务专题】如何创建创意](https://doc.weixin.qq.com/doc/w3_AVUAGwafAIQdhv0Hs47ToCXVrqk0L?scode=AJEAIQdfAAoFri9LBRAVUAGwafAIQ)章节。

## 2.3 定向

| 类型 | 定向 | 字段 |
| --- | --- | --- |
| 全行业开放 | 地理位置 | geo_location |
| 性别 | gender |  |
| 年龄 | age |  |
| 排除已转化 | excluded_converted_audience |  |
| 自定义人群-定向 | custom_audience |  |
| 自定义人群-排除 | excluded_custom_audience |  |
| 微信再营销 | wechat_ad_behavior |  |
| 应用安装（仅安卓系统） | app_install_status |  |
| 分行业开放 | 学历 | education |
| 婚恋育儿状态 | marital_status |  |
| 设备品牌型号 | device_brand_model |  |
| 操作系统版本 | user_os |  |
| 联网方式 | network_type |  |
| 设备价格 | device_price |  |
| 游戏消费能力 | game_consumption_level |  |
| 移动运营商 | network_operator |  |
| 换季人群 | season_change_tag |  |

## 2.4 出价与预算

出价 通过[开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/enums)获取出价方式、策略等枚举值进行投放 广告的出价由优化目标（optimization_goal）、扣费方式（bid_mode）和 出价金额（bid_amount）共同决定。Marketing API 当前支持多种优化目标，不同的优化目标可选择的出价方式不同，两者的对应关系如下所示：

| 组合 | 说明 |
| --- | --- |
| BILLINGEVENT_CLICK + OPTIMIZATIONGOAL_CLICK | CPC（按点击计费） |
| BILLINGEVENT_IMPRESSION + OPTIMIZATIONGOAL_IMPRESSION | CPM（按曝光计费） |
| BILLINGEVENT_APP_DOWNLOAD + OPTIMIZATIONGOAL_APP_DOWNLOAD | CPA（按下载完成计费） |
| BILLINGEVENT_CLICK/BILLINGEVENT_IMPRESSION + 以下优化目标：OPTIMIZATIONGOAL_APP_ACTIVATE, OPTIMIZATIONGOAL_APP_REGISTER, OPTIMIZATIONGOAL_PROMOTION_CLICK_KEY_PAGE, OPTIMIZATIONGOAL_ECOMMERCE_ORDER, OPTIMIZATIONGOAL_APP_PURCHASE, OPTIMIZATIONGOAL_ECOMMERCE_CHECKOUT, OPTIMIZATIONGOAL_PAGE_RESERVATION, … oCPA 目前支持的优化目标可通过[开发文档~s\| 开发者专区 - 腾讯广告](https://developers.e.qq.com/docs/guide/ads/ocpa)进一步了解 | oCPA（基于效果的自动优化计费） |

选择广告的出价方式后，您还需要设置广告的具体出价金额（bid_amount），且您在创建或修改广告的时候出价必须符合限制，否则会报错，具体的出价限制如下：

CPC 出价限制：介于 10 分-10,000 分之间（0.1 元-100 元，单位为人民币）

CPM 出价限制：介于 150 分-99,900 之间（1.5 元-999 元，单位为人民币）

CPA 出价限制：介于 100 分-10,000 分之间（1 元-100 元，单位为人民币）

oCPC/oCPM 出价限制：介于 10 分-500,000 分之间（0.1 元-5000 元，单位为人民币） 注： （1）3.0 和 2.0 出价场景的变化如下：

| 2.0 现存出价场景 | 3.0 是否支持 | 交互举例【以双目标（roi 类）产品投放端出价表达举例， 单目标等其他场景类似】 |
| --- | --- | --- |
| 单目标场景 | 是 |  |
| 单目标场景（助攻类） | 是 |  |
| 双目标（常规） | 大部分场景支持，小部分场景会予以下线 |  |
| 双目标（次留类） | 是 |  |
| 双目标（roi 类） | 是 |  |
| 双目标（小游戏两阶段出价） | 予以下线 |  |
| 深度辅助优化（广告主出价部分） | 原产品需升级到双目标常规类产品 |  |
| 深度辅助优化（广告主不出价部分） | 是 |  |

（2）3.0 和 2.0 非游戏行业出价类型变化如下：（注：2.0 中出价策略在 3.0 中已经不再支持）

| 2.0 现存出价类型 | 3.0 是否支持 | 交互举例【以双目标（roi 类）产品投放端出价表达举例， 单目标等其他场景类似】 |
| --- | --- | --- |
| 手动出价 | 是，3.0 名称为稳定拿量 | 2.0 交互3.0 交互 |
| 最大转化量投放 | 是 |  |
| 控制成本上限 | 暂不支持 |  |

（3）3.0 和 2.0 游戏行业投放场景变化如下：

| 2.0 现存出价类型 | 3.0 是否支持 | 交互举例【以双目标（roi 类）产品投放端出价表达举例， 单目标等其他场景类似】 |
| --- | --- | --- |
| 常规投放-稳定投放 | 是，3.0 名称为常规投放 | 2.0 交互3.0 交互 |
| 常规投放-放量投放 | 否 |  |
| 最大转化量投放 | 是 |  |

（4）3.0 中最大转化量支持

| 2.0 现存出价场景 | 3.0 是否支持 |
| --- | --- |
| 单目标场景 | 是 |
| 单目标场景（助攻类） | 是 |
| 双目标（常规） | 否 |
| 双目标（次留类） | 否 |
| 双目标（roi 类） | 部分游戏场景支持 |
| 双目标（小游戏两阶段出价） | 否 |
| 深度辅助优化（广告主出价部分） | 否 |
| 深度辅助优化（广告主不出价部分） | 否 |

预算 日预算（daily_budget）：设置日预算后，一旦广告组的今日消耗到达设置的值，则广告组下所有广告将被暂停曝光，第二天自动恢复；您也可以通过修改广告组将日预算数值提高，之后广告将恢复正常曝光；

| 限制类型 | 约束范围 | 约束说明 |
| --- | --- | --- |
| 账户日预算 | 全部 | 设置账户日预算时，要求账户日预算不得低于 5000 分，不得高于 4000000000 分，超过 4000000000 分时，请设置为不限 修改后的日预算，不得低于当前消耗*1.05，也不得低于当前消耗+5000 分 单次修改幅度≥ 5000 分 |
| 广告日预算 | 朋友圈（site_set=SITE SET_MOMENTS，即投放版位选择朋友圈） | 设置广告日预算时，要求账户日预算不得低于 5000 分，不得高于 4000000000 分，超过 4000000000 分时，请设置为不限 修改日预算时，日预算不得低于当前消耗*1.5，也不得低于当前消耗+5000 分 单次修改幅度≥ 5000 分 |
| 非朋友圈（site_set!=SITE SET_MOMENTS，即投放版位不选择朋友圈） | 设置广告日预算时，要求账户日预算不得低于 5000 分，不得高于 4000000000 分，超过 4000000000 分时，请设置为不限 修改日预算时，不得低于当前消耗+5000 分 单次修改幅度≥ 5000 分 |  |
| 注意：上述约束说明中，100 分=1 人民币，api 统一以分作为单位 |  |  |

## 2.5 广告设置

支持设置投放日期（begin_date、end_date）、投放时间（first_day_begin_time、time_series）、广告名称（adgroup_name）

| 名称 | 字段 | 说明 |
| --- | --- | --- |
| 开始投放日期 | begin_date | 日期格式：YYYY-MM-DD，且日期小于等于 end_date ；字段长度为 10 字节 |
| 结束投放日期 | end_date | 日期格式：YYYY-MM-DD，大于等于今天，且大于等于 begin_date ；字段长度最小 0 字节，长度最大 10 字节 |
| 首日开始投放时间 | first_day_begin_time | 时间格式：HH:ii:ss ；字段长度最小 0 字节，长度最大 8 字节 |
| 投放时间段 | time_series | 格式为 48 * 7 位字符串，且都为 0 和 1，以半个小时为最小粒度，从周一零点开始至周日 24 点结束。0 为不投放，1 为投放，全传 1 视为全时段投放，不允许全部传 0。朋友圈广告的投放时间需大于等于 6 小时，小于等于 30 个自然日，且每天至少投放 6 小时，且每天投放的时段需保持一致，字段长度为 336 字节 |
| 广告名称 | adgroup_name | 同一帐号下的广告组名称不允许重复。字段长度最小 1 个等宽字符，长度最大 60 等宽字符（即字段最大长度为 60 个中文字或全角标点，120 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。）字段长度最小 1 字节，长度最大 180 字节 |

## 2.6 唯一性约束说明

新投放对广告唯一性有明确的限制，新建广告环节增加“卷基建”判断，杜绝无序创建，聚合转化数据以提升拿量效果，不同行业唯一性限制条件不同，主要通过推广内容和定向进行约束； （1）唯一性规则 客户创建不同广告时，唯一性字段不能全都一致，否则会创建失败 （2）唯一性字段

|  | 名称 | 字段 | 唯一性范围 |
| --- | --- | --- | --- |
| 营销内容 | 营销目的 | marketing_goal | 全行业 |
| 营销载体 | marketing_carrier_type | 全行业 |  |
| 推广产品 | marketing_asset_id | 全行业 |  |
| 优化目标 | optimization_goal | 全行业 |  |
| 版位 | 版位 | site_set | 全行业 |
| 出价 | 出价类型 | smart_bid_type（bid_scene） | 全行业 |
| 售卖类型 | sFSellStrategyId | 部分行业（短剧业务） |  |
| 创意 | 素材标签 | material_package_id | 部分行业 |
| 定向 | 地域 | geo_location | 部分行业 |
| 年龄 | age | 部分行业 |  |
| 性别 | gender | 部分行业 |  |
| 运营商类型 | network_operator | 部分行业 |  |
| 操作系统 | user_os | 部分行业 |  |
| 设备品牌型号 | device_brand_model | 部分行业 |  |

具体分行业唯一性规则参考[分行业唯一性校验说明(截止到 0330)](https://doc.weixin.qq.com/doc/w3_AZoArQY_ADoST0kuPMzTFCsp19W0C?scode=AJEAIQdfAAoPwG8MSNAVUAGwafAIQ)

## 2.7 广告状态

客户自设状态（configured_status）：客户可修改状态，可以是正常或暂停两种，用于客户自行控制广告组是否启用投放；

## 2.8 广告转化

用户行为数据源（user_action_sets）：将用户行为数据源绑定至广告组，会对广告组下所有广告生效，在广告开启转化归因开关（conversion_tracking_enabled）的情况下，user_action_sets 将用于该广告的转化归因，详见 [开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/docs/guide/conversion/introduction)专题介绍。 同时监测服务也更新的 新投放的概念变化，如下： 点击监测：[https://datanexus.qq.com/doc/develop/guider/interface/conversion/ad_track_click](https://datanexus.qq.com/doc/develop/guider/interface/conversion/ad_track_click) 曝光监测：[https://datanexus.qq.com/doc/develop/guider/interface/conversion/ad_track_impress](https://datanexus.qq.com/doc/develop/guider/interface/conversion/ad_track_impress)

# 3. MKTAPI3.0 创建广告使用流程

获取可投放推广内容资产相关信息 通过 [开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/marketing_target_assets/get) 接口获取广告主期望投放的行业资产 id(marketing_asset_id)

```
curl -v -G 'https://api.e.qq.com/v3.0/marketing_target_assets/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
-d 'account_id=<ACCOUNT_ID>' \ 
-d 'page=1' \ 
-d 'page_size=10'
```

广告组创建 通过 [开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/adgroups/add) 接口，分别对营销表达，版位、出价、预算与排期、优化目标与定向等多个部分组成进行设置，同时将行业资产 id(marketing_asset_id)传入。

```
curl 'https://api.e.qq.com/v3.0/adgroups/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
-H 'Content-Type: application/json' \ 
-d '{
    "account_id": "<ACCOUNT_ID>",
    "adgroup_name": "推广广告",
    "marketing_carrier_detail": [],
    "begin_date": "2017-04-25",
    "end_date": "2017-05-01",
    "bid_amount": 200,
    "optimization_goal": "OPTIMIZATIONGOAL_CLICK",
    "time_series": "010100100110100010101010010101010101010100101010101010010101010101001010101010100101010101010111110010101001010110110100110001011001010100101010101010110011001010101010100101100101101110101010101010100110100110010100110101110111101110110110110110110110101101101101110110011101011101101011101101101101001010110111010111011010110110111011",
    "site_set": [
        "SITE_SET_QZONE"
    ],
    "daily_budget": 10000,
    "targeting": {
        "geo_location": {
            "location_types": [],
            "regions": [],
            "business_districts": [],
            "custom_locations": []
        },
        "gender": [],
        "age": [],
        "education": [],
        "app_install_status": [],
        "marital_status": [],
        "excluded_converted_audience": {
            "conversion_behavior_list": []
        },
        "custom_audience": [],
        "excluded_custom_audience": [],
        "device_brand_model": {
            "included_list": [],
            "excluded_list": []
        },
        "user_os": [],
        "network_type": [],
        "device_price": [],
        "wechat_ad_behavior": {
            "actions": [],
            "excluded_actions": []
        },
        "game_consumption_level": [],
        "excluded_os": []
    },
    "scene_spec": {
        "mobile_union": [
            "MOBILE_UNION_IN_WECHAT"
        ]
    },
    "user_action_sets": [],
    "deep_conversion_spec": {
        "deep_conversion_type": "DEEP_CONVERSION_BEHAVIOR",
        "deep_conversion_behavior_spec": {
            "bid_amount": 200
        }
    },
    "configured_status": "AD_STATUS_NORMAL",
    "marketing_asset_outer_spec": [],
    "poi_list": [],
    "priority_site_set": [],
    "mpa_spec": {
        "recommend_method": []
    }
}'
```

广告组更新 通过 [开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/adgroups/update) 接口，分别对出价、预算与排期、定向等多个部分组成进行更新。

```
curl 'https://api.e.qq.com/v3.0/adgroups/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
-H 'Content-Type: application/json' \ 
-d '{
    "account_id": "<ACCOUNT_ID>",
    "adgroup_id": "<ADGROUP_ID>",
    "adgroup_name": "推广广告",
    "begin_date": "2017-04-25",
    "end_date": "2017-05-01",
    "bid_amount": 200,
    "optimization_goal": "OPTIMIZATIONGOAL_CLICK",
    "time_series": "010100100110100010101010010101010101010100101010101010010101010101001010101010100101010101010111110010101001010110110100110001011001010100101010101010110011001010101010100101100101101110101010101010100110100110010100110101110111101110110110110110110110101101101101110110011101011101101011101101101101001010110111010111011010110110111011",
    "daily_budget": 10000,
    "targeting": {
        "geo_location": {
            "location_types": [],
            "regions": [],
            "business_districts": [],
            "custom_locations": []
        },
        "gender": [],
        "age": [],
        "education": [],
        "app_install_status": [],
        "marital_status": [],
        "excluded_converted_audience": {
            "conversion_behavior_list": []
        },
        "custom_audience": [],
        "excluded_custom_audience": [],
        "device_brand_model": {
            "included_list": [],
            "excluded_list": []
        },
        "user_os": [],
        "network_type": [],
        "device_price": [],
        "wechat_ad_behavior": {
            "actions": [],
            "excluded_actions": []
        },
        "game_consumption_level": [],
        "excluded_os": []
    },
    "scene_spec": {
        "mobile_union": [
            "MOBILE_UNION_IN_WECHAT"
        ]
    },
    "user_action_sets": [],
    "deep_conversion_spec": {
        "deep_conversion_type": "DEEP_CONVERSION_BEHAVIOR",
        "deep_conversion_behavior_spec": {
            "bid_amount": 200
        }
    },
    "configured_status": "AD_STATUS_NORMAL",
    "poi_list": []
}'
```

查询广告组 通过 [开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/adgroups/get) 接口单点或批量查询广告详情。

```
curl -v -G 'https://api.e.qq.com/v3.0/adgroups/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
-d 'account_id=<ACCOUNT_ID>' \ 
-d 'fields=["adgroup_id","adgroup_name","configured_status","daily_budget","created_time","marketing_scene","last_modified_time","is_deleted"]' \ 
-d 'filtering=[{"field":"last_modified_time","operator":"GREATER_EQUALS","values":["1708520382"]},{"field":"last_modified_time","operator":"LESS_EQUALS","values":["1708568262"]}]' \ 
-d 'is_deleted=false' \ 
-d 'page=1' \ 
-d 'page_size=10'
```

删除广告组 通过 [开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/adgroups/delete) 接口执行对广告的删除。

```
curl 'https://api.e.qq.com/v3.0/adgroups/delete?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
-H 'Content-Type: application/json' \ 
-d '{
    "account_id": "<ACCOUNT_ID>",
    "adgroup_id": "<ADGROUP_ID>"
}'
```
