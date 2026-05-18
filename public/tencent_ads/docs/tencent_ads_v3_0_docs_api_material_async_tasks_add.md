---
title: 提交异步任务 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/material_async_tasks/add
doc_id: tencent_ads_v3_0_docs_api_material_async_tasks_add
source_id: tencent_ads_v3_0_docs_api_material_async_tasks_add
---
# 提交异步任务 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | material_async_tasks/add |
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
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| organization_id | integer | 业务单元 id 最小值 0，最大值 9999999999 |
| material_param_type* | enum | 素材传参类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#material_param_type) 可选值：{ MATERIAL_PARAM_TYPE_ID } |
| material_type* | enum | 素材类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#programmed_material_type) 可选值：{ IMAGE, VIDEO } |
| material_detail* | struct[] | 素材详情列表，数组最小长度 1，最大长度 100 |
| material_id | string | 素材 id，material_param_type 为 MATERIAL_PARAM_TYPE_ID 时必填 |
| task_specs* | struct | 任务规格配置 |
| watermark_spec | struct | 警示语任务配置 |
| text* | string[] | 警示语文本列表，最少 1 条,最多 10 条 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/material_async_tasks/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "material_param_type": "MATERIAL_PARAM_TYPE_ID",
    "material_type": "IMAGE",
    "material_detail": [
        {
            "material_id": "123"
        }
    ],
    "task_specs": {
        "watermark_spec": {
            "text": [
                "开包不可退"
            ]
        }
    }
}'
curl 'https://api.e.qq.com/v3.0/material_async_tasks/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "material_param_type": "MATERIAL_PARAM_TYPE_ID",
    "material_type": "IMAGE",
    "material_detail": [
        {
            "material_id": "123"
        }
    ],
    "task_specs": {
        "watermark_spec": {
            "text": [
                "开包不可退"
            ]
        }
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| job_id | string | 任务 Job id，用于查询任务状态 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "job_id": "949cb7b5-5249-4ab8-a27e-d2ae081137f8"
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
