import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DaynamicModal from '../../../Components/DaynamicModal/DaynamicModal';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const HpLaptop = () => {
    const category = useLoaderData();
    const productsItems = category.categoryProducts;
    const [modalData, setModalData] = useState(null)
    console.log(modalData)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
                {
                    productsItems.map((product, idx) => <div key={idx}>
                        <ProductCard
                            product={product}
                            setModalData={setModalData}
                        ></ProductCard>
                    </div>)
                }
            </div>
            {
                modalData && <DaynamicModal
                    modalData={modalData}
                    setModalData={setModalData}
                ></DaynamicModal>
            }
        </div>
    );
};

export default HpLaptop;