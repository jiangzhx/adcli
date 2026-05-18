---
title: 应用权限信息列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2957&menuId=3708
doc_id: kuaishou_2957
source_id: kuaishou_2957
---
# 应用权限信息列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2957 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:50:58.641Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/file/ad/app/permissionList |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主账户 id |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v2/file/ad/app/permissionList' \
--header 'access-token: d2fd39fedd81855f88bae20c6a42cad9' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=2d16f9fe-94a0-4c34-b52a-4d68ac06e7f6893c4c711e4d37cc8fc3f07ffccc76e9:1628996209:1' \
--data-raw '{
    "advertiser_id": 4171736
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| result | Long |  |  | 返回码 |  |
| permissionList | PermissionList[] |  |  | 权限列表 |  |
| - permissionDetail | String |  |  | 权限描述 |  |
| - permissionName | String |  |  | 权限名称 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "result": 1,
    "permissionList": {
        "22": {
            "permissionDetail": "允许程序访问电话状态",
            "permissionName": "android.permission.READ_PHONE_STATE"
        },
        "23": {
            "permissionDetail": "允许程序读取短信内容",
            "permissionName": "android.permission.READ_SMS"
        },
        "24": {
            "permissionDetail": "读取语音邮件",
            "permissionName": "com.android.voicemail.permission.READ_VOICEMAIL"
        },
        "25": {
            "permissionDetail": "允许程序接收彩信",
            "permissionName": "android.permission.RECEIVE_MMS"
        },
        "26": {
            "permissionDetail": "允许程序接收短信",
            "permissionName": "android.permission.RECEIVE_SMS"
        },
        "27": {
            "permissionDetail": "允许程序接收WAP PUSH信息",
            "permissionName": "android.permission.RECEIVE_WAP_PUSH"
        },
        "28": {
            "permissionDetail": "允许程序录制声音通过手机或耳机的麦克",
            "permissionName": "android.permission.RECORD_AUDIO"
        },
        "29": {
            "permissionDetail": "允许程序发送短信",
            "permissionName": "android.permission.SEND_SMS"
        },
        "30": {
            "permissionDetail": "允许程序使用SIP视频服务",
            "permissionName": "android.permission.USE_SIP"
        },
        "31": {
            "permissionDetail": "允许程序写入日程，但不可读取",
            "permissionName": "android.permission.WRITE_CALENDAR"
        },
        "10": {
            "permissionDetail": "确保只有系统应用能调用Incall组件",
            "permissionName": "android.permission.BIND_INCALL_SERVICE"
        },
        "32": {
            "permissionDetail": "允许程序写入（但是不能读）用户的联系人数据",
            "permissionName": "android.permission.WRITE_CALL_LOG"
        },
        "11": {
            "permissionDetail": "允许应用程序访问用户用来测量身体内部情况的传感器数据，例如心率",
            "permissionName": "android.permission.BODY_SENSORS"
        },
        "33": {
            "permissionDetail": "允许程序写入联系人，但不可读取",
            "permissionName": "android.permission.WRITE_CONTACTS"
        },
        "12": {
            "permissionDetail": "允许程序从非系统拨号器里拨打电话",
            "permissionName": "android.permission.CALL_PHONE"
        },
        "34": {
            "permissionDetail": "允许程序写入外部存储，如SD卡上写文件",
            "permissionName": "android.permission.WRITE_EXTERNAL_STORAGE"
        },
        "13": {
            "permissionDetail": "允许程序访问摄像头进行拍照",
            "permissionName": "android.permission.CAMERA"
        },
        "35": {
            "permissionDetail": "允许程序更改系统设置",
            "permissionName": "android.permission.WRITE_SETTINGS"
        },
        "14": {
            "permissionDetail": "清除软件缓存",
            "permissionName": "android.permission.CLEAR_APP_CACHE"
        },
        "36": {
            "permissionDetail": "编辑语音邮件",
            "permissionName": "com.android.voicemail.permission.WRITE_VOICEMAIL"
        },
        "15": {
            "permissionDetail": "允许程序访问帐户列表",
            "permissionName": "android.permission.GET_ACCOUNTS"
        },
        "37": {
            "permissionDetail": "允许访问设备上账户列表",
            "permissionName": "android.permission.GET_ACCOUNTS_PRIVILEGED"
        },
        "16": {
            "permissionDetail": "允许程序监视，修改或放弃播出电话",
            "permissionName": "android.permission.PROCESS_OUTGOING_CALLS"
        },
        "17": {
            "permissionDetail": "允许程序读取用户的日程信息",
            "permissionName": "android.permission.READ_CALENDAR"
        },
        "18": {
            "permissionDetail": "允许程序读取通话记录",
            "permissionName": "android.permission.READ_CALL_LOG"
        },
        "19": {
            "permissionDetail": "允许程序访问联系人通讯录信息",
            "permissionName": "android.permission.READ_CONTACTS"
        },
        "1": {
            "permissionDetail": "允许呼叫应用继续在另一个应用中启动的呼叫",
            "permissionName": "android.permission.ACCEPT_HANDOVER"
        },
        "2": {
            "permissionDetail": "允许应用程序在后台访问位置",
            "permissionName": "android.permission.ACCESS_BACKGROUND_LOCATION"
        },
        "3": {
            "permissionDetail": "允许程序通过WiFi或移动基站的方式获取用户粗略位置信息",
            "permissionName": "android.permission.ACCESS_COARSE_LOCATION"
        },
        "4": {
            "permissionDetail": "允许程序通过GPS芯片接收卫星的定位信息",
            "permissionName": "android.permission.ACCESS_FINE_LOCATION"
        },
        "5": {
            "permissionDetail": "允许用户查看拍摄照片的位置",
            "permissionName": "android.permission.ACCESS_MEDIA_LOCATION"
        },
        "6": {
            "permissionDetail": "检测用户移动的应用程序（例如步行，骑自行车或车辆）",
            "permissionName": "android.permission.ACTIVITY_RECOGNITION"
        },
        "7": {
            "permissionDetail": "允许应用程序添加系统中的语音邮件",
            "permissionName": "com.android.voicemail.permission.ADD_VOICEMAIL"
        },
        "8": {
            "permissionDetail": "允许应用按设定的方式接听拨入的电话",
            "permissionName": "android.permission.ANSWER_PHONE_CALLS"
        },
        "9": {
            "permissionDetail": "确保只有系统应用能调用CallRedirectionService组件",
            "permissionName": "android.permission.BIND_CALL_REDIRECTION_SERVICE"
        },
        "20": {
            "permissionDetail": "允许程序可以读取设备外部存储空间",
            "permissionName": "android.permission.READ_EXTERNAL_STORAGE"
        },
        "21": {
            "permissionDetail": "允许程序读取设备的电话号码",
            "permissionName": "android.permission.READ_PHONE_NUMBERS"
        }
    }
}
```
