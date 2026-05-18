---
title: 创建企微活码包
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3034&menuId=3762
doc_id: kuaishou_3034
source_id: kuaishou_3034
---
# 创建企微活码包

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3034 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 老铁线索通 |
| createTime | 2024-07-04T12:27:59.184Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/qywx/createSalePackage |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| allocation_type | Integer |  |  | 客服分配类型 0 默认 1 轮询 2 权重，不传默认0 |  |
| corp_id | String | 是 |  | 明文 |  |
| advertiser_id | Long | 是 |  | - |  |
| package_name | String | 是 |  | 活码包名称 |  |
| user_ids | EmployeeInfo[] | 是 |  | 成员id列表 |  |
| - user_id | String | 是 |  | open_user_id |  |
| - name | String |  |  | - |  |
| - active_status | Integer |  |  | 激活状态0-已激活1-未激活2-初始免费期3-已过期 |  |
| - dep_ids | Integer[] |  |  | 部门信息 |  |
| - expire_time | Long |  |  | 过期时间 |  |
| - customer_weight | Integer |  | 1 | 权重1-9正整数，当allocation_type=2必填 |  |
| special_param | String |  |  | 特殊参数-不填自动生成 |  |

## 请求样例

### 示例标题 (java)

```
//  请输入示例代码
{
  "corp_id": "ww026589108a4f",
  "advertiser_id": "9005265",
  "package_name": "活码包名称",
  "user_ids": [
    {
      "user_id": "woIcKmHwAAZy312nUr5O-kcjfHsA",
      "customer_weight": 1
    },
    {
      "user_id": "woIcKmHwAA6p5m4lx1ExQT39W7Zmw",
      "customer_weight": 9
    }
  ],
  "allocation_type": 2
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 0-成功 |  |
| message | String |  |  | - |  |
| data | CreateSalePackageData |  |  | - |  |
| - saler_package_id | Long |  |  | 活码包id |  |

## 返回样例

### 示例标题 (java)

```
//  请输入示例代码
{
  "code": 401000,
  "data": {
    "saler_package_id": 734928020329200
  },
  "message": "OK",
  "request_id": "ELiAgIDAqpiOrAEYrAogzvrEoIEyKIrwqosO"
}
```
