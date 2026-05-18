---
title: 智投配置更新接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3279&menuId=4057
doc_id: kuaishou_3279
source_id: kuaishou_3279
---
# 智投配置更新接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3279 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-12-09T03:27:26.218Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/simple/project/config/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| auto_campaign_name_rule | String |  |  | 广告计划命名规则： 目前支持的宏变量为：[序号][日期][时间] 自定义填写时必须同时包含[日期]和[序号]宏变量，eg: 系统自动搭建_[日期][序号] 若不填写基建默认命名规则为：系统创建_[序号]_[母计划名称] 仅「auto_manage_type=0」或「auto_manage_type不传且账户当前auto_manage_type=0」时生效 | 仅「auto_manage_type=0」或「auto_manage_type不传且账户当前auto_manage_type=0」时生效 |
| account_auto_manage | Integer |  |  | 智投开关：0-关闭，1-开启 |  |
| auto_manage_type | Integer |  |  | 智投模式：0-标准，1-小说，2-短剧 |  |
| kol_user_info | AuaxUserInfoSnake |  |  | 授权快手号信息 仅「auto_manage_type=1」或「auto_manage_type不传且账户当前auto_manage_type=1」时生效 | 仅「auto_manage_type=1」或「auto_manage_type不传且账户当前auto_manage_type=1」时生效 |
| - kol_user_id | Long |  |  | 授权快手号ID |  |
| - kol_user_type | Integer |  |  | 授权快手号类型：1-普通快手号，2-蓝V服务号，3-聚星达人 |  |
| ocpx_action_type_constraint | AuaxOcpxActionTypeConstraintSnake[] |  |  | 智投目标成本配置 仅「auto_manage_type=0/1」或「auto_manage_type不传且账户当前auto_manage_type=0/1」时生效 | 仅「auto_manage_type=0/1」或「auto_manage_type不传且账户当前auto_manage_type=0/1」时生效 |
| - ocpx_action_type | Integer |  |  | 转化目标： auto_manage_type=0时：191 首日ROI（默认24h，游戏是自然日）（0-5] 精确小数点后三位小数精确至0.001；190 付费 (0-8000] 精确小数点后三位小数精确至0.001；180 激活 (0-8000] 精确小数点后三位小数精确至0.001；394 订单提交 (0-8000] 精确小数点后三位小数精确至0.001；53 表单优化 (0-8000] 精确小数点后三位小数精确至0.001；773 关键行为 (0-8000] 精确小数点后三位小数精确至0.001；324 唤端 (0-8000] 精确小数点后三位小数精确至0.001 auto_manage_type=1时：191-首日ROI，978-首日变现ROI |  |
| - value | Double |  |  | 目标成本： auto_manage_type=0时：单位“元”，精确小数点后三位小数精确至0.001 auto_manage_type=1时：ROI系数，合法取值区间为(0, 100]，最多支持到三位小数 |  |

## 请求样例

### 示例标题 (shell)

```
curl -X POST \
  -H 'Access-Token: eaba7b0d52f944a4e0c' \
  -H 'Content-Type: application/json' \
  -d '{
  "advertiser_id": 12345678,
  "account_auto_manage": 1,
  "auto_manage_type": 1,
  "ocpx_action_type_constraint": [
    {
      "ocpxActionType": 191,
      "value": 3
    }
  ],
  "kol_user_info": {
    "kolUserType": 1,
    "kolUserId": 1234567890
  }
}' 
  -L https://ad.e.kuaishou.com/rest/openapi/gw/dsp/simple/project/config/update
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AuaxAccountConfigQueryRespSnake |  |  | 返回数据 |  |
| - auto_campaign_name_rule | String |  |  | 广告计划命名规则： 目前支持的宏变量为：[序号][日期][时间] 自定义填写时必须同时包含[日期]和[序号]宏变量，eg: 系统自动搭建_[日期][序号] 若不填写基建默认命名规则为：系统创建_[序号]_[母计划名称] 仅「auto_manage_type=0」或「auto_manage_type不传且账户当前auto_manage_type=0」时生效 |  |
| - account_auto_manage | Integer |  |  | 智投开关：0-关闭，1-开启 |  |
| - auto_manage_type | Integer |  |  | 智投模式：0-标准，1-小说，2-短剧 |  |
| - kol_user_info | KolUserInfoSnake |  |  | 授权快手号信息 仅「auto_manage_type=1」或「auto_manage_type不传且账户当前auto_manage_type=1」时生效 | 此字段更新结果生效存在延迟，此返回值非更新后的实际结果 |
| - user_id | Long |  |  | 授权快手号ID |  |
| - user_name | String |  |  | 授权快手号名称 |  |
| - kol_user_type | Integer |  |  | 授权快手号类型：1-普通快手号，2-蓝V服务号，3-聚星达人 |  |
| - ocpx_action_type_constraint | OcpxActionTypeConstraintSnake[] |  |  | 智投目标成本配置 仅「auto_manage_type=0/1」或「auto_manage_type不传且账户当前auto_manage_type=0/1」时生效 | 小说智投模式下，此字段更新结果生效存在延迟，此返回值非更新后的实际结果 |
| - ocpx_action_type | Integer |  |  | 转化目标： auto_manage_type=0时：191 首日ROI（默认24h，游戏是自然日）（0-5] 精确小数点后三位小数精确至0.001；190 付费 (0-8000] 精确小数点后三位小数精确至0.001；180 激活 (0-8000] 精确小数点后三位小数精确至0.001；394 订单提交 (0-8000] 精确小数点后三位小数精确至0.001；53 表单优化 (0-8000] 精确小数点后三位小数精确至0.001；773 关键行为 (0-8000] 精确小数点后三位小数精确至0.001；324 唤端 (0-8000] 精确小数点后三位小数精确至0.001 auto_manage_type=1时：191-首日ROI，978-首日变现ROI |  |
| - roi_ratio | Double |  |  | 目标成本： auto_manage_type=0时：单位“元”，精确小数点后三位小数精确至0.001 auto_manage_type=1时：ROI系数，合法取值区间为(0, 100]，最多支持到三位小数 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 示例标题 (jsonc)

```
{
  "code": 0,
  "data": {
    "ocpx_action_type_constraint": [
      {
        "roi_ratio": 3,
        "ocpx_action_type": 191
      }
    ],
    "account_auto_manage": 1,
    "kol_user_type": 1,
    "kol_user_info": {
      "user_id": 2022036857,
      "user_name": "饺子好吃"
    },
    "auto_manage_type": 1
  },
  "message": "OK",
  "request_id": "ELaAgIDgtsGcChjdBCDW2KL5jjMo68qvpgI="
}
```
