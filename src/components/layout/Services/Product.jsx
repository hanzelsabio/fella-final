import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../../context/ProductContext";

import SectionTitle from "../../common/SectionTitle";

import ProductCard from "./ProductCard";

import "./product.css";

const Products = () => {
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <section className="collection_section">
        {/* Loading Skeleton Component */}
        <div className="collection_content max-w-6xl mx-auto py-30 px-8">
          <div className="collection_body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="p-4 flex flex-col justify-between">
                <div className="w-full h-50 bg-gray-100 mb-4"></div>
                <div className="h-4 bg-gray-100 w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-100 w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  if (error)
    return (
      <div className="collection_content max-w-6xl mx-auto py-80 px-8">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );

  return (
    <section id="services" className="collection_section">
      {/* Brand Oversized Tee Collection */}
      <div className="collection_content max-w-6xl mx-auto py-30 px-8">
        <SectionTitle title="CHOOSE YOUR PACKAGE" />
        <div className="collection_body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
