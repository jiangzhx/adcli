---
title: 数据展示功能介绍
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/conversion_target_type
doc_id: tencent_ads_v3_0_pages_conversion_target_type
source_id: tencent_ads_v3_0_pages_conversion_target_type
---
# 数据展示功能介绍

数据展示(conversion_target_type)，可以在您的广告内对用户展示来自报表中的真实转化数据量以及安卓应用的应用商店下载量（仅当转化数据≥ 50 个 时才展示），辅助用户决策，从而提升转化率与转化效果。

例 1：朋友圈广告应用商店 APP 下载量数据展示示意图： 例 2：小程序广告新游戏“预约”场景数据展示示意图： 例 3：看点首页场景广告应用商店下载量/表单预约量数据展示示意图：

例 4：看点/浏览器视频场景广告应用商店下载量/表单预约量数据展示示意图

## 转化数据展示的使用流程

![image](data:image/svg+xml,%3c%3fxml version=)转化数据展示的使用流程 涉及接口：创建广告创意（dynamic_creative/add）、查询广告创意（dynamic_creative/get）、修改广告创意（dynamic_creative/update） 支持的创意形式如下图所示，具体支持的创意形式可以通过创意形式查询接口（creative_template/get）进行查询。 ![image](data:image/svg+xml,%3c%3fxml version=)步骤 1、选择转化数据类型 conversion_data_typ 创建广告创意(dynamic_creative/add)、更新广告创意(dynamic_creative/update) 接口，从以下两种转化数据类型（conversion_data_type）中二选一使用：

| 名称 | 描述 | 展示文案 | 转化数据定义 | 支持的推广目标 |
| --- | --- | --- | --- | --- |
| CONVERSION_DATA_APP_DOWNLOAD | 应用下载量 | “ xx 次应用商店下载”，其中 xx 为转化数据， | APPID 对应的历史下载数据 | 仅 Android 应用推广且推广的渠道包属于应用宝平台：PROMOTED_OBJECT_TYPE_APP_ANDROID |
| CONVERSION_DATA_ADMETRIC | 转化数据量 | “最近有 xx 人 yy ”，其中 xx 为转化数据，yy 为 conversion_target_type（见步骤 2） | 近 30 天账户内浅层目标转化量之和（conversions_count） | Android 应用推广 ( PROMOTED_OBJECT_TYPE_APP_ANDROID ) iOS 应用推广 ( PROMOTED_OBJECT_TYPE_APP_IOS ) 商品推广 ( PROMOTED_OBJECT_TYPE_ECOMMERCE ) 品牌活动推广 ( PROMOTED_OBJECT_TYPE_LINK_WECHAT ) QQ 消息推广 ( PROMOTED_OBJECT_TYPE_QQ_MESSAGE ) 微信门店推广 ( PROMOTED_OBJECT_TYPE_LOCAL_ADS_WECHAT ) QQ 门店推广 ( PROMOTED_OBJECT_TYPE_LOCAL_ADS ) 销售线索收集 ( PROMOTED_OBJECT_TYPE_LEAD_AD ) 微信小游戏推广 ( PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT ) QQ 小游戏推广 ( PROMOTED_OBJECT_TYPE_MINI_GAME_QQ ) |

不论选哪种数据类型，都仅当转化数据>=50 时才会在广告上展示。

步骤 2、转化数据量下设置转化行为 conversion_target_type 如果选择了转化数据类型为 CONVERSION_DATA_ADMETRIC (转化数据量) 时，需进一步选择转化行为（conversion_target_type）文案。转化行为决定展示给用户的广告转化文案，如广告主选择转化行为是“预约”的时候，展示的文案将为：“最近已有 xx 人预约”。

其中 xx 为转化数，与所选择的转化行为无关，仅与广告的浅层优化目标有关，对于同一条广告，不管选择哪一个转化行为，展示的数据都是最近 30 天的浅层优化目标的转化数之和。 转化行为 conversion_target_type 与推广目标及按钮文案有关，对应关系为： 当推广目标为 PROMOTED_OBJECT_TYPE_ECOMMERCE,PROMOTED_OBJECT_TYPE_LINK_WECHAT,-,PROMOTED_OBJECT_TYPE_QQ_MESSAGE,PROMOTED_OBJECT_TYPE_LOCAL_ADS_WECHAT,PROMOTED_OBJECT_TYPE_LOCAL_ADS,PROMOTED_OBJECT_TYPE_LEAD_AD,PROMOTED_OBJECT_TYPE_QQ_BROWSER_MINI_PROGRAM,PROMOTED_OBJECT_TYPE_LINK 时，可以使用的转化行为如下表：

