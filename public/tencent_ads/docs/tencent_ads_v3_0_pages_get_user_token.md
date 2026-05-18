---
title: 如何获取实名认证令牌？
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/get_user_token
doc_id: tencent_ads_v3_0_pages_get_user_token
source_id: tencent_ads_v3_0_pages_get_user_token
---
# 如何获取实名认证令牌？

## 一、背景说明

为了保障用户账号使用安全，从 7 月份起，平台将对 Marketing API 部分接口进行“身份验证”升级，所有调用受限接口（见附录）的应用（含第三方应用、私有应用），使用其应用的最终用户必须在 “服务商系统”或“客户工作台”先完成身份认证。 应用升级后，最终用户使用有如下变化：用户对账户/广告/创意进行操作时，将增加“身份验证”步骤，用户需使用已在“服务商系统”或“客户工作台”完成身份认证的微信扫码，验证通过后可正常获取实名认证令牌。若提示未完成“实名认证”或“组织认证”，用户需前往“服务商系统”或“客户工作台”先完成相关身份认证。

## 二、方案简介

### 2.1 认证规则

所有使用“ AMS Marketing API ”（含第三方应用、私有应用）操作账户的用户，必须为服务商系统或客户工作台已完成认证的用户。未认证用户需要先认证再使用 API。 认证的定义：“实名认证+组织认证”

服务商系统：用户先完成实名认证（微信扫码，填写”姓名+身份证号“），然后由系统管理员在对应服务商主体下勾选《承诺书》，一代管理员或渠道经理审批。

客户工作台：用户先加入”广告主组织“，完成实名认证（微信扫码，填写”姓名+身份证号“），然后由广告主组织管理员审批通过（或由行业同学”提报“，代替组织管理员审批）

注意：用户需要操作哪个组织下的账户，就要完成该组织的认证，认证通过后才有权限使用 API 操作该组织下的账户。

### 2.2 方案描述

#### 1. API 调用增加操作人 key

#### 2. 用户操作交互流程

● 核心交互 Demo 示意：

