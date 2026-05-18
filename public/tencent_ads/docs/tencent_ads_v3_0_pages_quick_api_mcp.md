---
title: 快速投放 MCP 工具
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/quick_api_mcp
doc_id: tencent_ads_v3_0_pages_quick_api_mcp
source_id: tencent_ads_v3_0_pages_quick_api_mcp
---
# 快速投放 MCP 工具

## 快速投放 MCP 工具

为了降低 Agent 开发的广告投放门槛，腾讯广告快速投放 MCP 工具，面向 AI 搭建更高效的广告创编流程：开发者仅需填写极简的场景化参数，就能高效完成广告创建与投放，如果您的投放场景在快速投放支持的列表中，推荐优先使用快速投放 MCP，接入更简单，参数更少，适合快速验证和规模化投放

场景化参数精简：参数大幅精简，每个投放场景只暴露该场景必需的参数，比如营销单元创建原 API 接口 40+ 参数，快速投放 MCP 部分场景下 只 4 个必填参数即可创建营销单元，并且，营销链路参数（marketing_goal、marketing_carrier_type 等）由系统自动预设，开发者无需关心

参数自动填充：实现聚合能力，场景参数推断及自动填充，比如系统根据营销单元资产，自动获取推广资产 id（如 mini_game_id），自动构建落地页参数，开发者无需手动配置。

Token 节约：不需要理解复杂参数体系，节约 Token 的使用成本，同时减少 AI 因为上下文占用过多，导致的幻觉和超时。

## 快速接入步骤

