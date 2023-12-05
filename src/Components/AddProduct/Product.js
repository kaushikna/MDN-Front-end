import { FieldArray, FormikProvider, useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { AuthAPI } from '../../API'
import toast from "react-hot-toast";
import WithAppContext from '../../Helper/Context/app.ContextHoc';
import * as Yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const validSchema = Yup.object().shape({
    categoryId: Yup.string().required("Category required"),
    name: Yup.string().required("Product Name required"),
    price: Yup.number().integer().positive().required("Product Name required"),
    variant: Yup.array().of(Yup.object().shape({
        image: Yup.string().required("Choose File required"),
        colorName: Yup.string().required("Color Name required"),
        colorCode: Yup.string().required("Color Code required"),
    })).required().min(1)
});

const Product = ({ setTab, setProductAdditionalTab, setProductInfoTab, setProductTab, context }) => {
    const [allCategoryData, setAllCategoryData] = useState([])
    const { product, setProduct } = context

    const categoryData = async () => {
        try {
            const response = await AuthAPI("/category", {
                method: "GET",
            });
            if (response?.status === "Failed") {
                toast.error("Something went to wrong...");
            } else {
                toast.success("Successfully signup...");
            }
            setAllCategoryData(response.data)
        } catch (error) {
            toast.error("Something went to wrong...");
            console.error(error);
        }
    }

    useEffect(() => {
        categoryData()
    }, [])

    const formik = useFormik({
        initialValues: {
            categoryId: '',
            name: '',
            price: 400,
            variant: [
                {
                    image: "",
                    colorName: "red",
                    colorCode: "#1234"
                }
            ],
        },
        onSubmit: (values, { resetForm }) => {
            setProduct(values)
            setProductInfoTab(true)
            setTab("Register Warranty Card")
        },
        validationSchema: validSchema,
    })

    // console.log("==formik.values==>", formik.values);

    return (
        <div className='max-w-[500px] mx-auto mt-[30px]'>
            <form onSubmit={formik.handleSubmit}>
                <FormikProvider value={formik}>
                    <div className='mt-4'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                value={formik.values?.categoryId}
                                label="Category"
                                onChange={formik.handleChange}
                                fullWidth
                                sx={{ height: "44px" }}
                                mt={4}
                                name='categoryId'
                                className='border !border-[#3e337c] focus:!border-[#3e337c]'
                            >
                                {allCategoryData.map((val, index) => {
                                    return (
                                        <MenuItem value={val._id} key={index}>{val.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.errors.categoryId && formik.touched.categoryId ? (
                                <p className="text-red-500 text-sm">*{formik.errors.categoryId}</p>
                            ) : null}
                        </FormControl>
                    </div>
                    <div className='mt-4'>
                        <input type='text' placeholder='Name'
                            name="name"
                            values={formik.values.name}
                            onChange={formik.handleChange}
                            className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none ' />
                        {formik.errors.name && formik.touched.name ? (
                            <p className="text-red-500 text-sm">*{formik.errors.name}</p>
                        ) : null}
                    </div>
                    <div className='mt-4'>
                        <input type='number' placeholder='Price'
                            name="price"
                            values={formik.values.price}
                            onChange={formik.handleChange}
                            className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  ' />
                        {formik.errors.price && formik.touched.price ? (
                            <p className="text-red-500 text-sm">*{formik.errors.price}</p>
                        ) : null}
                    </div>
                    <div className='mt-4'>
                        <div className="flex items-center justify-between my-2">
                            <p className='text-xl'>Product Variant :</p>
                            <AddIcon color="secondary" fontSize="medium" sx={{ cursor: "pointer" }}
                                onClick={() => {
                                    const variantClone = [...formik.values.variant]
                                    variantClone.push({
                                        image: "",
                                        colorName: "",
                                        colorCode: ""
                                    })
                                    formik.setFieldValue('variant', variantClone)
                                }}
                            />
                        </div>
                        <FieldArray
                            name='variant'
                            render={(arrayHelpers) => (
                                <div>
                                    {formik.values?.variant?.map((elem, index) => (
                                        <div className='flex items-center justify-between space-y-3' key={index}>
                                            <div>
                                                <input type='file' placeholder='Image' className='text-[14px] w-full outline-none'
                                                    onChange={(e) =>
                                                        formik.setFieldValue(`variant[${index}].image`, e.target.files[0])
                                                    }
                                                    name={`variant.${index}.image`}
                                                    value={elem?.index?.image}
                                                />
                                                {formik.errors.variant?.[index]?.image && formik.touched?.variant?.[index]?.image ? (
                                                    <p className="text-red-500 text-sm">*{formik.errors?.variant?.[index]?.image}</p>
                                                ) : ""}
                                            </div>
                                            <div className='mr-2'>
                                                <input type='text' placeholder='Color Name'
                                                    name={`variant.${index}.colorName`}
                                                    value={elem?.colorName}
                                                    onChange={formik.handleChange}
                                                    className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none ' />
                                                {formik.errors.variant?.[index]?.colorName && formik.touched?.variant?.[index]?.colorName ? (
                                                    <p className="text-red-500 text-sm">*{formik.errors?.variant?.[index]?.colorName}</p>
                                                ) : ""}
                                            </div>
                                            <div>
                                                <input type='text' placeholder='Color Code'
                                                    name={`variant.${index}.colorCode`}
                                                    value={elem?.colorCode}
                                                    onChange={formik.handleChange}
                                                    className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none ' />
                                                {formik.errors.variant?.[index]?.colorCode && formik.touched?.variant?.[index]?.colorCode ? (
                                                    <p className="text-red-500 text-sm">*{formik.errors?.variant?.[index]?.colorCode}</p>
                                                ) : ""}
                                            </div>
                                            {formik.values.variant?.length > 1 && <RemoveIcon color="error" fontSize="medium" sx={{ cursor: "pointer" }} onClick={() => {
                                                arrayHelpers.remove(index)
                                            }} />}
                                        </div>
                                    ))}
                                </div>
                            )}
                        />
                    </div>
                    <button className='bg-[#3e337c] text-white mt-4 p-[8px_48px] text-[14px]'
                    > Next</button>
                </FormikProvider>
            </form>
        </div>
    )
}

export default WithAppContext(Product)