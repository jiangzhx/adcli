---
title: 异步预审任务提交 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/pre_review_task/add
doc_id: tencent_ads_v3_0_docs_api_pre_review_task_add
source_id: tencent_ads_v3_0_docs_api_pre_review_task_add
---
# 异步预审任务提交 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | pre_review_task/add |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和账户 id |
| element_type* | enum | 元素类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pre_review_element_type_v3) 可选值：{ ELEMENT_TYPE_TEXT, ELEMENT_TYPE_IMAGE, ELEMENT_TYPE_VIDEO, ELEMENT_TYPE_URL } |
| element_content* | string | 元素内容，1）当元素类型为“图片”时，取值为：image_id 图片 id 2）当元素类型为“视频”时，取值为：video_id 视频 id 3）当元素类型为“文本”时，取值为：文本内容 4）当元素类型为”落地页“时，取值为：落地页的 URL 字段长度最小 0 字节，长度最大 256 字节 |
| site_set* | enum[] | 投放版位列表，定义同 mkt-api site_set，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#pre_review_site_set_definition_string) 数组最小长度 1，最大长度 100 可选值：{ SITE_SET_QZONE, SITE_SET_QQCLIENT, SITE_SET_MUSIC, SITE_SET_MOBILE_UNION, SITE_SET_KUAISHOU, SITE_SET_QQCOM, SITE_SET_WECHAT, SITE_SET_MOBILE_MYAPP, SITE_SET_MOBILE_INNER, SITE_SET_TENCENT_NEWS, SITE_SET_TENCENT_VIDEO, SITE_SET_TENCENT_KUAIBAO, SITE_SET_MOBILE_YYB, SITE_SET_PENGYOU, SITE_SET_TUAN, SITE_SET_MEISHI, SITE_SET_PIAO, SITE_SET_MAIL, SITE_SET_PC_UNION, SITE_SET_YINGYONGBAO_PC, SITE_SET_PAIPAISEARCH, SITE_SET_QQSHOP, SITE_SET_PAIPAIDAOGOU, SITE_SET_QZONESEARCH, SITE_SET_WEBUNION_DELETED, SITE_SET_EXPRESSPORTAL, SITE_SET_WEIBO, SITE_SET_WANGGOU, SITE_SET_MOBILE_UNION_DELETED, SITE_SET_THIRDPARTY, SITE_SET_JD_WAICAI, SITE_SET_PCQQ, SITE_SET_KANDIAN, SITE_SET_QQ_MUSIC_GAME, SITE_SET_MOMENTS, SITE_SET_MINI_GAME_WECHAT, SITE_SET_MINI_GAME_QQ, SITE_SET_MOBILE_GAME, SITE_SET_QQSHOPPING, SITE_SET_SMART } |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/pre_review_task/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "site_set": []
}'
curl 'https://api.e.qq.com/v3.0/pre_review_task/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "site_set": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| task_id | string | 预审任务唯一 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "task_id": "<TASK_ID>"
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯营销反馈中心在线提交问题，我们的人工客服将为你服务
