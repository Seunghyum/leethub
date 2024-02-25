<h2><a href="https://leetcode.com/problems/sqrtx/">69. Sqrt(x)</a></h2><h3>Easy</h3><hr><div><p>Given a non-negative integer <code>x</code>, return <em>the square root of </em><code>x</code><em> rounded down to the nearest integer</em>.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [음수가 아닌 정수 x가 주어지면 x의 제곱근을 가장 가까운 정수로 내림하여 반환합니다.] </inliner> The returned integer should be <strong>non-negative</strong> as well.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [반환된 정수도 음수가 아니어야 합니다.] </inliner></p>

<p>You <strong>must not use</strong> any built-in exponent function or operator.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [내장된 지수 함수나 연산자를 사용하면 안 됩니다.] </inliner></p>

<ul>
	<li>For example, do not use <code>pow(x, 0.5)</code> in c++ or <code>x ** 0.5</code> in python.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> x = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> The square root of 4 is 2, so we return 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> x = 8
<strong>Output:</strong> 2
<strong>Explanation:</strong> The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= x &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div>