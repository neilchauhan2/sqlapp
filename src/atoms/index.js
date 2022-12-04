import {atom} from 'recoil';

export const codeState = atom({
  key: 'codeState',
  default: '',
});

export const resultState = atom({
  key: 'resultState',
  default: [],
});
