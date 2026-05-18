---
title: 查询客服链接绑定成员
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3032&menuId=3758
doc_id: kuaishou_3032
source_id: kuaishou_3032
---
# 查询客服链接绑定成员

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3032 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 老铁线索通 |
| createTime | 2024-11-06T08:07:45.913Z |

## 概述

不传customer_acq_id分页查corpId下获客链接

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/qywx/getQywxCustomerAcq |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| corp_id | String | 是 |  | 明文 |  |
| advertiser_id | Long | 是 |  | 账户id |  |
| customer_acq_id | Long |  |  | 获客链接id-不填就查corpId下所有自建获客链接 |  |
| page_num | Integer |  |  | 页码-传customer_acq_id时需传，不传默认1 |  |
| page_size | Integer |  |  | 页面尺寸-传customer_acq_id时需传，不传默认10 |  |

## 请求样例

### 示例标题 (java)

```
//  请输入示例代码
{
  "corp_id": "ww0265871c08a4f",
  "customer_acq_id": "844839665706375",
  "page_num": 0,
  "page_size": 0,
  "advertiser_id": 9005265
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 0-成功 |  |
| message | String |  |  | - |  |
| data | GetQywxCustomerAcqData |  |  | - |  |
| - split_info | AdLaotieSplitInfo |  |  | 分页信息 |  |
| - total_size | Long |  |  | - |  |
| - page_num | Integer |  |  | - |  |
| - page_size | Integer |  |  | - |  |
| - qw_material_info | QWMaterialInfo[] |  |  | 结果列表 |  |
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
| - name | String |  | - | 获客链接名称 |  |
| - link_id | String |  | - | 获客链接id |  |
| - link_url | String |  | - | 获客链接url |  |
| - license_no | String |  | - | 营业执照编码 |  |
| - corporation_name | String |  | - | 营业执照公司名称 |  |

## 返回样例

### 示例标题 (java)

```
//  请输入示例代码

{
  "code": 401000,
  "data": {
    "qw_material_info": [
      {
        "material_id": 8448939665706400,
        "agent_id": "100006",
        "employee_info": [
          {
            "user_id": "woIcKAA60WCp5m4lx1ExQT39W7Zmw",
            "name": "woIcKmA60WCp5m4lx1ExQT39W7Zmw",
            "active_status": 2,
            "dep_ids": [
              1
            ],
            "expire_time": 1722090015,
            "customer_weight": 5
          },
          {
            "user_id": "woImHwAACLPQnW8vNo7_amRER_wh5A",
            "name": "woIHwAACLPQnW8vNo7_amRER_wh5A",
            "active_status": 2,
            "dep_ids": [
              1
            ],
            "expire_time": 1722090015,
            "customer_weight": 3
          },
          {
            "user_id": "woImHwAAZrYAdy312nUr5O-kcjfHsA",
            "name": "woIcwAAZrYAdy312nUr5O-kcjfHsA",
            "active_status": 2,
            "dep_ids": [
              1
            ],
            "expire_time": 1716276675,
            "customer_weight": 1
          }
        ],
        "special_param": ""
      }
    ]
  },
  "message": "OK",
  "request_id": "ELiAgIqpiOrAEY3gQg85qGoYEyKNm6lfUF"
}
```

## 原始内容

```
查询客服链接绑定成员 /rest/openapi/gw/clue_laotie/v1/qywx/getQywxCustomerAcq // 请输入示例代码 { "corp_id": "ww0265871c08a4f", "customer_acq_id": "844839665706375", "page_num": 0, "page_size": 0, "advertiser_id": 9005265 } // 请输入示例代码 { "code": 401000, "data": { "qw_material_info": [ { "material_id": 8448939665706400, "agent_id": "100006", "employee_info": [ { "user_id": "woIcKAA60WCp5m4lx1ExQT39W7Zmw", "name": "woIcKmA60WCp5m4lx1ExQT39W7Zmw", "active_status": 2, "dep_ids": [ 1 ], "expire_time": 1722090015, "customer_weight": 5 }, { "user_id": "woImHwAACLPQnW8vNo7_amRER_wh5A", "name": "woIHwAACLPQnW8vNo7_amRER_wh5A", "active_status": 2, "dep_ids": [ 1 ], "expire_time": 1722090015, "customer_weight": 3 }, { "user_id": "woImHwAAZrYAdy312nUr5O-kcjfHsA", "name": "woIcwAAZrYAdy312nUr5O-kcjfHsA", "active_status": 2, "dep_ids": [ 1 ], "expire_time": 1716276675, "customer_weight": 1 } ], "special_param": "" } ] }, "message": "OK", "request_id": "ELiAgIqpiOrAEY3gQg85qGoYEyKNm6lfUF" } corp_id String 明文 advertiser_id Long 账户id customer_acq_id Long 获客链接id-不填就查corpId下所有自建获客链接 page_num Integer 页码-传customer_acq_id时需传，不传默认1 page_size Integer 页面尺寸-传customer_acq_id时需传，不传默认10 code Integer 0-成功 message String - data GetQywxCustomerAcqData - split_info AdLaotieSplitInfo 分页信息 total_size Long - page_num Integer - page_size Integer - qw_material_info QWMaterialInfo[] 结果列表 material_id Long 获客链接id agent_id Integer - employee_info EmployeeInfo[] 成员列表 user_id String open_user_id name String - active_status Integer 激活状态0-已激活1-未激活2-初始免费期3-已过期 dep_ids Integer[] 部门信息 expire_time Long 过期时间 customer_weight Integer 权重1-9正整数，当allocation_type=2必填 special_param String 活码包特殊参数 name String 获客链接名称 link_id String 获客链接id link_url String 获客链接url license_no String 营业执照编码 corporation_name String 营业执照公司名称
```
