---
title: 获取批量异步请求任务详情 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/batch_async_request_specification/get
doc_id: tencent_ads_v3_0_docs_api_batch_async_request_specification_get
source_id: tencent_ads_v3_0_docs_api_batch_async_request_specification_get
---
# 获取批量异步请求任务详情 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | batch_async_request_specification/get |
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
| task_id* | integer | 任务 id |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/batch_async_request_specification/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'task_id=<TASK_ID>' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/batch_async_request_specification/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'task_id=<TASK_ID>' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| summary | struct | 任务概要 |
| task_id | integer | 任务 id |
| task_name | string | 任务名称 |
| task_type | string | 任务类型 |
| task_scope | enum | 任务操作业务对象范围，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_task_scope) |
| status | enum | 任务状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#task_status) |
| result_status | enum | 任务结果状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_task_result_status) |
| created_time | integer |  |
| end_time | integer |  |
| success_count | integer | 成功的数量 |
| fail_count | integer | 失败的数量 |
| system_error_count | integer | 未知异常的数量 |
| progress | integer | 处理任务进度，大于等于 0，且小于等于 100 |
| list | struct[] | 返回信息列表 |
| scope_object_id | integer | 任务操作业务对象 id |
| scope_object_name | string | 任务操作业务对象的名称 |
| detail_result_type | enum | 任务详情每项执行结果类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_task_detail_result_type) |
| message | string | 返回消息 |
| account_id | integer | 通用的用户 id，包括 user_id 和 account_id |
| ext_data | string | 额外数据 |
| scope_object_id_str | string | 任务操作业务对象 id |
| code | integer | 返回码，正常返回 0，异常返回大于 0 |
| organization_id | integer | 业务单元 id |
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
        "summary": {
            "task_id": 1,
            "task_name": "batch_async_request_task",
            "task_type": "TASK_TYPE_UPDATE_TARGETING_ID",
            "task_scope": "TASK_SCOPE_ADGROUP",
            "result_status": "TASK_RESULT_STATUS_SUCCESS",
            "status": "TASK_STATUS_COMPLETED",
            "created_time": 1597239107,
            "end_time": 1597239167,
            "success_count": 1,
            "fail_count": 0,
            "system_error_count": 0,
            "progress": 100
        },
        "list": [
            {
                "scope_object_id": 1,
                "scope_object_name": "广告组名称",
                "detail_result_type": "TASK_DETAIL_RESULT_TYPE_SUCCESS",
                "message": ""
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

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
