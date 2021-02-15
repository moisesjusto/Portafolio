import React, { Component } from 'react'
import moi from './img/moises.jpg'
export default class CV extends Component {
    render() {
        return (
            <div >
                <br />
                <div className=" card">
                    <div className="card-body enc">
                        <div className="row">

                            <div className="col-sm-3">
                                <img src={moi} alt="Moises" className='w-50' />
                            </div>
                            <div className="col-sm-9 ">
                                <h1>Moises Antonio Justo Seymour</h1>
                                <hr />
                            </div>

                        </div>


                    </div>
                    <br />
                    <br />
                    <div className="card-body p-5">
                        <div className="row">

                            <div className="col-sm-3">
                                <p className="h3">Iformacion de contacto</p>
                            </div>
                            <div className="col-sm-6 ">

                                <div className="row">
                                <div className="col-sm-4">
                                    <p className='h5' >
                                        Email:
                                </p>
                                </div>
                                <div className="col-sm-8">
                                    <p className='' >
                                        Moisesjusto2407@gmail.com
                                </p>
                                </div>
                                </div>


                                <div className="row">
                                <div className="col-sm-4">
                                    <p className='h5' >
                                        Pais:
                                </p>
                                </div>
                                <div className="col-sm-8">
                                    <p className='' >
                                        Republica Dominicana
                                </p>
                                </div>
                                </div>


                                <div className="row">
                                <div className="col-sm-4">
                                    <p className='h5' >
                                        Probincia:
                                </p>
                                </div>
                                <div className="col-sm-8">
                                    <p className='' >
                                        Santo Domingo
                                </p>
                                </div>
                                </div>


                                <div className="row">
                                <div className="col-sm-4">
                                    <p className='h5' >
                                        Direcion:
                                </p>
                                </div>
                                <div className="col-sm-8">
                                    <p className='' >
                                        Calle General Sucre #91
                                </p>
                                </div>
                                </div>


                                <div className="row">
                                <div className="col-sm-4">
                                    <p className='h5' >
                                        Contacto:
                                </p>
                                </div>
                                <div className="col-sm-8">
                                    <p className='' >
                                        +1849-632-2021
                                </p>
                                </div>
                                </div>


                            </div>
                            <hr />

                        </div>
                        <br />

                        <div className="row">

                            <div className="col-sm-3">
                                <p className="h3">Experiencia</p>

                            </div>
                            <div className="col-sm-3 ">
                                <p className='h5' >
                                    Excelente
                                </p>
                            </div>
                            <hr />

                        </div>

                        <br />
                        <div className="row">

                            <div className="col-sm-3">
                                <p className="h3">Educacion</p>
                            </div>
                            <div className="col-sm-5 ">
                                <p className='h5' >
                                    Falcom Master,
                                    Fazt,
                                    Documentaciones, ent:..
                                </p>
                            </div>
                            <hr />

                        </div>
                        <br />
                        <div className="row">

                            <div className="col-sm-3">
                                <p className="h3">Idioma</p>
                            </div>
                            <div className="col-sm-5 ">
                                <p className='h5' >
                                    Español
                                </p>
                            </div>
                            <hr />

                        </div>
                        <br />
                        <div className="row">

                            <div className="col-sm-3">
                                <p className="h3">Ojectivo Profecional</p>
                            </div>
                            <div className="col-sm-5 ">
                                <p className='h5' >
                                    Ser El Mejor Colaborador De Su Equipo
                                </p>
                            </div>
                            <hr />

                        </div>
                        <br />
                        <div className="row">

                            <div className="col-sm-3">
                                <p className="h3">Trabajos Echo</p>
                            </div>
                            <div className="col-sm-5 ">
                                <p className='' >
                                https://moisesjusto.github.io/prueba/
                                </p>
                                <p className='' >
                                https://moises2406.github.io/calculadora/
                                </p>
                            </div>
                            <hr />

                        </div>
                        <br/>
                        <br/>
                        <br/>

                        <div className="row">
                            <hr className='col-sm-5 ' />
                            <p className="h1 col-sm-1 text-center">O</p>
                            <hr className='col-sm-5' />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
