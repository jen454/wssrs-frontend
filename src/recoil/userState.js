import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const userState = atom({
  key: 'userState', // 다른 atom과 구분되는 고유 키
  default: {
    studentId: '',
    userName: '',
    email: '',
    isAuthenticated: false,
  },
  effects_UNSTABLE: [persistAtom], // 상태를 로컬 스토리지에 저장하는 효과 적용
});

export default userState;
