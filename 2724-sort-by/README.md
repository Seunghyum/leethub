<h2><a href="https://leetcode.com/problems/sort-by/">2724. Sort By</a></h2><h3>Easy</h3><hr><div><p>Given an array <code>arr</code> and a function <code>fn</code>, return a sorted array <code>sortedArr</code>.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [배열 arr과 함수 fn이 주어지면 정렬된 배열 sortedArr을 반환합니다.] </inliner> You can assume&nbsp;<code>fn</code>&nbsp;only returns numbers and those numbers determine the sort order of&nbsp;<code>sortedArr</code>. <code>sortedArray</code> must be sorted in <strong>ascending order</strong> by <code>fn</code> output.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [fn은 숫자만 반환하고 해당 숫자가 sortedArr의 정렬 순서를 결정한다고 가정할 수 있습니다. sortedArray는 fn 출력에 따라 오름차순으로 정렬되어야 합니다.] </inliner></p>

<p>You may assume that <code>fn</code> will never duplicate numbers for a given array.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [fn은 주어진 배열에 대해 숫자를 결코 중복하지 않을 것이라고 가정할 수 있습니다.] </inliner></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> arr = [5, 4, 1, 2, 3], fn = (x) =&gt; x
<strong>Output:</strong> [1, 2, 3, 4, 5]
<strong>Explanation:</strong> fn simply returns the number passed to it so the array is sorted in ascending order.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) =&gt; d.x
<strong>Output:</strong> [{"x": -1}, {"x": 0}, {"x": 1}]
<strong>Explanation:</strong> fn returns the value for the "x" key. So the array is sorted based on that value.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> arr = [[3, 4], [5, 2], [10, 1]], fn = (x) =&gt; x[1]
<strong>Output:</strong> [[10, 1], [5, 2], [3, 4]]
<strong>Explanation:</strong> arr is sorted in ascending order by number at index=1.&nbsp;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>arr</code> is a valid JSON array</li>
	<li><code>fn</code> is a function that returns a number</li>
	<li><code>1 &lt;=&nbsp;arr.length &lt;= 5 * 10<sup>5</sup></code></li>
</ul>
</div>