# 일반적인 CSS 제작 Tips

## CSS Class

CSS를 Class 방식으로 삽입하는 것은 CSS를 가장 효율적으로 다룰 수 있게 도와준다.

CSS Class를 만들 때에는 다음과 같은 사항을 염두에 두면 더욱 강력하고 편리하게 만들 수 있다.

### Common Class를 만들어 common.css에 담아 사용할 것

Element의 Class 속성에는 CSS Class를 얼마든지 넣을 수 있기 때문에 잘 사용되지 않지만 충분히 이해할 수 있는 단어로 Class명을 설정하고 사용하면 페이지를 효율적으로 꾸밀 수 있다.

~~~css
.font-color-darkgray {
    color: darkgray;
}
~~~

폰트의 경우 상당수 전체적으로 통일감을 주기 위해 body에 넣는 경우도 많이 볼 수 있는데, 만약 그중에서도 회색으로 칠해야할 일이 빈번하게 발생한다면 간단한 CSS Class를 만들어 요소에 삽입해주면 효과적으로 사용할 수 있다.

~~~css
.border-for-check {
    border: 1px solid black;
}
~~~

레이아웃을 짤 때 border를 따로 만들어 삽입한 후 나중에 필요없어질 때 제거하는 용도로도 사용할 수 있다.
더 좋은 방법이 있을 수 있지만 예시를 위해 넣었다.

~~~css
.make-flex-box {
    display: flex;
}
~~~

이런 식으로 자주 사용될 조각들을 잘게 잘라서 충분히 이해할 수 있는 단어-문장의 형태로 구성하여 만드는 것이 바람직할 것이다.

###