---
title: 新投放 MKTAPI3.0 如何接入
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/new_to_api_v3
doc_id: tencent_ads_v3_0_pages_new_to_api_v3
source_id: tencent_ads_v3_0_pages_new_to_api_v3
---
# 新投放 MKTAPI3.0 如何接入

### 1. 接口路径、授权、频控的变化

接口路径：3.0 API 的接口路径前缀升级为/v3.0/

OAuth2.0 授权：相比于老的 API，整个授权流程没有变化。可以授权的账户类型中，商务管家概念后续会下线（下线后不再支持新的授权），取而代之的是新的组织概念，建议开发者引导商务管家的授权切换到组织的授权。

当前应用如何访问 3.0 API 接口：目前接入中的应用（client_id），已经全部自动升级到 3.0 版本新应用（具体升级方式参见详细的升级指引），可以同时访问 3.0 API 接口和老的 API 接口，不需要额外申请权限。

频控策略：3.0 接口的频控策略和之前保持不变，和老接口的频控统一计算。例如：开发者官网上应用 A 在 adgroups/get 接口的频控是 1000qpm，可以用 700qpm 访问 v3.0/adgroups/get，用 300qpm 访问 v1.3/adgroups/get，只要这两个接口的总的访问频次是 1000qpm。

### 2. 技术层面其他关键变更

GET 请求参数仅支持这一种传入方式：需要对非 string 类型的参数的值进行 json 序列化再传入

POST 请求，对于非文件上传类接口，仅支持 Content-Type 为 application/json ；对于文件上传类接口，仅支持 Content-Type 为 multipart/form-data

对于接口参数的类型要求会更加严格，例如老版本 API 的 get 接口中，filtering 的 values 是[]string 类型，但是如果传入 int 类型，也能请求成功；新版本中这类请求会报错，请严格按照文档中的字段类型进行传入。

请使用 UTF8 编码，不再支持 GBK 编码

接口提供更加清晰的错误码和错误消息

/v3.0/的接口必须使用 https

不再提供沙箱环境

微信公众平台账户不再支持

### 3. 接入帮助

为了方便开发者升级接入 3.0 API，我们提供了多样化的帮助，细节可以查看后续的详细介绍

可以直接访问生产环境的可视化调试工具 开发者可以直接使用可视化调试工具进行生产环境的调试，例（[开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/material_labels/delete)）

丰富的 SDK： 我们会开发者提供了 JAVA、GO、PHP 三种语言的 3.0 API SDK

投放端调试工具： 投放端的核心接口都是直接调用 3.0API，针对借鉴 adq 投放端来使用 API 的开发者，我们提供了工具，可以查看投放端的操作如何对应请求 API，详情参见[投放端调试工具](https://developers.e.qq.com/v3.0/pages/debugger-tool)

丰富的调用示例 文档接口下方，我们为开发者提供了调用示例；对于部分复杂的接口，我们提供了分场景的多样化示例

丰富的产品主题文档 我们额外提供了各类产品主题文档，方便开发者理解某类产品在 3.0 API 下的变更和用法

技术支持团队 如果上述帮助仍然无法解决问题，可以在开发者官网联系技术支持团队
