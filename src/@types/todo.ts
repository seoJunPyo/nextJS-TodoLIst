/* eslint-disable @typescript-eslint/no-unused-vars */
type Todo = {
  id: string;
  completed: boolean;
  title: string;
  decs: string;
  createAt: Date;
};

type Filter = 'all' | 'active' | 'completed';
type Sort = 'desc' | 'asc';
