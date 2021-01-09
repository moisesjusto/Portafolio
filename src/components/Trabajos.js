import React, { Component } from 'react'
import {Imagenes,DT} from './imagenes'

export default class Redes extends Component {
    render() {
        return (
            <div>
                 <br />
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        DT.map((i) => (
                            <a className='text-decoration-none' target='_black' href={i.url}>
                            <Imagenes
                                src={i.IMG}
                                p={i.name}
                            />
                            </a>
                        ))
                    }
                   
                </div>
            </div>
        )
    }
}
