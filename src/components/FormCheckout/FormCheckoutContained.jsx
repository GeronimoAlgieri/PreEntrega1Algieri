import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import "./FormCheckoutContained.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { database } from "../../firebase";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

export const FormCheckoutContained = () => {
  const { cart, precioTotal, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [user, setUser] = useState(null);

  const checkoutFn = (e, data) => {
    e.preventDefault();

    let total = precioTotal();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    setUser(dataOrder);

    registrarVenta();
  };

  const registrarVenta = async () => {
    const compra = await addDoc(collection(database, "orders"), {
      venta: { ...cart },
      cliente: user,
    });
    setOrderId(compra._key.path.segments[1]);

    cart.map((prod) =>
      updateDoc(doc(database, "producto", prod.id), {
        stock: prod.stock - prod.quantity,
      })
    );
    clearCart();
  };

  const { handleChange, errors, values } = useFormik({
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
        <h2 className="mensaje">
          Muchas gracias por su compra, por favor guarde su numero de compra que
          es {orderId}. Nos contactaremos con usted por email para coordinar el
          envio
        </h2>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={checkoutFn}
          values={values}
        />
      )}
    </div>
  );
};
