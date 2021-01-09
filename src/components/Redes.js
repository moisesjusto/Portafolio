import React, { Component } from 'react'
import {Imagenes,DDD,DS} from './imagenes'

export default class Redes extends Component {
    render() {
        return (
            <div>
                 <br />
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        DDD.map((i) => (
                            <a className='text-decoration-none' target='_black' href={i.link}>
                            <Imagenes
                                src={i.IMG}
                                p={i.name}
                            />
                            </a>
                        ))
                    }
                    {
                        DS.map((i) => (
                            
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
