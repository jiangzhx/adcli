---
title: 查询服务商业务单元列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/agency_business_unit_list/get
doc_id: tencent_ads_v3_0_docs_api_agency_business_unit_list_get
source_id: tencent_ads_v3_0_docs_api_agency_business_unit_list_get
---
# 查询服务商业务单元列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | account_management |
| --- | --- |
| 请求地址 | agency_business_unit_list/get |
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
| organization_id | integer | 服务商业务单元 id |
| business_unit_name | string | 服务商业务单元名称 字段长度最小 1 字节，长度最大 50 字节 |
| page* | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size* | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/agency_business_unit_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'organization_id=9123456' \
-d 'business_unit_name=业务单元名称 for 测试' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/agency_business_unit_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'organization_id=9123456' \
-d 'business_unit_name=业务单元名称 for 测试' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 服务商业务单元列表 |
| organization_id | integer | 服务商业务单元 id |
| business_unit_name | string | 服务商业务单元名称 |
| manager_user_id_list | array | 服务商业务单元管理员 user_id 列表 |
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
                "organization_id": 9123456,
                "business_unit_name": "业务单元名称 for 测试",
                "manager_user_id_list": [
                    1860001,
                    1860002
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
