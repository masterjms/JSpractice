# JSpractice-생활코딩
https://web-n.github.io/web1_html_internet/<br>
visual studio 사용 방법 : 확장 아이콘 클릭 후 (맨 아래) live server 입력 ritwick dey 확인 후 오른쪽 클릭 하고 open with live server 클릭
### 목표 : STEP에 맞추어 코드를 짜보자 - 혼자서 구현할 수 있는 수준을 갖추자
1.html형태를 짜보자 (간단히 이벤트 체크 박스 정도만 형태를 갖추자)<br>
2.이벤트를 넣어보자.(input type value onclick)<br>
3.조건문을 통해 day 모드와 night 모드를 나누어 보자.<br>
4.이때 document.queryselector()를 통해 시각적인 변화가 필요한 곳을 지정하자. 그후 style.color = ' '를 통해 배경과 글자색의 변화를 주자.<br>
5.모드의 변화 후 다시 돌아갈 수 있도록 순환 구조가 가능하도록 구현하자. input함수를 쉽게 가져올 수 있는 방법에 대해 고민하고 주야간이 바뀔 때마다 value가 바뀌도록 해보자 <br>
6.중복되는 코드는 함수를 선언하여 막아보자. document...이후가 반복된다. 중복되는 부분은 var target으로 선언해보자.<br>
7.주 야간으로 바뀔때 링크가 걸려있는 글자의 색만 powderblue로 바뀔 수 있게 바꾸어보자. 배열과 반복문을 사용해야한다. 다시 돌아올때는 blue로 만들자.<br>
8.반복문에 필요한 코드를 함수로 빼내어보자. var alist로 선언해보자. document.queryselectorAll('a')를 반복되지 않게 해야한다.<br>
9.이때 코드 수정에 용이한 배열이 되도록 유동적인 코드를 만들어보자. i 값의 최대가 고정이 되지 않고 만들어지는 객체의 갯수에 맞추어 변화할 수 있게 만들자.<br>
10. 코드의 간소화를 시켜보자. 함수를 선언하여 배경과 글자색 함수를 선언해보자. 링크가 걸려있는 부분에 대한 코드는 LinksSetColor라는 함수로 선언하여 간결하게 해보자.<br>
11. 리펙토링을 마저 해보자. body에 있는 코드는 nightDayHandler();라는 코드만 남게하고 나머지는 head로 올려버리자. 이때 this와 self의 사용 방식을 생각해보자.<br>
12. property를 사용해보자. BodySetBackgroundColor 등으로 선언된 함수들에서 Body.setBackgroundColor로 바꾸어보자. 이때 var Body = funcion(color) {}로 선언하고, 프로퍼티와 프로퍼티는 콤마로 구분한다는 사실을 인지하자.<br>\
///
13.파일을 쪼개어보자. 그동안 짰던 코드를 color.js라는 파일을 만들어 모두 옮겨버리자. 이때 <script>는 같이 가면 안된다.
그동안 짰던 스크립트 <script></script>안의 내용을 모두 지우고 <script src = "color.js">로 불러와 파일을 분리한다.
///
<jQuery>라이브러리를 이용해서 쉽게 코딩하기
1.jquery를 호스팅하는 코드를 가져온다.
2.각각의 jQuery에는 우리가 취급하는 .js형태의 코드를 서버에 저장을 해둔다. 어디에? 구글, 마이크로소프트 등등등
3.우리는 google cdn을 사용한다. 검색하여 들어간다.
4.이것이 필요한 html파일에 src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>을 넣어 준다.
-사용방법-
1.html파일에 집어 넣은후 js파일로 들어가 수정을한다.
2.예를 들어 반복문 등을 대신 처리해준다. 예를 들어 a태그가 되어있는 부분의 반복문 코드를 모두 주석처리한다. 필요한 부분을 ctrl+/을 하여 주석처리하면 된다. $('a').css('color',color); 라고 하면 반복문을 할 필요없이 적용된다.
3.위와 같이 색을 바꾸는 경우 jQuery css 라고 검색하면 사용 방법이 나오므로 찾아보자.
