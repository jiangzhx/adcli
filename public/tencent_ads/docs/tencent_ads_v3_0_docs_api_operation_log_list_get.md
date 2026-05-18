---
title: 获取操作日志列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/operation_log_list/get
doc_id: tencent_ads_v3_0_docs_api_operation_log_list_get
source_id: tencent_ads_v3_0_docs_api_operation_log_list_get
---
# 获取操作日志列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | operation_log_list/get |
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
| operation_object_type* | enum | 操作日志对象类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operation_object_type) 可选值：{ OPERATION_OBJECT_TYPE_ADGROUP, OPERATION_OBJECT_TYPE_DYNAMIC_CREATIVE, OPERATION_OBJECT_TYPE_JOINT_BUDGET } |
| start_date* | string | 开始日期，日期格式：YYYY-MM-DD，且小于等于 end_date, 不支持查询 3 个月前的数据 字段长度为 10 字节 |
| end_date* | string | 结束日期，日期格式：YYYY-MM-DD，且大于等于 begin_date, end_date 和 start_date 的时间差不能超过 1 个月 字段长度为 10 字节 |
| page* | integer | 搜索页码，最多查询 100 页 最小值 1，最大值 100 默认值：1 |
| page_size* | integer | 页面大小，每页最多查询 100 条数据 最小值 1，最大值 100 默认值：10 |
| object_id | integer | 操作对象 id |
| operator_platform_list | enum[] | 操作平台列表，操作平台列表不大于 1000 个，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operator_platform_type) 数组最小长度 1，最大长度 10 可选值：{ OPERATOR_PLATFORM_UNKNOWN, OPERATOR_PLATFORM_MARKETING_API, OPERATOR_PLATFORM_ADQ, OPERATOR_PLATFORM_AUDIT, OPERATOR_PLATFORM_MINISITE, OPERATOR_PLATFORM_SMART_ENGINE, OPERATOR_PLATFORM_SEARCH_EDITOR, OPERATOR_PLATFORM_MARKETING_ASSET, OPERATOR_PLATFORM_API_KEY } |
| operation_action_list | enum[] | 操作动作列表，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operation_action_type) 数组最小长度 1，最大长度 2 可选值：{ OPERATION_ACTION_TYPE_CREATE, OPERATION_ACTION_TYPE_UPDATE } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/operation_log_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'operation_object_type=OPERATION_OBJECT_TYPE_ADGROUP' \
-d 'object_id=18828182034' \
-d 'start_date=2024-07-01' \
-d 'end_date=2024-07-30' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/operation_log_list/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'operation_object_type=OPERATION_OBJECT_TYPE_ADGROUP' \
-d 'object_id=18828182034' \
-d 'start_date=2024-07-01' \
-d 'end_date=2024-07-30' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 日志详情 |
| operation_action | enum | 操作动作，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operation_action_type) |
| fronted_operator | string | 前端操作用户，小于等于 128 个英文字符 |
| operation_object_id | integer | 操作对象 id |
| operation_object_name | string | 操作的对象的名称，小于等于 128 个英文字符 |
| operator_platform | enum | 操作平台类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operator_platform_type) |
| operation_log | string[] | 操作前后内容，操作内容列表 |
| created_time | integer | 操作时间，时间戳 |
| operation_info_list | struct[] | 批量日志详情，批量操作可能存在多条日志 |
| operation_action | enum | 操作动作，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operation_action_type) |
| fronted_operator | string | 前端操作用户，小于等于 128 个英文字符 |
| operation_object_id | integer | 操作对象 id |
| operation_object_name | string | 操作的对象的名称，小于等于 128 个英文字符 |
| operator_platform | enum | 操作平台类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_operator_platform_type) |
| operation_log | string[] | 操作前后内容，操作内容列表 |
| created_time | integer | 操作时间，时间戳 |
| page_info | struct | 分页信息 |
| page | integer | 搜索页码，最多查询 100 页 默认值：1 |
| page_size | integer | 页面大小，每页最多查询 100 条数据 默认值：10 |
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
                "operation_action": "OPERATION_ACTION_TYPE_UPDATE",
                "fronted_operator": "QQ(1686789766)",
                "operation_object_id": 18828182034,
                "operation_object_name": "",
                "operator_platform": "OPERATOR_PLATFORM_ADQ",
                "operation_log": [
                    "投放时段: 不限 -> 星期一: 00:30-02:00;星期二: 02:00-03:00;星期三: 04:30-05:30;星期四: 07:00-08:00;星期五: 09:30-10:30;星期六: 08:30-09:30;星期日: 11:00-12:00"
                ],
                "created_time": 1722253393
            },
            {
                "operation_action": "OPERATION_ACTION_TYPE_CREATE",
                "fronted_operator": "QQ(2849246071)",
                "operation_object_id": 18828182034,
                "operation_object_name": "",
                "operator_platform": "OPERATOR_PLATFORM_ADQ",
                "operation_log": [
                    "广告 id: 18828182034",
                    "广告形式: 常规展示广告",
                    "是否需要审核: 已审核",
                    "系统优选: 关闭",
                    "出价类型: 手动出价",
                    "一键起量: 关闭",
                    "扣费方式: CPM 扣费",
                    "删除状态: 正常",
                    "oCPA 目标出价: 138.61 元",
                    "售卖方式: 竞价",
                    "自动流量优选开关: 关闭",
                    "出价策略: 稳定拿量",
                    "oCPA 扣费方式: 曝光",
                    "营销载体类型: 页面跳转",
                    "投放开始时间: 2024-07-29 00:00:00",
                    "oCPA 优化目标: 加企业微信客服",
                    "广告名称: 线索留资广告_07_29_19:08:16",
                    "自动版位开关: 关闭",
                    "状态: 开启",
                    "营销目的: 线索留资",
                    "投放时段: 不限",
                    "结算方式: 腾讯结算",
                    "投放结束时间: 2025-07-29 23:59:59",
                    "自动衍生创意开关: 开启",
                    "审核状态: 正常",
                    "广告 id: 18828182034",
                    "智能拓流: 关闭",
                    "智能定向开关: 关闭",
                    "定向内容: 地理位置：（常住）禅城区；",
                    "定向名称: 微信广告绑定定向 13dcc597ba0ded6fb877a043db73e90523032",
                    "定向 id: 18828182569"
                ],
                "created_time": 1722251369
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
