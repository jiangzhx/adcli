---
title: 获取广告组曝光转化预估
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2736&menuId=3469
doc_id: kuaishou_2736
source_id: kuaishou_2736
---
# 获取广告组曝光转化预估

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2736 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:13:24.470Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/unit/bidPredict |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 933449 | 账号id | 在获取 access_token 的时候返回 |
| bid_type | Long | 是 | 10 | 出价类型 | 1：CPM，2：CPC，6：OCPC(使用 OCPC 代表 OCPX)，10：OCPM，20：eCPC |
| unit_id | Long | 是 | 3362790 | 广告单元id | 新建时该值为0，编辑时该值为广告组id |
| campaign_id | Long |  | 24207565 | 广告计划id |  |
| predict_cpa_bid | Long | 是 | 22000 | 预测cpa出价 | 保持和current_cpa_bid一致即可。 |
| current_cpa_bid | Long | 是 | 22000 | 当前cpa出价 | 新建广告组时，该值为0；编辑广告组时，该值为用户原来填写的浅度出价。单位厘 |
| ocpx_action_type | Integer | 是 | 62 | ocpx类型 | 0：未知，2：点击转化链接，10：曝光，11：点击，31：下载完成，53：提交线索，109：电话卡激活，137：量房，180：激活，190：付费，191：首日 ROI，348：有效线索，383：授信，384：完件 715：微信复制，739：7日付费次数 |
| deep_conversion_type | Integer |  | 0 | 深度转化类型 | 3：付费，7：次日留存，10：完件，11：授信，0：无 |
| predict_deep_conv_bid | Long |  | 50000 | 要预估的新深度出价 | 保持和curr_deep_bid一致即可 |
| curr_deep_bid | Long |  | 22000 | 老深度出价，单位厘 | 单位：厘。新建广告组时，该值为0；编辑广告组时，该值为用户原来填写的深度出价。 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id":12970515,
    "bid_type":10,
    "campaign_id":596467876,
    "current_cpa_bid":298560,
    "current_deep_bid":0,
    "deep_conversion_type":null,
    "ocpx_action_type":53,
    "predict_cpa_bid":298560,
    "predict_deep_bid":0,
    "unit_id":1177725596
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 状态描述 |  |
| data | GateBidPredict |  |  | 出价转化预估返回值 |  |
| - can_predict | Boolean |  | false | 是否可以预测转化、曝光 |  |
| - predict_impression | Long |  |  | 预估曝光数 | 即y轴数值 |
| - predict_cost | Long |  |  | 预估每日消费，厘 |  |
| - suggest_bid | Integer |  |  | 建议值 | 即x轴数值 |
| - suggest_bid_min | Integer |  |  | 建议区间最小值 |  |
| - suggest_bid_max | Integer |  |  | 建议区间最大值 |  |
| - tips_id | Integer |  |  | 给用户的优化提示的id，具体文案前端确定 |  |
| - can_predict_conversion | Boolean |  | true | 是否可以预测转化 |  |
| - can_predict_delivery | Boolean |  | true | 是否可以预测曝光 |  |
| - predict_conversion | Long |  |  | 预估转化数 | 即y轴数值 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "suggest_bid_max": null,
        "suggest_bid": null,
        "suggest_bid_min": null,
        "predict_impression": 4999,
        "predict_cost": 501000,
        "can_predict": true,
        "can_predict_conversion": true,
        "can_predict_delivery": true,
        "tips_id": null,
        "predict_conversion": 300
    },
    "message": "OK",
    "request_id": "185691762b5f4255bffce6233ece24f1"
}
```
