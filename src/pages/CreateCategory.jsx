import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getDatabase, push, ref,  } from "firebase/database";
import app from '../database/firebaseConfig';

const CreateCategory = () => {
  // Yup schema for validation
  const schema = yup.object().shape({
    categoryName: yup
      .string()
      .required('Category Name is required')
      .min(5, 'Category Name must be at least 5 characters'),
    categoryDescription: yup
      .string()
      .required('Category Description is required')
      .min(5, 'Category Description must be at least 5 characters'),
    productRating: yup
      .number()
      .required('Product Rating is required')
      .min(1, 'Rating must be at least 1')
      .max(5, 'Rating cannot be greater than 5'),
  });

  // useForm hook for managing form state and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // onSubmit handler for the form
  const onSubmit = (data) => {
    console.log(data);
    
    const db = getDatabase(app);
    push(ref(db, 'categories'), data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Create New Category
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium mb-2">Category Name</label>
          <input
            {...register('categoryName')}
            type="text"
            placeholder="Enter category name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.categoryName && (
            <p className="text-red-500">{errors.categoryName?.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-2">Category Description</label>
          <textarea
            {...register('categoryDescription')}
            placeholder="Enter category description"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.categoryDescription && (
            <p className="text-red-500">{errors.categoryDescription?.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-2">Product Rating</label>
          <input
            {...register('productRating')}
            type="number"
            placeholder="Enter product rating (1-5)"
            min="1"
            max="5"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.productRating && (
            <p className="text-red-500">{errors.productRating?.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Create New Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
