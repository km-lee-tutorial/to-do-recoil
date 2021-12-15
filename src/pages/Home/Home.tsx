import React from 'react';

import TodoList from '@/components/TodoList/TodoList';
import CreateCategory from '@/components/CreateCategory';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <h1 style={{ color: 'red', fontSize: '40px' }}>Sorry. I couldnt do my homework because I was tired.</h1>
      <TodoList />
      <CreateCategory />
    </>
  );
};

export default Home;
