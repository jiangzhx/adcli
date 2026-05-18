---
title: 获取联合预算 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/joint_budget_rules/get
doc_id: tencent_ads_v3_0_docs_api_joint_budget_rules_get
source_id: tencent_ads_v3_0_docs_api_joint_budget_rules_get
---
# 获取联合预算 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | joint_budget_rules/get |
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
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，若获取联盟广告位信息此字段必填，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 255 |
| field* | string | 过滤字段 可选值：{ joint_budget_rule_id, joint_budget_rule_name } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 joint_budget_rule_id 时，可选值：{ EQUALS, IN } 当 field 取值 joint_budget_rule_name 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 joint_budget_rule_id 且 operator 取值 EQUALS 时， 数组长度为 1 当 field 取值 joint_budget_rule_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 当 field 取值 joint_budget_rule_name 时，数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |
| fields | string[] | 指定返回的字段列表 数组最小长度 1，最大长度 1024 字段长度最小 1 字节，长度最大 64 字节 |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/joint_budget_rules/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'fields=["joint_budget_rule_id","joint_budget_rule_name","daily_budget","total_budget","created_time","last_mod_time","completed_time","bldate","adgroup_id_list"]' \
-d 'filtering=[{"field":"last_modified_time","operator":"GREATER_EQUALS","values":["1708520382"]}]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/joint_budget_rules/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'fields=["joint_budget_rule_id","joint_budget_rule_name","daily_budget","total_budget","created_time","last_mod_time","completed_time","bldate","adgroup_id_list"]' \
-d 'filtering=[{"field":"last_modified_time","operator":"GREATER_EQUALS","values":["1708520382"]}]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| joint_budget_rule_id | integer | 联合预算 id |
| joint_budget_rule_name | string | 联合预算名称，字段长度最小 1 个等宽字符，长度最大 60 等宽字符（即字段最大长度为 60 个中文字或全角标点，120 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| daily_budget | integer | 联合预算日预算，联合预算日预算，单位为分，设置为 0 表示不设预算（即不限）。日预算要求介于 5,000 分– 4,000,000,000 分之间（50 元- 40,000,000 元，单位为人民币） 每次修改后的日预算不能低于该联合预算规则今日已消耗金额的 1.5 倍加上冻结金额 每次修改后的日预算不能低于该联合预算规则今日已消耗金额加上 5,000 分（50 元，单位为人民币） 每次修改幅度不能低于 5000 分（50 元，单位为人民币） |
| total_budget | integer | 联合预算总预算，单位为分，设置为 0 表示不设预算（即不限）。总预算要求介于 5,000 分– 4,000,000,000 分之间（50 元-40,000,000 元，单位为人民币） 每次修改幅度不能低于 5000 分（50 元，单位为人民币） 修改后的总预算不能低于该联合预算规则累计总消耗金额加上今日已消耗金额的 0.5 倍，且不能低于当前联合预算规则累计总消耗金额加上 50,000 分（500 元，单位为人民币） 已完成的总预算不能改小 |
| created_time | integer | 创建时间，时间戳 |
| last_mod_time | integer | 最后修改时间，时间戳 |
| completed_time | integer | 总限额到达时间戳，unix 时间戳，精确到秒 |
| bldate | integer | 日限额到达日期，格式为 YYYYmmdd |
| adgroup_id_list | integer[] | 广告 id 列表 |
| joint_budget_rule_type | enum | 联合预算类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#joint_budget_rule_type) |
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
                "joint_budget_rule_id": 1024,
                "joint_budget_rule_name": "hhh3",
                "daily_budget": 0,
                "total_budget": 0,
                "created_time": 1713943298,
                "last_mod_time": 1713943298,
                "completed_time": 0,
                "bldate": 0,
                "adgroup_id_list": [
                    15734820591,
                    15766921382,
                    15773584573
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

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
