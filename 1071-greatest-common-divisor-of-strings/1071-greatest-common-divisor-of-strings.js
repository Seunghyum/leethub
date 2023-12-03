/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 유클리드 알고리즘(Euclidean algorithm)은 2개의 자연수의 최대공약수를 구하는 알고리즘입니다. 비교대상의 두 개의 자연수 a와 b에서(단 a>b) a를 b로 나눈 나머지를 r이라고 했을때 GCD(a, b) = GCD(b, r)과 같고 "r이 0이면 그때 b가 최대공약수이다."라는 원리를  활용한 알고리즘입니다.

ex) GCD(24,16) -> GCD(16,8) -> GCD(8,0) : 최대공약수 = 8
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return ""

    function gcds(x,y) {
        if(y === 0) {
            return x
        }
        return gcds(y, x%y)
    }

    const div = gcds(str1.length, str2.length)

    return str1.slice(0,div)
};