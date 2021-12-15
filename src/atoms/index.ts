import { atom, selector } from 'recoil';

export const Categories = {
  TO_DO: 'TO_DO' as const,
  DOING: 'DOING' as const,
  DONE: 'DONE' as const,
};

// Categories Type
type CategoriesType = typeof Categories[keyof typeof Categories];

export interface IToDo {
  text: string;
  id: number;
  category: CategoriesType;
}

export const isDarkAtom = atom<boolean>({
  key: 'isDark',
  default: true,
});

export const categoryState = atom<CategoriesType>({
  key: 'category',
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

// selector을 사용해 내가 원하는 상태로 변경한다.
export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
