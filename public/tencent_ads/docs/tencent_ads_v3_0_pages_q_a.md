---
title: MKTAPI3.0-Q&A
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/Q&A
doc_id: tencent_ads_v3_0_pages_q_a
source_id: tencent_ads_v3_0_pages_q_a
---
# MKTAPI3.0-Q&A

## 一、授权相关

#### 1. 为什么提示 token 过期或者 Access token is invalid ？

#### 2. 为什么报接口调用次数超限错误或者 Application request limit has been exceeded ？

#### 3. 为什么正常访问接口报 The nonce has been used before ？

#### 4. 为什么报访问接口没有权限或 The API you requested is out of the scope of authority ？

#### 5. 集团、主体、业务单元、账户的区别？

#### 6. MKTAPI3.0 是否支持老 BM 授权？

## 二、广告投放

#### 1. 老 MP 账户是否可投放 3.0 广告？

#### 2. 创建广告时如何获取推广内容资产信息？

| marketing_target_type | marketing_asset_outer_id | marketing_asset_outer_sub_id |
| --- | --- | --- |
| MARKETING_TARGET_TYPE_APP_ANDROID | 安卓应用 id | 安卓应用渠道包 id |
| MARKETING_TARGET_TYPE_APP_IOS | IOS 应用 id | - |
| MARKETING_TARGET_TYPE_WECHAT_MINI_GAME | 微信小游戏 id | - |
| MARKETING_TARGET_TYPE_MINI_GAME_QQ | QQ 小游戏 id | - |
| MARKETING_TARGET_TYPE_PC_GAME | 游戏域名 | - |
| MARKETING_TARGET_TYPE_CONSUMER_PRODUCT | 商品库 id | 商品 id |
| MARKETING_TARGET_TYPE_LOCAL_STORE | 格式：poi_id@owner_uid poi_id:门店 id owner_uid: 门店所属账号 uid | - |
| MARKETING_TARGET_TYPE_WECHAT_WORK | 企业微信 id | - |
| MARKETING_TARGET_TYPE_COMMODITY_SET | 商品库 id | 商品集合 id |

#### 3. 广告唯一性限制规则是什么？

## 三、数据报表

#### 1. 请求图片报表时如何过滤 icon、视频封面等数据？

#### 2. 数据报表的时效性？

| 报表分类 | 数据更新时效性 |
| --- | --- |
| 日报表 （daily_reports/get） | （1）不使用版位（site_set）聚合数据（group by）情形： 3 分钟级别更新 （2）按照版位（site_set）聚合数据（group by）情形： 1 小时级别更新： REPORT_LEVEL_MATERIAL_IMAGE, REPORT_LEVEL_MATERIAL_VIDEO T+1 天更新： REPORT_LEVEL_DYNAMIC_CREATIVE, REPORT_LEVEL_COMPONENT, REPORT_LEVEL_CHANNEL |
| 小时报表（hourly_reports/get） | 3 分钟级别更新 |
| 定向标签报表（targeting_tag_reports/get） | T+1 天 |
| 获取联盟广告位报表（ad_union_reports/get） | T+1 天 |

#### 3. 数据报表的聚合规则是什么？
