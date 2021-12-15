import { useForm } from 'react-hook-form';

import useLocalStorage from '@/hooks/useLocalStorage';
import Category from '@/components/Category';

interface CreateCategoryProps {}

interface IForm {
  category: string;
}

const CreateCategory: React.FC<CreateCategoryProps> = ({}) => {
  const [categoryData, setCategoryData] = useLocalStorage('categoryData', '');
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ category }: IForm) => {
    setCategoryData(category); //localstorage add
    setValue('category', '');
  };
  return (
    <div style={{ marginTop: '30px' }}>
      <div>Category Add(LocalStorage)</div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('category', {
            required: 'Please write a category',
          })}
          placeholder="Write a category"
        />
        <button>Add</button>
      </form>

      <Category categoryData={categoryData} />
    </div>
  );
};

export default CreateCategory;
