import { atom } from 'recoil';

/** 상단 햄버거 메뉴 노출 여부 */
export const isTopMenu = atom({
  key: 'isTopMenu',
  default: false,
});

/** 메인페이즈 노출 여부 */
export const isShowMain = atom({
  key: 'isShowMain',
  default: false,
});
