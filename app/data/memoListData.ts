export interface MemoListProps {
  // unique string 값
  id: string;
  // memo 제목
  title: string;
  // memo 내용
  description: string;
  // memo의 생성날짜
  createdAt: string;
  // memo의 업데이트 날짜
  updatedAt: string;
  // keyId
  keyNumber: number;
}

export const memoListData: MemoListProps[] = [
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE0',
    title: '첫번째 메모',
    description: '첫번째 메모입니다',
    createdAt: '2024-06-06',
    updatedAt: '2024-07-01',
    keyNumber: 0,
  },
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE1',
    title: '두번째 메모',
    description:
      '두번째 메모 입니다 긴 글자를 테스트 하기 위해서 여러개의 글자를 입력해 보겠습니다 아주 긴 글자를 준비해 볼까요 지금입니다 긴 글자가 나왔습니다',
    createdAt: '2024-06-07',
    updatedAt: '2024-07-02',
    keyNumber: 1,
  },
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE2',
    title: '세번째 메모',
    description: '세번째 메모의 상세 내용입니다.',
    createdAt: '2024-06-08',
    updatedAt: '2024-07-03',
    keyNumber: 2,
  },
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE3',
    title: '세번째 메모',
    description: '다섯번째 메모의 상세 내용입니다. 사실 세번째 메모입니다',
    createdAt: '2024-06-09',
    updatedAt: '2024-07-04',
    keyNumber: 3,
  },
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE4',
    title: '네번째 메모',
    description: '네번째 메모',
    createdAt: '2024-06-10',
    updatedAt: '2024-07-05',
    keyNumber: 4,
  },
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE5',
    title: 'HelloWorld',
    description: 'HelloWorld with my ReactNative Memo',
    createdAt: '2024-06-11',
    updatedAt: '2024-07-06',
    keyNumber: 5,
  },
];
