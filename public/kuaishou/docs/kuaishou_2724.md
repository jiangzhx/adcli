---
title: 试玩推送
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2724&menuId=3457
doc_id: kuaishou_2724
source_id: kuaishou_2724
---
# 试玩推送

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2724 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:47:18.105Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/play/share |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 1 | 广告主id |  |
| play_ids | Long[] | 是 | [1,2] | 分享的源试玩id |  |
| target_account_ids | Long[] | 是 | [1,2] | 分享目标账户 |  |

## 请求样例

### 请求样例 (shell)

```
curl -H "Access-Token:d198a850da67a116279e30" \
       -H "Content-Type:application/json" \
       -d '
       {
       "advertiser_id": 10787973,
       "play_ids": [4293857038],
       "target_account_ids": [10787999, 10787998]
       }
       ' https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/play/share
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 状态 |  |
| message | String |  | "" | 信息 |  |
| data | DspPlayListData |  | "" | data |  |
| - details | AdDspPlayView[] |  | [] | 试玩具体数据 |  |
| - play_id | Long |  | 1 | 试玩ID |  |
| - account_id | Long |  | 1 | 广告主id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
       "code": 0,
       "data": {
       "details": [
       {
       "account_id": 10787999,
       "play_id": "123"
       }
       {
       "account_id": 10787998,
       "play_id": "124"
       }
       ]
       },
       "message": "OK",
       "request_id": "0ae4094286ab419bad50e559bdb405fe"
       }
```
