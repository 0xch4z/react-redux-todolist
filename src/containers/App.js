import React from 'react';

import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import TodoInput from './TodoInput';

const App = () => {
  return(
    <Layout>
      <TodoList />
      <TodoInput />
    </Layout>
  );
}

export default App;
