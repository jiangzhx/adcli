---
title: 获取图片信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/images/get
doc_id: tencent_ads_v3_0_docs_api_images_get
source_id: tencent_ads_v3_0_docs_api_images_get
---
# 获取图片信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,account_management |
| --- | --- |
| 请求地址 | images/get |
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
| account_id | integer | 广告主账户 id，有操作权限的帐号 id，包括代理商和广告主帐号 id ； account_id 和 organization_id 需必填其一 |
| organization_id | integer | 业务单元 id，有操作权限的业务单元 id ； account_id 和 organization_id 需必填其一 |
| filtering | struct[] | 过滤条件，若此 filtering 字段不传 created_time 参数，则默认查询半年内数据，其余参数不传或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 4 |
| field* | string | 过滤字段 可选值：{ image_signature, image_id, image_width, image_height, created_time, last_modified_time, source_type, product_catalog_id, product_outer_id, owner_account_id, status, image_description, sample_aspect_ratio, first_publication_status, quality_status, similarity_status, aigc_flag } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 product_catalog_id 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 product_outer_id 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 image_signature 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 image_id 时，可选值：{ EQUALS, CONTAINS, IN } 当 field 取值 image_width 时，可选值：{ EQUALS } 当 field 取值 image_height 时，可选值：{ EQUALS } 当 field 取值 created_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 last_modified_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 source_type 时，可选值：{ EQUALS } 当 field 取值 owner_account_id 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 status 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 image_description 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 sample_aspect_ratio 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 first_publication_status 时，可选值：{ EQUALS } 当 field 取值 file_size 时，可选值：{ LESS_EQUALS } 当 field 取值 height 时，可选值：{ GREATER_EQUALS, LESS_EQUALS } 当 field 取值 width 时，可选值：{ GREATER_EQUALS, LESS_EQUALS } 当 field 取值 ratio 时，可选值：{ EQUALS } 当 field 取值 aigc_flag 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 image_signature 时，数组长度为 1 字段长度最小 1 字节，长度最大 32 字节 当 field 取值 image_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 48 字节 当 field 取值 image_id 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 48 字节 当 field 取值 image_width 时，数组长度为 1 最小值 0，最大值 2000 当 field 取值 image_height 时，数组长度为 1 最小值 0，最大值 2000 当 field 取值 created_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 last_modified_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 source_type 时，数组长度为 1 可选值：{ SOURCE_TYPE_LOCAL, SOURCE_TYPE_MUSE, SOURCE_TYPE_API, SOURCE_TYPE_QUICK_DRAW, SOURCE_TYPE_VIDEO_SNAPSHOTS, SOURCE_TYPE_TCC } 当 field 取值 owner_account_id 时，数组长度为 1 字段长度为 10 字节 当 field 取值 sample_aspect_ratio 时，数组长度为 1 字段长度为 10 字节 当 field 取值 status 时，数组长度为 1 可选值：{ ADSTATUS_NORMAL, ADSTATUS_DELETED } 当 field 取值 image_description 时，数组长度为 1 字段长度最小 1 字节，长度最大 256 字节 当 field 取值 first_publication_status 时，数组长度为 1 可选值：{ FIRST_PUBLICATION_STATUS_DEFAULT, FIRST_PUBLICATION_STATUS_FIRST_PUBLICATION } 当 field 取值 quality_status 时，数组长度为 1 可选值：{ QUALITY_STATUS_DEFAULT, QUALITY_STATUS_LOW_QUALITY } 当 field 取值 aigc_flag 时，数组长度为 1 可选值：{ AIGC_FLAG_UNKNOWN, AIGC_FLAG_NOT_AI, AIGC_FLAG_USE_MUSE_AI, AIGC_FLAG_USE_OTHERS_AI } |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| label_id | integer | 标签 id |
| business_scenario | integer | 业务场景，1 内容素材包类型，2 投放素材包类型 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/images/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"image_width","operator":"EQUALS","values":[160]}]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/images/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[{"field":"image_width","operator":"EQUALS","values":[160]}]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| image_id | string | 图片 id |
| width | integer | 图片宽度，单位 px |
| height | integer | 图片高度，单位 px |
| file_size | integer | 图片大小，单位 B(byte) |
| type | enum | 图片类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_image_type) |
| signature | string | 图片文件签名，使用图片文件的 md5 值，用于检查上传图片文件的完整性 |
| description | string | 图片文件描述，不支持@等特殊符号 |
| source_signature | string | 图片源文件签名，为图片经过裁剪前源文件的 md5 值，若该文件没有经过裁剪，source_signature 为空 |
| preview_url | string | 预览地址 |
| source_type | enum | 图片来源，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_image_source_type) |
| image_usage | enum | 图片用途，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_image_usage) |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| product_catalog_id | integer | 商品库 id |
| product_outer_id | string | 商品 id |
| source_reference_id | string | 素材来源关联 id，和素材来源相关 |
| owner_account_id | string | 素材拥有者 id |
| status | enum | 状态，实体状态枚举，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#ad_status) |
| sample_aspect_ratio | string | 图片宽高比 默认值：宽高比 |
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
                "image_id": "<IMAGE_ID>",
                "width": 160,
                "height": 210,
                "file_size": 10280,
                "type": "TYPE_JPG",
                "signature": "f4c8a3bc4deb305fb74cb08ed395b98c",
                "source_signature": "83a447d55c02dd4efe8776e369915eb7",
                "preview_url": "https://example.com/example.jpg",
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
