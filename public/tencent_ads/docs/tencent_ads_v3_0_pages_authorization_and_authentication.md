---
title: 如何授权认证？
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/authorization_and_authentication
doc_id: tencent_ads_v3_0_pages_authorization_and_authentication
source_id: tencent_ads_v3_0_pages_authorization_and_authentication
---
# 如何授权认证？

### 授权认证

Token 是在 Marketing API 操作指定账号的身份凭证，当您需要操作特定广告账号时，您需要使用该广告账号对您的开发者应用进行授权，以获取 access_token 和 refresh_token，所有接口均通过请求参数中传递的 access_token（授权令牌）来进行身份认证和鉴权，系统会在校验 access_token 有效、接口调用配额未用完、接口调用频次未超限 3 个条件符合后接受此次请求进行具体业务处理并做出响应。

Marketing API 目前支持代理商/商务管家/广告主等账号类型进行授权鉴权。 本节将为您介绍如何进行 Marketing API 的授权认证。 该环节您可以获取指定账号的 access_token 和 refresh_token，其中：

access_token 是您调用接口时，操作指定广告账号的身份凭证，默认有效期 24 小时。您可以通过开发者应用管理页面，修改该 token 的有效时长

refresh_token 是用于刷新 access_token 的凭证，用于向系统获取新的 access_token(具体操作方法见后文），默认有效期 30 自然日，每次刷新 access_token 的操作可自动刷新 refresh_token 有效期的起始计算时间

大量使用错误的 token 操作账号的行为可能导致您的 IP 被封停，请您关注并监控错误信息

#### 1.1 私有应用如何获取 access_token 和 refresh_token

进入应用详情界面

首先选择您要操作的账户身份：如广告主、服务商、商务管家、T1 等（因同一个 QQ 可以同时具有多个身份，不同的身份的 token 是不同的）。

点击“获取或重置”即可获取或者重置您的 token

token 信息获取时仅展示一次，请妥善保存

token 生成后 10 分钟后生效

重置 token，该身份下在该应用上的旧 refresh_token 和 access_token 会立即失效

#### 1.2 第三方应用如何通过 OAuth 2.0 获得 access_token

客户需要通过您的应用进行推广操作时，您的应用需要先引导客户完成至少一次 OAuth 2.0 认证操作，以便获得调用接口操作的客户的推广帐号所必须的 access_token。Marketing API 的 OAuth 2.0 遵循业界通用的规范和流程，完成 OAuth 2.0 认证（当前只支持 server-side 模式）需要完成以下步骤：

A、引导客户进入 OAuth 2.0 登录界面；

B、客户用推广帐号登录；

C、登录成功并确认授权后广点通向您的应用程序返回一个授权码（Authorization Code）；

D、应用程序调用接口用授权码（Authorization Code）获得 access_token，同时获得一个用于刷新 access_token 的 refresh_token ；

E、在 access_token 过期后，使用 refresh_token 获得新的 access_token（可选）。

详细描述如下： Step 1：引导客户完成 OAuth 2.0 认证获得 authorization_code，获得 authorization_code 需要引导客户完成 OAuth 2.0 的认证。调用 OAuth 2.0 授权页面的 URL 形如：[https://developers.e.qq.com/oauth/authorize?client_id=123456&redirect_uri=https%3a%2f%2fwww.example.com%3fpara1%3da%26para2%3db&state=&scope=ads_management&account_type=ACCOUNT_TYPE_QQ](https://developers.e.qq.com/oauth/authorize?client_id=123456&redirect_uri=https%3a%2f%2fwww.example.com%3fpara1%3da%26para2%3db&state=&scope=ads_management&account_type=ACCOUNT_TYPE_QQ)。其中：

client_id：开发者创建的应用程序的唯一标识 id，必填，可通过[应用程序管理页面](https://developers.e.qq.com/app)查看；

redirect_uri：回调地址，由开发者自行提供和定义（地址主域需与开发者创建应用程序时登记的回调主域一致），用于跳转并接收回调信息，必填，该字段需要做 UrlEncode，确保后续跳转正常；

state：开发者自定义参数，可用于验证请求有效性或者传递其他自定义信息，回调的时候会原样带回，可选；

scope：授权的能力范围，可选，不传时表示授权范围为当前应用程序所拥有的所有全部权限；

account_type：授权用的账号类型，可选，包括 QQ 号和微信号，不传时默认为 QQ 号

OAuth 2.0 授权页面如下图所示：

其中页面右侧为应用程序信息，左侧为请求授权的帐号信息，客户可以切换选择是用 QQ 号还是用微信号，推荐开发者直接在引导客户进入授权页时通过 account_type 指定要授权的账号类型。

右侧显示的是应用程序的 logo、名称、以及可授权的权限组分类。

其中 logo、名称是创建应用程序时开发者自行上传的信息，可授权的权限组分类是根据开发者调用 oauth/authorize 接口同步的 scope 生成的权限组信息；

授权客户可通过列表选择授权给开发者的操作权限。

左侧是提供给授权客户进行身份验证的入口。如客户同意授权，需要登录其对应的 QQ 帐号或者用微信号扫码，并点击同意授权。登录后，页面将会显示请求授权的账号信息。不同类型的帐号在同意授权后，应用可操作的推广帐号不同，具体规则如下：

| 账户分类 | 支持角色 | 可管理的账户范围 |
| --- | --- | --- |
| 广告主业务单元账号 | 管理员/主管理员（开户 qq/微信） | 该广告主业务单元下全部账号 |
| 广告主主体账号 | 管理员/主管理员（开户 qq/微信） | 该广告主主体下全部账号 |
| 广告主集团账号 | 管理员/主管理员（开户 qq/微信） | 该广告主集团下全部账号 |
| 代理商帐号 | 代理商超级管理员（开户 qq/微信） | 当前代理商及所有代理子客户 |
| 代理商帐号 | 代理商管理员/子账号管理员/运营人员 | 该员工有权管理的所有代理商子客 |
| 代理商帐号 | 广告主员工（自理投放管理员） | 该员工有权管理的所有代理商子客 |
| 代理商主体账号 | 管理员/主管理员（开户 qq/微信） | 该代理商主体下的所有代理商账号和所有子客账号 |
| 代理商业务单元账号 | 管理员/主管理员（开户 qq/微信） | 该代理商业务单元下的所有代理商账号和所有子客账号 |
| 直客广告主账号 | 超级管理员（开户 qq/微信） | 该广告主账户 |

当引导客户在上述登录界面完成登录身份验证后，系统会携带 authorization_code（有效期 5 分钟）和 state 两个参数在浏览器端发出 GET 请求，形如：[http://www.example.com/response?authorization_code=6a6b6c6d&state=112233](http://www.example.com/response?authorization_code=6a6b6c6d&state=112233)

当上述请求完成或请求链接超出 3 秒时，系统会自动跳转到刚才定义的回调地址中。您的应用程序在收到上述返回后，应当在 authorization_code 有效期内，利用 authorization_code 获得 access_token（详见下一步），并在跳转后的页面对客户给出相应的提示或跳转指引。

Step 2：使用 authorization_code 获得 access_token 和 refresh_token。用 authorization_code 获得 access_token 和 refresh_token 的接口地址为[https://api.e.qq.com/oauth/token](https://api.e.qq.com/oauth/token)，接口输入参数如下表所示： 请求参数：

| 字段名 | 类型 | 描述 |
| --- | --- | --- |
| client_id | integer | 应用 id，在开发者官网创建应用后获得，可通过 [应用程序管理页面](https://developers.e.qq.com/app) 查看 |
| client_secret | string | 应用 secret，在开发者官网创建应用后获得，可通过 [应用程序管理页面](https://developers.e.qq.com/app) 查看 字段长度最小 1 字节，长度最大 256 字节 |
| grant_type | string | 请求的类型，可选值：authorization_code（授权码方式获取 token）、refresh_token (刷新 token ) 字段长度最小 1 字节，长度最大 64 字节 |
| authorization_code | string | OAuth 认证 code，可通过获取 Authorization Code 接口获取，当 grant_type=authorization_code 时必填 字段长度最小 1 字节，长度最大 64 字节 |
| refresh_token | string | 应用 refresh token，当 grant_type=refresh_token 时必填 字段长度最小 1 字节，长度最大 256 字节 |
| redirect_uri | string | 应用回调地址，当 grant_type=authorization_code 时，redirect_uri 为必传参数，仅支持 http 和 https，不支持指定端口号，且传入的地址需要与获取 authorization_code 时，传入的回调地址保持一致 字段长度最小 1 字节，长度最大 1024 字节 |

请求示例：

```
curl -G 'https://api.e.qq.com/oauth/token' \ 
    -d 'client_id=<CLIENT_ID>' \ 
    -d 'client_secret=<CLIENT_SECRET>' \ 
    -d 'grant_type=authorization_code' \ 
    -d 'authorization_code=<AUTHORIZATION_CODE>' \ 
    -d 'redirect_uri=https://www.example.com'
```

返回示例：

```
{
    code: 0,
    message: ,
    data: {
        access_token: 228bd56b7ee039540953352f766b40d31651487e,
        refresh_token: 854e744a1f4c6fc20f498e366b9aabd2c4b971fd,
        access_token_expires_in: 86400,
        refresh_token_expires_in: 2592000 
    }
}
```

获得 access_token 后，您可用此调用接口对相关的推广帐号进行操作，如果发起 Marketing API 请求可通过[发起请求](https://developers.e.qq.com/docs/start/request)章节进行了解。 值得注意的是，一旦 access_token 失效，您将无法调用接口。access_token 和 refresh_token 的有效期可以通过 oauth/token 接口的返回字段获取，默认情况下 access_token 和 refresh_token 的有效期如下：

access_token 默认有效期为 24 小时

refresh_token 默认有效期为 30 天

#### 1.3 如何刷新 access_token

在 refresh_token 有效期内，您可以用 refresh_token 通过 auth/token 接口刷新 access_token。请求示意如下：

```
curl -G 'https://api.e.qq.com/oauth/token' \ 
    -d 'client_id=<CLIENT_ID>' \ 
    -d 'client_secret=<CLIENT_SECRET>' \ 
    -d 'grant_type=refresh_token' \ 
    -d 'refresh_token=<REFRESH_TOKEN>'
```

特别注意，每次刷新 access_token 时，refresh_token 会自动续期。

#### 1.4 如何刷新 refresh_token

如果 refresh_token 失效，您需要重新通过 OAuth 2.0 获得新的 access_token 和 refresh_token。 关于 OAuth 2.0 相关接口说明，可以参考接口清单中的 [OAuth 相关接口](https://developers.e.qq.com/v3.0/docs/api/oauth/authorize)。
