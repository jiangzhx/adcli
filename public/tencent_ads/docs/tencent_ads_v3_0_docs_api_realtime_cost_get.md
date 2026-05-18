---
title: 获取实时消耗 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/realtime_cost/get
doc_id: tencent_ads_v3_0_docs_api_realtime_cost_get
source_id: tencent_ads_v3_0_docs_api_realtime_cost_get
---
# 获取实时消耗 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | realtime_cost/get |
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
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| level* | string | 获取实时消耗的类型级别 可选值：{ ADVERTISER, ADGROUP, ADTOTAL } |
| date* | string | 查询日期，日期格式：YYYY-MM-DD，只支持今天的数据查询, 当 level=ADTOTAL 时不需要传该值 字段长度为 10 字节 |
| filtering | struct[] | 过滤条件，过滤条件，当 level= ADGROUP 或 ADTOTAL 时，该字段必填；若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 2 |
| field* | string | 过滤字段，当 level 为 ADGROUP 时，field 仅可选择 adgroup_id 可选值：{ adgroup_id } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 adgroup_id 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/realtime_cost/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'level=ADGROUP' \
-d 'date=2017-04-25' \
-d 'filtering=[{"field":"adgroup_id","operator":"EQUALS","values":[111111111]}]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/realtime_cost/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'level=ADGROUP' \
-d 'date=2017-04-25' \
-d 'filtering=[{"field":"adgroup_id","operator":"EQUALS","values":[111111111]}]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| adgroup_id | int64 | 广告组 id，当获取广告主纬度报表时，该值为 0，无意义 |
| cost | integer | 实时消耗，单位为分 |
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
                "adgroup_id": "<ADGROUP_ID>",
                "cost": 1300
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
