interface CategoryProps {
  categoryData: string | null;
}

const Category: React.FC<CategoryProps> = ({ categoryData }) => {
  return (
    <>
      <div>{categoryData}</div>
    </>
  );
};

export default Category;
