---
title: 获取 Authorization Code 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/oauth/authorize
doc_id: tencent_ads_v3_0_docs_api_oauth_authorize
source_id: tencent_ads_v3_0_docs_api_oauth_authorize
---
# 获取 Authorization Code [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,account_management,ads_insights,audience_management,user_actions |
| --- | --- |
| 请求地址 | https://developers.e.qq.com/oauth/authorize |
| 请求方法 | GET |

## 全局参数

全局参数是指每一个接口都需要使用到的参数。详情[参考](https://developers.e.qq.com/v3.0/pages/send_request)，代码案例[参考](https://developers.e.qq.com/v3.0/pages/send_request)。

| 参数名称 | 参数类型 |
| --- | --- |
| access_token | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/docs/start/authorization)章节 |
| timestamp | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。 MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2017-05-15 17:21:59 |
| nonce | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性 |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| client_id* | integer | 应用 id，在开发者官网创建应用后获得，可通过 [\[应用程序管理页面\]](https://developers.e.qq.com/app) 查看 |
| redirect_uri* | string | 应用回调地址，仅支持 http 和 https，不支持指定端口号，且主域名必须与创建应用时登记的回调域名一致，若地址携带参数，需要对地址进行 urlencode 字段长度最小 1 字节，长度最大 1024 字节 |
| state | string | 验证请求有效性参数，值为用户自取，用于阻止跨站请求伪造攻击 字段长度最小 0 字节，长度最大 512 字节 |
| scope | string | 授权范围，可选值：ads_management（广告投放）、ads_insights（数据洞察）、account_management（帐号服务）、audience_management（人群管理）、user_actions（用户行为数据接入），不传即为授权全部权限 字段长度最小 1 字节，长度最大 64 字节 |
| account_type | enum | 授权账号类型，登录账号类型 QQ/微信，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#auth_account_type) 可选值：{ ACCOUNT_TYPE_WECHAT, ACCOUNT_TYPE_QQ } 默认值：ACCOUNT_TYPE_QQ |

使用说明

## 请求示例

```
在浏览器访问页面
https://developers.e.qq.com/oauth/authorize?client_id=<CLIENT_ID>&redirect_uri=https://www.example.com/response&state=<STATE>&scope=<SCOPE>
```

## 应答字段

## 应答示例

```
系统跳转至 redirect_uri 对应的系统或页面，同时携带 authorization_code（有效期 5 分钟）和 state 两个参数
形如：https://www.example.com/response?authorization_code=<AUTHORIZATION_CODE>&state=<STATE>
```

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
