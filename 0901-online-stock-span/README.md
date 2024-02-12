<h2><a href="https://leetcode.com/problems/online-stock-span/">901. Online Stock Span</a></h2><h3>Medium</h3><hr><div><p>Design an algorithm that collects daily price quotes for some stock and returns <strong>the span</strong> of that stock's price for the current day.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [일부 주식에 대한 일일 가격 시세를 수집하고 해당 날짜의 해당 주식 가격 범위를 반환하는 알고리즘을 설계합니다.] </inliner></p>

<p>The <strong>span</strong> of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [하루 동안의 주가 범위는 주가가 그 날의 가격보다 작거나 같은 최대 연속 일수(그 날부터 시작하여 뒤로)입니다.] </inliner></p>

<ul>
	<li>For example, if the prices of the stock in the last four days is <code>[7,2,1,2]</code> and the price of the stock today is <code>2</code>, then the span of today is <code>4</code> because starting from today, the price of the stock was less than or equal <code>2</code> for <code>4</code> consecutive days.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [예를 들어, 지난 4일 동안의 주식 가격이 [7,2,1,2]이고 오늘 주식 가격이 2라면 오늘의 범위는 4입니다. 주가가 4일 연속 2 이하였습니다.] </inliner></li>
	<li>Also, if the prices of the stock in the last four days is <code>[7,34,1,2]</code> and the price of the stock today is <code>8</code>, then the span of today is <code>3</code> because starting from today, the price of the stock was less than or equal <code>8</code> for <code>3</code> consecutive days.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [또한 지난 4일 동안의 주식 가격이 [7,34,1,2]이고 오늘 주식 가격이 8이라면 오늘의 범위는 3입니다. 왜냐하면 오늘부터 주식 가격이 3일 연속으로 8 이하였습니다.] </inliner></li>
</ul>

<p>Implement the <code>StockSpanner</code> class:<inliner class="im-inliner-dst-text" style="color: #239E23;"> [StockSpanner 클래스를 구현합니다.] </inliner></p>

<ul>
	<li><code>StockSpanner()</code> Initializes the object of the class.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [StockSpanner() 클래스의 개체를 초기화합니다.] </inliner></li>
	<li><code>int next(int price)</code> Returns the <strong>span</strong> of the stock's price given that today's price is <code>price</code>.<inliner class="im-inliner-dst-text" style="color: #239E23;"> [int next(int value) 오늘의 가격을 가격으로 가정하여 해당 주식 가격의 범위를 반환합니다.] </inliner></li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input</strong>
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
<strong>Output</strong>
[null, 1, 1, 1, 2, 1, 4, 6]

<strong>Explanation</strong>
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= price &lt;= 10<sup>5</sup></code></li>
	<li>At most <code>10<sup>4</sup></code> calls will be made to <code>next</code>.</li>
</ul>
</div>