type Todo = {
  _id: string;
  completed: boolean;
  title: string;
  desc: string;
  createAt: string;
};

type RequestConfig = {
  baseUrl?: string;
  headers?: HeadersInit;
};

type InputProps = {
  type: 'text' | 'password';
  fieldName: string;
  label: string;
  withAsterisk: boolean;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

type Filter = 'all' | 'active' | 'completed';
type Sort = 'desc' | 'asc';
type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
