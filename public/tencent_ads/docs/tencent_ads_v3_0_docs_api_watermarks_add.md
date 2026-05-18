---
title: 批量添加警示语 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/watermarks/add
doc_id: tencent_ads_v3_0_docs_api_watermarks_add
source_id: tencent_ads_v3_0_docs_api_watermarks_add
---
# 批量添加警示语 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | watermarks/add |
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
| source_type* | enum | 添加警示语的素材传参类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#param_source_type) 可选值：{ MATERIAL_SOURCE_TYPE_ID } |
| materials* | struct[] | 素材列表，最多 100 个 |
| material_id | string | 待添加警示语的素材 id，source_type 为 MATERIAL_SOURCE_TYPE_ID 时必填 |
| material_type* | enum | 素材类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#watermark_material_type) 可选值：{ IMAGE } |
| watermark_configs* | struct[] | 警示语配置列表，最少 1 条,最多 10 条 |
| text_content* | string | 警示语文本内容 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/watermarks/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "source_type": "MATERIAL_SOURCE_TYPE_ID",
    "material_type": "IMAGE",
    "materials": [
        {
            "material_id": "123"
        },
        {
            "material_id": "456"
        }
    ],
    "watermark_configs": [
        {
            "text_content": "年化利率（复利）2%-22%"
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/watermarks/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "source_type": "MATERIAL_SOURCE_TYPE_ID",
    "material_type": "IMAGE",
    "materials": [
        {
            "material_id": "123"
        },
        {
            "material_id": "456"
        }
    ],
    "watermark_configs": [
        {
            "text_content": "年化利率（复利）2%-22%"
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| total_count | integer | 总素材数 |
| processing_count | integer | 处理中数量，需要异步处理的数量 |
| success_count | integer | 成功数量，命中直接成功 |
| failed_count | integer | 失败数量，素材不存在或不支持 |
| results | struct[] | 素材添加结果列表 |
| original_material_id | string | 待添加警示语的素材 id |
| original_material_md5 | string | 原始素材 MD5，两种方式都会返回，作为素材唯一标识 |
| material_name | string | 素材名称 |
| record_id | string | 记录 id |
| status | string | 记录状态，success-成功，去重命中或处理完成； processing-处理中； failed-失败； deleted-已删除 |
| result_material_id | string | 添加警示语的结果素材 id |
| result_material_url | string | 添加警示语的结果素材 URL |
| reason | string | 状态说明，如：复用已有处理结果、已提交处理请稍后查询结果、素材不存在或不支持添加警示语 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "total_count": 2,
        "processing_count": 2,
        "success_count": 0,
        "failed_count": 0,
        "results": [
            {
                "original_material_id": "123",
                "original_material_md5": "8c471927c56a2095aa9374a287b62d80",
                "material_name": "图片 1",
                "record_id": "401",
                "status": "processing",
                "result_material_id": "",
                "result_material_url": "",
                "reason": "已提交处理，请稍后查询结果"
            },
            {
                "original_material_id": "456",
                "original_material_md5": "8c471927c56a2095aa9374a287b62d80",
                "material_name": "图片 2",
                "record_id": "402",
                "status": "processing",
                "result_material_id": "",
                "result_material_url": "",
                "reason": "已提交处理，请稍后查询结果"
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
