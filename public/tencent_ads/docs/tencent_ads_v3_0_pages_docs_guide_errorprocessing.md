---
title: 投放接口错误处理指引
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/docs/guide/errorprocessing
doc_id: tencent_ads_v3_0_pages_docs_guide_errorprocessing
source_id: tencent_ads_v3_0_pages_docs_guide_errorprocessing
---
# 投放接口错误处理指引

在调用 Marketing API 时，可能会出现两种类型的错误响应：BusinessException和SysException。当接口返回 BusinessException 错误时，这表示发生了业务异常。建议您根据返回的 code 值和 message 信息来处理错误并调整请求参数。另外，偶尔接口可能会返回 SysException 错误（例如错误码 30000-30099），这类错误通常是由于网络波动、请求超时或底层服务短暂不可用所导致。遇到这种情况，建议开发者对接口进行延时 1 到 3 次的重试。

对于需要幂等性的投放接口，即每次请求只创建一个唯一的广告资源，您可以在请求时添加一个名为 X-Request-Id 的请求头，用来标识该次请求的唯一值，并与您提供的请求参数相对应。例如，当请求参数为 A 时，X-Request-Id 可设为 AA。这样，即使请求重复，API 也不会创建新的广告资源，从而避免在重试时重复创建。如果使用相同的请求参数和 X-Request-Id 重复创建，API 将返回对应的唯一广告资源。

目前支持 X-Request-Id 的请求头的有：

在使用的过程中，如果开发者用了相同的 X-Request-Id，但是不同的请求参数，那么 API 会返回 31060 错误码，错误消息 – “您的请求参数与之前具有相同 X-Request-Id 的请求不同，请更新参数后重试”。

### 实际应用场景

请求接口：adgroups/add 请求体：

```
{
    "account_id":10000001,
    "adgroup_name":"腾讯广告投放 2024",
    "bid_amount":5000,
    "bid_strategy":"BID_STRATEGY_TARGET_COST",
   	"begin_date": "2024-03-29",
    "end_date": "2024-03-31",
    "optimization_goal": "OPTIMIZATIONGOAL_ECOMMERCE_ORDER",
    "marketing_goal": "MARKETING_GOAL_PRODUCT_SALES",
    "marketing_sub_goal": "MARKETING_SUB_GOAL_UNKNOWN",
    "site_set":[
        "SITE_SET_WECHAT"
    ],
    "targeting":{
        "age":[
            {
                "max":66,
                "min":36
            }
        ],
        "game_consumption_level":[
            "HIGH"
        ],
        "gender":[
            "MALE"
        ],
        "geo_location":{
            "location_types":[
                "LIVE_IN"
            ],
            "regions":[
                500000,
                110000
            ]
        },
        "wechat_ad_behavior":{
            "actions":[

            ],
            "excluded_actions":[
                "MINI_GAME_WECHAT_REGISTERED"
            ]
        }
    },
    "time_series":"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
}
```

返回体：

```
{
    "code":30021,
    "message":"Delivery service interface error,please contact our dedicated operation team,interface error code: 101",
    "message_cn":"投放服务接口错误，请联系我们的专业运营团队，接口错误码为: 101 "
    "code_type":"SysException",
    "trace_id":"qe58b8ea67f4sab5ec89hcf23d15gh7fa09"
}
```

此时请求返回是 30021（参考范围 30000~30099），表示系统遇到不可预见的一些情况，建议重试。但是此时因为没有加 X-Request-Id 头，所以高并发的重试，可能会让上述相同参数的请求创建多个 adgroup 出来。X-Request-Id 头就是为了解决该问题。

解决后的请求： 请求接口：adgroups/add

```
{
    "account_id":10000001,
    "adgroup_name":"腾讯广告投放 2024",
    "bid_amount":5000,
    "bid_strategy":"BID_STRATEGY_TARGET_COST",
   	"begin_date": "2024-03-29",
    "end_date": "2024-03-31",
    "optimization_goal": "OPTIMIZATIONGOAL_ECOMMERCE_ORDER",
    "marketing_goal": "MARKETING_GOAL_PRODUCT_SALES",
    "marketing_sub_goal": "MARKETING_SUB_GOAL_UNKNOWN",
    "site_set":[
        "SITE_SET_WECHAT"
    ],
    "targeting":{
        "age":[
            {
                "max":66,
                "min":36
            }
        ],
        "game_consumption_level":[
            "HIGH"
        ],
        "gender":[
            "MALE"
        ],
        "geo_location":{
            "location_types":[
                "LIVE_IN"
            ],
            "regions":[
                500000,
                110000
            ]
        },
        "wechat_ad_behavior":{
            "actions":[

            ],
            "excluded_actions":[
                "MINI_GAME_WECHAT_REGISTERED"
            ]
        }
    },
    "time_series":"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
}
```

请求头：X-Request-Id:adgroup_001 返回体：

```
{
    "code":0,
    "data":{
        "adgroup_id":123123123
    },
    "message":"",
    "message_cn":""
}
```

注意点：

相同的请求体，对应的请求头 X-Request-Id 应当相同，否则系统会报如下错误，表示相同请求体有不同的 X-Request-Id 的请求头，不合法。

```
{
		"code":31060,
		"message":"Your request differs from a previous request with the same X-Request-Id. ",
		"message_cn":"您的请求参数与之前具有相同 X-Request-Id 的请求不同，请更新参数后重试."
	  "code_type":"BusinessException",
	  "trace_id":"bn68b4ea67a4fab3ec457cf3141157fa56"
	}
```

满足上述条件的请求，可以重试请求，请求的返回结果都是该请求参数和 X-Request-Id 对应的 adgroup_id，不会造成相同参数的请求创建多个 adgroup 的结果。

建议相同请求体跟 X-Request-Id 保持一一对应的映射关系。

在同一时间，用相同 X-Request-Id 高并发请求相同的接口，只有一个请求会成功。其他的请求会收到如下返回信息。

```
{
		"code":36019,
		"message":"You have multiple concurrent requests with the same X-Request-ID at the same time, and only one of them succeeds.",
		"message_cn":"您在同一时刻具有多个相同 X-Request-Id 的并发请求，只有一个会请求成功."
	  "code_type":"BusinessException",
	  "trace_id":"a7b4ead4a4fab3ec697cf314d157fa53"
	}
```
