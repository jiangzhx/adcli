---
title: 获取应用列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2774&menuId=3510
doc_id: kuaishou_2774
source_id: kuaishou_2774
---
# 获取应用列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2774 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:53:51.989Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_ids | String[] |  |  | 批量应用id查询 |  |
| key_word | String |  |  | 搜索关键词 | 应用ID 或 应用名称 |
| app_status | Integer |  |  | 应用状态 | 不传-全部 1-审核中 2-审核失败 3-待发布 4-已发布 5-已下架 |
| page | Integer |  |  | 当前页 | 页码，默认1 |
| end_date | String |  |  | 发布时间范围-截止 |  |
| list_type | Integer | 是 |  | 列表类型 | 默认为1，1-我创建的 2-共享给我 |
| page_size | Integer |  |  | 分页大小 | 选填 个数，默认20 |
| platform | String |  |  | android或ios |  |
| start_date | String |  |  | 发布时间范围-起始 | 同时需要填写end_date |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/list' \
--header 'Access-Token: e6d2a9a50d3ba728c77ac79f3a063d2c' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=e8977018-0d93-4c22-8d95-1cbb0a4ab5daaa26501f062a0b9042d0bd60d291b622:1685348999:1' \
--data-raw '{
    "advertiser_id": 12078245,
    "list_type" : 2,
    "platform" : "android"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListGetAppListResp294Snake |  |  | JSON 返回值 |  |
