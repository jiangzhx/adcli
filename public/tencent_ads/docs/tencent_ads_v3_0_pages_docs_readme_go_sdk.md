---
title: Go SDK 使用指南
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/docs/readme/go_sdk
doc_id: tencent_ads_v3_0_pages_docs_readme_go_sdk
source_id: tencent_ads_v3_0_pages_docs_readme_go_sdk
---
# Go SDK 使用指南

腾讯广告 Marketing API(以下简称 API) Go SDK 提供了 Token 获取、请求封装、响应解释等功能，以本地化方式轻松完成 API 的调用和结果的获取，旨在帮助开发者快速搭建投放管理系统。

## 使用条件

使用 SDK 需要首先注册成为腾讯广告开发者，请参考[开发者快速入门文档](https://developers.e.qq.com/v3.0/pages/regist_developer)

使用 SDK 需要先拥有 API 的访问权限，所有 SDK 的使用与应用拥有的权限组相关联

Go SDK 需要依赖 1.11 版本及以上

## 如何安装

推荐使用 go mod 的方式获取

### 使用 go mod 获取

其中的 ${VERSION} 需要替换成要使用的版本，如 v1.7.45，具体版本号可查看相应的 tag

```
go mod edit -require="github.com/tencentad/marketing-api-go-sdk@${VERSION}"
go mod download
```

### 使用 go get 获取

```
go get github.com/tencentad/marketing-api-go-sdk
```

## 如何使用

SDK 数组参数调用的方法名与 API 接口一一对应，如 adgroups/get 接口就对应 tads.Adgroups().Get()方法 注意:model 中的所有基本数据类型均为指针类型, 例如：*string, *bool, *int64, *float64

### 获取 Access Token

###### 注：本示例适用于授权时通过 Authorization Code 获取 Access Token 和 Refresh Token

```
package main

import (
    "encoding/json"
    "fmt"
    "github.com/antihax/optional"
    "github.com/tencentad/marketing-api-go-sdk/pkg/ads/v3"
    "github.com/tencentad/marketing-api-go-sdk/pkg/api/v3"
    "github.com/tencentad/marketing-api-go-sdk/pkg/config/v3"
    "github.com/tencentad/marketing-api-go-sdk/pkg/errors"
)

func main() {
    tads := ads.Init(&config.SDKConfig{})
    // your client id
    clientId := int64(0)
    clientSecret := "your client secret"
    grantType := "authorization_code"
    oauthTokenOpts := &api.OauthTokenOpts{
        AuthorizationCode: optional.NewString("your authorization code"),
        RedirectUri: optional.NewString("your authorization code"),
    }
    ctx := *tads.Ctx
    // oauth/token 接口即对应 Oauth().Token()方法
    response, _, err := tads.Oauth().Token(ctx, clientId, clientSecret, grantType, oauthTokenOpts)

    if err != nil {
        if resErr, ok := err.(errors.ResponseError); ok {
            errStr, _ := json.Marshal(resErr)
            // TODO for api error
            fmt.Println("Response error:", string(errStr))
        } else {
            // TODO for other error
            fmt.Println("Error:", err)
        }
    }
    tads.SetAccessToken(response.AccessToken)
}
```

### 设置调用环境、Access Token

```
package main

import (
    "github.com/tencentad/marketing-api-go-sdk/pkg/ads/v3"
    "github.com/tencentad/marketing-api-go-sdk/pkg/config/v3"
)

func main() {
    accessToken := "YOUR ACCESS TOKEN"
    tads := ads.Init(&config.SDKConfig{
        AccessToken: accessToken,
    })
}
```

### 调用 API 接口

```
package main

import (
    "encoding/json"
    "fmt"
    "github.com/antihax/optional"
    "github.com/tencentad/marketing-api-go-sdk/pkg/ads/v3"
    "github.com/tencentad/marketing-api-go-sdk/pkg/api/v3"
    "github.com/tencentad/marketing-api-go-sdk/pkg/model/v3"
    "github.com/tencentad/marketing-api-go-sdk/pkg/config/v3"
    "github.com/tencentad/marketing-api-go-sdk/pkg/errors"
)

func main() {
    accessToken := "YOUR ACCESS TOKEN"
    tads := ads.Init(&config.SDKConfig{
        AccessToken: accessToken,
    })
    // your account id
    accountId := int64(0)
    field := "last_modified_time"
    operator := "EQUALS"
    adgroupsGetOpts := &api.CampaignsGetOpts{
        Filtering: optional.NewInterface([]model.FilteringStruct{model.FilteringStruct{
            Field:&field,
            Operator:&operator,
            Values:[]string{"1708520382"},
        }}),
    }
    ctx := *tads.Ctx
    // oauth/token 接口即对应 Adgroups().Get()方法
    response, _, err := tads.Adgroups().Get(ctx, accountId, adgroupsGetOpts)

    if err != nil {
        if resErr, ok := err.(errors.ResponseError); ok {
            // When Api returns an error
            errStr, _ := json.Marshal(resErr)
            // TODO for api error
            fmt.Println("Response error:", string(errStr))
        } else {
            // When validation fails or other local issues
            // TODO for other error
            fmt.Println("Error:", err)
        }
    }
    fmt.Println(response)
}
```

### 调试和查看 API 接口日志

```
package main

import (
    "github.com/tencentad/marketing-api-go-sdk/pkg/ads/v3"
    "github.com/tencentad/marketing-api-go-sdk/pkg/config/v3"
)

func main() {
    accessToken := "YOUR ACCESS TOKEN"
    ads.Init(&config.SDKConfig{
        AccessToken: accessToken,
        IsDebug: true,
        DebugFile: "YOUR LOG FILE PATH",
    })
}
```

### 对于返回的 Json 取严格模式校验

```
package main

import (
    "github.com/tencentad/marketing-api-go-sdk/pkg/ads/v3"
    "github.com/tencentad/marketing-api-go-sdk/pkg/config/v3"
)

func main() {
    accessToken := "YOUR ACCESS TOKEN"
    ads.Init(&config.SDKConfig{
        AccessToken: accessToken,
        IsStrictMode: true
    })
}
```

如果返回值中包含不认识的属性，会抛 ResponseStrictError

### 关闭 SDK 上报

###### 目前 SDK 上报信息为您的服务器版本和 Go 版本信息，为了帮助您更好地定位使用上的问题，建议开启上报，如需关闭请参考如下配置。

```
package main

import (
    "github.com/tencentad/marketing-api-go-sdk/pkg/ads/v3"
    "github.com/tencentad/marketing-api-go-sdk/pkg/config/v3"
)

func main() {
    accessToken := "YOUR ACCESS TOKEN"
    ads.Init(&config.SDKConfig{
        AccessToken: accessToken,
        SkipMonitor: true,
    })
}
```

## 问题建议与反馈

如果您在使用 SDK 过程中有任何问题与建议，请随时登录[开发者官网](https://developers.e.qq.com/)，点击右下角的"咨询"按钮，与我们的客服支持人员联系
