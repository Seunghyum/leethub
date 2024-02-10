<h2><a href="https://leetcode.com/problems/letter-combinations-of-a-phone-number/">17. Letter Combinations of a Phone Number</a></h2><h3>Medium</h3><hr><div><p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [2부터 9까지의 숫자가 포함된 문자열이 주어지면 숫자가 나타낼 수 있는 가능한 모든 문자 조합을 반환합니다.] </inliner> Return the answer in <strong>any order</strong>.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [어떤 순서로든 답을 반환하세요.] </inliner></p>

<p>A mapping of digits to letters (just like on the telephone buttons) is given below.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [전화 버튼과 마찬가지로 숫자를 문자로 매핑하는 방법은 다음과 같습니다.] </inliner> Note that 1 does not map to any letters.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [1은 어떤 문자에도 매핑되지 않습니다.] </inliner></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png" style="width: 300px; height: 243px;">
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> digits = "23"
<strong>Output:</strong> ["ad","ae","af","bd","be","bf","cd","ce","cf"]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> digits = ""
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> digits = "2"
<strong>Output:</strong> ["a","b","c"]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= digits.length &lt;= 4</code></li>
	<li><code>digits[i]</code> is a digit in the range <code>['2', '9']</code>.</li>
</ul>
</div>