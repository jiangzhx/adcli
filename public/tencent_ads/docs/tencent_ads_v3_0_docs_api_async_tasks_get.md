---
title: 获取异步任务 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/async_tasks/get
doc_id: tencent_ads_v3_0_docs_api_async_tasks_get
source_id: tencent_ads_v3_0_docs_api_async_tasks_get
---
# 获取异步任务 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | async_tasks/get |
| 请求方法 | GET |

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
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 10 |
| field* | string | 过滤字段 可选值：{ task_id, task_name, task_type, result_status, status } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 task_id 时，可选值：{ EQUALS, IN } 当 field 取值 task_name 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 task_type 时，可选值：{ EQUALS, IN } 当 field 取值 result_status 时，可选值：{ EQUALS, IN } 当 field 取值 status 时，可选值：{ EQUALS, IN } |
| values* | string[] | 字段取值 数组最小长度 1，最大长度 100，当 field 取值 task_id 且 operator 取值 EQUALS 时， 数组长度为 1 当 field 取值 task_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 当 field 取值 task_name 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 当 field 取值 task_name 且 operator 取值 CONTAINS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 当 field 取值 task_type 且 operator 取值 EQUALS 时， 数组长度为 1 可选值：{ TASK_TYPE_UPDATE_UNION_POSITION_PACKAGE_NEW, TASK_TYPE_UPDATE_EXCLUDE_UNION_POSITION_PACKAGE_NEW, TASK_TYPE_UPDATE_DEEP_CONVERSION_BEHAVIOR_BID_NEW, TASK_TYPE_DELETE_ADGROUP_NEW, TASK_TYPE_UPDATE_ADGROUP_DEEP_CONVERSION_WORTH_RATE_NEW, TASK_TYPE_UPDATE_ADGROUP_CONFIGURED_STATUS_NEW, TASK_TYPE_UPDATE_ADGROUP_DAILY_BUDGET_NEW, TASK_TYPE_UPDATE_ADGROUP_AUTO_ACQUISITION_NEW, TASK_TYPE_UPDATE_ADGROUP_DEEP_CONVERSION_WORTH_ADVANCED_RATE_NEW, TASK_TYPE_UPDATE_DEEP_CONVERSION_BEHAVIOR_ADVANCED_BID_NEW, TASK_TYPE_UPDATE_ADGROUP_ECOM_PKAM_NEW, TASK_TYPE_UPDATE_ADGROUP_DERIVE_CONF_NEW, TASK_TYPE_UPDATE_COMPONENT_SHARED, TASK_TYPE_DELETE_ACCOUNT_COMPONENT, TASK_TYPE_DELETE_CREATIVE_ASSET } 当 field 取值 task_type 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 可选值：{ TASK_TYPE_UPDATE_UNION_POSITION_PACKAGE_NEW, TASK_TYPE_UPDATE_EXCLUDE_UNION_POSITION_PACKAGE_NEW, TASK_TYPE_UPDATE_DEEP_CONVERSION_BEHAVIOR_BID_NEW, TASK_TYPE_DELETE_ADGROUP_NEW, TASK_TYPE_UPDATE_ADGROUP_DEEP_CONVERSION_WORTH_RATE_NEW, TASK_TYPE_UPDATE_ADGROUP_CONFIGURED_STATUS_NEW, TASK_TYPE_UPDATE_ADGROUP_DAILY_BUDGET_NEW, TASK_TYPE_UPDATE_ADGROUP_AUTO_ACQUISITION_NEW, TASK_TYPE_UPDATE_ADGROUP_DEEP_CONVERSION_WORTH_ADVANCED_RATE_NEW, TASK_TYPE_UPDATE_DEEP_CONVERSION_BEHAVIOR_ADVANCED_BID_NEW, TASK_TYPE_UPDATE_ADGROUP_ECOM_PKAM_NEW, TASK_TYPE_UPDATE_ADGROUP_DERIVE_CONF_NEW, TASK_TYPE_UPDATE_COMPONENT_SHARED, TASK_TYPE_DELETE_ACCOUNT_COMPONENT, TASK_TYPE_DELETE_CREATIVE_ASSET } 当 field 取值 result_status 且 operator 取值 EQUALS 时， 数组长度为 1 可选值：{ TASK_RESULT_STATUS_UNKNOWN, TASK_RESULT_STATUS_PENDING, TASK_RESULT_STATUS_PROCESSING, TASK_RESULT_STATUS_SUCCESS, TASK_RESULT_STATUS_FAIL, TASK_RESULT_STATUS_PARTIAL_FAIL, TASK_RESULT_STATUS_SYSTEM_ERROR, TASK_RESULT_STATUS_DELETED } 当 field 取值 result_status 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 可选值：{ TASK_RESULT_STATUS_UNKNOWN, TASK_RESULT_STATUS_PENDING, TASK_RESULT_STATUS_PROCESSING, TASK_RESULT_STATUS_SUCCESS, TASK_RESULT_STATUS_FAIL, TASK_RESULT_STATUS_PARTIAL_FAIL, TASK_RESULT_STATUS_SYSTEM_ERROR, TASK_RESULT_STATUS_DELETED } 当 field 取值 status 且 operator 取值 EQUALS 时， 数组长度为 1 可选值：{ TASK_STATUS_PENDING, TASK_STATUS_PROCESSING, TASK_STATUS_EXPIRED, TASK_STATUS_COMPLETED, TASK_STATUS_CANCELLED, TASK_STATUS_FAIL, TASK_STATUS_DELETED, TASK_STATUS_DRAFT } 当 field 取值 status 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 可选值：{ TASK_STATUS_PENDING, TASK_STATUS_PROCESSING, TASK_STATUS_EXPIRED, TASK_STATUS_COMPLETED, TASK_STATUS_CANCELLED, TASK_STATUS_FAIL, TASK_STATUS_DELETED, TASK_STATUS_DRAFT } 字段长度最小 1 字节，长度最大 64 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/async_tasks/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"task_id","operator":"EQUALS","values":["1024"]}]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/async_tasks/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"task_id","operator":"EQUALS","values":["1024"]}]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| task_id | integer | 任务 id |
| task_name | string | 任务名称 |
| task_type | string | 任务类型 |
| status | enum | 任务状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#task_status) |
| created_time | integer |  |
| result | struct | 任务结果 |
| code | integer | 返回码，正常返回 0，异常返回大于 0 |
| message | string | 返回消息 |
| data | struct | 任务结果 |
| file_info_list | struct[] | 文件返回结果列表 |
| file_id | integer | 文件 id |
| md5 | string | 文件 md5 |
| channel_package_info_list | struct[] |  |
| android_app_id | integer | 应用宝 APP id，大于等于 0 |
| package_name | string | 渠道包名称 |
| status | enum | 渠道包任务处理状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#channel_task_status) |
| error_code | enum | 渠道包任务错误码，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#channel_task_error) |
| created_time | integer |  |
| last_modified_time | integer | 最后修改时间，时间戳 |
| channel_package_id | string | 渠道包 id |
| union_channel_package_info_list | struct[] |  |
| android_union_app_id | integer | 广告包 APP id，大于等于 0 |
| package_name | string | 渠道包名称 |
| status | enum | 渠道包任务处理状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#union_channel_task_status) |
| created_time | integer |  |
| last_modified_time | integer | 最后修改时间，时间戳 |
| review_element_prereview_result_list | struct[] | 预审结果集合信息 |
| element_type | enum | 元素类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pre_review_element_type) |
| element_content | string | 元素内容 |
| risk_level | enum | 元素风险级别，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#risk_level) |
| pre_review_details | struct[] | 元素预审结果明细集合 |
| site_set | enum | 预审投放版位集合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pre_review_site_set_definition_string) |
| pre_review_result | enum | 投放版位的预审结果，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_risk_level) |
| reject_reason_detail | struct[] | 拒绝原因明细集合 |
| reject_reason_id | string | 拒绝原因 id |
| reject_reason_content | string | 拒绝原因内容 |
| case_doc | string | 案例 url |
| case_content | string | 案例内容富文本 |
| reject_info_locations | struct[] | 元素拒绝原因详情 |
| x | integer | x 轴位置 |
| y | integer | y 轴位置 |
| width | integer | 宽度 |
| height | integer | 高度 |
| time_second | float | 视频时间点 |
| location_img_url | string | 标注结果图 url |
| img_url | string | 帧图片 url |
| related_img_url | string | 种子图 url |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "task_id": 1024,
                "task_name": "test task name",
                "task_type": "TASK_TYPE_AGENCY_AD_HOURLY_REPORT",
                "status": "TASK_STATUS_COMPLETED",
                "created_time": 1403243242,
                "result": {
                    "code": 0,
                    "message": "",
                    "data": {
                        "file_info_list": [
                            {
                                "file_id": 5,
                                "md5": "79054025255fb1a26e4bc422aef54eb4"
                            }
                        ]
                    }
                }
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

## 相关阅读

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
