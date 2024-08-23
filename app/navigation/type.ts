import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface FormMemoProps {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
}

export type RootStackParamList = {
  MemoListPage: undefined;
  MemoForm: FormMemoProps;
};

export type ListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MemoListPage'
>;

export type FormScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MemoForm'
>;
