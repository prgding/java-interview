---
order: 2
icon: "tabler:math"
---

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
### 快速

## 搜索算法
### 二分查找


## 数据结构相关

### 线性结构相关



### 非线性结构相关

## 代码随想录

### day01 704.Binary Search

#### Principle:

1. Divide the search space into two halves by the `midIndex`.(`midIndex` equals to `(low + high) / 2`, in case of overflow, use `(high - low) / 2 + low` instead)
2. Compare the middle element of search space with the `target`.
3. If the `target` equals to the middle element, the process is terminated.
    1. If the `target` is smaller than it, then the left side is used for next search. In code, the `low` is assigned to `midIndex - 1`.
    2. If the `target` is larger than it, then the right side is used for next search. In code, the `high` is assigned to `midIndex + 1`
    3. **Why we need to minus 1 or plus 1:**
        1. The value of `midIndex` was compared, we don't need to compare them twice.
        2. Avoid an endless loop when where are only 2 elements to compare, and the `target` equals to the value of the `high`.
4. This process is continued until the `target` is found or the search space is exhausted. In code, we use `while (low <= high)`

#### Code:

```java
class Solution {
    public int search (int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;
        
        while (low <= high) {
            int midIndex = (high - low) / 2 + low;
            if (target == nums[midIndex]){
                return midIndex;
            } else if (target < nums[midIndex]) {
                high = midIndex - 1;
            } else {
                low = midIndex + 1;
            }
        }
        return -1;
    }
}
```

#### Wrong logs:

1. Note the spelling of `length`.
2. Note the default value of `high` need to minus 1.

