import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  MemoListPage: undefined;
  MemoForm: undefined;
};

export type ListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MemoListPage'
>;

export type FormScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MemoForm'
>;
