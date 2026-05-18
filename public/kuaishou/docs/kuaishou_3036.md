---
title: 更新活码包成员
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3036&menuId=3761
doc_id: kuaishou_3036
source_id: kuaishou_3036
---
# 更新活码包成员

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3036 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 老铁线索通 |
| createTime | 2024-07-15T09:41:47.051Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/qywx/updateSalePackage |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| allocation_type | Integer |  |  | 客服分配类型 0 默认 1 轮询 2 权重 |  |
| corp_id | String | 是 |  | 明文 |  |
| advertiser_id | Long | 是 |  | - |  |
| user_ids | EmployeeInfo[] | 是 |  | 成员list |  |
| - user_id | String | 是 |  | open_user_id |  |
| - name | String |  |  | - |  |
| - active_status | Integer |  |  | 激活状态0-已激活1-未激活2-初始免费期3-已过期 |  |
| - dep_ids | Integer[] |  |  | 部门信息 |  |
| - expire_time | Long |  |  | 过期时间 |  |
| - customer_weight | Integer |  | 1 | 权重1-9正整数，当allocation_type=2必填 |  |
| saler_package_id | Long | 是 |  | 活码包id |  |

## 请求样例

### 示例标题 (java)

```
//  请输入示例代码
{
  "corp_id": "ww02658791c08a4f",
  "advertiser_id": "9005265",
  "user_ids": [
    {
      "user_id": "woIcKmHrYAdy312nUr5O-kcjfHsA",
      "customer_weight": 3
    },
    {
      "user_id": "woIcKmHCLPQnW8vNo7_amRER_wh5A",
      "customer_weight": 7
    }
  ],
  "saler_package_id": "7349002018743",
  "allocation_type": 2
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 0-成功 |  |
| message | String |  |  | - |  |
| data | UpdateSalePackageData |  |  | - |  |
| - check_result | Integer |  |  | 检查结果: 0 成员均已授权，且均有激活码; 1 当前有成员不在授权可见范围内; 2 当前有成员无可用激活码; 3 当前有成员不在授权可见范围且有成员无可用激活码 |  |
| - unauthorized_count | Integer |  |  | 不在授权可见范围的人员个数 |  |
| - inactivated_count | Integer |  |  | 无可用激活码的人员个数 |  |
| - user | FailUserInfo[] |  |  | 校验失败的用户列表 |  |
| - open_user_id | String |  |  | - |  |
| - error_reason | Integer |  |  | 错误原因: 1 不在可见范围内; 2 无可用激活码; 3 不在可见范围内且无可用激活码 |  |

## 返回样例

### 示例标题 (java)

```
//  请输入示例代码
{
  "code": 401000,
  "data": {
    "unauthorized_count": 0,
    "check_result": 0,
    "inactivated_count": 0,
    "user": []
  },
  "message": "OK",
  "request_id": "ELiAgIDAqpAEY2gYgwsWAoIEyKKz2tqoE"
}
```

## 原始内容

```
更新活码包成员 /rest/openapi/gw/clue_laotie/v1/qywx/updateSalePackage // 请输入示例代码 { "corp_id": "ww02658791c08a4f", "advertiser_id": "9005265", "user_ids": [ { "user_id": "woIcKmHrYAdy312nUr5O-kcjfHsA", "customer_weight": 3 }, { "user_id": "woIcKmHCLPQnW8vNo7_amRER_wh5A", "customer_weight": 7 } ], "saler_package_id": "7349002018743", "allocation_type": 2 } // 请输入示例代码 { "code": 401000, "data": { "unauthorized_count": 0, "check_result": 0, "inactivated_count": 0, "user": [] }, "message": "OK", "request_id": "ELiAgIDAqpAEY2gYgwsWAoIEyKKz2tqoE" } allocation_type Integer 客服分配类型 0 默认 1 轮询 2 权重 corp_id String 明文 advertiser_id Long - user_ids EmployeeInfo[] 成员list user_id String open_user_id name String - active_status Integer 激活状态0-已激活1-未激活2-初始免费期3-已过期 dep_ids Integer[] 部门信息 expire_time Long 过期时间 customer_weight Integer 权重1-9正整数，当allocation_type=2必填 saler_package_id Long 活码包id code Integer 0-成功 message String - data UpdateSalePackageData - check_result Integer 检查结果: 0 成员均已授权，且均有激活码; 1 当前有成员不在授权可见范围内; 2 当前有成员无可用激活码; 3 当前有成员不在授权可见范围且有成员无可用激活码 unauthorized_count Integer 不在授权可见范围的人员个数 inactivated_count Integer 无可用激活码的人员个数 user FailUserInfo[] 校验失败的用户列表 open_user_id String - error_reason Integer 错误原因: 1 不在可见范围内; 2 无可用激活码; 3 不在可见范围内且无可用激活码
```
