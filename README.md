## 실행 방법
1. git clone https://github.com/codemodel6/washswat-setak-memo.git 명령어를 통해 local vsocode에 프로젝트를 클론받아주세요.
2. vscode의 명령어 터미널에 npm install 명령어를 통해 package.json에 있는 패키지들을 다운 받아 주세요.
3. android studio의 에뮬레이터를 열어주세요
4. npm run android 명령어를 통해 react-cli 를 켜주시고 a 버튼을 눌러 안드로이드 예뮬레이터에 프로젝트를 띄어주세요.



## 실행 환경(사용한 nodejs버전, ios or android 버전)
- #### node 버전 <br/>
  v20.16.0 (가장 안정적인 현재의 LTS 버전을 사용하였습니다)
- #### android 버전 <br/>
  Android Studio Bumblebee | 2021.1.1 Patch 2
  Build #AI-211.7628.21.2111.8193401, built on February 17, 2022
  Runtime version: 11.0.11+9-b60-7590822 amd64
  VM: OpenJDK 64-Bit Server VM by Oracle Corporation
  Windows 10 10.0
  GC: G1 Young Generation, G1 Old Generation
  Memory: 1280M
  Cores: 6
  Registry: external.system.auto.import.disabled=true
  Non-Bundled Plugins: drawable.importer.pluginId.7658.hack' (0.7)



## 구현한 내용
- 기획에서 제공한 디자인 최대한 그대로 stylesheet CSS 작업
- redux-toolkit 을 사용한 글로벌 데이터 CRUD 작업
- searchBar를 이용한 데이터 search 작업



## 고민되었던 부분 및 개선하고 싶은 사항
#### 고민되었던 부분
저는 이번 과제의 레퍼런스로 SamsungNote를 참조하였습니다.
SamsungNote의 기능 중 버튼이 우측 하단에 있고 스크롤을 아래로 내릴 시 버튼이 사라지는 점 및 삭제시 메모아이템을 꾹 눌러 삭제하는 점을 보았습니다.
하지만 기획의 디자인의 삭제 버튼 및 과제의 요구사항 중 삭제 버튼이 메모아이템과 공간이 생기면 안된다는 점을 확인하였고 어떻게 만들지 고민하였습니다.
결론적으로 저는 기획이 제공한 디자인 및 요구사항을 준수하였습니다.



#### 개선하고 싶은 사항
#### props와 redux
현재 제 로직은 memoListPage는 redux의 글로벌 데이터에서 가져오고 memoFrom 페이지는 memoListPage의 아이템에서 props를 불러오는 방식을 사용하고 있습니다.
하지만 이런 점이 redux에서 공통적으로 데이터를 관리하는 느낌이 아니여서 조금 아쉬운 느낌이 들었습니다.
통신을 이용했다면 key에 맞는 데이터를 불러왔을 것 같다는 생각이 들어 이후에는 props 전달 방식이 아닌 redux의 data를 filter 해서 전달하는 방식으로 구현해보고 싶습니다.

#### css search 관련 애니메이션
저는 css관련 애니메이션을 좋아합니다. 그래서 search 버튼을 누를 시 위에서 아래로 부드럽게 searchBar가 나오는 점을 개선하고 싶었습니다.
다만 search 관련 디자인은 search쪽에 많은 기능을 넣어 보류하였습니다.



## 기타 사항 : 위의 사항 외에 추가 하고 싶은 내용을 추가해주시면 됩니다. (느낀점 및 다른 사항)
#### gradle 문제
저에게 데스크탑과 노트북이 있었고, 데스크탑에서 작업하다 노트북에서도 작업하고 싶었습니다. 그래서 노트북에 안드로이드 스튜디오를 설치하고 에뮬레이터를 만든 후 프로젝트를 clone받아 진행하려 했습니다.
그런데 npm run android 빌드 중 자꾸

```
could not determine the dependencies of task ':app:compiledebugjavawithjavac'. > cannot query the value of this provider because it has no value available.
```

라는 오류가 나오면서 build가 되지 않았습니다. 이 문제를 해결하기 위해 많은 시도와 검색을 하였으나 관련 자료가 별로 없어 오랜 시간 해결하지 못했습니다.
검색을 하며 알 수 있었던 점은 이 문제가 gradle 빌드 오류라는 것, sdk 관련 오류라는 것만을 알았습니다.
이후 android 폴더의 build.gradle을 보니 build 관련 버전이 34로 되어있었습니다. 저는 저의 sdk가 35버전임을 알았고 이것을 수정하여 해결하였습니다.
개발 보다 더 어려운것이 환경설정 및 세팅이라고 생각했습니다. 그리고 노트북 작업을 포기할까 고민했지만, 어차피 나중에도 겪어볼 일 이라 생각하여 먼저 학습한다는 마인드로 해결하였습니다.

#### react native 경험
저는 이번 과제를 진행하며 react native를 처음 접했습니다. 항상 해봐야지 하면서 react와 별 다를게 없을텐데 라며 공부를 소홀히 했던 것 같습니다.
하지만 이번 과제를 진행하며 react와 구조부터 시작해 style navigation 등 많은 부분이 다름을 깨달았고 많은 공부를 하였습니다.
결론적으로 좋은 과제 경험을 한 것 같아 만족스러운 시간이였습니다.
