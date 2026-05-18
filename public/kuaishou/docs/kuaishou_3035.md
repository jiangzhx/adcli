---
title: 查询企微活码包绑定成员
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3035&menuId=3760
doc_id: kuaishou_3035
source_id: kuaishou_3035
---
# 查询企微活码包绑定成员

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3035 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 老铁线索通 |
| createTime | 2024-11-07T02:43:05.994Z |

## 概述

不传saler_package_id，分页查corp_id下的活码包

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/qywx/getQywxSalerPackage |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| page_size | Integer |  |  | 不传saler_package_id时必传，不传默认10 |  |
| page_num | Integer |  |  | 不传saler_package_id时必传，不传默认1 |  |
| corp_id | String | 是 |  | 明文 |  |
| advertiser_id | Long | 是 |  | - |  |
| saler_package_id | Long |  |  | 不填查corpId下活码包列表 |  |

## 请求样例

### 示例标题 (java)

```
//  请输入示例代码
{
  "corp_id": "ww02658791c08a4f",
  "saler_package_id": "734898158972466",
  "page_num": 0,
  "page_size": 0,
  "advertiser_id": 9000265
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | GetQywxSalerPackageData |  |  | - |  |
| - split_info | AdLaotieSplitInfo |  |  | - |  |
| - total_size | Long |  |  | - |  |
| - page_num | Integer |  |  | - |  |
| - page_size | Integer |  |  | - |  |
| - qw_material_info | QWMaterialInfo[] |  |  | - |  |
| - material_id | Long |  |  | 获客链接id |  |
| - agent_id | Integer |  |  | - |  |
| - employee_info | EmployeeInfo[] |  |  | 成员列表 |  |
| - user_id | String |  |  | open_user_id |  |
| - name | String |  |  | - |  |
| - active_status | Integer |  |  | 激活状态0-已激活1-未激活2-初始免费期3-已过期 |  |
| - dep_ids | Integer[] |  |  | 部门信息 |  |
| - expire_time | Long |  |  | 过期时间 |  |
| - customer_weight | Integer |  | 1 | 权重1-9正整数，当allocation_type=2必填 |  |
| - special_param | String |  |  | 活码包特殊参数 |  |
| code | Integer |  |  | 0-成功 |  |
| message | String |  |  | - |  |

## 返回样例

### 示例标题 (java)

```
//  请输入示例代码
{
  "code": 401000,
  "data": {
    "qw_material_info": [
      {
        "material_id": 734001158972400,
        "agent_id": "100006",
        "employee_info": [
          {
            "user_id": "woIcKmHwYAdy312nUr5O-kcjfHsA",
            "name": "woIcKmHwAAAd12nUr5O-kcjfHsA",
            "active_status": 2,
            "dep_ids": [
              1
            ],
            "expire_time": 1716276675,
            "customer_weight": 9
          },
          {
            "user_id": "woIcKmHwAlM8wUUHMI4U3Y7vDRfmQ",
            "name": "woIcKmHwlM8wUUHMI4U3Y7vDRfmQ",
            "active_status": 2,
            "dep_ids": [
              1
            ],
            "expire_time": 1722090015,
            "customer_weight": 1
          }
        ],
        "special_param": "cea5f9d4c46ce90e066c6b666e782"
      }
    ]
  },
  "message": "OK",
  "request_id": "ELiAgIDAqpiwQognYLtoIEyKOv7_cQG"
}
```
