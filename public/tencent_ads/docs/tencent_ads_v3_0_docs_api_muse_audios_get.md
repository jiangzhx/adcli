---
title: 获取妙思版权音频列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/muse_audios/get
doc_id: tencent_ads_v3_0_docs_api_muse_audios_get
source_id: tencent_ads_v3_0_docs_api_muse_audios_get
---
# 获取妙思版权音频列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | muse_audios/get |
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
| fields | string[] | 过滤字段，可选值：{ audio_id, audio_name, cover_image_url, author, duration, expire_time, feel_tags, genre_tags } 数组最小长度 1，最大长度 1024 字段长度最小 1 字节，长度最大 64 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/muse_audios/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "fields": [
        "audio_id",
        "cover_image_url",
        "audio_name",
        "author",
        "duration",
        "expire_time",
        "feel_tags",
        "genre_tags"
    ],
    "page": 1,
    "page_size": 10
}'
curl 'https://api.e.qq.com/v3.0/muse_audios/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "fields": [
        "audio_id",
        "cover_image_url",
        "audio_name",
        "author",
        "duration",
        "expire_time",
        "feel_tags",
        "genre_tags"
    ],
    "page": 1,
    "page_size": 10
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| audio_id | string | 音频 id |
| cover_image_url | string | 音频封面图地址 |
| audio_name | string | 音频文件名称 |
| author | string | 音频作者 |
| duration | float | 音频时长，单位：s |
| expire_time | integer | 音频版权过期时间戳 |
| feel_tags | array | 音频情感标签列表 |
| genre_tags | array | 音频流派标签列表 |
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
                "audio_id": "88",
                "cover_image_url": "https://example.com/example.jpg",
                "audio_name": "8-bit",
                "author": "Cassiopeia",
                "duration": 51.36,
                "expire_time": 1760025599,
                "feel_tags": [
                    "复古",
                    "可爱/童真"
                ],
                "genre_tags": [
                    "电子"
                ]
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
