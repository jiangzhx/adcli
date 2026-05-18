---
title: 更新账户智投(标准)配置信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3005&menuId=3752
doc_id: kuaishou_3005
source_id: kuaishou_3005
---
# 更新账户智投(标准)配置信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3005 |
| documentType | 2 |
| version | 0.0.3 |
| bizName | 效果广告 |
| createTime | 2025-12-09T03:11:54.536Z |

## 概述

注：该接口仅支持处于标准智投(auto_manage_type=0)模式下的账户调用

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/account/mod/auto/info |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| account_auto_manage | Integer |  |  | 智投开关：0-关闭，1-开启 |  |
| ocpx_action_type_constraint | OcpxActionTypeConstraintOut[] |  | - | 智投目标成本配置 | - |
| - ocpx_action_type | Integer |  | - | 转化目标 | 191 首日ROI（默认24h，游戏是自然日）（0-5] 精确小数点后三位小数精确至0.001；190 付费 (0-8000] 精确小数点后三位小数精确至0.001；180 激活 (0-8000] 精确小数点后三位小数精确至0.001；394 订单提交 (0-8000] 精确小数点后三位小数精确至0.001；53 表单优化 (0-8000] 精确小数点后三位小数精确至0.001；773 关键行为 (0-8000] 精确小数点后三位小数精确至0.001；324 唤端 (0-8000] 精确小数点后三位小数精确至0.001 |
| - value | Double |  | - | 目标成本约束（非ROI类单位：元） | 精确小数点后三位小数精确至0.001 |
| auto_campaign_name_rule | String |  | - | 广告计划命名规则： 目前支持的宏变量为：[序号][日期][时间] 自定义填写时必须同时包含[日期]和[序号]宏变量，eg: 系统自动搭建_[日期][序号] 若不填写基建默认命名规则为：系统创建_[序号]_[母计划名称] |  |

## 请求样例

### 请求样例 (shell)

```
curl -X POST \
  -H 'Access-Token: eaba7b0d52f944a4e0c' \
  -H 'Content-Type: application/json' \
  -d '{
    "ocpx_action_type_constraint": [
        {
            "value": 5,
            "ocpx_action_type": 191
        },
        {
            "value": 4.2,
            "ocpx_action_type": 180
        },
        {
            "value": 4.231,
            "ocpx_action_type": 394
        },
        {
            "value": 3.421,
            "ocpx_action_type": 53
        },
        {
            "value": 5.423,
            "ocpx_action_type": 773
        },
        {
            "value": 1.43,
            "ocpx_action_type": 324
        }
     ],
  "auto_campaign_name_rule": "系统创建_[序号]_[日期]",
  "account_auto_manage": 1,
  "advertiser_id": 123456

}' -L https://ad.e.kuaishou.com/rest/openapi/gw/dsp/account/mod/auto/info
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AccountAutoInfoUpdateRespSnake |  |  | 返回数据 |  |
| - account_auto_manage | Integer |  |  | 账户智投开关 |  |
| - ocpx_action_type_constraint | OcpxActionTypeConstraintOut[] |  | - | 智投目标成本配置 | - |
| - ocpx_action_type | Integer |  | - | 转化目标 | 191 首日ROI（默认24h，游戏是自然日）（0-5] 精确小数点后三位小数精确至0.001；190 付费 (0-8000] 精确小数点后三位小数精确至0.001；180 激活 (0-8000] 精确小数点后三位小数精确至0.001；394 订单提交 (0-8000] 精确小数点后三位小数精确至0.001；53 表单优化 (0-8000] 精确小数点后三位小数精确至0.001；773 关键行为 (0-8000] 精确小数点后三位小数精确至0.001；324 唤端 (0-8000] 精确小数点后三位小数精确至0.001 |
| - value | Double |  | - | 目标成本约束（非ROI类单位：元） | 精确小数点后三位小数精确至0.001 |
| - auto_campaign_name_rule | String |  | - | 广告计划命名规则： 目前支持的宏变量为：[序号][日期][时间] 自定义填写时必须同时包含[日期]和[序号]宏变量，eg: 系统自动搭建_[日期][序号] 若不填写基建默认命名规则为：系统创建_[序号]_[母计划名称] |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "ocpx_action_type_constraint": [
        {
            "value": 5,
            "ocpx_action_type": 191
        },
        {
            "value": 4.2,
            "ocpx_action_type": 180
        },
        {
            "value": 4.231,
            "ocpx_action_type": 394
        },
        {
            "value": 3.421,
            "ocpx_action_type": 53
        },
        {
            "value": 5.423,
            "ocpx_action_type": 773
        },
        {
            "value": 1.43,
            "ocpx_action_type": 324
        }
        ],
        "account_auto_manage": 1,
        "auto_campaign_name_rule": "系统创建_[序号]_[日期]"
    },
    "message": "OK",
    "request_id": "ELqAgIDQ1JGaChjkDSDqyb_v-zEosOr31gY="
}
```
