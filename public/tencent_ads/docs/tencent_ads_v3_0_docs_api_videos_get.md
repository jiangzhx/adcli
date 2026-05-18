---
title: 获取视频文件 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/videos/get
doc_id: tencent_ads_v3_0_docs_api_videos_get
source_id: tencent_ads_v3_0_docs_api_videos_get
---
# 获取视频文件 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | videos/get |
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
| account_id | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id ； account_id 和 organization_id 需必填其一 |
| organization_id | integer | 业务单元 id，有操作权限的业务单元 id ； account_id 和 organization_id 需必填其一 |
| filtering | struct[] | 过滤条件，若此 filtering 字段不传 created_time 参数，则默认查询半年内数据，其余参数不传或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 4 |
| field* | string | 过滤字段 字段长度最小 1 字节，长度最大 32 字节 |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 product_catalog_id 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 product_outer_id 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 media_signature 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 media_id 时，可选值：{ EQUALS, IN } 当 field 取值 media_width 时，可选值：{ EQUALS } 当 field 取值 media_height 时，可选值：{ EQUALS } 当 field 取值 created_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 last_modified_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 source_type 时，可选值：{ EQUALS } 当 field 取值 owner_account_id 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 status 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 media_description 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 sample_aspect_ratio 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 first_publication_status 时，可选值：{ EQUALS } 当 field 取值 video_id 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 file_size 时，可选值：{ LESS_EQUALS } 当 field 取值 height 时，可选值：{ GREATER_EQUALS, LESS_EQUALS } 当 field 取值 width 时，可选值：{ GREATER_EQUALS, LESS_EQUALS } 当 field 取值 ratio 时，可选值：{ EQUALS } 当 field 取值 video_duration_millisecond 时，可选值：{ GREATER_EQUALS, LESS_EQUALS } 当 field 取值 aigc_flag 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 media_signature 时，数组长度为 1 字段长度最小 1 字节，长度最大 32 字节 当 field 取值 media_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 当 field 取值 media_id 且 operator 取值 EQUALS 时， 数组长度为 1 当 field 取值 media_width 时，数组长度为 1 最小值 0，最大值 3840 当 field 取值 media_height 时，数组长度为 1 最小值 0，最大值 2160 当 field 取值 created_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 last_modified_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 source_type 时，数组长度为 1 可选值：{ SOURCE_TYPE_LOCAL, SOURCE_TYPE_API, SOURCE_TYPE_VIDEO_MAKER_XSJ, SOURCE_TYPE_TCC, SOURCE_TYPE_DERIVE, SOURCE_TYPE_DERIVATION, SOURCE_TYPE_HUXUAN, SOURCE_TYPE_HUXUAN_DERIVE } 当 field 取值 product_catalog_id 时，数组长度为 1 字段长度最小 1 字节，长度最大 100 字节 当 field 取值 product_outer_id 时，数组长度为 1 字段长度最小 1 字节，长度最大 100 字节 当 field 取值 owner_account_id 时，数组长度为 1 字段长度最小 1 字节，长度最大 100 字节 当 field 取值 status 时，数组长度为 1 可选值：{ ADSTATUS_NORMAL, ADSTATUS_DELETED } 当 field 取值 media_description 时，数组长度为 1 字段长度最小 1 字节，长度最大 100 字节 当 field 取值 sample_aspect_ratio 时，数组长度为 1 字段长度最小 1 字节，长度最大 100 字节 当 field 取值 first_publication_status 时，数组长度为 1 可选值：{ FIRST_PUBLICATION_STATUS_DEFAULT, FIRST_PUBLICATION_STATUS_FIRST_PUBLICATION } 当 field 取值 quality_status 时，数组长度为 1 可选值：{ QUALITY_STATUS_DEFAULT, QUALITY_STATUS_LOW_QUALITY } 当 field 取值 aigc_flag 时，数组长度为 1 可选值：{ AIGC_FLAG_UNKNOWN, AIGC_FLAG_NOT_AI, AIGC_FLAG_USE_MUSE_AI, AIGC_FLAG_USE_OTHERS_AI } |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| label_id | integer | 标签 id |
| business_scenario | integer | 业务场景，1 内容素材包类型，2 投放素材包类型 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/videos/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"media_width","operator":"EQUALS","values":[640]}]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/videos/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"media_width","operator":"EQUALS","values":[640]}]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| video_id | integer | 视频 id |
| width | integer | 视频宽度 |
| height | integer | 视频高度 |
| video_frames | integer | 视频帧数 |
| video_fps | float | 视频帧率 |
| video_codec | string | 视频格式 |
| video_bit_rate | integer | 视频码率，单位：b/s |
| audio_codec | string | 音频格式 |
| audio_bit_rate | integer | 音频码率，单位：b/s |
| file_size | integer | 视频文件大小，单位 B(byte) |
| type | enum | 视频类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#media_type) |
| signature | string | 视频文件签名 |
| system_status | enum | 转码状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#media_system_status) |
| description | string | 视频文件描述，不支持@等特殊符号 |
| preview_url | string | 视频文件预览地址 |
| key_frame_image_url | string | 视频首帧缩略图地址 |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| video_profile_name | string | 视频格式类型 |
| audio_sample_rate | integer | 音频采样率，单位：hz |
| max_keyframe_interval | integer | 关键帧的最大间隔帧数 |
| min_keyframe_interval | integer | 关键帧的最小间隔帧数 |
| sample_aspect_ratio | string | 采样纵横比 |
| audio_profile_name | string | 音频格式类型 |
| scan_type | string | 扫描类型 |
| image_duration_millisecond | integer | 画面时长，单位：ms |
| audio_duration_millisecond | integer | 音频时长，单位：ms |
| source_type | enum | 视频来源，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#media_source_type) |
| product_outer_id | string | 商品 id |
| source_reference_id | string | 素材来源关联 id，和素材来源相关 |
| owner_account_id | string | 素材拥有 id |
| status | enum | 视频状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#media_status_type) |
| similarity_status | enum | 相似度检测状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#similarity_status) |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 |
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
                "video_id": "<VIDEO_ID>",
                "width": 640,
                "height": 360,
                "video_frames": 375,
                "video_fps": 25,
                "video_codec": "H264",
                "video_bit_rate": 420194,
                "audio_codec": "AAC",
                "audio_bit_rate": 128001,
                "file_size": 1036889,
                "type": "TYPE_MP4",
                "signature": "19efcaeda3c30e1cf28170d86ecbf5e0",
                "system_status": "MEDIA_STATUS_VALID",
                "description": "media_description",
                "preview_url": "https://example.com/example.mp4",
                "created_time": 1491019858,
                "last_modified_time": 1491098468
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
