---
title: 获取新版分包发布列表【单元创编】
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2773&menuId=3509
doc_id: kuaishou_2773
source_id: kuaishou_2773
---
# 获取新版分包发布列表【单元创编】

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2773 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:53:33.781Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/subPackage/release/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| key_word | String |  |  | 搜索关键词 | 渠道号关键词 |
| page | Integer |  |  | 当前页 | 页码，默认1 |
| page_size | Integer |  |  | 分页大小 | 个数，默认10 |
| app_id | Long | 是 |  | 应用id |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/subPackage/release/list' \
--header 'Content-Type: application/json' \
--header 'Access-Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--data '{
    "advertiser_id":900015364,
    "app_id":2199123264588
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListQueryAppListResp999Snake |  |  | JSON 返回值 |  |
| - current_page | Integer |  |  | 当前页 |  |
| - list | QueryAppListResp159Snake199[] |  |  | [创编]应用列表的返回参数 |  |
| - account_id | Long |  |  | 创建应用的账号ID |  |
| - app_detail_img | String |  |  | 应用详情图片 |  |
| - app_icon_url | String |  |  | 应用图标链接 |  |
| - app_id | Long |  |  | 应用ID |  |
| - app_privacy_url | String |  |  | 应用隐私政策链接 |  |
| - channel_id | String |  |  | 渠道号(分包号) |  |
| - description | String |  |  | 分包描述 |  |
| - ios_app_id | String |  |  | 解析出的iosAppID |  |
| - offline_app_stores | String |  |  | 下架的应用商店 | "huawei","oppo","vivo","xiaomi","meizu","smartisan", "honor" |
| - package_id | Long |  |  | 应用包ID |  |
| - package_name | String |  |  | 应用包名 |  |
| - package_size | Long |  |  | 应用包大小 |  |
| - parent_package_id | Long |  |  | 分包的母包ID |  |
| - permission_information | String[] |  |  | 权限信息ID列表 |  |
| - platform | String |  |  | android或ios |  |
| - real_app_name | String |  |  | 应用名称 |  |
| - real_app_version | String |  |  | 应用版本信息 |  |
| - update_time | Long |  |  | 更新时间 | 单位：毫秒 |
| - url | String |  |  | 应用下载地址 |  |
| - use_sdk | Integer |  |  | 是否接入快手广告监测SDK | 0-未接入，1-已接入 |
| - version_code | Long |  |  | 应用版本号 |  |
| - page_size | Integer |  |  | 分页大小 |  |
| - total_count | Long |  |  | 总数 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "list": [
            {
                "app_detail_img": "http://blobstore-nginx.staging.kuaishou.com/udata/pkg/744ff929b5c44c8e9f3ea2391c63de37.png",
                "package_size": 39293787,
                "permission_information": [
                    96,
                    41,
                    73,
                    43,
                    34,
                    20,
                    107,
                    70,
                    119,
                    35,
                    147,
                    87,
                    121,
                    86,
                    122,
                    22,
                    141,
                    104,
                    146,
                    13,
                    84,
                    113,
                    58,
                    46,
                    63,
                    97,
                    28,
                    71,
                    59,
                    17,
                    31,
                    39
                ],
                "version_code": 772,
                "description": "",
                "app_icon_url": "http://blobstore-nginx.staging.kuaishou.com/udata/pkg/48fb73ee38cf418995d0c87cd3c5fda3.png",
                "package_id": 100009068,
                "ios_app_id": "",
                "platform": "android",
                "url": "https://kcdn.staging.kuaishou.com/bs2/ad-app/bb3e554f-30dd-4958-9e3f-001f07ddea12_2199123264588_2023-03-29%2002%3A21%3A30_1_1680027700492.apk",
                "offline_app_stores": "[]",
                "use_sdk": 1,
                "app_privacy_url": "https://www.mca.gov.cn/article/app/yhxyhyszc/index_ymzc.shtml",
                "update_time": 1680027701625,
                "account_id": 900015364,
                "package_name": "com.qidian.QDReader",
                "real_app_version": "7.9.232",
                "real_app_name": "起点读书",
                "parent_package_id": 1099611636813,
                "channel_id": "2199123264588_2023-03-29 02:21:30_1",
                "app_id": 2199123264588
            }
        ],
        "total_count": 1,
        "current_page": 1,
        "page_size": 10
    },
    "message": "OK",
    "request_id": "EPSAgIDwg5mOrAEYmgYgwfWyuPQwKJCm_IkG"
}
```
