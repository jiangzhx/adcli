---
title: 更新获客链接成员
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3037&menuId=3759
doc_id: kuaishou_3037
source_id: kuaishou_3037
---
# 更新获客链接成员

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3037 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 老铁线索通 |
| createTime | 2024-07-04T12:27:14.604Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/qywx/updateCustomerAcq |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| allocation_type | Integer |  |  | 客服分配类型 0 默认 1 轮询 2 权重 |  |
| corp_id | String | 是 |  | 明文 |  |
| advertiser_id | Long | 是 |  | - |  |
| user_ids | EmployeeInfo[] | 是 |  | 成员id |  |
| - user_id | String | 是 |  | open_user_id |  |
| - name | String |  |  | - |  |
| - active_status | Integer |  |  | 激活状态0-已激活1-未激活2-初始免费期3-已过期 |  |
| - dep_ids | Integer[] |  |  | 部门信息 |  |
| - expire_time | Long |  |  | 过期时间 |  |
| - customer_weight | Integer |  | 1 | 权重1-9正整数，当allocation_type=2必填 |  |
| customer_acq_id | Long | 是 |  | 获客链接id |  |

## 请求样例

### 示例标题 (java)

```
//  请输入示例代码
{
  "corp_id": "ww0265891c08a4f",
  "advertiser_id": "9000165",
  "user_ids": [
    {
      "user_id": "woIcKmHwAYAdy312nUr5O-kcjfHsA",
      "customer_weight": 1
    },
    {
      "user_id": "woIcKmHnW8vNo7_amRER_wh5A",
      "customer_weight": 3
    },
    {
      "user_id": "woIcKmWCp5m4lx1ExQT39W7Zmw",
      "customer_weight": 5
    }
  ],
  "customer_acq_id": "844895706375",
  "allocation_type": 2
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | UpdateCustomerAcqData |  |  | data |  |
| - result | String |  |  | 成功-ok |  |
| code | Integer |  |  | 0-成功 |  |
| message | String |  |  | - |  |

## 返回样例

### 示例标题 (java)

```
//  请输入示例代码
{
  "code": 401000,
  "data": {
    "result": "OK"
  },
  "message": "OK",
  "request_id": "ELiAgIDrAEY4gYghZuooIEyKOO4wMUM"
}
```
