import { atom } from 'recoil';

export const ToggleValue = atom({
  key: 'Toggle',
  default: false,
});

export const ClickValue = atom({
  key: 'Click',
  default: false,
});
