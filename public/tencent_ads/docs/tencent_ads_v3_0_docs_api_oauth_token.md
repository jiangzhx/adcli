---
title: 通过 Authorization Code 获取 Access Token 或刷新 Access Token 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/oauth/token
doc_id: tencent_ads_v3_0_docs_api_oauth_token
source_id: tencent_ads_v3_0_docs_api_oauth_token
---
# 通过 Authorization Code 获取 Access Token 或刷新 Access Token [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,account_management,ads_insights,audience_management,user_actions |
| --- | --- |
| 请求地址 | https://api.e.qq.com/oauth/token |
| 请求方法 | GET |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| client_id* | integer | 应用 id，在开发者官网创建应用后获得，可通过 [\[应用程序管理页面\]](https://developers.e.qq.com/app) 查看 |
| client_secret* | string | 应用 secret，在开发者官网创建应用后获得，可通过 [\[应用程序管理页面\]](https://developers.e.qq.com/app) 查看 字段长度最小 1 字节，长度最大 256 字节 |
| grant_type* | string | 请求的类型，可选值：authorization_code（授权码方式获取 token）、refresh_token（刷新 token） 字段长度最小 1 字节，长度最大 64 字节 |
| authorization_code | string | OAuth 认证 code，可通过获取 Authorization Code 接口获取，当 grant_type=authorization_code 时必填 字段长度最小 1 字节，长度最大 64 字节 |
| refresh_token | string | 当 grant_type=refresh_token 时必填； 字段长度最小 1 字节，长度最大 256 字节 |
| redirect_uri | string | 应用回调地址，仅支持 http 和 https，不支持指定端口号，且主域名必须与创建应用时登记的回调域名一致，若地址携带参数，需要对地址进行 urlencode 字段长度最小 1 字节，长度最大 1024 字节 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/oauth/token' \
-d 'client_id=<CLIENT_ID>' \
-d 'client_secret=<CLIENT_SECRET>' \
-d 'grant_type=refresh_token' \
-d 'refresh_token=<REFRESH_TOKEN>'
curl -v -G 'https://api.e.qq.com/oauth/token' \
-d 'client_id=<CLIENT_ID>' \
-d 'client_secret=<CLIENT_SECRET>' \
-d 'grant_type=refresh_token' \
-d 'refresh_token=<REFRESH_TOKEN>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| authorizer_info | struct | 权限信息，当 grant_type=refresh_token 时不返回 |
| account_uin | integer | 授权的推广帐号对应的 QQ 号 |
| account_id | integer | 授权的推广帐号 id，有操作权限的帐号 id |
| scope_list | string[] | 权限列表，若为空，则表示拥有所属应用的所有权限 |
| wechat_account_id | string | 授权的推广帐号对应的微信帐号 id |
| account_role_type | enum | 授权账号身份类型，授权账号类型广告主,代理商,T1 账户,商务管家账户，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#oauth_account_role_type) |
| account_type | enum | 账号类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#oauth_account_type) |
| role_type | enum | 角色，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#role_type) |
| access_token | string | 应用 access token |
| refresh_token | string | 应用 refresh token，当 grant_type=refresh_token 时不返回 |
| access_token_expires_in | integer | access_token 过期时间，单位（秒） |
| refresh_token_expires_in | integer | refresh_token 过期时间，单位（秒） |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "authorizer_info": {
            "account_uin": 2644750491,
            "account_id": "<ACCOUNT_ID>",
            "scope_list": [
                "ads_management",
                "ads_insights",
                "account_management",
                "audience_management",
                "user_actions"
            ],
            "wechat_account_id": "spid1234567890",
            "account_role_type": "ACCOUNT_ROLE_TYPE_AGENCY"
        },
        "access_token": "<ACCESS_TOKEN>",
        "access_token_expires_in": 86400,
        "refresh_token_expires_in": 2592000
    }
}
```

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
