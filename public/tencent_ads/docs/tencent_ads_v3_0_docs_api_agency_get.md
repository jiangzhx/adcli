---
title: 查询服务商信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/agency/get
doc_id: tencent_ads_v3_0_docs_api_agency_get
source_id: tencent_ads_v3_0_docs_api_agency_get
---
# 查询服务商信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | agency/get |
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
| account_id | integer | 服务商账号 id，服务商必填，服务商主体选填、不填则默认拉取该服务商主体下的所有服务商信息 |
| fields* | string[] | 指定返回的字段列表 数组最小长度 1，最大长度 256 字段长度最小 1 字节，长度最大 64 字节 |
| page* | integer | 搜索页码 最小值 1，最大值 1000 |
| page_size* | integer | 一页显示的数据条数 最小值 1，最大值 100 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/agency/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'fields=[]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/agency/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'fields=[]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| account_id | integer | 服务商账号 id |
| corporation_name | string | 企业名称 |
| system_status | enum | 客户系统状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_customer_system_status) |
| reject_message | string | 审核消息 |
| parent_agency_id | integer | 所属服务商 account_id，服务商子账号有值、服务商账号默认为 0 |
| memo | string | 账户备注 |
| page_info | struct | 分页配置信息 |
| page | number | 搜索页码 |
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
                "account_id": "<ACCOUNT_ID>",
                "corporation_name": "腾讯计算机系统有限公司",
                "reject_message": "Reject message example"
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
