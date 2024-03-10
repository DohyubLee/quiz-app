# 프로젝트 정보

구현된 [결과물 URL](https://incandescent-fox-0a563b.netlify.app/).

## 구현 내용

- 메인 페이지 > 퀴즈 시작하기 버튼 클릭으로 퀴즈 시작
- 사지선다 또는 이지선다 문항을 보여준다
- 답안을 선택해야 다음 문항으로 넘어갈 수 있다.
- 답안 선택 시 바로 맞았는지 틀렸는지 확인이 가능
- 다음 문항 버튼을 클릭해서 다음 문제로 넘어간다.
- 모든 문제를 풀면 결과를 보여주는 페이지로 이동된다.
- 결과 정보를 보여주는 페이지의 내용
  - 퀴즈를 마치 때까지 소요된 시간
  - 정답 개수
  - 오답 개수
  - 정 오답에 대한 비율을 차트로 표시
- 오답 노트
  - 틀린 문항에 대해서 따로 리뷰할 수 있다.

## TEST 안내 및 특이사항

테스트를 한 번 실행했을 때 각각의 전체 테스트 모듈을 체크하려고 하였으나  
제공해 주신 api 관련하여 빈번한 <code>'request failed with status code 429'</code> 이슈가 있어  
부득이하게 각각의 테스트 모듈을 실행해 줘야 하는 상황이라 실행하는 명령어들이라도 정리하여 공유드립니다.

- npm test -- --testPathPattern=IndexPage.test.tsx
- npm test -- --testPathPattern=TestPage1.test.tsx
- npm test -- --testPathPattern=TestPage2.test.tsx
- npm test -- --testPathPattern=TestPage3.test.tsx
- npm test -- --testPathPattern=ResultPage1.test.tsx
- npm test -- --testPathPattern=ResultPage2.test.tsx
- npm test -- --testPathPattern=ResultPage3.test.tsx
- npm test -- --testPathPattern=IncorrectAnswerNotePage1.test.tsx
- npm test -- --testPathPattern=IncorrectAnswerNotePage2.test.tsx
