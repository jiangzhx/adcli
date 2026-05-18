---
title: 如何发起请求
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/send_request
doc_id: tencent_ads_v3_0_pages_send_request
source_id: tencent_ads_v3_0_pages_send_request
---
# 如何发起请求

本节将为您介绍如何发起一次 API 请求。

## 请求 URL

Marketing API 请求 URL 约定了使用的协议、域名、模块、版本、资源及动作，详细定义如下：

正式环境为 [https://api.e.qq.com///](https://api.e.qq.com/%3CAPI_VERSION%3E/%3CRESOURCE_NAME%3E/%3CRESOURCE_ACTION%3E)

其中：

协议：HTTPS ；

API_VERSION：版本号，当前最新版本号为 v3.0 ；

RESOURCE_NAME：表示要操作的资源，如 adgroups、dynamic_creatives ；

RESOURCE_ACTION：表示对资源的动作，如 get、add。

各接口对应的 <RESOURCE_NAME>/<RESOURCE_ACTION> 在文档中描述为接口请求路径，例如：正式环境新建一个广告，接口文档中描述的请求路径为 adgroups/add，完整地址为 [https://api.e.qq.com/v3.0/adgroups/add](https://developers.e.qq.com/v3.0/docs/api/adgroups/add)。

## HTTP Method

调用方应根据具体接口的要求设置 HTTP Method 为 GET 或 POST。

## HTTP Header

调用方应遵循 HTTP 协议设置相应的 Header，目前支持的 Header 有：Content-Type，用于指定数据格式。例如：

```
Content-Type: application/json
```

## 编码方式

Marketing API 支持的编码方式为 UTF-8。

## 接口调用限制

| 类别 | 限制描述 |
| --- | --- |
| 接口功能 | 不同应用程序在接口功能上可能存在差异，由开发者创建应用的时候根据应用的使用场景进行选择 |
| 调用天频次 | 1、目前 custom_audience_files/add 及 custom_tag_files/add 两个接口对每个应用程序都有调用天频次限制, 其余接口均没有天频次限制 2、达到限制后，您当日将无法继续调用超限的接口，第二天可自动恢复正常 3、如需要调整限制可以联系您的运营接口人 |
| 调用分钟频次 | 1、系统对每个应用程序调用每个接口都有调用分钟频次限制，不同应用等级下的调用次数不同，具体可通过应用程序管理页面了解 2、达到限制后，您需要暂停对该接口的调用，5 分钟后可自动恢复正常 3、如需要调整限制可以联系您的运营接口人 |

## 特殊字符限制

如无特殊声明，API 接口所有输入参数的值均不能包含以下这些特殊字符：< > & ‘ ” / \ 以及 TAB、换行、回车键。

## 请求通用参数

1、每个请求接口中的均需传入以下通用参数，详细定义如下表所示：

| 名称 | 类型 | 必填 | 限制 | 描述 |
| --- | --- | --- | --- | --- |
| access_token | string | 是 | 以 Query Parameter 方式在请求路径中传递。 | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/v3.0/pages/authorization_and_authentication)章节。 |
| timestamp | timestamp | 是 | 以 Query Parameter 方式在请求路径中传递。 | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2018-05-15 17:21:59 |
| nonce | string | 是 | 以 Query Parameter 方式在请求路径中传递。 | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性。 |

2、所有 get 接口，请求参数中必须增加 fields 字段，用于指定返回的字段列表。

| 名称 | 类型 | 必填 | 限制 | 描述 |
| --- | --- | --- | --- | --- |
| fields | string[] | 否 |  | 指定返回的字段列表 |

## 调用规范

1、GET 请求参数仅支持这一种传入方式（请参考下方示例）：需要对非 string 类型的参数的值进行 json 序列化再传入 2、POST 请求，对于非文件上传类接口，仅支持 Content-Type 为 application/json ；对于文件上传类接口，仅支持 Content-Type 为 multipart/form-data 3、注意接口参数类型，例如参数 adgroup_id 的类型是 integer，请不要传入 string 类型

## 完整请求示例

API 请求中需要提供必要的通用参数、每个接口要求的参数，并声明正确的编码方式。以 curl 发起请求获取和更新一个广告为例。 获取一个广告：

```
curl 'https://api.e.qq.com/v3.0/adgroups/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
    -H 'Content-Type: application/json' \ 
    -d 'account_id=25610'
    -d 'fields=["adgroup_id", "adgroup_name"]'
```

创建一个广告：

```
curl 'https://api.e.qq.com/v3.0/adgroups/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \ 
    -H 'Content-Type: application/json' \ 
    -d '{
        "account_id": 25610,
        "adgroup_id": 1111111111111,
        "adgroup_name": "testadgroup"
    }'
```
