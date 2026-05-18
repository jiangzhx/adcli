---
title: PHP SDK 使用指南
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/docs/readme/php_sdk
doc_id: tencent_ads_v3_0_pages_docs_readme_php_sdk
source_id: tencent_ads_v3_0_pages_docs_readme_php_sdk
---
# PHP SDK 使用指南

腾讯广告 Marketing API(以下简称 API) PHP SDK 提供了 Token 获取、请求封装、响应解释等功能，以本地化方式轻松完成 API 的调用和结果的获取，旨在帮助开发者快速搭建投放管理系统。

## 使用条件

使用 SDK 需要首先注册成为腾讯广告开发者，请参考[开发文档 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/v3.0/pages/regist_developer)

使用 SDK 需要先拥有 API 的访问权限，所有 SDK 的使用与应用拥有的权限组相关联

PHP SDK 需要依赖 PHP 5.5 及以上

## 如何安装

修改 composer.json 文件，添加如下内容

```
{
  "require": {
    "tencent-ad/marketing-api-php-sdk" : "*"
  }
}
```

执行如下命令安装

```
composer install --no-dev
```

## 如何使用

SDK 同时支持数组参数和语义化调用，推荐使用数组参数，方便后续升级扩展。本说明文档都使用数组参数调用的形式。/docs 目录下的文档使用了语义化调用的方式。SDK 数组参数调用的方法名与 API 接口一一对应，如 adgroups/get 接口就对应$tads->adgroups()->get()方法

### 获取 Access Token

```
<?php
require_once __DIR__ . '/vendor/autoload.php'; // vendor 目录中的 autoload 文件
use TencentAds\V3\TencentAds;

$tads = TencentAds::init([]);
$token = $tads->oauth()
              ->token([ // oauth/token 接口即对应 oauth()->token()方法
                  'client_id'          => '{your client id}',
                  'client_secret'      => '{your client secret}',
                  'grant_type'         => 'authorization_code',
                  'authorization_code' => '{your authorization code}',
                  'redirect_uri'       => '{your redirect uri}',
              ]);

echo "<pre>" . PHP_EOL;
print_r($token);
echo "</pre>" . PHP_EOL;

$tads->setAccessToken($token->getAccessToken());
```

### 设置调用环境、Access Token

```
<?php
require_once __DIR__ . '/vendor/autoload.php';
use TencentAds\V3\TencentAds;

$tads = TencentAds::init([
    'access_token' => '{access-token}',
]); //默认访问正式环境，不再提供沙箱环境调用
```

### 调用 API 接口

```
<?php
require_once __DIR__ . '/vendor/autoload.php';

use TencentAds\V3\TencentAds;
use TencentAds\Exception\TencentAdsResponseException;
use TencentAds\Exception\TencentAdsSDKException;

$tads = TencentAds::init([
    'access_token' => '{your access token}',
]);
try {
    $filtering = [
        [
            'field'    => 'last_modified_time',
            'operator' => 'GREATER_EQUALS',
            'values'   => ['1708520382'],
        ],
    ];
    $response = $tads
        ->adgroups()
        ->get([ // adgroups/get 接口即对应 adgroups()->get()方法
            'account_id' => '{your account id}',
            'filtering'  => $filtering,
        ]);
    echo "<pre>" . PHP_EOL;
    print_r($response);
    echo "</pre>" . PHP_EOL;
} catch (TencentAdsResponseException $e) {
    // When Api returns an error
    echo 'Tencent ads returned an error: ' . $e->getMessage();
    exit;
} catch (TencentAdsSDKException $e) {
    // When validation fails or other local issues
    echo 'Tencent ads SDK returned an error: ' . $e->getMessage();
    exit;
}
```

### 调试和查看 API 接口日志

```
<?php
require_once __DIR__ . '/vendor/autoload.php'; 

use TencentAds\V3\TencentAds;

$tads = TencentAds::init([
    'access_token' => '{access-token}',
    'is_debug'     => true,
    'debug_file'   => '{your log path}', // 不指定，输出到 php://output
]);
```

### 关闭 SDK 上报

###### 目前 SDK 上报信息为您的服务器版本和 PHP 版本信息，为了帮助您更好地定位使用上的问题，建议开启上报，如需关闭请参考如下配置。

```
<?php
require_once __DIR__ . '/vendor/autoload.php'; 

use TencentAds\V3\TencentAds;

$tads = TencentAds::init([
    'access_token' => '{access-token}',
    'is_monitor'   => false,
]);
```

### 设置返回数组

```
<?php
require_once __DIR__ . '/vendor/autoload.php'; 

use TencentAds\V3\TencentAds;
use TencentAds\Kernel\SerializerHandler;

$tads = TencentAds::init([
    'access_token' => '{access-token}',
    'is_monitor'   => false,
]);

$tads->setSerializerType(SerializerHandler::SERIALIZER_TYPE_ARRAY);
```

## 问题建议与反馈

如果您在使用 SDK 过程中有任何问题与建议，请随时登录[首页 | 开发者专区 - 腾讯广告](https://developers.e.qq.com/)，点击右下角的"咨询"按钮，与我们的客服支持人员联系
