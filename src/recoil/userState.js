import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// recoilPersist를 사용하여 persistAtom 생성
const { persistAtom } = recoilPersist();

// userState atom 생성
const userState = atom({
  key: 'userState', // 다른 atom과 구분되는 고유 키
  default: {
    studentId: '',
    userName: '',
  },
  effects_UNSTABLE: [persistAtom], // 상태를 로컬 스토리지에 저장하는 효과 적용
});

export default userState;
