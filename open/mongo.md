## mongo 基础

`aggregate`: 聚合

```bash
db.doc.aggregate([ # pipline 管道处理
    {
        $project: {name:1,age:1}
    },
    {
        $match: {"age":{$gte:20}}
    }
])
```

`$project`: 字段映射 过滤

`$match`: 匹配

`$group`: 分组 `$group: {_id:"$order_id", total: {$sum: "$price"}}`

`$sort`: 排序

`$limit` `$skip` :分页

`$lookup`: 多表查询

```bash
{
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
}

# ----------------
$lookup:{
    from: "xxx", # 要关联的表
    localField: "id", # 关联字段
    foreignField: "user_id",
    as: "users" # 关联表别名
}

# ----------------------
{
   $lookup:
      {
         from: <foreign collection>,
         localField: <field from local collection's documents>,
         foreignField: <field from foreign collection's documents>,
         let: { <var_1>: <expression>, …, <var_n>: <expression> },
         pipeline: [ <pipeline to run> ],
         as: <output array field>
      }
}

# --------------------------------
SELECT *, stockdata
FROM orders
WHERE stockdata IN (
   SELECT warehouse, instock
   FROM warehouses
   WHERE stock_item = orders.item
   AND instock >= orders.ordered
);

db.orders.aggregate([
   {
      $lookup:
         {
           from: "warehouses",
           # 变量 : 表达式(当前表字段)
           let: { order_item: "$item", order_qty: "$ordered" },
           pipeline: [
              { $match:
                 { $expr:
                    { $and:
                       [# 关联表字段, $$let 变量
                         { $eq: [ "$stock_item",  "$$order_item" ] },
                         { $gte: [ "$instock", "$$order_qty" ] }
                       ]
                    }
                 }
              },
              { $project: { stock_item: 0, _id: 0 } }
           ],
           as: "stockdata"
         }
    }
])
```
