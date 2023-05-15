import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";

import { useFormik } from "formik";
import * as Yup from "yup";
import { database } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

export const FormCheckoutContained = () => {
  const { cart, getTotalPrice, updateDoc, doc } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
    };

    const ordersCollection = collection(database, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((producto) =>
      updateDoc(doc(database, "productos", producto.id), {
        stock: producto.stock - producto.quantity,
      })
    );
    // cart.map((producto) => {
    //   updateDoc(doc(database, "producto", producto.id)),
    //     { stock: producto.stock - producto.quantity };
    // });
  };
  console.log(orderId);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      nombre: "",
      password: "",
      telefono: null,
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(4, "El nombre debe tener al menos 4 caracteres")
        .max(15, "Estas superando el limite de 15 caracteres"),
      email: Yup.string()
        .email("En este campo es requerido un Email")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe tener al menos una mayuscula, al menos un caracter especial y al menos un numero",
        }),
      telefono: Yup.number().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <h1>{orderId}</h1>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
