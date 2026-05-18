---
title: 获取新版应用发布详情
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2796&menuId=3534
doc_id: kuaishou_2796
source_id: kuaishou_2796
---
# 获取新版应用发布详情

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2796 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-06-27T02:44:26.428Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/release/detail |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| package_id | Long | 是 | 123 | 应用包id | 支持母包id或分包id |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/release/detail' \
--header 'Content-Type: application/json' \
--header 'Access-Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--data '{
    "advertiser_id":900015364,
    "package_id":100009087
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | QueryAppReleaseResp332Snake |  |  | [创编]应用详情的返回参数 |  |
| - account_app_id | Integer |  |  | 账号业务线 |  |
| - account_id | Long |  |  | 创建应用的账号ID |  |
| - app_detail_img | String |  |  | 应用详情图片 |  |
| - app_icon_url | String |  |  | 应用图标链接 |  |
| - app_id | Long |  |  | 应用ID |  |
| - app_privacy_url | String |  |  | 应用隐私政策链接 |  |
| - cert_md_5 | String |  |  | 签名MD5 |  |
| - channel_id | String |  |  | 渠道号(分包号) |  |
| - compatibility | String |  |  | 兼容性 |  |
| - create_time | Long |  |  | 创建时间 |  |
| - developer | String |  |  | 开发者 |  |
| - effect_status | Integer |  |  | 生效状态 |  |
| - global_app_id | Long |  |  | 全局应用ID |  |
| - ios_app_id | String |  |  | 解析出的iosAppID |  |
| - ios_page_id | String |  |  | iOS15自定义产品页 |  |
| - md_5 | String |  |  | MD5 |  |
| - offline_app_stores | String |  |  | 下架的应用商店 |  |
| - package_id | Long |  |  | 应用包ID |  |
| - package_name | String |  |  | 应用包名 |  |
| - package_size | Long |  |  | 应用包大小 |  |
| - parent_package_id | Long |  |  | 分包的母包ID |  |
| - permission_information | String[] |  |  | 权限信息ID列表 |  |
| - permissions | AndroidPermissionSnake |  |  | 请补充描述详情 |  |
| - ordinary_permissions | PermissionDetailSnake[] |  |  | 请补充描述详情 |  |
| - description | String |  |  | 请补充描述详情 |  |
| - id | Integer |  |  | 请补充描述详情 |  |
| - name | String |  |  | 请补充描述详情 |  |
| - permission_ids | String[] |  |  | 请补充描述详情 |  |
| - sensitive_permissions | SensitivePermissionSnake[] |  |  | 请补充描述详情 |  |
| - group | String |  |  | 请补充描述详情 |  |
| - permission_details | PermissionDetailSnake[] |  |  | 请补充描述详情 |  |
| - description | String |  |  | 请补充描述详情 |  |
| - id | Integer |  |  | 请补充描述详情 |  |
| - name | String |  |  | 请补充描述详情 |  |
| - platform | String |  |  | android或ios |  |
| - put_status | Integer |  |  | 投放状态 |  |
| - real_app_name | String |  |  | 应用名称 |  |
| - real_app_version | String |  |  | 应用版本信息 |  |
| - review_detail | String |  |  | 审核详情 |  |
| - review_status | Integer |  |  | 审核状态 |  |
| - update_time | Long |  |  | 更新时间 |  |
| - url | String |  |  | 应用下载地址 |  |
| - use_sdk | Integer |  |  | 是否接入快手广告监测SDK |  |
| - version_code | Long |  |  | 应用版本号 |  |
| - function_introduction | String |  |  | 应用功能介绍 |  |
| - record_number | String |  |  | 备案号 |  |
| - document_number | String |  |  | 证件号码 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "app_detail_img": "http://blobstore-nginx.staging.kuaishou.com/udata/pkg/cfea5ec7dc1a4ccbb29b472eee731a94.png",
        "package_size": 68118183,
        "package_id": 100009087,
        "put_status": 1,
        "platform": "android",
        "offline_app_stores": "[]",
        "app_privacy_url": "https://master--kuaishou-frontend-app-platform.jinx.staging.kuaishou.com/create/android?__accountId__=900015364",
        "update_time": 1680490891299,
        "ios_page_id": "",
        "real_app_version": "4.8.81",
        "review_status": 2,
        "parent_package_id": 1099611636861,
        "app_id": 2199123264636,
        "create_time": 1680147135611,
        "global_app_id": 4801145,
        "review_detail": "",
        "permission_information": [
            96,
            41,
            35,
            43,
            73,
            71,
            22,
            34,
            20,
            119,
            4,
            3,
            39,
            63,
            87,
            82,
            147,
            40,
            145,
            141,
            115,
            154,
            45,
            15,
            80,
            13,
            104,
            146,
            84,
            116,
            121,
            70
        ],
        "version_code": 220831,
        "app_icon_url": "http://blobstore-nginx.staging.kuaishou.com/udata/pkg/5e258659e38b493ca6449bcc0cc9a665.jpg",
        "ios_app_id": "",
        "account_app_id": 1,
        "url": "https://kcdn.staging.kuaishou.com/bs2/ad-app/e2c9cab1-6872-4803-886b-9f2bfbf3deaf_2199123264636_2023-03-30%2011%3A32%3A15_1_1680147141182.apk",
        "effect_status": 0,
        "use_sdk": 1,
        "account_id": 900015364,
        "package_name": "com.snda.wifilocating",
        "real_app_name": "WiFi万能钥匙",
        "developer": "全年龄网赚",
        "cert_md_5": "e25b9a4e4ed5a7810be03b42cfaa9f39",
        "compatibility": "Android4.3及以上",
        "channel_id": "2199123264636_2023-03-30 11:32:15_1",
        "md_5": "0ac0cd80d0541d4675beebd10e41146a",
        "function_introduction":"功能介绍"
    },
    "message": "OK",
    "request_id": "EPSAgIDwg5mOrAEYvAkg4avkuPQwKJDKmp8E"
}
```

## 原始内容

```
获取新版应用发布详情 /rest/openapi/gw/dsp/appcenter/app/release/detail advertiser_id Long 广告主id package_id Long 应用包id data QueryAppReleaseResp332Snake [创编]应用详情的返回参数 account_app_id Integer 账号业务线 account_id Long 创建应用的账号ID app_detail_img String 应用详情图片 app_icon_url String 应用图标链接 app_id Long 应用ID app_privacy_url String 应用隐私政策链接 cert_md_5 String 签名MD5 channel_id String 渠道号(分包号) compatibility String 兼容性 create_time Long 创建时间 developer String 开发者 effect_status Integer 生效状态 global_app_id Long 全局应用ID ios_app_id String 解析出的iosAppID ios_page_id String iOS15自定义产品页 md_5 String MD5 offline_app_stores String 下架的应用商店 package_id Long 应用包ID package_name String 应用包名 package_size Long 应用包大小 parent_package_id Long 分包的母包ID permission_information String[] 权限信息ID列表 permissions AndroidPermissionSnake 请补充描述详情 ordinary_permissions PermissionDetailSnake[] 请补充描述详情 description String 请补充描述详情 id Integer 请补充描述详情 name String 请补充描述详情 permission_ids String[] 请补充描述详情 sensitive_permissions SensitivePermissionSnake[] 请补充描述详情 group String 请补充描述详情 permission_details PermissionDetailSnake[] 请补充描述详情 description String 请补充描述详情 id Integer 请补充描述详情 name String 请补充描述详情 platform String android或ios put_status Integer 投放状态 real_app_name String 应用名称 real_app_version String 应用版本信息 review_detail String 审核详情 review_status Integer 审核状态 update_time Long 更新时间 url String 应用下载地址 use_sdk Integer 是否接入快手广告监测SDK version_code Long 应用版本号 function_introduction String 应用功能介绍 record_number String 备案号 document_number String 证件号码 code Integer 请补充描述详情 message String 请补充描述详情
```
