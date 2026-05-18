---
title: 联合预算工具使用指引
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/ad30_joint_budget
doc_id: tencent_ads_v3_0_pages_ad30_joint_budget
source_id: tencent_ads_v3_0_pages_ad30_joint_budget
---
# 联合预算工具使用指引

## 1. 联合预算工具概述

什么是广告联合预算工具 广告联合预算管理工具，是腾讯平台面向广告主提供用于管理多个广告统一设置日预算和总预算的投放工具，满足客户指定某一推广产品限制多条广告共用总预算额度诉求，确保优质广告竞得更多预算；无需人工盯盘调控，提供广告投放效率。

使用注意： 1.已经产生消耗的广告不能绑定联合预算; 2.同一个广告 id 只能关联 1 个联合预算组，已经绑定联合预算的广告不能取消关联； 3.广告联合预算创建后不能删除，支持修改联合日预算、联合总预算.

## 2. 如何通过 API 使用联合预算

### 查询联合预算可用的广告列表

仅支持 3.0 广告且是竞价展示广告，广告自身状态被删除的不支持关联联合预算 目前 3.0 版本的 [开发文档 | 获取广告组](https://developers.e.qq.com/v3.0/docs/api/adgroups/get) 接口获取到的都是 3.0 版本的竞价展示广告，请求参数中 is_deleted 设置为 false，可以拉取出未删除的广告。

已关联到联合预算规则的广告，不支持再次关联到别的联合预算规则 3.0 版本的 [开发文档 | 获取广告组](https://developers.e.qq.com/v3.0/docs/api/adgroups/get) 接口返回的 joint_budget_rule_id 字段如果大于 0，表示此广告已绑定联合预算规则，已绑定联合预算规则的广告不支持再次绑定。

只能关联未产生消耗的广告通过 [开发文档 | 获取实时消耗](https://developers.e.qq.com/v3.0/docs/api/realtime_cost/get) 接口可以获取广告的历史总消耗信息，level 传 ADTOTAL 时查询的是历史总消耗，历史总消耗为 0 的表示此广告未产生消耗。

### 创建联合预算

可参考联合预算创建接口 [开发文档 | 创建联合预算规则](https://developers.e.qq.com/v3.0/docs/api/joint_budget_rules/add) 文档指引，注意各请求参数的校验条件，创建时如果 daily_budget、total_budget 不填认为是不限。

### 更新联合预算

可参考联合预算创建接口 [开发文档 | 更新联合预算规则](https://developers.e.qq.com/v3.0/docs/api/joint_budget_rules/update) 文档指引，注意不支持删除广告同联合预算规则的关联关系，adgroup_id_list 参数只允许填写新增关联的广告 id，如果 adgroup_id_list 中填写了已绑定的广告 id，接口会报错。

### 查询联合预算

可参考联合预算查询接口[开发文档 | 获取联合预算](https://developers.e.qq.com/v3.0/docs/api/joint_budget_rules/get) 文档指引
