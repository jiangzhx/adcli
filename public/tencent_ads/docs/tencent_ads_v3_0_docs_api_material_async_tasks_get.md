---
title: 获取异步任务 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/material_async_tasks/get
doc_id: tencent_ads_v3_0_docs_api_material_async_tasks_get
source_id: tencent_ads_v3_0_docs_api_material_async_tasks_get
---
# 获取异步任务 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | material_async_tasks/get |
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
| account_id | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| organization_id | integer | 业务单元 id 最小值 0，最大值 9999999999 |
| ownership_type | enum | 素材所属类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#ownership_type) 可选值：{ OWNED } |
| filtering | struct[] | 过滤条件列表，若此字段不传，或传空则视为无限制条件 数组最小长度 1，最大长度 10 |
| field* | string | 过滤字段，目前支持任务 job_id |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 job_id 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/material_async_tasks/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "field": "job_id",
        "operator": "EQUALS",
        "values": [
            "5d2a5771-a827-4e9a-bb83-39f539d9caba"
        ]
    }
]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/material_async_tasks/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "field": "job_id",
        "operator": "EQUALS",
        "values": [
            "5d2a5771-a827-4e9a-bb83-39f539d9caba"
        ]
    }
]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 批量任务详情列表 |
| watermark_result | struct | 警示语任务结果 |
| task_id | string | 任务详情 id |
| task_status | enum | 任务状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#material_task_status) |
| message | string | 任务消息，任务执行的详细信息或错误信息 |
| material_name | string | 素材名称 |
| material_type | enum | 素材类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#programmed_material_type) |
| original_material_id | string | 原始素材 id |
| original_material_uuid | string | 素材唯一标识 |
| original_material_url | string | 原始素材 URL |
| original_cover_image_url | string | 原始素材封面图 URL |
| result_material_id | string | 结果素材 id |
| result_material_uuid | string | 素材唯一标识 |
| result_material_url | string | 结果素材 URL |
| result_cover_image_url | string | 结果素材封面图 URL |
| create_time | integer | 时间戳，Unix 时间戳（秒） |
| update_time | integer | 时间戳，Unix 时间戳（秒） |
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
                "watermark_result": {
                    "task_id": "1167",
                    "task_status": "MATERIAL_TASK_STATUS_WATERMARK_SUCCESS",
                    "message": "成功",
                    "material_name": "素材名称",
                    "material_type": "IMAGE",
                    "original_material_id": " 123",
                    "original_material_uuid": "1a84c6799b0db4588e21e7a621f690c8",
                    "original_material_url": "http://wxsnsencsvp.wxs.qq.com/141/20204/snscosdownload/SH/reserved/123.jpg",
                    "original_cover_image_url": "",
                    "result_material_id": "456",
                    "result_material_uuid": "73cfa05b504d0b0445a9f7b6743404d4",
                    "result_material_url": "http://wxsnsencsvp.wxs.qq.com/141/20204/snscosdownload/SH/reserved/456.jpg",
                    "result_cover_image_url": "",
                    "create_time": "1768358050",
                    "update_time": "1768358053"
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

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
