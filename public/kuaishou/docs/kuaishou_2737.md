---
title: 获取广告组投放预估曲线
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2737&menuId=3470
doc_id: kuaishou_2737
source_id: kuaishou_2737
---
# 获取广告组投放预估曲线

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2737 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:13:38.895Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/unit/bidTrendPredict/detail |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 账户id | 在获取 access_token 的时候返回 |
| bid_type | Long | 是 |  | 出价类型 | 1：CPM，2：CPC，6：OCPC(使用 OCPC 代表 OCPX)，10：OCPM，20：eCPC |
| unit_id | Long | 是 |  | 广告单元id | 新建时该值为0，编辑时该值为广告组id |
| campaign_id | Long |  |  | 广告计划id |  |
| predict_cpa_bid | Long | 是 |  | 预测cpa出价 | 保持和current_cpa_bid一致即可。 |
| current_cpa_bid | Long | 是 |  | 当前cpa出价 | 新建广告组时，该值为0；编辑广告组时，该值为用户原来填写的浅度出价。单位厘 |
| ocpx_action_type | Integer | 是 |  | ocpx类型 | 0：未知，2：点击转化链接，10：曝光，11：点击，31：下载完成，53：提交线索，109：电话卡激活，137：量房，180：激活，190: 付费，191：首日 ROI，348：有效线索，383: 授信，384: 完件 715：微信复制;739:7 日付费次数 |
| deep_conversion_type | Integer |  |  | 深度转化类型 | 3: 付费，7: 次日留存，10: 完件, 11: 授信 ，0：无 |
| predict_deep_conv_bid | Long |  |  | 要预估的新深度出价 | 保持和curr_deep_bid一致即可 |
| curr_deep_bid | Long |  |  | 老深度出价，单位厘 | 新建广告组时，该值为0；编辑广告组时，该值为用户原来填写的深度出价。单位厘 |

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
    "predict_cpa_bid":0,
    "predict_deep_bid":0,
    "unit_id":1177725596
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | GateBidTrendPredict |  |  | 出价参考详情 |  |
| - can_predict | Boolean |  | true | 是否可以预测转化 |  |
| - predict_impression | Long |  | 4000000 | 预估曝光数 | 即y轴数值 |
| - suggest_bid | Integer |  | 28300 | 建议值 | 即x轴数值 |
| - suggest_bid_min | Integer |  | 0 | 建议区间最小值 |  |
| - suggest_bid_max | Integer |  | 0 | 建议区间最大值 |  |
| - predict_cost | Long |  |  | 预估每日消费，厘 |  |
| - tips_id | Integer |  |  | 给用户的优化提示的id，具体文案前端确定 |  |
| - bid_delivery | Object |  |  | 出价-下发, 厘 |  |
| - predict_conversion | Long |  |  | 预估转化数 | 即y轴数值 |
| - bid_conversion | Object |  |  | 出价转化数 |  |
| - can_predict_conversion | Boolean |  |  | 是否可以预测转化 |  |
| - can_predict_delivery | Boolean |  |  | 是否可以预测下发（曝光） |  |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 状态描述 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "suggest_bid_max": 0,
        "suggest_bid": 28300,
        "suggest_bid_min": 0,
        "predict_impression": 4000000,
        "predict_cost": null,
        "can_predict": true,
        "can_predict_conversion": true,
        "can_predict_delivery": true,
        "bid_conversion": {
            "15987": 2,
            "16828": 13,
            "17669": 1,
            "18511": 6,
            "19352": 7,
            "20194": 12,
            "21035": 43,
            "21876": 7134083,
            "22718": 12,
            "23559": 54,
            "24401": 34,
            "25242": 135190326,
            "26083": 45,
            "26925": 2,
            "27766": 6,
            "28300": 76,
            "29449": 12,
            "30290": 12,
            "31132": 3,
            "31973": 65,
            "32814": 45,
            "33656": 34,
            "34497": 91,
            "35339": 18,
            "36180": 71,
            "37021": 15,
            "37863": 16,
            "38704": 9,
            "39546": 23,
            "40387": 10
        },
        "tips_id": null,
        "predict_conversion": 0,
        "bid_delivery": {
            "15987": 3392936,
            "16828": 3394017,
            "17669": 3401989,
            "18511": 3485630,
            "19352": 3674667,
            "20194": 3973018,
            "21035": 4679711,
            "21876": 7134083,
            "22718": 19351626,
            "23559": 48336028,
            "24401": 90073060,
            "25242": 135190326,
            "26083": 186427849,
            "26925": 238921068,
            "27766": 295094631,
            "28300": 352563211,
            "29449": 412123223,
            "30290": 472177245,
            "31132": 532844319,
            "31973": 595022338,
            "32814": 658143514,
            "33656": 722837656,
            "34497": 791546029,
            "35339": 862750663,
            "36180": 936671132,
            "37021": 1011989177,
            "37863": 1087867982,
            "38704": 1164905871,
            "39546": 1243117573,
            "40387": 1322583755
        }
    },
    "message": "OK",
    "request_id": "997a93fead6b4ddbb5a0940abd3ea17f"
}
```
