---
title: 人群包创建接口(新)
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2664&menuId=3392
doc_id: kuaishou_2664
source_id: kuaishou_2664
---
# 人群包创建接口(新)

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2664 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | DMP |
| createTime | 2024-07-04T12:28:23.998Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dmp/v2/dmp/population/upload |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| gid_match | Boolean |  | false | gid匹配，默认为false，需要开白申请 |  |
| advertiser_id | Long | 是 |  | 广告主ID | 在获取 access_token 的时候返回 |
| orientation_name | String | 是 |  | 人群包名称 | 不能大于 50 个字符，人群包名称不得重复 |
| type | Integer | 是 |  | 匹配类型 | 1：IMEI；2：IDFA；3：IMEI_MD5；4：IDFA_MD5；5：手机号-MD5；7：OAID；8：OAID_MD5 9: 手机号_SHA256;16：CAID |
| file_paths | String[] | 是 |  | 文件路径 | 通过调用【文件上传接口】得到的文件路径，每次最多填写10个、总大小<3G的文件 |

## 请求样例

### 请求样例 (shell)

```
curl -X POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dmp/v2/dmp/population/upload' \
-H 'Access-Token: 1000000ddcffea82bb2348e804de5f36' \
-H 'Content-Type: application/json' \
--data-raw '{
          "advertiser_id": 12345678,
          "orientation_name": "test-597",
          "type": 3,
          "file_paths": [
            "12345678_3_99cf1fd0aa868613039ff19be7698e71.txt"
          ]
        }'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 消息 |  |
| data | DmpOrientationMapiVO |  |  | 数据 |  |
| - orientation_id | Long |  |  | orientationId |  |
| - orientation_name | String |  |  | orientationName |  |
| - type | Integer |  |  | 匹配类型 | 1：IMEI；2：IDFA；3：IMEI_MD5；4：IDFA_MD5；5：手机号-MD5；7：OAID；8：OAID_MD5 9: 手机号_SHA256;16：CAID |
| - population_type | Integer |  |  | 人群包类型 | 1,"上传人群"；2,"广告人群"；3,"主题专区"；4,"逻辑规则"；5,"人群扩展"；7,"三方精选"；8,"网红粉丝类别"；10,"移动应用安装"；11,"快手使用活跃度"；12,"行业分类"；13,"商业兴趣"；17,"产品关键词"；19,"应用渗透率"；20,"快手小店"；21,"流量中台"；22,"指定网红"；23,"行业分类"；24,"广告人群"；25,"全量网红粉丝"；26,"移动应用安装"；27,"平台设备网络"；28,"年龄"；29,"设备价格区间"；33,"品牌广告精确转化"；34,"标签广场计算包"；32,"地域"；35,"大宗消费意向"；36,"性别"；37,"网红粉丝优化"；38,"小店专区"；41,"购物意图"；42,"已有人群交并补计算"；43,"行为意向"；44,"财产状态"；45,"居住分层"；46,"品类行为"；47,"用户消费分层"；50,"店铺粉丝分层"；49,"店铺新老客分层"；48,"店铺用户行为"；51,"标签推荐"；54,"店铺关注时间"；57,"K-Star(明星；58,门店管理"；59,"品牌行为"；60,"学历"；61,"人生阶段"；62,"直播打赏"；63,"节日专区"；64,"相似店铺"；65,"系统推荐"；66,"汽车购买意图"；67,"汽车价格"；68,"汽车类型"；69,"汽车动力"；70,"汽车品牌"；71,"汽车座位"；72,"汽车人群类型"；73,"二手车偏好"；74,"奥运专区"；75,"CDP人群"；76,"数据源"；77,"视频类型偏好"；78,"IP偏好"；79,"九大消费人群"；80,"个人贷款需求"；81,"个人保险兴趣"；82,"保险类型偏好"；83,"证券兴趣人群"；84,"金融负反馈人群"；85,"金融风险人群"；86,"金融属性人群"；87,"CDP上传人群"；88,"学历教育"；89,"职业教育认证"；90,"职业教育技能"；91,"财商教育兴趣"；92,"少儿教育兴趣"；93,"游戏内容兴趣"；94,"潜在付费人群"；95,"店铺粉丝团等级"；96,"定制年龄性别"；97,"品牌客户分层"；98,"自定义店铺关注时间"；99,"类目消费频次"；100,"类目客单价"；101,"职业"；102,"星轨SQL打包"；103,"画像平台导入" |
| - status | Integer |  |  | 状态 | 0, "计算中"；1, "已生效"；2, "已删除"；3, "上线中"；4, "已上线"；5, "计算失败"；6, "上线失败"；7, "已失效" |
| - create_time | Long |  |  | 创建时间戳 |  |
| - record_size | Long |  |  | 总行数 |  |
| - failed_file_paths | String[] |  |  | 错误文件路径列表 |  |
| - advertiser_id | Long |  |  | 广告主ID |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "create_time": 1642509499995,
        "orientation_id": 110839912,
        "orientation_name": "test-598",
        "failed_file_paths": [],
        "record_size": 18089662,
        "type": 3,
        "population_type": 1,
        "status": 0,
        "advertiser_id": 12345678
    },
    "message": "OK",
    "request_id": "e2f70bbf304f4433b965674efff1118e"
}
```
