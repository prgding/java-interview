# 算法

## 什么是算法

算法是完整的、准确的解决方案的描述。

## 复杂度

- 时间复杂度：执行算法时，所需时间 与 输入数据 的关系。
- 空间复杂度：执行算法时，所需空间 与 输入数据 的关系
- 都采用 大O 表示法

## 排序算法

### 冒泡 O(n²)

- 原理
    1. 遍历比较相邻，如果发现左 > 右，则交换位置
    2. 经过一次遍历后，最大的元素会“冒泡”到最右边
    3. 重复这个过程，但忽略右边排序好的

- 实现


```java
public class Sort{
    public int[] bubbleSort(int[] arr){
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
}
```

### 选择 O(n²)

- 原理
    1. 找出最小的元素
        1. 先假设第一个为最小，遍历
        1. 如果发现有更小的，将 minIndex 指向它
    1. 如果 minIndex 改变了，与左边未排序第一个元素交换
    1. 重复这个过程，但忽略左边排序好的
    
- 实现


```java
public class Sort{
    public int[] selectSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < arr.length - 2; j++) {
                if (arr[minIndex] > arr[j]) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                int temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
        }
        return arr;
    }
}
```

### 插入
- 原理
    1. 将第一个元素看作有序序列
    2. 遍历未排序序列，将遍历的每个元素从后向前比较，插入到正确位置
    3. 重复这个过程

- 实现

```java
public class Sort {
    public int[] insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int insertion = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > insertion) {
                arr[j + 1] = arr[j];
                j--;
            }
            if (j != i - 1) {
                arr[j + 1] = insertion;
            }
        }
        return arr;
    }
}
```

### 归并

- 原理

- 实现
### 快速
- 原理

- 实现
## 搜索算法



## 数据结构相关

### 线性结构相关



### 非线性结构相关

