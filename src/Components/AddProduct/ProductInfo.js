import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import WithAppContext from '../../Helper/Context/app.ContextHoc';

const validSchema = Yup.object().shape({
    brand: Yup.string().required("Brand Name required"),
    manufacturer: Yup.string().required("Manufacturer required"),
    model: Yup.string().required("Model required"),
    model_name: Yup.string().required("Model Name required"),
    model_year: Yup.string().required("Model Year required"),
    battery: Yup.string().required("Battery required"),
    voltage: Yup.string().required("Voltage required"),
    wattage: Yup.string().required("Wattage required"),
    power_source: Yup.string().required("Category required"),
    country_of_origin: Yup.string().required("Country Of Origin required"),
    item_weight: Yup.string().required("Item Weight required"),
});

const ProductInfo = ({ setTab, setProductAdditionalTab, context }) => {
    const { product, setProduct } = context

    const formik = useFormik({
        initialValues: {
            brand: "phillips",
            manufacturer: "KK",
            model: "abc",
            model_name: "XXX",
            model_year: "2000",
            battery: "4000",
            voltage: "12",
            wattage: "23",
            power_source: "ABC",
            country_of_origin: "Ind",
            item_weight: "300"
        },
        onSubmit: (values, { resetForm }) => {
            setProduct({ ...product, ...values })
            setProductAdditionalTab(true)
            setTab("Track Complaint")
            resetForm()
        },
        validationSchema: validSchema,
    })

    return (
        <div className='max-w-[500px] mx-auto mt-[30px]'>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type='text' placeholder='Brand'
                        name="brand"
                        value={formik.values.brand}
                        onChange={formik.handleChange}
                        className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none' />
                    {formik.errors.brand && formik.touched.brand ? (
                        <p className="text-red-500 text-sm">*{formik.errors.brand}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='manufacturer'
                        name="manufacturer"
                        value={formik.values.manufacturer}
                        onChange={formik.handleChange}
                        className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                    {formik.errors.manufacturer && formik.touched.manufacturer ? (
                        <p className="text-red-500 text-sm">*{formik.errors.manufacturer}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='model'
                        name="model"
                        value={formik.values.model}
                        onChange={formik.handleChange}
                        className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                    {formik.errors.model && formik.touched.model ? (
                        <p className="text-red-500 text-sm">*{formik.errors.model}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='model_name'
                        name="model_name"
                        value={formik.values.model_name}
                        onChange={formik.handleChange}
                        className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                    {formik.errors.model_name && formik.touched.model_name ? (
                        <p className="text-red-500 text-sm">*{formik.errors.model_name}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='model_year'
                        name="model_year"
                        value={formik.values.model_year}
                        onChange={formik.handleChange}
                        className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                    {formik.errors.model_year && formik.touched.model_year ? (
                        <p className="text-red-500 text-sm">*{formik.errors.model_year}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='Includes Rechargeable battery'
                        name="battery"
                        value={formik.values.battery}
                        onChange={formik.handleChange}
                        className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                    {formik.errors.battery && formik.touched.battery ? (
                        <p className="text-red-500 text-sm">*{formik.errors.battery}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='voltage'
                        name="voltage"
                        value={formik.values.voltage}
                        onChange={formik.handleChange}
                        className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                    {formik.errors.voltage && formik.touched.voltage ? (
                        <p className="text-red-500 text-sm">*{formik.errors.voltage}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='wattage'
                        name="wattage"
                        value={formik.values.wattage}
                        onChange={formik.handleChange}
                        className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                    {formik.errors.wattage && formik.touched.wattage ? (
                        <p className="text-red-500 text-sm">*{formik.errors.wattage}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='power_source'
                        name="power_source"
                        value={formik.values.power_source}
                        onChange={formik.handleChange}
                        className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                    {formik.errors.power_source && formik.touched.power_source ? (
                        <p className="text-red-500 text-sm">*{formik.errors.power_source}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='country_of_origin'
                        name="country_of_origin"
                        value={formik.values.country_of_origin}
                        onChange={formik.handleChange}
                        className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                    {formik.errors.country_of_origin && formik.touched.country_of_origin ? (
                        <p className="text-red-500 text-sm">*{formik.errors.country_of_origin}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='item weight'
                        name="item_weight"
                        value={formik.values.item_weight}
                        onChange={formik.handleChange}
                        className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4' />
                    {formik.errors.item_weight && formik.touched.item_weight ? (
                        <p className="text-red-500 text-sm">*{formik.errors.item_weight}</p>
                    ) : null}
                </div>
                <div>
                    <button className='bg-[#3e337c] text-white mt-4 p-[8px_48px] text-[14px]'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default WithAppContext(ProductInfo)