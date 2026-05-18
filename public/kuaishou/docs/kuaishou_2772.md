---
title: 获取新版应用发布列表【单元创编】
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2772&menuId=3508
doc_id: kuaishou_2772
source_id: kuaishou_2772
---
# 获取新版应用发布列表【单元创编】

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2772 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:53:17.470Z |

## 概述

此接口适用于创建单元拉取新版应用列表【母包】，获取app_id和package_id。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/release/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| key_word | String |  |  | 搜索关键词 | 支持应用ID或应用名称搜索 |
| page | Integer |  |  | 当前页 | 页码，默认1 |
| list_type | Integer |  |  | 列表类型 | 不传-全部, 1-我创建的, 2-共享给我的 |
| page_size | Integer |  |  | 分页大小 | 个数，默认10 |
| platform | String |  |  | android或ios |  |
| app_ids | Long[] |  |  | 应用ids | 批量应用id查询, 最多支持查询100个 |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/release/list' \
--header 'Content-Type: application/json' \
--header 'Access-Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--data '{
    "advertiser_id":900015364
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListQueryAppListResp353Snake |  |  | JSON 返回值 |  |
| - current_page | Integer |  |  | 请补充描述详情 |  |
| - list | QueryAppListResp159Snake[] |  |  | [创编]应用列表的返回参数 |  |
| - account_id | Long |  |  | 创建应用的账号ID |  |
| - app_detail_img | String |  |  | 应用详情图片 |  |
| - app_icon_url | String |  |  | 应用图标链接 |  |
| - app_id | Long |  |  | 应用ID |  |
| - app_privacy_url | String |  |  | 应用隐私政策链接 |  |
| - ios_app_id | String |  |  | 解析出的iosAppID |  |
| - offline_app_stores | String |  |  | 下架的应用商店 | "huawei","oppo","vivo","xiaomi","meizu","smartisan, "honor" |
| - package_id | Long |  |  | 应用包ID |  |
| - package_name | String |  |  | 应用包名 |  |
| - package_size | Long |  |  | 应用包大小 |  |
| - permission_information | String[] |  |  | 权限信息ID列表 |  |
| - platform | String |  |  | android或ios |  |
| - real_app_name | String |  |  | 应用名称 |  |
| - real_app_version | String |  |  | 应用版本信息 |  |
| - source_type | Integer |  |  | 应用来源 | 1-我创建的 2-共享给我的 |
| - update_time | Long |  |  | 更新时间 | 单位：毫秒 |
| - url | String |  |  | 应用下载地址 |  |
| - use_sdk | Integer |  |  | 是否接入快手广告监测SDK | 0-未接入，1-已接入 |
| - version_code | Long |  |  | 应用版本号 |  |
| - page_size | Integer |  |  | 当前页 |  |
| - total_count | Long |  |  | 分页大小 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "list": [
            {
                "app_detail_img": "http://blobstore-nginx.staging.kuaishou.com/udata/pkg/cfea5ec7dc1a4ccbb29b472eee731a94.png",
                "package_size": 68118183,
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
                "source_type": 1,
                "package_id": 1099611636861,
                "ios_app_id": "",
                "platform": "android",
                "url": "https://kcdn.staging.kuaishou.com/bs2/ad-app/e2c9cab1-6872-4803-886b-9f2bfbf3deaf.apk",
                "offline_app_stores": "[]",
                "use_sdk": 1,
                "app_privacy_url": "https://master--kuaishou-frontend-app-platform.jinx.staging.kuaishou.com/create/android?__accountId__=900015364",
                "update_time": 1680146534913,
                "account_id": 900015364,
                "package_name": "com.snda.wifilocating",
                "real_app_version": "4.8.81",
                "real_app_name": "WiFi万能钥匙",
                "app_id": 2199123264636,
                "md_5": "e2d54574453e92df5bed739b828c1cc8"
            }
        ],
        "total_count": 1,
        "current_page": 1,
        "page_size": 10
    },
    "message": "OK",
    "request_id": "EMSAgICwgpqOrAEYlgUg7ratlPMwKOLxjZ0G"
}
```
