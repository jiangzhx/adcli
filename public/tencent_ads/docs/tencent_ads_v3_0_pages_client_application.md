---
title: 如何创建应用并申请权限
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/client_application
doc_id: tencent_ads_v3_0_pages_client_application
source_id: tencent_ads_v3_0_pages_client_application
---
# 如何创建应用并申请权限

### 1. 开发者应用的分类及作用

通过腾讯广告开发者专区创建的应用程序是指基于 Marketing API 开发的应用，比如管理广告的投放平台、广告数据分析工具、自动化营销的脚本等。创建应用程序的目的是为了获取所需接口在正式环境的调用权限。在获取正式环境的接口权限前，建议您先通过沙箱环境进行接口调试。 开发者应用按注册者类型和权限范围，可以分为私有应用及第三方应用两类（每一类应用最多可申请 20 个）。下面将介绍这两类应用的适用场景及具体差异。

#### 私有应用

当您的开发者注册 QQ 同时是代理商、广告主、商务管家等身份的开户 QQ 时，您可创建私有应用，通过该应用，您可以直接操作注册 QQ 对应的账号名下的广告身份（如代理商可操作代理商本人及其子客信息，商务管家账号可以操作商务管家账号下认领的广告账号信息）。

#### 第三方应用

当您希望通过 Marketing API 管理多广告账号、或为广告行业提供第三方技术服务时，您可以通过创建第三方应用来实现。

### 2. 应用的申请及创建

Step1: 注册成为开发者后，在开发者官网进行登陆并进入[应用程序管理](https://developers.e.qq.com/app)看板，可选择创建私有应用或第三方应用（私有应用的前置条件是您的开发者注册 QQ 账号同时为代理商、广告主、商务管家等身份的开户 QQ），则界面会显示相应的创建入口如下图：

Step 2：点击“创建新应用”进入创建应用程序界面，填写应用名称、应用介绍信息等。请注意，私有应用需要填写的内容比第三方应用少，但仅可管理该 QQ 号对应的广告账号。

应用图标：360 x 360 px 的应用图标。

显示在 OAuth 2.0 授权页面中，作为推广客户（服务商/广告主）识别应用的标识

应用名称：应用程序的名称，多个应用程序不允许重名。

显示在 OAuth 2.0 授权页面中，作为推广客户（服务商/广告主）识别应用的标识

应用介绍：介绍您的应用程序希望基于 Marketing API 实现的功能及您需要功能通过审核的原因。

回调地址将用于 OAuth 2.0 授权完成后的跳转及信息返回到您指定地址，供您获取相关返回信息，详情可参考[发起请求](https://developers.e.qq.com/v3.0/pages/send_request)。

Access Token 有效期：该应用下 access token 的有效时长，默认为 24 小时

Refresh Token 有效期：该应用下 refresh token 的有效时长，默认为 30 天，refresh token 有效期需大于 access token。

注：access token 和 refresh token 详细介绍见[授权认证](https://developers.e.qq.com/v3.0/pages/authorization_and_authentication)。

Step 3：您可根据使用需要选择对应的权限组分类，权限组分类的详细介绍可通过[权限等级](https://developers.e.qq.com/docs/start/access)进一步了解 – 创建后，私有应用自动审核通过，您可以立即开始相关能力的搭建。第三方应用则会在 2-3 个工作日内进行审核。

如您的应用还未开发完成，建议先使用沙箱环境进行调试。

第三方应用的开发者可根据获取到的应用程序 id（client_id）及 client_secret，以此发起 OAuth 2.0 授权获得指定推广帐号的操作权限，详情参考[授权认证](https://developers.e.qq.com/v3.0/pages/authorization_and_authentication)。
