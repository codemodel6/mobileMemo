export interface memoListProps {
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

export const memoListData: memoListProps[] = [
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE5',
    title: 'memo의 제목입니다',
    description: 'memo의 상세 내용입니다.',
    createdAt: '2024-06-06',
    updatedAt: '2024-07-01',
    keyNumber: 5,
  },
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE4',
    title: 'memo의 제목입니다2',
    description: 'memo의 상세 내용입니다2.',
    createdAt: '2024-06-07',
    updatedAt: '2024-07-02',
    keyNumber: 4,
  },
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE3',
    title: 'memo의 제목입니다3',
    description: 'memo의 상세 내용입니다3.',
    createdAt: '2024-06-08',
    updatedAt: '2024-07-03',
    keyNumber: 3,
  },
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE2',
    title: 'memo의 제목입니다4',
    description: 'memo의 상세 내용입니다4.',
    createdAt: '2024-06-09',
    updatedAt: '2024-07-04',
    keyNumber: 2,
  },
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE1',
    title: 'memo의 제목입니다5',
    description: 'memo의 상세 내용입니다5.',
    createdAt: '2024-06-10',
    updatedAt: '2024-07-05',
    keyNumber: 1,
  },
  {
    id: 'AMIFE-6AEM-EFIAM-MEIFE0',
    title: 'memo의 제목입니다6',
    description: 'memo의 상세 내용입니다6.',
    createdAt: '2024-06-11',
    updatedAt: '2024-07-06',
    keyNumber: 0,
  },
];
