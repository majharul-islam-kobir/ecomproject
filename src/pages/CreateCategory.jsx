import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { categoryFormSchema } from "../validation/validationSchema";
import {
    getFirebaseDataForEdit,
    setDataToFirebase,
    updateDataFromFirebase,
} from "../database/firebaseUtils";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function CreateCategory() {
    const navigate = useNavigate();
    const params = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(categoryFormSchema),
        defaultValues: {
            categoryName: "",
            categoryImageUrl: "",
            categoryDescription: "", // New field
        },
    });

    const onSubmit = (data) => {
        if (params.id) {
            updateDataFromFirebase(`categories/${params.id}`, data);
            toast.success("Category updated successfully");
        } else {
            setDataToFirebase("categories", data);
            toast.success("Category created successfully");
        }
        navigate("/");
    };

    useEffect(() => {
        const fetchCategoryData = async () => {
            if (params.id) {
                const categoryData = await getFirebaseDataForEdit(`categories/${params.id}`);
                reset(categoryData);
            } else {
                reset({
                    categoryName: "",
                    categoryImageUrl: "",
                    categoryDescription: "", // Reset for new field
                });
            }
        };
        fetchCategoryData();
    }, [params.id, reset]);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
                {params.id ? "Edit Category" : "Add Category"}
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Category Name */}
                <div>
                    <label
                        htmlFor="categoryName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Category Name
                    </label>
                    <input
                        {...register("categoryName")}
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter category name"
                    />
                    {errors.categoryName && (
                        <span className="text-red-400 text-sm">
                            {errors.categoryName?.message}
                        </span>
                    )}
                </div>

                {/* Category Image URL */}
                <div>
                    <label
                        htmlFor="categoryImageUrl"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Category Image URL
                    </label>
                    <input
                        {...register("categoryImageUrl")}
                        type="url"
                        id="categoryImageUrl"
                        name="categoryImageUrl"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter category image URL"
                    />
                    {errors.categoryImageUrl && (
                        <span className="text-red-400 text-sm">
                            {errors.categoryImageUrl?.message}
                        </span>
                    )}
                </div>

                {/* Category Description */}
                <div>
                    <label
                        htmlFor="categoryDescription"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Category Description
                    </label>
                    <textarea
                        {...register("categoryDescription")}
                        id="categoryDescription"
                        name="categoryDescription"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter category description"
                        rows="4"
                    ></textarea>
                    {errors.categoryDescription && (
                        <span className="text-red-400 text-sm">
                            {errors.categoryDescription?.message}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                >
                    {params.id ? "Update Category" : "Add Category"}
                </button>
            </form>
        </div>
    );
}
