---
title: 创建妙思任务接口 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/muse_ai_task/add
doc_id: tencent_ads_v3_0_docs_api_muse_ai_task_add
source_id: tencent_ads_v3_0_docs_api_muse_ai_task_add
---
# 创建妙思任务接口 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | muse_ai_task/add |
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
| task_type* | enum | 妙思任务类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#muse_ai_task_type) 可选值：{ MUSE_AI_TASK_TYPE_TEXT2IMG, MUSE_AI_TASK_TYPE_IMG2IMG, MUSE_AI_TASK_TYPE_IMG2CAPTION } |
| output_image_num | integer | 任务指定输出的素材上限制 最小值 1，最大值 100 |
| img2img | struct | 图生图参数信息 |
| image_id* | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/v3.0/docs/api/images/add) 上传图片后获得 字段长度最小 1 字节，长度最大 64 字节 |
| similarity* | integer | 图生图相似度等级，整数值，取值可选[1-极低,2-较低,3-中等,4-较高,5-极高], 值由低到高值越大相似度越大 最小值 1，最大值 5 |
| img2img_style* | enum | 图生图风格，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#muse_ai_img2_img_style) 可选值：{ MUSE_AI_IMG2IMG_STYLE_PEOPLE, MUSE_AI_IMG2IMG_STYLE_GAME } |
| extend_text | boolean | 是否继承原图中的文案信息，开启后 AI 会自动复制原图文案信息到生成的素材中 可选值：{ true, false } 默认值：false |
| extend_size | boolean | 是否继承原图尺寸，开启后 AI 会按原图尺寸生成 AI 素材 可选值：{ true, false } 默认值：false |
| dimension_size | enum | 妙思 AI 素材尺寸，extend_size 为 false 时必填，且两者同时使用优先取 dimension_size，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#muse_ai_dimension_size) 可选值：{ SIZE_1280_720, SIZE_720_1280, SIZE_800_800 } |
| image_caption | string | 参考图片描述信息，指定该字段会帮助 AI 更准确的理解图片内容 字段长度最小 1 字节，长度最大 200 字节 |
| text2img | struct | 文生图参数信息 |
| prompt* | string | 文生图的 prompt 字段长度最小 1 字节，长度最大 200 字节 |
| dimension_size* | enum | 妙思 AI 素材尺寸，extend_size 为 false 时必填，且两者同时使用优先取 dimension_size，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#muse_ai_dimension_size) 可选值：{ SIZE_1280_720, SIZE_720_1280, SIZE_800_800 } |
| img2caption | struct | 图片提取描述参数信息 |
| image_ids* | string[] | 需要提取描述的图片素材 id，数组长度为[1,100] 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 64 字节 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/muse_ai_task/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "task_type": "MUSE_AI_TASK_TYPE_TEXT2IMG",
    "output_image_num": 1,
    "text2img": {
        "prompt": "在群山的顶端，有一块粉红色的云，它缓缓滑落，把大地染得如此美丽",
        "dimension_size": "SIZE_1280_720"
    }
}'
curl 'https://api.e.qq.com/v3.0/muse_ai_task/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "task_type": "MUSE_AI_TASK_TYPE_TEXT2IMG",
    "output_image_num": 1,
    "text2img": {
        "prompt": "在群山的顶端，有一块粉红色的云，它缓缓滑落，把大地染得如此美丽",
        "dimension_size": "SIZE_1280_720"
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| task_id | integer | 妙思 AI 任务 id |
| task_type | enum | 妙思任务类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#muse_ai_task_type) |
| task_status | enum | 妙思任务状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#muse_ai_task_status) |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "task_id": "<TASK_ID>",
        "task_status": "MUSE_AI_TASK_WAITING",
        "task_type": "MUSE_AI_TASK_TYPE_TEXT2IMG"
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
