---
title: 术语介绍和技术准备
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/terminology_introduction
doc_id: tencent_ads_v3_0_pages_terminology_introduction
source_id: tencent_ads_v3_0_pages_terminology_introduction
---
# 术语介绍和技术准备

本节将为您介绍 Marketing API 中涉及的概念术语和技术能力，有助于您快速地理解和使用 API。如果您是初次接触腾讯 Marketing API，建议您在开始进行具体接口调试之前对本章节内容进行了解。接下来，我们将对新投放术语和需要做的技术准备进行重点介绍：

# 术语介绍

了解这些术语及其概念有助于您更好的了解接下来章节中介绍的内容，以及您可能即将调用的相关接口的字段含义。

| 术语 | 中文名 | 详细描述 |
| --- | --- | --- |
| agency | 代理商 | 为广告主投放并管理广告的代理机构。 通过代理商创建帐号的广告主称之为子客，未通过代理商创建帐号的广告主称之为直客。 |
| organization | 集团 | 存在合作关系的组织集合（可以是政策集团、客户简称等提供合作关系的主体集合等） |
| organization | 主体 | 即企业类客户唯一营业执照/个人类客户唯一身份证对应的主体、管理实体 |
| organization | 业务单元 | 一个虚拟的营销组织集合，可关联相关组织信息（如账户、成员等），并实现数据资产、资金等资源的共享 |
| account | 客户帐号 | 通过腾讯广告平台开展推广业务的客户，包括代理商、直客、子客三种类型。每个客户在腾讯广告平台上可能有一个或多个帐号，每个帐号对应唯一的 account_id。 仅广告主帐号（直客以及子客）才能投放广告。 |
| developer | 开发者 | 特指基于 TSA Marketing API 进行相关功能开发的企业； 开发者可以是客户（代理商、直客、子客）本人，也可以是第三方的技术公司； 所有开发者需要通过腾讯广告开发者官网进行注册才能拥有 Marketing API 的使用权限。[开发者专区 - 腾讯广告](https://developers.e.qq.com/reg) |
| client_id | 应用程序 id | 开发者官网为在官网中创建并审核通过的应用程序分配的 id，每个应用程序对应唯一的 client_id ； 应用程序可以是网站、PC 应用、手机应用，如广告客户自有的内部系统、广告代理商的 Trading Desk 系统等等； Marketing API 的接口权限、资源授权等均基于应用程序进行控制。 |
| client_secret | 应用程序密钥 | 每个应用程序对应的密钥，在开发者创建的应用程序被审批通过时由系统分配； 用于在 Marketing API 的鉴权认证过程中获得调用 API 的 access_token ； 每个应用程序对应唯一的 client_secret。 |
| access_token | 授权令牌 | Marketing API 每次接口调用中用于鉴别权限的参数，包含客户授予当前应用程序访问其帐号的信息； 通常需要应用程序引导客户通过完成 OAuth 2.0 授权后才能获得。 |
| adgroup | 广告 | 共享相同的推广时间、受众目标、投放广告版位、出价等信息的多个广告的集合。 |
| dynamic_creative | 创意 | 呈现给受众的元素集合，可能是文字、图片、视频等一种或多种元素的组合； |
| creative_template | 创意形式 | 对创意中元素的具体描述和限定。一般情况下，不同创意形式具有的元素或其属性（如图片的尺寸、字符限制等）不同； 每个创意形式对应唯一的 creative_template_id，例如 creative_template_id=2 时，限制创意中必须包含一个长度小于 18 的文本和一张尺寸为 160*210 的图片两个元素； 一个广告创意只能对应一个创意形式。 |
| marketing_goal | 营销目的 | 用于表达广告主实际的投放目的，如用户增长、线索留咨等 |
| marketing_carrier | 营销载体 | 营销载体是推广产品的承载方，是落地页类型的聚类，是需要归因数据和触达的中间载体。 |
| marketing_target_type | 推广内容类型 | 是指本次投放推广的标的物类型，如应用、商品、服务、活动等 |
| marketing_asset_id | 推广产品 id | 是指本次投放推广的标的物具体的 id，入商品 id、应用 id 等 |
| optimization_goal | 优化目标 | 优化目标是指本次投放要优化的转化动作，如关注、下单、付费、线索收集等 |
| targeting | 定向 | 用于筛选广告受众的条件组合； 可以根据多个维度筛选出合适的受众并应用在广告投放环节。 |
| DMP | 腾讯广告数据管理平台 | 特指腾讯广告数据管理平台（Data Management Platform）； 通过开放丰富的数据能力，为合作方提供智能化的人群画像分析，打破数据孤岛，分享数据红利，提升行业整体价值。详见 [腾讯广告如翼](http://dmp.qq.com/)。 |
| DPA | 动态商品广告 | 特指动态商品广告（Dynamic Product Ads） |

# 技术准备

Marketing API 文档所涉及接口均遵循 HTTPS 协议，您可以使用任何支持 HTTPS 协议和 JSON 格式的编程语言开发应用程序。

● 有关标准 HTTPS 协议，可参考 [RFC 2818 - HTTP Over TLS](https://tools.ietf.org/html/rfc2818) 或 [维基百科-HTTPS](https://en.wikipedia.org/wiki/HTTPS) 相关介绍。 ● 有关 JSON 数据格式，可参考 [JSON](http://json.org/json-zh.html) 或 [维基百科– JSON](https://zh.wikipedia.org/wiki/JSON) 相关介绍。 ● Marketing API 文档中的请求示例均为通过 cURL 方式发起请求的示例，cURL 的用法可参考 [维基百科-cURL](https://en.wikipedia.org/wiki/CURL)相关介绍。同时我们提供了可视化的调试工具（登录后可在每篇文档页面中使用），以便提高您调试和编码的效率。另外，接口文档中所描述的 integer 类型代表整型，并不一定代表开发语言的 int 类型。对于某些字段可能存在长度问题，例如: [【重要通知】广告相关 id 取值升级通知](https://developers.e.qq.com/news/info/20200914)。
