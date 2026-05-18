---
title: 获取异步报表任务 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/async_reports/get
doc_id: tencent_ads_v3_0_docs_api_async_reports_get
source_id: tencent_ads_v3_0_docs_api_async_reports_get
---
# 获取异步报表任务 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_insights |
| --- | --- |
| 请求地址 | async_reports/get |
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
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，若获取联盟广告位信息此字段必填，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 5 |
| field* | string | 过滤字段 可选值：{ task_id, task_name } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 可选值：{ EQUALS, CONTAINS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER, IN, NOT_EQUALS } |
| values* | string[] | 字段取值，values 数组元素的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 64 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| organization_id | integer | 业务单元 id 最小值 0，最大值 9999999999 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/async_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "field": "task_id",
        "operator": "EQUALS",
        "values": [
            "53181057839"
        ]
    }
]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/async_reports/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "field": "task_id",
        "operator": "EQUALS",
        "values": [
            "53181057839"
        ]
    }
]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| task_id | integer | 任务 id |
| task_name | string | 任务名称 |
| status | enum | 任务状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#task_status) |
| created_time | integer |  |
| result | struct | 任务结果 |
| code | integer | 返回码，正常返回 0，异常返回大于 0 |
| message | string | 返回消息 |
| data | struct | 任务结果 |
| file_info_list | struct[] | 文件返回结果列表 |
| file_id | integer | 文件 id |
| md5 | string | 文件 md5 |
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
                "task_id": 25610,
                "task_name": "2024-03-27_1711544483369",
                "status": "TASK_STATUS_COMPLETED",
                "created_time": 1711544483,
                "result": {
                    "code": 0,
                    "message": "",
                    "data": {
                        "file_info_list": [
                            {
                                "file_id": 831530232,
                                "md5": "ef7f1570fd20e0f35b70f53bf02d86c3"
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
