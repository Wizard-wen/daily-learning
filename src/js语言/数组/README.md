# 数组操作总结

# 静态方法

1.创建
    - Array.from() 
        - 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
        - @return 
    - Array.of() 
        - 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。 
        - @return 新的数组实例
    - Array.isArray() 
    

# 实例方法
1. 栈操作（改变原数组）
    - push() 
      - 从后插入一条或多条 
      - @return新数组长度
    - pop() 
      - 从后面删除一条
      - @return 被删除的元素
    - shift() 
      - 删除第一个元素 
      - @return 被删除的元素
    - unshift() 
      - 在数组最前端插入一条或多条
      - @return新数组长度
1. 排序
    - sort()
        - @param() ((a, b) => { <0 | >0 | =0})
        - @return sorted array
    - reverse()
1.
    - keys()
    - values()
    - entries()
1. 复制填充
    - fill()
    - copyWithin()
1. 迭代
    - map()
    - filter()
        - @return element[]
        - @param (((element, index, array) => {}, this.arg))
    - every()
    - forEach()
        - @return undefined
        - @Param ((currentValue, index, array): boolean, thisArg)
    - some()
1. 归并
    - reduce()
    - reduceRight()
1. 操作
    - slice()
        - @param (begin, end) @return [begin, end)
        - @param (begin) @return [begin, Array.length -1]
    - splice()
        - @param (start) @return (start, Array.length - 1] @des 删除
        - @param (start, deleteCount) @return [start, start + deleteCount - 1] @des 删除
        - @param (start, deleteCount, [item1, item2...]) @return [start, start + deleteCount - 1] @des 删除后添加
    - concat()  
1. 搜索判断
    - indexOf()
    - lastIndexOf()
    - includes()
    - find()
        - @return item | undefined
        - @param ((element, index, array) => {}, this.arg)
    - findIndex()
1. 转换方法
    - toString()
    - valueOf()
    - toLocaleString()
    - join()
        - @param separator
        - @return string
1. 扁平化
    - flat()
    - flatMap()
