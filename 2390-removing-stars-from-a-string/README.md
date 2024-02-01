<h2><a href="https://leetcode.com/problems/removing-stars-from-a-string/">2390. Removing Stars From a String</a></h2><h3>Medium</h3><hr><div><p>You are given a string <code>s</code>, which contains stars <code>*</code>.</p>

<p>In one operation, you can:</p>

<ul>
	<li>Choose a star in <code>s</code>.</li>
	<li>Remove the closest <strong>non-star</strong> character to its <strong>left</strong>, as well as remove the star itself.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [왼쪽에서 가장 가까운 별이 아닌 문자를 제거하고 별 자체도 제거합니다.] </inliner></li>
</ul>

<p>Return <em>the string after <strong>all</strong> stars have been removed</em>.</p>

<p><strong>Note:</strong></p>

<ul>
	<li>The input will be generated such that the operation is always possible.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [작업이 항상 가능하도록 입력이 생성됩니다.] </inliner></li>
	<li>It can be shown that the resulting string will always be unique.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [결과 문자열은 항상 고유하다는 것을 알 수 있습니다.] </inliner></li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "leet**cod*e"
<strong>Output:</strong> "lecoe"
<strong>Explanation:</strong> Performing the removals from left to right:
- The closest character to the 1<sup>st</sup> star is 't' in "lee<strong><u>t</u></strong>**cod*e". s becomes "lee*cod*e".
- The closest character to the 2<sup>nd</sup> star is 'e' in "le<strong><u>e</u></strong>*cod*e". s becomes "lecod*e".
- The closest character to the 3<sup>rd</sup> star is 'd' in "leco<strong><u>d</u></strong>*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "erase*****"
<strong>Output:</strong> ""
<strong>Explanation:</strong> The entire string is removed, so we return an empty string.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of lowercase English letters and stars <code>*</code>.</li>
	<li>The operation above can be performed on <code>s</code>.</li>
</ul>
</div>