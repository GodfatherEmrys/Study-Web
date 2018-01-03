
function strictFunction() {
    'use strict';
    // your codes here..
}

(function strictError() {
    strictVar = 123;
    console.log(strictVar);
}())
// 실행 성공!

(function strictError() {
    'use strict';
    strictVar = 123;
}())
// 에러 발생@!

/**
 * 새로 작업하는 JS에는 strict mode를 적용시켜 엄격하게 관리할 필요가 있다.
 * 스트릭트 모드에서는 문법적인 규정이 매우 엄격해진다.
 * 브라우저 지원과 관련해서는 좀더 찾아보아야 하겠지만 우선 가지고 있는 정보들을 찾아서 써보면 다음과 같다.
 * strict mode 는 ES5(ECMAScript 5)부터 규정되었다.
 * ES5는 2009년 12월에 발표되었다.
 * 2009년 12월 이후 출시된 유명 브라우저 상황은
 * 2010년 1월 구글 크롬 4.0 (대응할 시간이 될까?) => 2010년 5월 구글 크롬 5.0
 * 2010년 3월 오페라 10.50
 * 2011년 3월 IE 9.0
 * 2010년 1월 파이어폭스
 * 2010년 6월 사파리
 * 인 것 같다..
 * IE.. 낮은 버전 IE도 strict mode가.. 안되겠지?
 * 
 * ES5를 지원하지 않는 자바스크립트 엔진은 'use strict'를 단순한 문자열로 파악(표현식문으로 간주)한다.
 * 그리고 당연하게 아무 처리를 하지 않기는 한다.
 * 스트릭트 모드는 엄격하게 적용되어 오류를 일으킬 일은 없을 거니까 그냥 새로 만들 때는 'use strict'를 붙이는 편이 낫다.
 * 해석을 못하는 경우더라도 스트릭트 모드에서 작업한 내용 때문에 오류 날 일은 없을 테니까.
 * 
 * 다만 이미 만들어진 코드에 'use strict'를 붙인다면 펑펑 터져나가는 에러를 열심히 해석해야 할 일이 생길 것이다.
 */