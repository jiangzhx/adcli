---
title: 获取直播数据 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/video_channel_live_data/get
doc_id: tencent_ads_v3_0_docs_api_video_channel_live_data_get
source_id: tencent_ads_v3_0_docs_api_video_channel_live_data_get
---
# 获取直播数据 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights,account_management,audience_management,user_actions |
| --- | --- |
| 请求地址 | video_channel_live_data/get |
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
| account_id* | integer | 广告主账号 id，直客账号或子客账号 |
| brand_ids | string[] | 品牌 id 列表，非经销商管理员必填 |
| brand_names | string[] | 品牌名称列表 |
| dealer_ids | string[] | 经销商 id 列表 |
| dealer_names | string[] | 经销商名称列表 |
| video_channel_ids | string[] | 视频号账号 id 列表 |
| video_channel_names | string[] | 视频号账号名称列表 |
| start_date* | integer | 开始日期，例如，20220704 |
| end_date* | integer | 结束日期，例如，20220704 |
| page* | integer | 页数，第一页页码是 1。当使用 search_after 时，本参数不生效。 |
| page_size* | integer | 页大小，必须大于 0 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/video_channel_live_data/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "brand_ids": [],
    "brand_names": [],
    "dealer_ids": [],
    "dealer_names": [],
    "video_channel_ids": [],
    "video_channel_names": [],
    "page": 1,
    "page_size": 10
}'
curl 'https://api.e.qq.com/v3.0/video_channel_live_data/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "brand_ids": [],
    "brand_names": [],
    "dealer_ids": [],
    "dealer_names": [],
    "video_channel_ids": [],
    "video_channel_names": [],
    "page": 1,
    "page_size": 10
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| living_info_list | struct[] | 直播数据列表 |
| dealer_id | integer | 经销商 id |
| dealer_name | string | 经销商名称 |
| video_channel_id | string | 视频号 id |
| video_channel_name | string | 视频号名称 |
| showings_id | string | 直播场次 id |
| live_start_time | string | 开播时间 |
| live_end_time | string | 结束时间 |
| watching_person_uv | integer | 观看人数 |
| avg_watching_duration | integer | 平均观看时长秒 |
| cheers_cnt | integer | 喝彩数 |
| share_cnt | integer | 分享数 |
| comment_cnt | integer | 评论数 |
| living_duration | integer | 直播时长 |
| page_info | struct | 分页信息结构 |
| page | integer | 页数，第一页页码是 1。当使用 search_after 时，本参数不生效。 |
| page_size | integer | 页大小，必须大于 0 |
| total_number | integer | 总记录数，满足条件的记录数 |
| total_page | integer | 总页数，记录数按照当前的页大小划分，应该产生多少页 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "living_info_list": [],
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