| 按钮文案 link_name_type | 按钮文案 API 枚举 | 转化行为 conversion_target_type | API 枚举值 |
| --- | --- | --- | --- |
| 立即购买 | BUY_NOW | 购买 | CONVERSION_TARGET_BUY |
| 立即预约 | RESERVE_NOW | 预约 | CONVERSION_TARGET_RESERVE |
| 立即咨询 | CONSULT_NOW | 咨询 | CONVERSION_TARGET_CONSULT |
| 立即申请 | APPLY_NOW | 申请 | CONVERSION_TARGET_APPLY |
| 立即预定 | BOOK_NOW | 预定 | CONVERSION_TARGET_BOOK |
| 领取优惠 | GET_COUPONS | 领取 | CONVERSION_TARGET_GET |
| 立即领取 | GET_IT_NOW | 领取 | CONVERSION_TARGET_GET |
| 立即体验 | TRY_NOW | 体验 | CONVERSION_TARGET_EXPERIENCE |
| 立即抢购 | BUY_ASAP | 抢购 | CONVERSION_TARGET_PURCHASE |
| 立即开通 | SETUP_NOW | 开通 | CONVERSION_TARGET_SETUP |
| 立即秒杀 | SECKILL_NOW | 秒杀 | CONVERSION_TARGET_SECKILL |
| 观看直播 | WATCH_LIVE | 不使用 | CONVERSION_TARGET_DEFAULT |
| 了解更多 | MORE_INFO | 领取/预约/购买/申请/咨询 | CONVERSION_TARGET_GET/CONVERSION_TARGET_RESERVE/CONVERSION_TARGET_BUY/CONVERSION_TARGET_APPLY/CONVERSION_TARGET_CONSULT |
| 查看详情 | VIEW_DETAILS | 领取/预约/购买/申请/咨询 | CONVERSION_TARGET_GET/CONVERSION_TARGET_RESERVE/CONVERSION_TARGET_BUY/CONVERSION_TARGET_APPLY/CONVERSION_TARGET_CONSULT |
| 去逛逛 | GO_SHOPPING | 领取/预约/购买/申请/咨询 | CONVERSION_TARGET_GET/CONVERSION_TARGET_RESERVE/CONVERSION_TARGET_BUY/CONVERSION_TARGET_APPLY/CONVERSION_TARGET_CONSULT |
| 进入小程序 | ENTER_MINI_PROGRAM | 领取/预约/购买/申请/咨询 | CONVERSION_TARGET_GET/CONVERSION_TARGET_RESERVE/CONVERSION_TARGET_BUY/CONVERSION_TARGET_APPLY/CONVERSION_TARGET_CONSULT |

当推广目标为应用下载 PROMOTED_OBJECT_TYPE_APP_ANDROID、PROMOTED_OBJECT_TYPE_APP_IOS 时，可以使用的转化行为如下表：

