---
title: 订阅服务说明
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/subscription_info
doc_id: tencent_ads_v3_0_pages_subscription_info
source_id: tencent_ads_v3_0_pages_subscription_info
---
# 订阅服务说明

#### 简介

腾讯开发者平台面向所有开发者提供消息订阅能力，支持开发者在开发者后台管理创建订阅任务，腾讯提供主动推送信息的接口，将数据报表相关变更信息推送至开发者。本文主要介绍订阅服务的使用步骤。

#### 范围

订阅服务：提供主动推送信息的接口 订阅方式：推送的数据类型为消息 创建订阅：目前订阅服务是以任务的形式展示，使用也同样是基于一条条的任务 订阅类型：数据报表推送、投放状态推送（规划中）、其他事件推送（规划中） 订阅对象：自定义推送账户、应用推送账号包（规划中） 任务数量上限：每个应用下（APPID）最多创建 10 个订阅任务 单个任务管理账户上限：100W

#### 使用流程

第一步：开发者通过开放平台订阅需要的数据，配置推送规则 第二步：需要新增订阅帐户，用于管理当前 APP id 要推送的账户范围，具体如下 [https://developers.e.qq.com/v3.0/pages/subscription_callback!](https://developers.e.qq.com/v3.0/pages/subscription_callback%3C/span%3E) 第三步：消息订阅网关进行数据推送或消息通知，客户接收并进行处理 数据生产完成后，会向订阅者预留的回调地址发送订阅消息，告知数据生产就绪 第四步：开发者通过 API 网关进行数据拉取 收到数据订阅完成的消息后，表示数据生产过程已经完成，需要主动调用 API 提供的服务进行数据获取

订阅工具截图示例：

#### 开发者问题咨询

开发者在对接过程中如有问题可联系您的专属运营进行反馈；
