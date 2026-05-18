---
title: 获取计量处罚明细 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/punish_detail/get
doc_id: tencent_ads_v3_0_docs_api_punish_detail_get
source_id: tencent_ads_v3_0_docs_api_punish_detail_get
---
# 获取计量处罚明细 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | punish_detail/get |
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
| partition_time | integer | 统计周期，格式 YYYYMM，不传则默认所有周期 最小值 100000，最大值 999999 |
| start_partition_time | integer | 开始月份，yyyyMM 格式 最小值 100000，最大值 999999 |
| end_partition_time | integer | 结束月份，yyyyMM 格式 最小值 100000，最大值 999999 |
| account_id* | integer | 当前账户 id |
| agency_uid_list | string[] | 代理商 id 列表，● 若使用代理商 id 身份调用，无需传入该参数 ● 若使用 uid 身份调用，可通过该字段指定查询某个代理商 id 下的数据 字段长度最小 1 字节，长度最大 255 字节 |
| ops_advertiser_name_list | string[] | 广告主主体名称列表 字段长度最小 1 字节，长度最大 255 字节 |
| zc_agent_group | string | 代理商政策集团，代理商所在的政策集团 字段长度最小 1 字节，长度最大 255 字节 |
| first_level_industry_name | string | 开户一级行业 字段长度最小 1 字节，长度最大 255 字节 |
| second_level_industry_name | string | 开户二级行业 字段长度最小 1 字节，长度最大 255 字节 |
| adgroup_id_list | integer[] | 广告 id 列表 |
| dynamic_creative_id_list | integer[] | 动态创意 id 列表 |
| component_id_list | integer[] | 组件 id 列表 |
| element_type | string | 元素类型，多种枚举值：ELEMENT_TYPE_TEXT=2=文本、ELEMENT_TYPE_IMAGE=3=图片、ELEMENT_TYPE_VIDEO=4=视频、ELEMENT_TYPE_URL=5=落地页 字段长度最小 1 字节，长度最大 255 字节 |
| is_element_appeal | integer | 是否有申诉记录，1 是，0 否 最小值 0，最大值 1 |
| agency_name_list | string[] | 代理商名称列表 字段长度最小 1 字节，长度最大 255 字节 |
| physical_finger_list | string[] | 元素指纹列表 字段长度最小 1 字节，长度最大 255 字节 |
| reject_reason | string | 拒绝原因 字段长度最小 1 字节，长度最大 255 字节 |
| review_begin_time | string | 审核开始时间，yyyy-MM-dd 字段长度为 10 字节 |
| review_end_time | string | 最后审核时间，yyyy-MM-dd 字段长度为 10 字节 |
| query_account_id_list | integer[] | 需要查询的账户 id 列表 |
| page_num | integer | 页码 最小值 1，最大值 999999 默认值：1 |
| page_size | integer | 每页大小，不超过 1000 最小值 1，最大值 1000 默认值：20 |
| account_operate_identity_list* | string[] | 账户运营方列表 字段长度最小 1 字节，长度最大 255 字节 |
| compliance_owner_list* | string[] | 治理责任方列表 字段长度最小 1 字节，长度最大 255 字节 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/punish_detail/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "agency_uid_list": [],
    "ops_advertiser_name_list": [],
    "adgroup_id_list": [],
    "dynamic_creative_id_list": [],
    "component_id_list": [],
    "agency_name_list": [],
    "physical_finger_list": [],
    "query_account_id_list": [],
    "page_size": 10,
    "account_operate_identity_list": [],
    "compliance_owner_list": []
}'
curl 'https://api.e.qq.com/v3.0/punish_detail/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "agency_uid_list": [],
    "ops_advertiser_name_list": [],
    "adgroup_id_list": [],
    "dynamic_creative_id_list": [],
    "component_id_list": [],
    "agency_name_list": [],
    "physical_finger_list": [],
    "query_account_id_list": [],
    "page_size": 10,
    "account_operate_identity_list": [],
    "compliance_owner_list": []
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| data_list | struct[] | 计量处罚明细数据列表 |
| partition_time | integer | 统计周期，格式 YYYYMM |
| account_id | integer | 账户 id |
| agency_uid | string | 代理商 id |
| last_review_time | string | 最后审核时间，yyyy-MM-dd |
| ops_advertiser_name | string | 广告主主体名称 |
| zc_agent_group | string | 代理商政策集团，代理商所在的政策集团 |
| first_level_industry_name | string | 开户一级行业 |
| second_level_industry_name | string | 开户二级行业 |
| adgroup_id | int64 | 广告 id，AID |
| dynamic_creative_id | integer | 动态创意 id，DCID |
| component_id | integer | 组件 id |
| element_type | string | 元素类型，多种枚举值：ELEMENT_TYPE_TEXT=2=文本、ELEMENT_TYPE_IMAGE=3=图片、ELEMENT_TYPE_VIDEO=4=视频、ELEMENT_TYPE_URL=5=落地页 |
| element_value | string | 元素值 |
| physical_finger | string | 元素指纹 |
| reject_reason | string | 拒绝原因 |
| is_element_appeal | integer | 是否有申诉记录，1 是，0 否 |
| agency_name | string | 代理商名称 |
| account_frame | string | 账户 K 框 |
| account_operate_identity | string | 账户运营方，一代服务商、二代服务商、多角色、无法归属、客户 |
| compliance_owner | string | 治理责任方，服务商、客户 |
| page_conf | struct | 分页内容 |
| page | integer | 页码 默认值：1 |
| pageSize | integer | 每页大小，不超过 1000 默认值：20 |
| totalPage | integer | 总页数 默认值：20 |
| totalNum | integer | 总条数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "data_list": [
            {
                "account_id": "<ACCOUNT_ID>",
                "adgroup_id": "<ADGROUP_ID>"
            }
        ],
        "page_conf": {
            "page": 1
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