| 按钮文案 link_name_type | 按钮文案 API 枚举 | 转化行为 conversion_target_type | API 枚举值 |
| --- | --- | --- | --- |
| 立即下载 | DOWNLOAD_NOW | 下载 | CONVERSION_TARGET_DOWNLOAD |
| 立即领取 | GET_IT_NOW | 领取 | CONVERSION_TARGET_GET |
| 立即试玩 | TRY_PLAY_NOW | 试玩 | CONVERSION_TARGET_TRY |
| 立即体验 | TRY_NOW | 体验 | CONVERSION_TARGET_EXPERIENCE |
| 立即抢购 | BUY_ASAP | 抢购 | CONVERSION_TARGET_PURCHASE |
| 立即开通 | SETUP_NOW | 开通 | CONVERSION_TARGET_SETUP |
| 立即秒杀 | SECKILL_NOW | 秒杀 | CONVERSION_TARGET_SECKILL |
| 下载应用 | DOWNLOAD_APP | 下载 | CONVERSION_TARGET_DOWNLOAD |
| 下载游戏 | DOWNLOAD_GAME | 下载 | CONVERSION_TARGET_DOWNLOAD |
| 立即预约 | RESERVE_NOW | 预约 | CONVERSION_TARGET_RESERVE |
| 立即安装 | INSTALL_NOW | 领取/预约/购买/申请/咨询/下载 | CONVERSION_TARGET_GET/CONVERSION_TARGET_RESERVE/CONVERSION_TARGET_BUY/CONVERSION_TARGET_APPLY/CONVERSION_TARGET_CONSULT/CONVERSION_TARGET_DOWNLOAD |
| 了解更多 | MORE_INFO | 领取/预约/购买/申请/咨询/下载 | CONVERSION_TARGET_GET/CONVERSION_TARGET_RESERVE/CONVERSION_TARGET_BUY/CONVERSION_TARGET_APPLY/CONVERSION_TARGET_CONSULT/CONVERSION_TARGET_DOWNLOAD |

当推广目标为小游戏推广 PROMOTED_OBJECT_TYPE_MINI_GAME_WECHAT、PROMOTED_OBJECT_TYPE_MINI_GAME_QQ 时，可以使用的转化行为如下表：

| 按钮文案 link_name_type | 按钮文案 API 枚举 | 转化行为 conversion_target_type | API 枚举值 |
| --- | --- | --- | --- |
| 立即体验 | TRY_NOW | 体验 | CONVERSION_TARGET_EXPERIENCE |
| 立即试玩 | TRY_PLAY_NOW | 试玩 | CONVERSION_TARGET_TRY |
| 打开游戏 | OPEN_MINI_GAME | 在玩 | CONVERSION_TARGET_PLAYING |
| 进入小游戏 | ENTER_MINI_GAME | 在玩 | CONVERSION_TARGET_PLAYING |
| 立即玩 | PLAY_NOW | 在玩 | CONVERSION_TARGET_PLAYING |
| 了解更多 | MORE_INFO | 在玩 | CONVERSION_TARGET_PLAYING |

转化行为 conversion_target_type 完整的枚举值如下：

| 描述 | API 名称 |
| --- | --- |
| 不使用 | CONVERSION_TARGET_DEFAULT |
| 领取 | CONVERSION_TARGET_GET |
| 预约 | CONVERSION_TARGET_RESERVE |
| 预定 | CONVERSION_TARGET_BOOK |
| 购买 | CONVERSION_TARGET_BUY |
| 申请 | CONVERSION_TARGET_APPLY |
| 咨询 | CONVERSION_TARGET_CONSULT |
| 下载 | CONVERSION_TARGET_DOWNLOAD |
| 在玩 | CONVERSION_TARGET_PLAYING |
| 查看 | CONVERSION_TARGET_CLICK |
| 了解 | CONVERSION_TARGET_SEE |
| 参与 | CONVERSION_TARGET_INVOLVE |
| 打开 | CONVERSION_TARGET_OPEN |
| 抢购 | CONVERSION_TARGET_PURCHASE |
| 浏览 | CONVERSION_TARGET_BROWSE |
| 试玩 | CONVERSION_TARGET_TRY |
| 试驾 | CONVERSION_TARGET_DRIVE |
| 进入 | CONVERSION_TARGET_ENTER |
| 阅读 | CONVERSION_TARGET_READ |
| 关注 | CONVERSION_TARGET_FOLLOW |
| 使用 | CONVERSION_TARGET_USE |
| 开通 | CONVERSION_TARGET_SETUP |
| 秒杀 | CONVERSION_TARGET_SECKILL |
| 体验 | CONVERSION_TARGET_EXPERIENCE |

常见问题： Q：为什么我开启了转化数据展示，我的广告上却没有出现外显的文案？ A：转化行为数据展示本账户下相同推广目标的广告近 30 日内的总转化目标量；仅当数据≥ 50 时才展示；此外，若没有进行 APP 转化数据接入，可能将无法进行第一方转化数据的统计与展示。点击[开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/docs/guide/conversion/introduction?_preview=1)
