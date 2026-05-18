---
title: 查询元素的预审结果 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/review_element_prereview_results/get
doc_id: tencent_ads_v3_0_docs_api_review_element_prereview_results_get
source_id: tencent_ads_v3_0_docs_api_review_element_prereview_results_get
---
# 查询元素的预审结果 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | review_element_prereview_results/get |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| adgroup_id | int64 | 广告 id |
| elements* | struct[] | 元素信息的列表 数组最小长度 1，最大长度 20 |
| element_type* | enum | 元素类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pre_review_element_type) 可选值：{ IMAGE, VIDEO, TXT, DEST_URL } |
| element_content* | string | 元素内容，1）当元素类型为“图片”时，取值为：image_id 图片 id 2）当元素类型为“视频”时，取值为：video_id 视频 id 3）当元素类型为“文本”时，取值为：文本内容 4）当元素类型为”落地页“时，取值为：落地页的 URL 字段长度最小 0 字节，长度最大 256 字节 |
| element_key | enum | 元素 key，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pre_review_element_key) 可选值：{ IMG, TXT, CORPORATE_NAME, CORPORATE_IMG, BRAND_CORPORATE_NAME, BRAND_CORPORATE_IMG, BRAND_CORPORATE_DESC, BUTTON_TXT, BUTTON_URL, VIDEO_POPUP_BUTTON_TXT, VIDEO_POPUP_BUTTON_URL, DESC, URL, LEFT_BOTTOM_TXT, BOTTOM_TXT, GIF, VIDEO, LEFT_UPPER_TXT, SHARE_DESC, SHARE_IMG } |
| supplement | struct[] | 补充信息，不传或传空则视为无补充信息 数组最小长度 1，最大长度 50 |
| field* | string | 过滤字段，可选值：{ adcreative_template_id,mini_program_id,deep_link_url,site_set,campaign_id,is_dynamic_creative } |
| operator* | string | 操作符，当 field 取值 adcreative_template_id 时，枚举列表：{ EQUALS } 当 field 取值 mini_program_id 时，枚举列表：{ EQUALS } 当 field 取值 deep_link_url 时，枚举列表：{ EQUALS } 当 field 取值 site_set 时，枚举列表：{ EQUALS,IN } 当 field 取值 campaign_id 时，枚举列表：{ EQUALS } 当 field 取值 is_dynamic_creative 时，枚举列表：{ EQUALS } |
| values* | string[] | 字段取值，数组的个数限制与 operator 的取值相关 数组最小长度 1，最大长度 100，当 field 取值 adcreative_template_id 且 operator 取值 EQUALS 时， 数组长度为 1 当 field 取值 mini_program_id 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 400 字节 当 field 取值 deep_link_url 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 1000 字节 当 field 取值 site_set 且 operator 取值 EQUALS 时， 数组长度为 1 可选值：{ SITE_SET_QZONE, SITE_SET_QQCLIENT, SITE_SET_MUSIC, SITE_SET_MOBILE_UNION, SITE_SET_KUAISHOU, SITE_SET_QQCOM, SITE_SET_WECHAT, SITE_SET_MOBILE_MYAPP, SITE_SET_MOBILE_INNER, SITE_SET_TENCENT_NEWS, SITE_SET_TENCENT_VIDEO, SITE_SET_TENCENT_KUAIBAO, SITE_SET_MOBILE_YYB, SITE_SET_PENGYOU, SITE_SET_TUAN, SITE_SET_MEISHI, SITE_SET_PIAO, SITE_SET_MAIL, SITE_SET_PC_UNION, SITE_SET_YINGYONGBAO_PC, SITE_SET_PAIPAISEARCH, SITE_SET_QQSHOP, SITE_SET_PAIPAIDAOGOU, SITE_SET_QZONESEARCH, SITE_SET_WEBUNION_DELETED, SITE_SET_EXPRESSPORTAL, SITE_SET_WEIBO, SITE_SET_WANGGOU, SITE_SET_MOBILE_UNION_DELETED, SITE_SET_THIRDPARTY, SITE_SET_JD_WAICAI, SITE_SET_PCQQ, SITE_SET_KANDIAN, SITE_SET_QQ_MUSIC_GAME, SITE_SET_MOMENTS, SITE_SET_MINI_GAME_WECHAT, SITE_SET_MINI_GAME_QQ, SITE_SET_MOBILE_GAME, SITE_SET_QQSHOPPING, SITE_SET_SMART } 当 field 取值 site_set 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 可选值：{ SITE_SET_QZONE, SITE_SET_QQCLIENT, SITE_SET_MUSIC, SITE_SET_MOBILE_UNION, SITE_SET_KUAISHOU, SITE_SET_QQCOM, SITE_SET_WECHAT, SITE_SET_MOBILE_MYAPP, SITE_SET_MOBILE_INNER, SITE_SET_TENCENT_NEWS, SITE_SET_TENCENT_VIDEO, SITE_SET_TENCENT_KUAIBAO, SITE_SET_MOBILE_YYB, SITE_SET_PENGYOU, SITE_SET_TUAN, SITE_SET_MEISHI, SITE_SET_PIAO, SITE_SET_MAIL, SITE_SET_PC_UNION, SITE_SET_YINGYONGBAO_PC, SITE_SET_PAIPAISEARCH, SITE_SET_QQSHOP, SITE_SET_PAIPAIDAOGOU, SITE_SET_QZONESEARCH, SITE_SET_WEBUNION_DELETED, SITE_SET_EXPRESSPORTAL, SITE_SET_WEIBO, SITE_SET_WANGGOU, SITE_SET_MOBILE_UNION_DELETED, SITE_SET_THIRDPARTY, SITE_SET_JD_WAICAI, SITE_SET_PCQQ, SITE_SET_KANDIAN, SITE_SET_QQ_MUSIC_GAME, SITE_SET_MOMENTS, SITE_SET_MINI_GAME_WECHAT, SITE_SET_MINI_GAME_QQ, SITE_SET_MOBILE_GAME, SITE_SET_QQSHOPPING, SITE_SET_SMART } 当 field 取值 campaign_id 且 operator 取值 EQUALS 时， 数组长度为 1 当 field 取值 is_dynamic_creative 且 operator 取值 EQUALS 时， 数组长度为 1 可选值：{ DYNAMIC_CREATIVE, NOT_DYNAMIC_CREATIVE } 字段长度最小 1 字节，长度最大 1000 字节 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/review_element_prereview_results/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "adgroup_id": "<ADGROUP_ID>",
    "elements": [],
    "supplement": [
        {
            "values": []
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/review_element_prereview_results/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "adgroup_id": "<ADGROUP_ID>",
    "elements": [],
    "supplement": [
        {
            "values": []
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 预审结果实体集合 |
| element_type | enum | 元素类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pre_review_element_type) |
| element_content | string | 元素内容，1）当元素类型为“图片”时，取值为：image_id 图片 id 2）当元素类型为“视频”时，取值为：video_id 视频 id 3）当元素类型为“文本”时，取值为：文本内容 4）当元素类型为”落地页“时，取值为：落地页的 URL |
| risk_level | enum | 元素风险级别，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#risk_level) |
| pre_review_details | struct[] | 元素预审结果明细集合 |
| site_set | enum | 投放版位集合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pre_review_site_set_definition_string) |
| pre_review_result | enum | 投放版位的预审结果，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_risk_level) |
| reject_reason_detail | struct[] | 拒绝原因明细集合 |
| reject_reason_id | string | 拒绝原因 id |
| reject_reason_content | string | 拒绝原因内容 |
| case_doc | string | 案例 url |
| case_content | string | 案例内容富文本 |
| reject_info_locations | struct[] | 元素拒绝原因详情 |
| x | integer | x 轴位置 |
| y | integer | y 轴位置 |
| width | integer | 宽度 |
| height | integer | 高度 |
| time_second | float | 视频时间点 |
| location_img_url | string | 标注结果图 url |
| img_url | string | 帧图片 url |
| related_img_url | string | 种子图 url |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "pre_review_details": [
                    {
                        "reject_reason_detail": [
                            {
                                "reject_info_locations": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
