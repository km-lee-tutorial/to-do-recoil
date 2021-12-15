interface ITheme {
  [key: string]: string;
}

export const darkTheme: ITheme = {
  bgColor: '#2f3640',
  textColor: 'white',
  accentColor: '#9c88ff',
  cardBgColor: 'transparent',
};

export const lightTheme: ITheme = {
  bgColor: '#f5f5f5',
  textColor: 'black',
  accentColor: '#9c88ff',
  cardBgColor: 'white',
};

export type ThemeType = typeof darkTheme;
