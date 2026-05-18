---
title: 获取违规处罚列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/punishment_query/get
doc_id: tencent_ads_v3_0_docs_api_punishment_query_get
source_id: tencent_ads_v3_0_docs_api_punishment_query_get
---
# 获取违规处罚列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | punishment_query/get |
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
| order_id_list | string[] | 违规单 id 列表 字段长度最小 1 字节，长度最大 50 字节 |
| account_id_list* | integer[] | 账户 id 列表 |
| company_name | string | 公司名称 字段长度最小 1 字节，长度最大 255 字节 |
| industry_id_list | integer[] | 开户行业 id 列表 |
| illegal_start_time | integer | 违规开始日期，毫秒时间戳 |
| illegal_end_time | integer | 违规结束日期，毫秒时间戳 |
| illegal_node_list | string[] | 违规节点/对象列表 字段长度最小 1 字节，长度最大 512 字节 |
| action_type_list | integer[] | 账户处罚动作列表 最小值 1，最大值 999999 |
| start_time | integer | 违规开始日期，毫秒时间戳 |
| end_time | integer | 处罚结束日期，毫秒时间戳 |
| level_list | integer[] | 处罚等级列表 |
| illegal_scene_list | string[] | 处罚场景列表 字段长度最小 1 字节，长度最大 512 字节 |
| page_conf* | struct | 分页内容 |
| page | integer | 第几页 最小值 1，最大值 999999 默认值：1 |
| page_size | integer | 每页条数，不超过 1000 最小值 1，最大值 1000 默认值：10 |
| total_page | integer | 总页数 最小值 1，最大值 99999999 |
| total_num | integer | 总条数 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/punishment_query/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "order_id_list": [],
    "account_id_list": [],
    "industry_id_list": [],
    "illegal_node_list": [],
    "action_type_list": [],
    "level_list": [],
    "illegal_scene_list": [],
    "page_conf": {
        "page": 1,
        "page_size": 10,
        "total_page": 1
    }
}'
curl 'https://api.e.qq.com/v3.0/punishment_query/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "order_id_list": [],
    "account_id_list": [],
    "industry_id_list": [],
    "illegal_node_list": [],
    "action_type_list": [],
    "level_list": [],
    "illegal_scene_list": [],
    "page_conf": {
        "page": 1,
        "page_size": 10,
        "total_page": 1
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 处罚场景列表 |
| order_id | string | 违规单 id |
| uid | integer | 账户 id |
| company_name | string | 公司名称 |
| account_type | integer | 账户类型，1=直客，3=子客 |
| agency_id | integer | 服务商 id |
| first_industry_id | integer | 开户一级行业 id |
| first_industry | string | 开户一级行业 |
| second_industry_id | integer | 开户二级行业 id |
| second_industry | string | 开户二级行业 |
| kpi_first_industry_id | integer | KPI 一级行业 id |
| kpi_first_industry | string | KPI 一级行业 |
| kpi_second_industry_id | integer | KPI 二级行业 id |
| kpi_second_industry | string | KPI 二级行业 |
| illegal_aid | string | 违规广告 AID |
| illegal_tid | string | 违规 TID |
| illegal_dc_id | string | 违规 DCID |
| illegal_component_id | string | 违规组件 id |
| illegal_time | string | 违规日期，格式 YYYY-MM-DD |
| new_illegal_obj | string | 违规节点/对象 |
| action_type | integer | 账户处罚动作 |
| deposit_data | struct | 保证金处罚内容 |
| punish_ratio | integer | 处罚比例 |
| punish_money | integer | 处罚金额 |
| deduct_id | integer | 保证金扣罚单号 |
| deduct_money | integer | 保证金扣罚金额 |
| create_time | string | 处罚时间，如 2025-08-01 18:01:07 |
| level | integer | 处罚等级，见处罚系统配置接口 punish_level |
| reason | string | 处罚原因 |
| certificate_list | string[] | 处罚凭证列表 |
| illegal_scene | string | 处罚场景 |
| mdm_punish_data | struct[] | 主体处罚内容列表 |
| punish_level | integer | 处罚等级 value |
| punish_cnt | integer | 处罚次数 |
| appeal_status | boolean | 是否可申诉 |
| page_conf | struct | 分页内容 |
| page | integer | 第几页 默认值：1 |
| page_size | integer | 每页条数，不超过 1000 默认值：10 |
| total_page | integer | 总页数 |
| total_num | integer | 总条数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "deposit_data": [],
                "certificate_list": [],
                "mdm_punish_data": []
            }
        ],
        "page_conf": {
            "page": 1,
            "page_size": 10,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
