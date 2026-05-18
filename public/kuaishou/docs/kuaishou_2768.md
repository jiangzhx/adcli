---
title: 创建 Android 应用
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2768&menuId=3504
doc_id: kuaishou_2768
source_id: kuaishou_2768
---
# 创建 Android 应用

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2768 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-11-06T03:15:23.347Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/create/android |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| app_info | MapiAppInfoSnake | 是 |  | 应用数据 |  |
| - app_detail_img | String |  |  | 应用详情图片，通过上传图片 API 获取。 |  |
| - app_icon_url | String |  |  | 应用图标，通过上传图片 API 获取。 |  |
| - app_id | Long | 是 |  | 请补充描述详情 |  |
| - apply_age | Integer |  |  | 应用适用年龄： 1：全年龄段 2：未成年人 3：成年人 |  |
| - category | Integer |  |  | 应用分类：1：软件 2：游戏 |  |
| - contact_email | String |  |  | 联系邮箱 |  |
| - contact_name | String |  |  | 联系人 |  |
| - contact_tel | String |  |  | 联系电话 |  |
| - description | String |  |  | 应用备注 |  |
| - developer | String |  |  | 开发者名称（需与软著保持一致） |  |
| - location | String |  |  | 开发者地区：格式必须为：["北京","北京","东城"] 这种，否则平台回显失败。 |  |
| - offline_app_stores | String |  |  | 下线的应用商店，可不填。可选值：["huawei", "oppo", "xiaomi", "meizu", "vivo", "smartisan", "honor"] |  |
| - online_earn_type | Integer |  |  | 是否网赚类型：1：网赚类型 2：非网赚类型 |  |
| - release_type | Integer | 是 |  | 发布类型：1：手动发布 2：自动发布 |  |
| - use_sdk | Integer |  |  | 是否已接入快手 SDK：0：未接入 1：已接入 |  |
| - create_source | Integer |  | - | 创建渠道：不填或1=文件创建；2=链接创建 |  |
| - function_introduction | String |  |  | 应用功能介绍 | 字数需要在100~1000字之间。 |
| - record_number | String |  |  | 备案号 |  |
| - document_number | String |  |  | 证件号码 |  |
| - service_category | String |  |  | 服务类目 |  |
| - network_type | Integer |  |  | 网络类型 | 1-联网，2-单机（单机应用需上传单机承诺函图片，并无须填写备案号） |
| - offline_app_letter_url | String |  |  | 单机承诺函 | network_type = 2时必填 |
| - record_corp_name | String |  |  | 备案主体名称 |  |
| - app_record_screenshot_url | String |  |  | APP备案截图 |  |
| - record_corp_license_url | String |  |  | 备案主体营业执照 |  |
| app_privacy_info | MapiAppPrivacyInfoSnake | 是 |  | 隐私声明数据 |  |
| - privacy_id | Long | 是 |  | 请补充描述详情 |  |
| - url | String |  |  | 隐私声明链接 |  |
| package_info | MapiPackageInfoSnake | 是 |  | 应用包数据 |  |
| - app_name | String |  |  | 应用名称：可不填，如果不填则默认使用上传 APK 时解析出的应用名称。 |  |
| - blob_store_key | String |  |  | 应用存储 Key，上传应用 APK 时返回。 |  |
| - sensitive_permission_desc | String |  |  | 敏感权限使用说明，可不填，如果 APK 文件使用了敏感权限则必填。 |  |
| - url | String |  |  | 请补充描述详情 |  |
| - task_id | Long |  | - | 请补充描述详情 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https: //ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/create/android' \
--header 'Access-Token: 309140fd130b236962de0773e225934e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 900015366,
    "app_info": {
        "app_detail_img": "http://blobstore-nginx.staging.kuaishou.com/udata/pkg/9983e874ee7843c08d69076cc34fd875.png",
        "app_icon_url": "http://blobstore-nginx.staging.kuaishou.com/udata/pkg/3252058c79ec40069cdeafb08cfd3b92.png",
        "apply_age": 1,
        "category": 1,
        "contact_email": "test@kuaishou.com",
        "contact_name": "后端测试联系人",
        "contact_tel": "18888888888",
        "description": "",
        "developer": "后端测试",
        "location": "[\"北京\", \"北京\", \"海淀\"]",
        "offline_app_stores": "",
        "online_earn_type": 1,
        "release_type": 1,
        "use_sdk": 0,
        "function_introduction": "功能介绍",
        "record_number": "911823145670",
        "document_number": "563178963123",
        "service_category": "[500,21]"
        "network_type": 1,
        "record_corp_name": "快手科技",
        "app_record_screenshot_url": "https://static.yximgs.com/udata/pkg/3ba2fb.png",
        "record_corp_license_url": "https://static.yximgs.com/udata/pkg/3ba2fb.png"
    },
    "app_privacy_info": {
        "url": "https://apktest.kuaishou.com/swagger-ui.html"
    },
    "package_info": {
        "app_name": "",
        "blob_store_key": "1d8438cd-9b43-4680-a149-7df5be226774.apk",
        "sensitive_permission_desc": "string"
    }
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AddAppResponseSnake |  |  | JSON 返回值 |  |
| - app_id | Long |  |  | 应用ID |  |
| - global_app_id | Long |  |  | 请补充描述详情 |  |
| - package_id | Long |  |  | 应用包ID【母包ID】 |  |
| - privacy_id | Long |  |  | 隐私声明ID |  |
| - task_id | Long |  | - | - |  |
| code | Integer |  | 1 | 返回码 |  |
| message | String |  | 1 | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "privacy_id": 4801049,
        "package_id": 1099611636558,
        "app_id": 2199123264333
    },
    "message": "OK",
    "request_id": "EPaAgIDwtZiOrAEY-wIg3sbHyfAwKPubhuYC"
}
```
