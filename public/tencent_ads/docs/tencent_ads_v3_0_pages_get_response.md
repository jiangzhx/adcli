---
title: 如何接收应答
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/get_response
doc_id: tencent_ads_v3_0_pages_get_response
source_id: tencent_ads_v3_0_pages_get_response
---
# 如何接收应答

本节将为您介绍 Marketing API 的应答内容以及建议的通用处理流程。

## HTTP 状态码

应答 Headers 中支持 HTTP 标准状态码，具体如下：

| 状态码 | 名称 | 描述 |
| --- | --- | --- |
| 200 | 成功 | 当 Marketing API 请求被正确处理，且能按设计获取结果时，返回该状态码 |
| 3xx | 跳转 | 在特定情况下，Marketing API 可能会返回这些状态码，建议调用方按照 HTTP 标准来处理 |
| 4xx | 客户端错误 | 由客户端原因造成的错误 |
| 5xx | 服务器端错误 | Marketing API 或其下层服务发生内部错误 |

## 响应头结构

X-TSA-Trace-Id：全局唯一 id，通过该 id 可帮助技术支持快速定位问题，所以反馈问题时，请告知该 id。X-RateLimit-Remaining：当前应用对于当前请求接口的频次余量百分比，以“,”分割，顺序为“天,分钟”，可以此作为依据调整接口调用频率。

## 响应数据结构

响应数据中的结构定义如下表所示：

| 名称 | 类型 | 是否一定返回 | 限制 | 描述 |
| --- | --- | --- | --- | --- |
| code | int64 | 是 | 等于 0 表示成功，不等于 0 表示错误，具体见文档附录[返回码定义](http://developers.e.qq.com/docs/reference/errorcode) | 返回码 |
| message | string | 是 | code 不等于 0 时，message 为错误描述 | 错误描述 |
| message_cn | string | 否 | code 不等于 0 时，message_cn 为错误情况的中文描述 | 中文错误描述 |
| data | object | 否 | 具体返回内容见各接口定义，只在 code 等于 0 时可能返回 | 资源数据 |
| errors | object | 否 | 只在 code 不等于 0 时可能返回 | 详细错误信息 |
| code_type | enum | 否 | 只在 code 不等于 0 时可能返回 | 错误码类型 |

以删除创意信息（dynamic_creatives/delete）接口的应答为例，正常调用返回的结果如下：

```
HTTP/1.1 200 OK
Date: Fri, 06 Mar 2024 06:31:22 GMT
Content-Type: application/json;charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
Server: nginx
X-TSA-Trace-Id: 94eff22c95ede2a34b942ae041bf2db6
X-RateLimit-Remaining: 50%,50%

{
  "code": 0,
  "data": {
    "dynamic_creative_id": 40958977
  },
  "message_cn": "",
  "message": ""
}
```

如果调用参数不正确，则会在应答数据正文中返回具体的业务错误信息。例如传递的 access_token 参数无效时，返回结果如下：

```
HTTP/1.1 200 OK
Date: Mon, 25 Mar 2024 11:44:35 GMT
Content-Type: application/json;charset=utf-8
X-TSA-Trace-Id: 4084e32111062db0bfdaa89f0301dce5
X-RateLimit-Remaining: 50%,50%

{
    "trace_id": "4084e32111062db0bfdaa89f0301dce5",
    "code": 11002,
    "message_cn": "您的 access_token 无效，请通过 oauth/authorize 接口获取 token。",
    "message": "Access token is invalid.",
    "code_type": "BusinessException"
}
```

## 应答处理流程

建议您按照如下流程图所示对应答进行处理：