| 工具名称 | 功能描述 | MCP 服务地址 |
| --- | --- | --- |
| get-api-scene-schema | 查询指定场景下的参数定义，根据场景指引构造参数 | [https://ai.e.qq.com/mcp-servers/quick-api](https://ai.e.qq.com/mcp-servers/quick-api) |
| quick-adgroup-add | 营销单元快速创建，根据场景快速创建营销单元 | [https://ai.e.qq.com/mcp-servers/quick-api](https://ai.e.qq.com/mcp-servers/quick-api) |
| quick-dynamic-creative-add | 创意快速创建，根据场景快速创建创意 | [https://ai.e.qq.com/mcp-servers/quick-api](https://ai.e.qq.com/mcp-servers/quick-api) |

接入流程，前置：明确投放场景，即创建哪种场景下的广告

Step 1: 调用 get-api-scene-schema 工具：AI 根据投放场景，获取该场景下营销单元/创意的必填参数定义

Step 2: 根据 Step 1 中提示的必填信息，将投放广告需要的必填参数进行补充，例如：账户 id

Step 3: 调用营销单元/创意快速创建工具（quick-adgroup-add/quick-dynamic-creative-add）：一键完成营销单元/创意创建

## 支持的投放场景

| 快速投放类型 | 场景枚举值 | 场景描述 |
| --- | --- | --- |
| 小游戏 | DELIVERY_SCENE_USER_GROWTH_IN_WECHAT_MINI_GAME | 推广微信小游戏，营销载体是微信小游戏，目标是用户增长 |
| 小游戏 | DELIVERY_SCENE_USER_GROWTH_IN_WECHAT_MINI_GAME_SMART_DELIVERY | 推广微信小游戏，营销载体是微信小游戏，目标是用户增长，智投场景 |
| 小游戏 | DELIVERY_SCENE_USER_GROWTH_IN_MINI_GAME_APP_IOS_PLATEAU | 推广小游戏，营销载体是 iOS 应用，平推期，目标是用户增长 |
| 小游戏 | DELIVERY_SCENE_USER_GROWTH_IN_MINI_GAME_APP_ANDROID_PLATEAU | 推广小游戏，营销载体是 Android 应用，平推期，目标是用户增长 |
| 金融保险 | DELIVERY_SCENE_LEAD_RETENTION_IN_LOW_PRICE_INSURANCE_PAYMENT_JUMP_PAGE | 通过页面跳转，推广低价险，目标是线索留资 |
| 金融保险 | DELIVERY_SCENE_LEAD_RETENTION_IN_LOW_PRICE_INSURANCE_PAYMENT_JUMP_PAGE_SMART_DELIVERY | 通过页面跳转，推广低价险，目标是线索留资，智投场景 |

更多快速投放场景持续接入中

## 完整调用流程示例

以下展示游戏行业，从零创建一条微信小游戏用户增长场景下营销单元和创意的完整流程：

### Step 1：查询指定场景下参数定义

调用工具：get-api-scene-schema，获取场景下 quick-adgroup-add 和 quick-dynamic-creative-add 的必填/选填/预设参数定义。

```
{
  "scene": "DELIVERY_SCENE_USER_GROWTH_IN_WECHAT_MINI_GAME"
}
```

返回：

```
{
  "code": 0,
  "message": "success",
  "data": {
    "scenes": [
      {
        "scene": "DELIVERY_SCENE_USER_GROWTH_IN_WECHAT_MINI_GAME",
        "scene_desc": "微信小游戏用户增长 - 用户增长场景，适合小游戏开发者获取新用户",
        "tools": [
          {
            "tool_name": "quick-adgroup-add",
            "tool_desc": "快速创建营销单元",
            "required_params": [
              { "field": "ad_delivery_scene", "desc": "广告投放场景", "type": "string" },
              { "field": "account_id", "desc": "广告账户 id", "type": "integer" },
              { "field": "mini_game_id", "desc": "微信小游戏 id", "type": "string" },
              { "field": "bid_amount", "desc": "出价金额（单位：分）", "type": "integer" }
            ],
            "optional_params": [
              { "field": "adgroup_name", "desc": "广告名称", "type": "string" },
              { "field": "begin_date", "desc": "投放开始日期，若不传递，默认为今日", "type": "string" },
              { "field": "end_date", "desc": "投放结束日期，若不传递，默认为长期投放", "type": "string" },
              { "field": "configured_status", "desc": "启停状态，默认开启", "type": "enum", "options": [
                { "value": "AD_STATUS_NORMAL", "label": "有效" },
                { "value": "AD_STATUS_SUSPEND", "label": "暂停" }
              ]}
            ],
            "scene_preset_params": [
              { "field": "ad_delivery_scene", "desc": "广告投放场景", "value": "DELIVERY_SCENE_USER_GROWTH_IN_WECHAT_MINI_GAME" },
              { "field": "bid_mode", "desc": "广告出价方式", "value": "默认为 OCPM" },
              { "field": "marketing_goal", "desc": "营销目标", "value": "默认为 MARKETING_GOAL_USER_GROWTH" },
              { "field": "optimization_goal", "desc": "优化目标", "value": "默认为 OPTIMIZATIONGOAL_APP_REGISTER" },
              { "field": "bid_scene", "desc": "出价场景", "value": "默认为 BID_SCENE_NORMAL_AVERAGE" }
            ]
          },
          {
            "tool_name": "quick-dynamic-creative-add",
            "tool_desc": "快速创建创意",
            "required_params": [
              { "field": "account_id", "desc": "广告账户 id", "type": "integer" },
              { "field": "adgroup_id", "desc": "广告 id", "type": "integer" },
              { "field": "brand.brand_name", "desc": "品牌形象品牌名", "type": "string" },
              { "field": "brand.brand_image_id", "desc": "品牌形象品牌图片 id", "type": "string" },
              { "field": "description", "desc": "文本文案", "type": "string" },
              { "field": "video.video_id", "desc": "推广视频 id", "type": "string" },
              { "field": "image.image_id", "desc": "推广图片 id", "type": "string" },
              { "field": "action_button.button_text", "desc": "行动按钮文案", "type": "string" }
            ],
            "optional_params": [
              { "field": "main_jump_info.mini_game_tracking_parameter", "desc": "小游戏监控参数", "type": "string" },
              { "field": "configured_status", "desc": "启停状态，默认开启投放", "type": "enum", "options": [
                { "value": "AD_STATUS_SUSPEND", "label": "暂停投放" },
                { "value": "AD_STATUS_NORMAL", "label": "有效（默认）" }
              ]},
              { "field": "dynamic_creative_name", "desc": "创意名称，不传则自动生成", "type": "string" },
              { "field": "action_button.jump_info_switch", "desc": "行动按钮小游戏开关", "type": "boolean" },
            ],
            "scene_preset_params": [
              { "field": "ad_delivery_scene", "desc": "广告投放场景", "value": "DELIVERY_SCENE_USER_GROWTH_IN_WECHAT_MINI_GAME" },
              { "field": "main_jump_info.page_type", "desc": "主落地页类型", "value": "PAGE_TYPE_WECHAT_MINI_GAME" },
              { "field": "floating_zone.floating_zone_type", "desc": "浮层卡片类型", "value": "FLOATING_ZONE_TYPE_IMAGE_TEXT" }
            ]
          }
        ]
      }
    ]
  }
}
```

required_params、optional_params、scene_preset_params 分别表示必填参数、选填参数和场景预设参数。 Agent 应根据 required_params 向用户收集必填信息，scene_preset_params 中的参数由系统自动填充，无需传入。

### Step 2：填充必填参数

根据 Step 1 中提示的必填信息，将投放广告需要的必填参数进行补充

### Step 3：创建营销单元

调用工具：quick-adgroup-add

```
{
  "ad_delivery_scene": "DELIVERY_SCENE_USER_GROWTH_IN_WECHAT_MINI_GAME",
  "account_id": xxxx,
  "mini_game_id": "wx1234567890abcdef",
  "bid_amount": 5000
}
```

返回：

```
{
  "code": 0,
  "message": "success",
  "data": { "adgroup_id": 123456789 }
}
```

### Step 4：创建创意

调用工具：quick-dynamic-creative-add

```
{
  "account_id": xxxx,
  "adgroup_id": 123456789,
  "brand": [{ "brand_name": "我的小游戏", "brand_image_id": "img_abc123" }],
  "description": ["超好玩的小游戏，快来体验！"],
  "video": [{ "video_id": "vid_xyz789" }],
  "image": [{ "image_id": "img_def456" }],
  "action_button": [{ "button_text": "立即体验", "jump_info_switch": true }]
}
```

返回：

```
{
  "code": 0,
  "message": "success",
  "data": { "dynamic_creative_id": 987654321 }
}
```

至此，一条完整的微信小游戏用户增长广告已创建完成。系统自动完成了以下工作：

营销链路参数（marketing_goal、bid_mode 等）自动预设

主落地页自动构建（page_type=PAGE_TYPE_WECHAT_MINI_GAME，mini_game_id 从广告自动获取）

行动按钮落地页自动同步（因为开启了 jump_info_switch）

## 接入效果对比

以游戏行业为例，在微信小游戏用户增长场景下，创建营销单元，调用参数对比

| 投放场景 | 基础 MCP 参数 | 快速投放 MCP 参数 |
| --- | --- | --- |
| 微信小游戏用户增长-创建营销单元 | 共 27 个参数 | 共 6 个参数 |

调用参数对比图

## 常见问题

Q：我的行业/场景暂未支持怎么办？ 教育、电商、汽车等行业场景正在陆续上线，欢迎联系技术支持团队咨询，我们将优先排期您的需求。
