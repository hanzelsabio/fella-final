import React, { createContext, useContext, useState, useEffect } from "react";
import productsData from "../data/productsData";
import servicesData from "../data/servicesData";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Simulate API delay
        await new Promise((res) => setTimeout(res, 300));

        setProducts(productsData);
        setServices(servicesData);

        setLoading(false);
      } catch (err) {
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        services,
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
