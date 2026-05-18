---
title: 获取应用详情
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2775&menuId=3511
doc_id: kuaishou_2775
source_id: kuaishou_2775
---
# 获取应用详情

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2775 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-11-06T03:20:17.136Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/detail |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| package_id | Long | 是 |  | 应用包id |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/detail' \
--header 'Access-Token: e6d2a9a50d3ba728c77ac79f3a063d2c' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=e8977018-0d93-4c22-8d95-1cbb0a4ab5daaa26501f062a0b9042d0bd60d291b622:1685348999:1' \
--data-raw '{
    "advertiser_id": 12078245,
    "package_id" : 1099611632427
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | GetAppDetailResp286Snake |  |  | 应用详情的返回参数 |  |
| - account_id | Long |  |  | 创建应用的账号ID |  |
| - app_detail_img | String |  |  | 应用详情图片 |  |
| - app_icon_url | String |  |  | 应用图标链接 |  |
| - app_id | Long |  |  | 应用ID |  |
| - app_name | String |  |  | 请补充描述详情 |  |
| - app_privacy_url | String |  |  | 应用隐私政策链接 |  |
| - app_source | AppShareAccountVOSnake |  |  | 请补充描述详情 |  |
| - account_id | Long |  |  | 应用创建账号id |  |
| - account_name | String |  |  | 应用创建账号名称 |  |
| - app_status | Integer |  |  | 应用状态 | 1-审核中 2-审核失败 3-待发布 4-已发布 5-已下架 |
| - apply_age | Integer |  |  | 使用年龄 |  |
| - audit_serial_number | Long |  |  | 审核序列号 |  |
| - category | Integer |  |  | 应用类型 | 1-软件 2-游戏 |
| - compatibility | String |  |  | 兼容性 |  |
| - contact_email | String |  |  | 联系人邮箱 |  |
| - contact_name | String |  |  | 联系人姓名 |  |
| - contact_tel | String |  |  | 联系人电话 |  |
| - description | String |  |  | 应用包备注 |  |
| - developer | String |  |  | 开发者 |  |
| - ios_app_id | String |  |  | 解析出的iosAppID |  |
| - location | String |  |  | 开发者地区 |  |
| - offline_app_stores | String |  |  | 下架的应用商店 | "huawei","oppo","vivo","xiaomi","meizu","smartisan","honor" |
| - online_earn_type | Integer |  |  | 网赚类型 | 1-是 2-否 |
| - package_id | Long |  |  | 应用包ID |  |
| - package_name | String |  |  | 应用包名 |  |
| - package_size | Long |  |  | 应用包大小 |  |
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
| - platform | String |  |  | 应用类型 android或ios |  |
| - privacy_id | Long |  |  | 隐私ID |  |
| - privacy_type | Integer |  |  | 隐私链接类型 |  |
| - privacy_url | String |  |  | 请补充描述详情 |  |
| - put_status | Integer |  |  | 投放状态 |  |
| - real_app_name | String |  |  | 应用名称 |  |
| - real_app_version | String |  |  | 应用版本信息 |  |
| - release_type | Integer |  |  | 发布类型 | 1-手动 2-自动 |
| - review_detail | String |  |  | 审核详情 |  |
| - review_status | Integer |  |  | 审核状态 |  |
| - sensitive_permission_desc | String |  |  | 敏感权限用途 |  |
| - share_account_count | Integer |  |  | 应用共享账号个数 |  |
| - source_type | Integer |  |  | 应用来源 | 1-我创建的 2-共享给我的 |
| - trace_activation | Integer |  |  | 转化追踪状态 | 0-未联调 1-已联调 |
| - update_time | Long |  |  | 更新时间 | 单位：毫秒 |
| - url | String |  |  | 应用下载地址 |  |
| - use_sdk | Integer |  |  | 是否接入快手广告监测SDK | 0：未接入，1：已接入 |
| - version_code | Long |  |  | 应用版本号 |  |
| - version_name | String |  |  | 请补充描述详情 |  |
| - share_type | Integer |  | - | 共享类型，0-不共享，1-账号，2-主体 |  |
| - create_source | Integer |  | - | 应用创建来源 1=文件上传；2=链接下载 |  |
| - apk_download_url | String |  | - | 应用链接下载地址 |  |
| - task_id | Long |  | - | 应用链接下载任务 ID |  |
| - download_status | Integer |  | - | 应用链接下载状态 |  |
| - create_failed_types | Integer[] |  | - | 下载失败原因，1=输入包名与解析包名不一致；2=使用了敏感权限但未填写使用说明。 |  |
| - function_introduction | String |  |  | 功能介绍 |  |
| - record_number | String |  |  | 备案号 |  |
| - document_number | String |  |  | 证件号码 |  |
| - service_category | String |  |  | 服务类目 |  |
| - network_type | Integer |  |  | 网络类型 | 1-联网，2-单机 |
| - offline_app_letter_url | String |  |  | 单机承诺函 |  |
| - record_corp_name | String |  |  | 备案主体名称 |  |
| - app_record_screenshot_url | String |  |  | APP备案截图 |  |
| - record_corp_license_url | String |  |  | 备案主体营业执照 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "app_detail_img": "https://static.yximgs.com/udata/pkg/bead6263999b413cae765edaff6a7d07.png",
        "sensitive_permission_desc": "避免因为电池优化而造成部分功能无法运行\\n避免用户数据无法及时记录\\n避免用户重复写入提醒\\n存储数据于SD卡，避免占用用户内存\\n调用用户摄像头，为用户拍摄图片\\n读取存储于SD卡中的应用数据\\n访问用户手机自带地图或第三方地图，帮助用户查看地图信息\\n给予用户动态反馈\\n根据用户网络状态采取不同的缓存策略\\n根据用户位置信息推送给用户不同的内容\\n更新后重启应用，保证更新生效\\n更新应用\\n了解一段时间内的应用运行状态，优化应用\\n了解应用运行状态，优化应用\\n判断是否打开通知等设置，避免用户错过信息提示\\n判断用户当前内存使用情况，避免手机卡顿\\n实现账号多设备登录的监听，一个账号在别的设备登录时在该设备上需要弹出对话框提示\\n通话状态时及时切断音频流，避免影响用户通话\\n为用户接入无线网节省流量，避免不必要的资费产生\\n应用在手机屏幕关闭后后台进程运行，避免因锁屏导致应用无法运行影响用户使用\\n用户创建提醒，完成活动\\n用户打开通知等设置，避免用户错过信息提示\\n在SDCard中创建与删除文件权限\\n主要和用户的智能电子设备通信，同步数据",
        "package_size": 72002597,
        "description": null,
        "contact_tel": "18612823390",
        "package_id": 1099611632427,
        "put_status": 1,
        "platform": "android",
        "offline_app_stores": "[]",
        "contact_email": "916327720@qq.com",
        "privacy_type": 1,
        "app_privacy_url": "https://privacyh5.shinet.cn/wdcdxfsh_privacy.html",
        "update_time": 1686017363676,
        "audit_serial_number": 45264,
        "app_status": 4,
        "real_app_version": "1.0.2",
        "review_status": 2,
        "app_id": 2199123262731,
        "apply_age": 1,
        "contact_name": "杨璐",
        "share_account_count": 2698,
        "review_detail": "",
        "version_code": 102,
        "release_type": 2,
        "app_icon_url": "https://static.yximgs.com/udata/pkg/9e06091e8e1c47d4a81b6aa609e19123.jpg",
        "ios_app_id": "",
        "url": "https://p2-yx.adkwai.com/bs2/ad-app/910a82e3-ab66-463c-bcfd-14cd47dcc404.apk",
        "use_sdk": 1,
        "trace_activation": 0,
        "online_earn_type": 2,
        "account_id": 12078245,
        "share_type": 2,
        "privacy_id": 4301941253,
        "package_name": "com.ys.wdcdxfsh",
        "real_app_name": "王大锤的幸福生活",
        "location": "[\"北京\",\"北京\",\"海淀\"]",
        "developer": "海南云生网络技术有限公司",
        "category": 1,
        "compatibility": "Android5及以上",
        "function_introduction":"功能介绍",
        "record_number": "911823145670",
	"document_number": "563178963123",
        "service_category": "[500,21]",
        "network_type": 2,
        "offline_app_letter_url": "https://static.yximgs.com/udata/pkg/3ba2fb.png",
        "record_corp_name": "快手科技",
        "app_record_screenshot_url": "https://static.yximgs.com/udata/pkg/3ba2fb.png",
        "record_corp_license_url": "https://static.yximgs.com/udata/pkg/3ba2fb.png"
    },
    "message": "OK",
    "request_id": "EMWAgIDg64C7ChigCCDr4_PziDEo5OenhQ8="
}
```

## 原始内容

```
获取应用详情 /rest/openapi/gw/dsp/appcenter/app/detail curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/detail' \ --header 'Access-Token: e6d2a9a50d3ba728c77ac79f3a063d2c' \ --header 'Content-Type: application/json' \ --header 'Cookie: apdid=e8977018-0d93-4c22-8d95-1cbb0a4ab5daaa26501f062a0b9042d0bd60d291b622:1685348999:1' \ --data-raw '{ "advertiser_id": 12078245, "package_id" : 1099611632427 }' { "code": 0, "data": { "app_detail_img": "https://static.yximgs.com/udata/pkg/bead6263999b413cae765edaff6a7d07.png", "sensitive_permission_desc": "避免因为电池优化而造成部分功能无法运行\\n避免用户数据无法及时记录\\n避免用户重复写入提醒\\n存储数据于SD卡，避免占用用户内存\\n调用用户摄像头，为用户拍摄图片\\n读取存储于SD卡中的应用数据\\n访问用户手机自带地图或第三方地图，帮助用户查看地图信息\\n给予用户动态反馈\\n根据用户网络状态采取不同的缓存策略\\n根据用户位置信息推送给用户不同的内容\\n更新后重启应用，保证更新生效\\n更新应用\\n了解一段时间内的应用运行状态，优化应用\\n了解应用运行状态，优化应用\\n判断是否打开通知等设置，避免用户错过信息提示\\n判断用户当前内存使用情况，避免手机卡顿\\n实现账号多设备登录的监听，一个账号在别的设备登录时在该设备上需要弹出对话框提示\\n通话状态时及时切断音频流，避免影响用户通话\\n为用户接入无线网节省流量，避免不必要的资费产生\\n应用在手机屏幕关闭后后台进程运行，避免因锁屏导致应用无法运行影响用户使用\\n用户创建提醒，完成活动\\n用户打开通知等设置，避免用户错过信息提示\\n在SDCard中创建与删除文件权限\\n主要和用户的智能电子设备通信，同步数据", "package_size": 72002597, "description": null, "contact_tel": "18612823390", "package_id": 1099611632427, "put_status": 1, "platform": "android", "offline_app_stores": "[]", "contact_email": "916327720@qq.com", "privacy_type": 1, "app_privacy_url": "https://privacyh5.shinet.cn/wdcdxfsh_privacy.html", "update_time": 1686017363676, "audit_serial_number": 45264, "app_status": 4, "real_app_version": "1.0.2", "review_status": 2, "app_id": 2199123262731, "apply_age": 1, "contact_name": "杨璐", "share_account_count": 2698, "review_detail": "", "version_code": 102, "release_type": 2, "app_icon_url": "https://static.yximgs.com/udata/pkg/9e06091e8e1c47d4a81b6aa609e19123.jpg", "ios_app_id": "", "url": "https://p2-yx.adkwai.com/bs2/ad-app/910a82e3-ab66-463c-bcfd-14cd47dcc404.apk", "use_sdk": 1, "trace_activation": 0, "online_earn_type": 2, "account_id": 12078245, "share_type": 2, "privacy_id": 4301941253, "package_name": "com.ys.wdcdxfsh", "real_app_name": "王大锤的幸福生活", "location": "[\"北京\",\"北京\",\"海淀\"]", "developer": "海南云生网络技术有限公司", "category": 1, "compatibility": "Android5及以上", "function_introduction":"功能介绍", "record_number": "911823145670", "document_number": "563178963123", "service_category": "[500,21]", "network_type": 2, "offline_app_letter_url": "https://static.yximgs.com/udata/pkg/3ba2fb.png" }, "message": "OK", "request_id": "EMWAgIDg64C7ChigCCDr4_PziDEo5OenhQ8=" } advertiser_id Long 广告主id package_id Long 应用包id data GetAppDetailResp286Snake 应用详情的返回参数 account_id Long 创建应用的账号ID app_detail_img String 应用详情图片 app_icon_url String 应用图标链接 app_id Long 应用ID app_name String 请补充描述详情 app_privacy_url String 应用隐私政策链接 app_source AppShareAccountVOSnake 请补充描述详情 account_id Long 应用创建账号id account_name String 应用创建账号名称 app_status Integer 应用状态 apply_age Integer 使用年龄 audit_serial_number Long 审核序列号 category Integer 应用类型 compatibility String 兼容性 contact_email String 联系人邮箱 contact_name String 联系人姓名 contact_tel String 联系人电话 description String 应用包备注 developer String 开发者 ios_app_id String 解析出的iosAppID location String 开发者地区 offline_app_stores String 下架的应用商店 online_earn_type Integer 网赚类型 package_id Long 应用包ID package_name String 应用包名 package_size Long 应用包大小 permissions AndroidPermissionSnake 请补充描述详情 ordinary_permissions PermissionDetailSnake[] 请补充描述详情 description String 请补充描述详情 id Integer 请补充描述详情 name String 请补充描述详情 permission_ids String[] 请补充描述详情 sensitive_permissions SensitivePermissionSnake[] 请补充描述详情 group String 请补充描述详情 permission_details PermissionDetailSnake[] 请补充描述详情 description String 请补充描述详情 id Integer 请补充描述详情 name String 请补充描述详情 platform String 应用类型 android或ios privacy_id Long 隐私ID privacy_type Integer 隐私链接类型 privacy_url String 请补充描述详情 put_status Integer 投放状态 real_app_name String 应用名称 real_app_version String 应用版本信息 release_type Integer 发布类型 review_detail String 审核详情 review_status Integer 审核状态 sensitive_permission_desc String 敏感权限用途 share_account_count Integer 应用共享账号个数 source_type Integer 应用来源 trace_activation Integer 转化追踪状态 update_time Long 更新时间 url String 应用下载地址 use_sdk Integer 是否接入快手广告监测SDK version_code Long 应用版本号 version_name String 请补充描述详情 share_type Integer 共享类型，0-不共享，1-账号，2-主体 create_source Integer 应用创建来源 1=文件上传；2=链接下载 apk_download_url String 应用链接下载地址 task_id Long 应用链接下载任务 ID download_status Integer 应用链接下载状态 create_failed_types Integer[] 下载失败原因，1=输入包名与解析包名不一致；2=使用了敏感权限但未填写使用说明。 function_introduction String 功能介绍 record_number String 备案号 document_number String 证件号码 service_category String 服务类目 network_type Integer 网络类型 offline_app_letter_url String 单机承诺函 code Integer 返回码 message String 返回详情
```
