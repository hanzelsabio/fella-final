import React from "react";
import { useProducts } from "../../../context/ProductContext";

import SectionTitle from "../../common/SectionTitle";

import ProductCard from "./ProductCard";

import "./product.css";

const Products = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <section className="collection_section">
        <div className="collection_content max-w-6xl mx-auto py-24 px-8">
          <div className="collection_body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="p-4 flex flex-col justify-between rounded-lg mt-30"
              >
                {/* Image skeleton */}
                <div className="w-full h-70 bg-gray-200 rounded mb-10" />

                {/* Title skeleton */}
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />

                {/* Swatches */}
                <div className="flex justify-center gap-2 mt-3">
                  <div className="w-5 h-5 bg-gray-200 rounded-full" />
                  <div className="w-5 h-5 bg-gray-200 rounded-full" />
                  <div className="w-5 h-5 bg-gray-200 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="collection_content max-w-6xl mx-auto py-80 px-8">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section id="services" className="collection_section">
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
