---
title: 获取妙思任务结果接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/muse_ai_task/get
doc_id: tencent_ads_v3_0_docs_api_muse_ai_task_get
source_id: tencent_ads_v3_0_docs_api_muse_ai_task_get
---
# 获取妙思任务结果接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | muse_ai_task/get |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| task_id* | integer | 妙思 AI 任务 id |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/muse_ai_task/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'task_id=<TASK_ID>'
curl -v -G 'https://api.e.qq.com/v3.0/muse_ai_task/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'task_id=<TASK_ID>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| task_id | integer | 妙思 AI 任务 id |
| task_type | enum | 妙思任务类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#muse_ai_task_type) |
| task_status | enum | 妙思任务状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#muse_ai_task_status) |
| results | struct[] | 妙思 AI 任务结果，数组长度为[1,100] |
| muse_material_id | integer | 妙思素材 id，通过描述 AI 生成的素材 id,若采纳该素材，请通过妙思 AI 素材接口 [\[妙思 AI - 选择并保存妙思 AI 素材\]](https://developers.e.qq.com/v3.0/docs/api/muse_ai_material/add) 推送到素材库 |
| material_type | enum | 妙思素材类型，视频或图片，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#programmed_material_type) |
| ratio_width | integer | 素材比例：宽 |
| ratio_height | integer | 素材比例：高 |
| width | integer | 素材宽度 |
| height | integer | 视频高度 |
| url | string | 妙思素材 URL |
| caption_result | struct | caption 类型任务结果信息 |
| image_id | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/v3.0/docs/api/images/add) 上传图片后获得 |
| image_caption | string | 参考图片描述信息，指定该字段会帮助 AI 更准确的理解图片内容 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "task_id": "<TASK_ID>",
        "task_status": "MUSE_AI_TASK_SUCCESS",
        "task_type": "MUSE_AI_TASK_TYPE_TEXT2IMG",
        "results": [
            {
                "material_type": "IMAGE",
                "muse_material_id": 32864,
                "ratio_width": 16,
                "width": 1280,
                "height": 720,
                "ratio_height": 9,
                "url": "http://videomaker-30171.sz.gfp.tencent-cloud.com/67cf21b4eaa5f1a8fc09101d6a75bfc986bf1d07"
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
