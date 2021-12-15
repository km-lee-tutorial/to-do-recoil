import React from 'react';

import TodoList from '@/components/TodoList/TodoList';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <TodoList />
    </>
  );
};

export default Home;