| - current_page | Integer |  |  | 当前页 |  |
| - list | GetAppListResp423Snake[] |  |  | 应用列表的返回参数 |  |
| - account_id | Long |  |  | 创建应用的账号ID |  |
| - app_detail_img | String |  |  | 应用详情图片 |  |
| - app_icon_url | String |  |  | 应用图标链接 |  |
| - app_id | Long |  |  | 应用ID |  |
| - app_privacy_url | String |  |  | 应用隐私政策链接 |  |
| - app_source | AppShareAccountVOSnake |  |  | 应用创建者信息 | 当source_type=2共享给我的应用时返回 |
| - account_id | Long |  |  | 应用创建账号id |  |
| - account_name | String |  |  | 应用创建账号名称 |  |
| - app_status | Integer |  |  | 应用状态 | 1-审核中 2-审核失败 3-待发布 4-已发布 5-已下架 |
| - ios_app_id | String |  |  | 解析出的iosAppID |  |
| - offline_app_stores | String |  |  | 下架的应用商店 | "huawei","oppo","vivo","xiaomi","meizu","smartisan","honor" |
| - package_id | Long |  |  | 应用包ID |  |
| - package_name | String |  |  | 应用包名 |  |
| - package_size | Long |  |  | 应用包大小 |  |
| - platform | String |  |  | 应用类型 android或ios |  |
| - real_app_name | String |  |  | 应用名称 |  |
| - real_app_version | String |  |  | 应用版本信息 |  |
| - review_detail | String |  |  | 审核详情 |  |
| - source_type | Integer |  |  | 应用来源 | 1-我创建的 2-共享给我的 |
| - trace_activation | Integer |  |  | 转化追踪状态 |  |
| - update_time | Long |  |  | 更新时间 |  |
| - url | String |  |  | 应用下载地址 |  |
| - use_sdk | Integer |  |  | 是否接入快手广告监测SDK |  |
| - version_code | Long |  |  | 应用版本号 |  |
| - share_type | Integer |  |  | 共享类型 |  |
| - create_source | Integer |  | - | 应用创建来源 1=文件上传；2=链接下载 |  |
| - apk_download_url | String |  | - | 应用链接下载地址 |  |
| - task_id | Long |  | - | 应用链接下载任务 ID |  |
| - download_status | Integer |  | - | 应用链接下载状态 |  |
| - create_failed_types | Integer[] |  | - | 链接应用创建失败原因 |  |
| - page_size | Integer |  |  | 分页大小 |  |
| - total_count | Long |  |  | 总数 |  |
| code | Integer |  |  | 返回详情 |  |
| message | String |  |  | 返回码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 3,
        "list": [
            {
                "app_detail_img": "https://static.yximgs.com/udata/pkg/9e26b40cc2704a27beeecc1b06edd0e8.png",
                "package_size": 130903173,
                "review_detail": "",
                "version_code": 2196,
                "app_icon_url": "https://static.yximgs.com/udata/pkg/d83f149e9892475fa4ce30fc29a3ac96.png",
                "source_type": 2,
                "package_id": 1099611654488,
                "ios_app_id": "",
                "platform": "android",
                "url": "https://p3-yx.adkwai.com/bs2/ad-app/48e2675a-caf7-4b5c-a597-6af5fc3e407c.apk",
                "offline_app_stores": "[\"huawei\",\"oppo\",\"xiaomi\",\"meizu\"]",
                "use_sdk": 1,
                "app_source": {
                    "account_id": 7869843,
                    "account_name": "Detail_Kobe"
                },
                "app_privacy_url": "https://www.mca.gov.cn/article/app/yhxyhyszc/index_ymzc.shtml",
                "trace_activation": 0,
                "update_time": 1685950541902,
                "account_id": 7869843,
                "share_type": 2,
                "app_status": 4,
                "package_name": "com.tencent.qqmusic",
                "real_app_version": "10.13.6.6",
                "real_app_name": "QQ音乐",
                "app_id": 2199123256097
            },
            {
                "app_detail_img": "https://static.yximgs.com/udata/pkg/c3d3a13ae3d24fb89e99ef7fd75ef63c.jpg",
                "package_size": 37981034,
                "review_detail": "",
                "version_code": 62000,
                "app_icon_url": "https://static.yximgs.com/udata/pkg/458591febb224e5a88931fcd1314c7ce.jpg",
                "source_type": 2,
                "package_id": 1099611631427,
                "ios_app_id": "",
                "platform": "android",
                "url": "https://p2-yx.adkwai.com/bs2/ad-app/5d682d59-d5df-4276-92ea-08e09aa6312f.apk",
                "offline_app_stores": "",
                "use_sdk": 0,
                "app_source": {
                    "account_id": 10332553,
                    "account_name": "玉龙*⸜（•ᴗ•）⸝*"
                },
                "app_privacy_url": "https://www.kuaishou.com",
                "trace_activation": 0,
                "update_time": 1685950478694,
                "account_id": 10332553,
                "share_type": 2,
                "app_status": 4,
                "package_name": "com.loyal.m",
                "real_app_version": "6.2.0",
                "real_app_name": "正心谷资本",
                "app_id": 2199123256687
            },
            {
                "app_detail_img": "https://static.yximgs.com/udata/pkg/db84e3e981f444928d7b3ce080408665.jpg",
                "package_size": 34383256,
                "review_detail": "",
                "version_code": 793,
                "app_icon_url": "https://static.yximgs.com/udata/pkg/458591febb224e5a88931fcd1314c7ce.jpg",
                "source_type": 2,
                "package_id": 1099611684602,
                "ios_app_id": "",
                "platform": "android",
                "url": "https://p2-yx.adkwai.com/bs2/ad-app/be959aa7-c9be-4e7f-89e7-0f26ea9ac500.apk",
                "offline_app_stores": "",
                "use_sdk": 0,
                "app_source": {
                    "account_id": 10332553,
                    "account_name": "玉龙*⸜（•ᴗ•）⸝*"
                },
                "app_privacy_url": "https://www.kuaishou.com",
                "trace_activation": 0,
                "update_time": 1685950446705,
                "account_id": 10332553,
                "share_type": 2,
                "app_status": 4,
                "package_name": "com.moxiu.launcher",
                "real_app_version": "7.9.3",
                "real_app_name": "魔秀桌面",
                "app_id": 2199123316277
            }
        ],
        "current_page": 1,
        "page_size": 10
    },
    "message": "OK",
    "request_id": "EMyAgIDglZy7ChjTByD5vu3ziDEo1tyFmgs="
}
```
