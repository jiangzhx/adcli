---
title: 查询账户智投(标准)配置信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3028&menuId=3804
doc_id: kuaishou_3028
source_id: kuaishou_3028
---
# 查询账户智投(标准)配置信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3028 |
| documentType | 2 |
| version | 0.0.3 |
| bizName | 效果广告 |
| createTime | 2025-12-09T03:00:02.864Z |

## 概述

注：仅当账户处于标准智投模式时，此接口返回参数中的ocpx_action_type_constraint和auto_campaign_name_rule字段才有实际返回值

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/account/query/auto/info |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主账号ID |  |

## 请求样例

### 请求样例 (shell)

```
curl -X POST \
  -H 'Access-Token: eaba7b0d52f944a4e0c' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id": 20000800
}' -L https://ad.e.kuaishou.com/rest/openapi/gw/dsp/account/query/auto/info
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AccountSimpleQueryResp863Snake |  |  | 返回数据 |  |
| - auto_manage_type | Integer |  |  | 智投模式：0-标准，1-小说，2-短剧 |  |
| - account_auto_manage | Integer |  |  | 智投开关：0-关闭，1-开启 |  |
| - ocpx_action_type_constraint | OcpxActionTypeConstraintOut[] |  | - | 智投目标成本配置 | 仅账户当前auto_manage_type=0时有值 |
| - ocpx_action_type | Integer |  | - | 转化目标 | 191 首日ROI（默认24h，游戏是自然日）（0-5] 精确小数点后三位小数精确至0.001；190 付费 (0-8000] 精确小数点后三位小数精确至0.001；180 激活 (0-8000] 精确小数点后三位小数精确至0.001；394 订单提交 (0-8000] 精确小数点后三位小数精确至0.001；53 表单优化 (0-8000] 精确小数点后三位小数精确至0.001；773 关键行为 (0-8000] 精确小数点后三位小数精确至0.001；324 唤端 (0-8000] 精确小数点后三位小数精确至0.001 |
| - value | Double |  | - | 目标成本约束（非ROI类单位：元） | 精确小数点后三位小数精确至0.001 |
| - auto_campaign_name_rule | String |  | - | 广告计划命名规则： 目前支持的宏变量为：[序号][日期][时间] 自定义填写时必须同时包含[日期]和[序号]宏变量，eg: 系统自动搭建_[日期][序号] 若不填写基建默认命名规则为：系统创建_[序号]_[母计划名称] | 仅账户当前auto_manage_type=0时有值 |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "auto_campaign_name_rule": "系统创建_[日期]_[序号]",
        "ocpx_action_type_constraint": [
            {
                "value": 1,
                "ocpx_action_type": 191
            }
        ],
        "account_auto_manage": 1,
        "auto_manage_type": 1
    },
    "message": "OK",
    "request_id": "ELiAgIDA44GVChiQBSCntP6frjMovarWgwM="
}
```
