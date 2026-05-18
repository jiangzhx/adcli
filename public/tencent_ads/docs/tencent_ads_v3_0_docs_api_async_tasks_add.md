---
title: 创建异步任务 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/async_tasks/add
doc_id: tencent_ads_v3_0_docs_api_async_tasks_add
source_id: tencent_ads_v3_0_docs_api_async_tasks_add
---
# 创建异步任务 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | async_tasks/add |
| 请求方法 | POST |
| Content-Type | application/json |

## 全局参数

全局参数是指每一个接口都需要使用到的参数。详情[参考](https://developers.e.qq.com/v3.0/pages/send_request)，代码案例[参考](https://developers.e.qq.com/v3.0/pages/send_request)。

| 参数名称 | 参数类型 |
| --- | --- |
| access_token | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/docs/start/authorization)章节 |
| timestamp | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。 MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2017-05-15 17:21:59 |
| nonce | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性 |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| task_name* | string | 任务名称 字段长度最小 1 字节，长度最大 120 字节 |
| task_type* | string | 枚举列表：{ TASK_TYPE_CREATE_ANDROID_CHANNEL_PACKAGE, TASK_TYPE_UPDATE_ANDROID_CHANNEL_PACKAGE } |
| task_spec | struct | 任务所需条件 |
| task_type_create_android_channel_package_spec | struct | 创建应用宝渠道包接口任务所需条件，当且仅当 task_type = TASK_TYPE_CREATE_ANDROID_CHANNEL_PACKAGE 时，才可且必须使用 |
| myapp_auth_key* | string | 应用宝用户唯一标识，新增渠道包时候必填的参数，应用宝 open 账号下分配的用户唯一标识，用于操作指定的应用宝账号所用。 |
| android_app_id* | integer | 应用宝 APP id |
| android_channel_package_spec* | struct[] | 渠道包信息 数组最小长度 1，最大长度 100 |
| package_name* | string | 渠道包名称 字段长度最小 1 字节，长度最大 1024 字节 |
| download_url* | string | 渠道包下载地址 字段长度最小 1 字节，长度最大 10240 字节 |
| task_type_update_android_channel_package_spec | struct | 更新应用宝渠道包接口任务所需条件，当且仅当 task_type = TASK_TYPE_UPDATE_ANDROID_CHANNEL_PACKAGE 时，才可且必须使用 |
| myapp_auth_key* | string | 应用宝用户唯一标识，新增渠道包时候必填的参数，应用宝 open 账号下分配的用户唯一标识，用于操作指定的应用宝账号所用。 |
| android_app_id* | integer | 应用宝 APP id |
| android_channel_package_spec* | struct[] | 渠道包信息 数组最小长度 1，最大长度 100 |
| channel_package_id* | string | 渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| download_url* | string | 渠道包下载地址 字段长度最小 1 字节，长度最大 10240 字节 |
| task_type_delete_creative_asset_spec | struct | 删除组件并取消关联动态创意，当且仅当 task_type = TASK_TYPE_DELETE_CREATIVE_ASSET 时,才可且必须使用 |
| account_id | integer | 通用的用户 id，包括 user_id 和 account_id |
| component_id_list | integer[] | 组件 id 列表，如果是业务单元组件，只支持解绑创意，不支持删除组件 数组最小长度 0，最大长度 100 |
| image_id_list | string[] | 图片 id 列表，如果是业务单元图片，只支持业务单元单图组件解绑创意，不支持删除图片 数组最小长度 0，最大长度 100 |
| video_id_list | string[] | 视频 id 列表，如果是业务单元视频，只支持业务单元单视频组件解绑创意，不支持删除视频 数组最小长度 0，最大长度 100 |
| component_clean_strategy | struct | 组件清理策略 |
| is_delete_creative_asset | boolean | 是否删除素材本身 |
| is_unbind_dynamic_creatives | boolean | 是否解绑动态创意 |
| is_delete_incomplete_dynamic_creatives | boolean | 是否删除不完整的动态创意 |
| delete_related_creative_asset_type_list | array | 支持：IMAGE_LIST 多图组件、VIDEO_SHOWCASE 橱窗视频组件、IMAGE_SHOWCASE 橱窗图片组件 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/async_tasks/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "task_name": "test task name",
    "task_type": "TASK_TYPE_AGENCY_AD_HOURLY_REPORT",
    "task_spec": {
        "task_type_agency_ad_hourly_report_spec": {
            "date": "2018-08-28"
        }
    }
}'
curl 'https://api.e.qq.com/v3.0/async_tasks/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "task_name": "test task name",
    "task_type": "TASK_TYPE_AGENCY_AD_HOURLY_REPORT",
    "task_spec": {
        "task_type_agency_ad_hourly_report_spec": {
            "date": "2018-08-28"
        }
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| task_id | integer | 任务 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "task_id": 1024
    }
}
```

## 可视化调试工具

## 相关阅读

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
