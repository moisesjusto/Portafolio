import React, { Component } from 'react'
import { Imagenes, D,DD } from './imagenes'



export default class Especialista extends Component {
    render() {
        return (
            <div>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        D.map((i) => (

                            <Imagenes
                                src={i.IMG}
                                p={i.name}
                            />
                        ))
                    }
                </div>
                <br />
                <h2>En curso</h2>
                <hr />

                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        DD.map((i) => (

                            <Imagenes
                                src={i.IMG}
                                p={i.name}
                            />
                        ))
                    }
                </div>

            </div>
        )
    }
}
