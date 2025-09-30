# Git 초기 설정

1. git init (git 초기화)
2. git config --list (git 환경설정)
3. git config --local user.name "git 계정"
4. git config --local user.email "git 이메일"
5. git config --global init.defaultbranch main // 기본 브랜치 main으로 설정 (한번만 설정하면 더이상 수정 X)
6. git add -A 또는 git add . 또는 git add 파일명
   1. Working Directory(작업 디렉토리)
      1-1. 실제로 파일을 수정하는 곳
      1-2. 파일은 수정되었지만, git add를 하지 않아 스테이징 영역에는 없는 상태를 의미
   2. Staging Area(스테이징 영역, 인덱스)
      2-1. 커밋(commit)할 변경 사항을 잠시 올려두는 대기 공간.
      2-2. git add 명령어로 스테이징 영역에 파일을 옮길 수 있다.
   3. Repository(저장소, .git)
      3-1. 최종적으로 git commit 하면, 스테이징 영역에 있는 파일(폴더)가 git에 기록됨
      3-2. feat : 새로운 기능 추가
      3-3. fix : 버그 수정
      3-4. docs : 문서 수정
      3-5. style : 코드 스타일 변경(추가)
      3-6. refactor : 리팩토링
      3-7. test : 테스트 코드 추가
      3-8. chore : 빌드 설정 변경
      3-9. git commit -m "fix: 로그인 시 빈 값을 입력해도 로그인 되던 현상 수정"
      3-10. git commit -m "feat: 로그아웃 기능 추가"
7. git config --global core.editor "code --wait"
8. git config --global --unset core.editor
9. git status

10. git log
    1. git log --oneline
    2. git log --graph
    3. 추천 : git log --graph --online

11. 커밋 취소하는 방법(Repository -> working directory or staging area)
    1. 커밋이 한 개 있을 때
       1. 그냥 git을 다시 초기화 (rm -rf .git -> git init -> git add . -> git commit)
    2. 커밋이 두 개 이상 있을 때
       1. git reset
          1. git reset HEAD~숫자 (ex : git reset HEAD~1 / 커밋 1개를 되돌아감)
             1. --mixed : 기본값, 커밋 취소 + 작업 내역 Working Directory 영역에 배치
             2. --soft: 커밋 취소 + 작업 내역을 Staging Area에 배치
             3. --hard: 커밋 취소 + 작업 내역 삭제
       2. 만약 소스코드가 github에 올라갔으면 reset 하면 안됨
          1. git revert 커밋아이디 (아이디 확인은 git log --graph --online)
12. github에 소스코드를 올릴 때
    1. git push -u origin 브랜치명

13. git !== github 같지 않다
    1. github 올라가면 git으로 관리되지 않는 것
    2. github 원격 저장소
    3. git 로컬 저장소
