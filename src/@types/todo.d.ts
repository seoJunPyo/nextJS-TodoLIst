type Todo = {
  _id: string;
  completed: boolean;
  title: string;
  desc: string;
  createAt: string;
};

type Filter = 'all' | 'active' | 'completed';
type Sort = 'desc' | 'asc';
