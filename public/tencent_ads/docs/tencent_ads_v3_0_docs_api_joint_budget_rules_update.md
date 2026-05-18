---
title: 更新联合预算规则 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/joint_budget_rules/update
doc_id: tencent_ads_v3_0_docs_api_joint_budget_rules_update
source_id: tencent_ads_v3_0_docs_api_joint_budget_rules_update
---
# 更新联合预算规则 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | joint_budget_rules/update |
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
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| joint_budget_rule_id* | integer | 联合预算 id |
| joint_budget_rule_name | string | 联合预算名称，字段长度最小 1 个等宽字符，长度最大 60 等宽字符（即字段最大长度为 60 个中文字或全角标点，120 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 1 字节，长度最大 180 字节 |
| daily_budget | integer | 联合预算日预算，联合预算日预算，单位为分，设置为 0 表示不设预算（即不限）。日预算要求介于 5,000 分– 4,000,000,000 分之间（50 元- 40,000,000 元，单位为人民币） 每次修改后的日预算不能低于该联合预算规则今日已消耗金额的 1.5 倍加上冻结金额 每次修改后的日预算不能低于该联合预算规则今日已消耗金额加上 5,000 分（50 元，单位为人民币） 每次修改幅度不能低于 5000 分（50 元，单位为人民币） |
| total_budget | integer | 联合预算总预算，单位为分，设置为 0 表示不设预算（即不限）。总预算要求介于 5,000 分– 4,000,000,000 分之间（50 元-40,000,000 元，单位为人民币） 每次修改幅度不能低于 5000 分（50 元，单位为人民币） 修改后的总预算不能低于该联合预算规则累计总消耗金额加上今日已消耗金额的 0.5 倍，且不能低于当前联合预算规则累计总消耗金额加上 50,000 分（500 元，单位为人民币） 已完成的总预算不能改小 最小值 0，最大值 100000000000 |
| adgroup_id_list | integer[] | 广告组 id 列表，一个联合预算规则最多关联 500 个广告仅支持 3.0 版本的竞价展示广告关联联合预算规则 已绑定联合预算规则的广告不能再次绑定 联合预算规则只能新增绑定广告，已绑定广告不能解绑 只有未产生消耗的广告才能绑定联合预算规则 数组最小长度 1，最大长度 500 最小值 0，最大值 9200000000000000000 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/joint_budget_rules/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "joint_budget_rule_id": "<JOINT_BUDGET_RULE_ID>",
    "joint_budget_rule_name": "<JOINT_BUDGET_RULE_NAME>",
    "daily_budget": 0,
    "total_budget": 0,
    "adgroup_id_list": [
        "<ADGROUP_ID>"
    ]
}'
curl 'https://api.e.qq.com/v3.0/joint_budget_rules/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "joint_budget_rule_id": "<JOINT_BUDGET_RULE_ID>",
    "joint_budget_rule_name": "<JOINT_BUDGET_RULE_NAME>",
    "daily_budget": 0,
    "total_budget": 0,
    "adgroup_id_list": [
        "<ADGROUP_ID>"
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| joint_budget_rule_id | integer | 联合预算 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "joint_budget_rule_id": 1031
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