开发者在自研系统中向用户展示认证操作手册：[用户身份认证操作指引链接](https://docs.qq.com/doc/DRHRPVU9IcXRYdnh4?nlc=1)

● 详细交互流程：

● 外部开发者改动点：

改动点①：腾讯广告开放平台 API 接口报错”未传入操作人 key “，需要自动拉起【平台提供的通用组件】支持投手微信扫码；

改动点②：平台侧判定操作人已进行认证，则会返回操作人 key 给到开发者，需要开发者自行存储操作人和 key 的关系，用于后续调用接口

改动点③：平台侧判定操作人未进行认证，则会返回报错信息给到开发者，建议开发者将报错信息和操作指引自行渲染页面展示给用户

## 三、详细说明

### 3.1 受限接口列表

升级后以下接口会被限制调用，需配合改造：

| 类型 | 接口地址 | 接口名称 |
| --- | --- | --- |
| 广告账号 | advertiser/update | 更新腾讯广告广告主信息 |
| advertiser_daily_budget/update | 更新竞价广告账户日预算 |  |
| 广告 | adgroups/add | 创建广告 |
| adgroups/update | 更新广告 |  |
| adgroups/delete | 删除广告 |  |
| 创意 | dynamic_creatives/add | 创建创意 |
| dynamic_creatives/update | 更新创意 |  |
| dynamic_creatives/delete | 删除创意 |  |
| 创意组件 | components/add | 创建创意组件 |
| components/delete | 删除创意组件 |  |
| 批量操作 | adgroups/update_daily_budget | 批量修改广告日限额 |
| adgroups/update_configured_status | 批量修改广告开启/暂停状态 |  |
| adgroups/update_bid_amount | 批量修改广告出价 |  |
| adgroups/update_datetime | 批量修改广告投放起止时间 |  |
| advertiser/update_daily_budget | 批量修改广告主日限额 |  |

### 3.2 实名认证令牌

#### Part A: 平台通用组件

通用组件地址：[https://ad.qq.com/account-center/single/user-authorize?redirect_uri=urlencode](https://ad.qq.com/account-center/single/user-authorize?redirect_uri=urlencode)({redirect_uri})&state=urlencode({state}) 页面仅包含微信登录 TAB

完整示例： [https://ad.qq.com/account-center/single/user-authorize?redirect_uri=http%3A%2F%2Fwww.tencent.com%2Fcallback&state=xxx](https://ad.qq.com/account-center/single/user-authorize?redirect_uri=http%3A%2F%2Fwww.tencent.com%2Fcallback&state=xxx) redirect_uri=[http://www.tencent.com/callback](http://www.tencent.com/callback) state=xxx

#### Part B：认证完成回跳至业务方

当平台处理完成后会自动跳转至业务方提供的地址并携带认证结果，认证成功/认证失败均会回跳 回跳地址示例：[http://www.tencent.com/callback?state=xxx&user_status={xxx}&user_token=urlencode](http://www.tencent.com/callback?state=xxx&user_status=%7Bxxx%7D&user_token=urlencode)({xxx})&expire_time={xxx} 其中：

[http://www.tencent.com/callback](http://www.tencent.com/callback) 为拉起平台通用组件时传递的 redirect_uri

携带参数说明

| 参数名 | 参数类型 | 参数说明 | 示例 |
| --- | --- | --- | --- |
| user_status | integer | 用户认证状态 0-未找到腾讯广告员工账号 1-员工账号未完成实名认证 2-员工账号已完成实名认证 | 2 |
| user_token | string(128) | 用户实名令牌，当且仅当 user_status=2 时返回 | abcdefghijklmn |
| expire_time | long | 令牌失效时间戳，单位秒，当且仅当 user_status=2 时返回 | 1748707200 |

完整示例： [http://www.tencent.com/callback?state=xxx&user_status=0](http://www.tencent.com/callback?state=xxx&user_status=0) [http://www.tencent.com/callback?state=xxx&user_status=1](http://www.tencent.com/callback?state=xxx&user_status=1) [http://www.tencent.com/callback?state=xxx&user_status=2&user_token=abcdefghijklmn&expire_time=1748707200](http://www.tencent.com/callback?state=xxx&user_status=2&user_token=abcdefghijklmn&expire_time=1748707200)

#### 组件使用注意事项

### 3.3 腾讯开放平台 API 改动

#### 3.3.1. API 授权无变化，和原有授权流程一致

#### 3.3.2. API 调用：增加实名认证令牌的参数，范围是受限的接口

完整示例： curl '[https://api.e.qq.com/v3.0/adgroups/add?access_token=&timestamp=&nonce=&user_token='](https://api.e.qq.com/v3.0/adgroups/add?access_token=%3CACCESS_TOKEN%3E&timestamp=%3CTIMESTAMP%3E&nonce=%3CNONCE%3E&user_token=%3CUSER_TOKEN%3E%27) user_token 不通过，新增以下错误码：

#### 3.3.4. API SDK 使用

初始化 AcessToken 时同时传入 UserToken GO SDK

```
e.TAds = ads.Init(&config.SDKConfig{
		AccessToken: "YOUR ACCESS TOKEN",
		IsDebug:     true,
		UserToken:   "YOUR USER TOKEN",
	})
```

JAVA SDK

```
this.tencentAds.init(
        new ApiContextConfig().accessToken("YOUR ACCESS TOKEN").userToken("YOUR USER TOKEN").isDebug(true));
```

PHP SDK

```
$tads = TencentAds::init([
  'access_token' = 'YOUR ACCESS TOKEN',
  'user_token' = 'YOUR USER TOKEN',
  'is_debug' = '{is-debug}'
])
```

### 3.4 API 查询用户组织认证

接口文档：[开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/docs/api/user_organization_authentication/get)

## 四、开发者问题咨询

开发者在对接过程中如有问题可进入答疑群咨询：
