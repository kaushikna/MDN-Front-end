import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import WithAppContext from '../../Helper/Context/app.ContextHoc';
import { AuthAPI } from '../../API';
import toast from "react-hot-toast";

const validSchema = Yup.object().shape({
    asin: Yup.string().required("Asin Name required"),
    customer_reviews: Yup.string().required("Customer Reviews required"),
    packer: Yup.string().required("Packer required"),
    importer: Yup.string().required("Importer Name required"),
    net_quantity: Yup.string().required("Net Quantity required"),
});

const AdditionalInfo = ({ setTab, context, setProductAdditionalTab, setProductInfoTab, setProductTab }) => {
    const { product, setProduct } = context


    const formik = useFormik({
        initialValues: {
            asin: "ABC123",
            customer_reviews: "3",
            packer: "KK",
            importer: "JJ",
            net_quantity: "300",
        },
        onSubmit: (values, { resetForm }) => {
            setProduct({ ...product, ...values })
            setProductTab(true)
            setProductInfoTab(false)
            setProductAdditionalTab(false)
            createProduct(values)
            setTab("Service And Installation Request")
            resetForm()
        },
        validationSchema: validSchema,
    })

    const createProduct = async (values) => {
        let productPayload = {
            name: product.name,
            categoryId: product.categoryId,
            price: product.price,
            additionalInformation: {
                manufacturer: product.manufacturer,
                packer: values.packer,
                importer: values.importer,
                net_quantity: values.net_quantity,
                item_weight: product.item_weight,
                components: "test",
                generic_name: "test",
                seller_rank: "test"
            },
            technicalInformation: {
                brand: product.brand,
                electric_design: "test",
                power_source: product.power_source,
                style: "test",
                dimension: "test",
                room_type: "test",
                feature: "test",
                recommended_product: "test",
                wattage: product.wattage,
                finish_type: "test",
                number_of_blades: 3,
                capacity: "test",
                speed: "test",
                voltage: product.voltage,
                collection_name: "test",
                switch_type: "test",
                weight: "test",
                usage: "Indoor", //"Outdoor"
                model_name: product.model_name,
                specification_met: "test",
                control: "test",
                light_type: "test",
                blade_material: "test",
                manufacturer: product.manufacturer,
                country_of_origin: product.country_of_origin,
                model_number: "test",
                asin: values.asin,
                dimensions: "test"
            }
        }
        try {
            const response = await AuthAPI("/product/create", {
                method: "POST",
                data: productPayload
            });
            if (response?.status === 201) {
                toast.success(response.message);
                await createVariant(response.data._id)
            } else {
                toast.error("Something went wrong..");
            }
        } catch (error) {
            toast.error("Something went to wrong...");
            console.error(error);
        }
    }

    const createVariant = async (productId) => {
        const promises = product?.variant?.map(async (elem) => {
            const variantPayload = new FormData()
            variantPayload.append("images", elem.image);
            variantPayload.append("productId", String(productId))
            variantPayload.append("colorName", elem.colorName)
            variantPayload.append("colorCode", elem.colorCode)
            try {
                const response = await AuthAPI("/product/variant/create", {
                    method: "POST",
                    data: variantPayload
                });
                if (response?.status === 201) {
                    toast.success(response.message);
                } else {
                    toast.error("Something went wrong..");
                }
            } catch (error) {
                toast.error("Something went to wrong...");
                console.error(error);
            }
        });
        const variantsData = await Promise.all(promises)
        return variantsData
    }


    return (
        <div className='max-w-[500px] mx-auto mt-[30px]'>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type='text' placeholder='asin' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none'
                        name="asin"
                        value={formik.values.asin}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.asin && formik.touched.asin ? (
                        <p className="text-red-500 text-sm">*{formik.errors.asin}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='customer_reviews' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4'
                        name="customer_reviews"
                        value={formik.values.customer_reviews}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.customer_reviews && formik.touched.customer_reviews ? (
                        <p className="text-red-500 text-sm">*{formik.errors.customer_reviews}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='packer' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4'
                        name="packer"
                        value={formik.values.packer}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.packer && formik.touched.packer ? (
                        <p className="text-red-500 text-sm">*{formik.errors.packer}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='importer' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4'
                        name="importer"
                        value={formik.values.importer}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.importer && formik.touched.importer ? (
                        <p className="text-red-500 text-sm">*{formik.errors.importer}</p>
                    ) : null}
                </div>
                <div>
                    <input type='text' placeholder='net_quantity' className='text-[14px] w-full border-[#3e337c] text-[#3e337c] border-[1px] rounded-md p-[8px_12px] outline-none  mt-4'
                        name="net_quantity"
                        value={formik.values.net_quantity}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.net_quantity && formik.touched.net_quantity ? (
                        <p className="text-red-500 text-sm">*{formik.errors.net_quantity}</p>
                    ) : null}
                </div>
                <button className='bg-[#3e337c] text-white mt-4 p-[8px_48px] text-[14px]'>Add</button>
            </form>
        </div>
    )
}

export default WithAppContext(AdditionalInfo)