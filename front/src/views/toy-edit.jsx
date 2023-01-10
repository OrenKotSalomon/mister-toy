import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toyService } from "../services/toy.service";
import { saveToy } from "../store/toy.action";

import Select from 'react-select';
import { useRef } from "react";
import { MyForm } from "./my-form";
// import { colourOptions } from '../data';

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});


export function ToyEdit() {
    const [newToy, setNewToy] = useState(toyService.getEmptyToy())
    const [labelValue, setLabelValue] = useState(null)
    const labels = useRef(toyService.getDefaultLabels())
    const { toyId } = useParams()
    const navigate = useNavigate()
    // toyService.getById(toyId) || toyService.getEmptyToy()
    useEffect(() => {
        if (!toyId) return
        getToy()
    }, []);

    function getToy() {
        toyService.getById(toyId).then(toy => {

            setNewToy(toy)
        })
    }

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setNewToy(prevToy => {
            return { ...prevToy, [field]: value }
        })
        console.log(newToy);
    }

    function onSaveToy() {
        saveToy(newToy).then(savedToy => {
            console.log('toy saved', savedToy);
            // showSuccessMsg(`Todo added ${savedTodo._id}`)
            // addActivities(savedTodo, 'add')
        })
            .catch(err => {
                // showErrorMsg('cannot add todo')
            })
    }

    function onSubmitToy(ev) {
        ev.preventDefault()
        console.log('hii');
        onSaveToy()
        navigate('/toy')
    }
    function temp(ev) {
        setLabelValue(prev => {
            let labels = ev.map(label => label.label)
            setNewToy(prevToy => ({ ...prevToy, labels }))
        })
    }

    return (
        <Fragment>

            {/* <section className="toy-modal">
                <Link to='/toy'>exit</Link>
                <form onSubmit={onSubmitToy} action="name">
                    <label htmlFor=""></label>
                    <input onChange={handleChange} type="text" name="name" id="name" placeholder="enter toy name"
                        value={newToy.name}
                    />
                    <label htmlFor="price"></label>
                    <input onChange={handleChange} type="number" name="price"
                        id="price" placeholder="enter toy price"
                        value={newToy.price}
                    />
                 
                    <label htmlFor="description"></label>
                    <textarea onChange={handleChange} name="description" id="description"
                        value={newToy.description}
                    ></textarea>
                    <button>sumbit toy</button>
                </form>
            </section> */}
            <Formik
                initialValues={{
                    firstName: '',
                    number: '',
                }}
                validationSchema={SignupSchema}

            >
                {({ errors, touched }) => (
                    <Form className='formik toy-modal' onSubmit={onSubmitToy}>
                        <Link to='/toy'>exit</Link>
                        <Field onChange={handleChange} type="text" name="name" id="name" placeholder="enter toy name"
                            value={newToy.name} />
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <Field onChange={handleChange} type="number" name="price"
                            id="price" placeholder="enter toy price"
                            value={newToy.price} />
                        {errors.firstName && touched.firstName ? (
                            <span>{errors.firstName}</span>
                        ) : null}
                        <label htmlFor="description"></label>
                        <textarea className="textarea" onChange={handleChange} name="description" id="description"
                            value={newToy.description}
                        ></textarea>
                        <Select
                            value={labelValue}
                            onChange={temp}
                            isMulti={true}
                            name="label"
                            options={labels.current}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                        <button type="submit">Submit toy</button>
                    </Form>
                )}
            </Formik>
            <Link className="background" to='/toy'>exit</Link>
        </Fragment>
    )
}