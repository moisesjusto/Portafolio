import React from 'react'

import a from '../IMG/html.jpg'
import b from '../IMG/css.png'
import c from '../IMG/jv.jpg'

import d from '../IMG/node.jpg'
import e from '../IMG/ex.jpg'
import f from '../IMG/db.png'

import g from '../IMG/r.png'
import h from '../IMG/rn.png'
import i from '../IMG/descarga.png'

import j from '../IMG/hw.jpg'
import k from '../IMG/g.png'
import m from '../IMG/gh.png'

import n from '../IMG/deploy.png'

import ñ from '../IMG/bos.jpg'
import o from '../IMG/hbs.png'
import p from '../IMG/an.png'




import q from '../IMG/deno.png'
import r from '../IMG/tsf.png'
import s from '../IMG/type.jpg'


//imgenes de redes
import A from '../static/dis.jpg'
import B from '../static/lik.jpg'
import C from '../static/tw.png'
import E from '../static/descarga.jpg'


import F from './img/moisescal.png'
import G from './img/moisesp.png'

//cursos
export const D = [{name:'HTML',IMG:a},{name:'CSS',IMG:b},{name:'JAVASCRIPT',IMG:c},{name:'NODE',IMG:d},{name:'EXPRESS',IMG:e},{name:'MONGODB',IMG:f},{name:'REACT',IMG:g},{name:'REACT NATIVE',IMG:h},{name:'PYTHON',IMG:i},{name:'HARDWARE & SOFTWARE',IMG:j},{name:'GIT',IMG:k},{name:'GITHUB',IMG:m},{name:'DEPLOY',IMG:n},{name:'BOOTSTRAP',IMG:ñ},{name:'HANDLEBARS',IMG:o},{name:'ANIMACIONES',IMG:p}]

//cursos por hacer
export const DD = [{name:'DENO',IMG:q},{name:'TENSORFLOW',IMG:r},{name:'TYPESCRIPT',IMG:s}]

//redes
export const DDD = [{name:'DISCOR',IMG:A,link:'https://discord.com/channels/742915141036802078/742915141036802081'},{name:'LINKEDIN',IMG:B,link:'https://www.linkedin.com/in/moises-justo-a4b143203/'},{name:'TWITTER',IMG:C,link:'https://twitter.com/MoisesJusto3'}]


//whasa
export const DS = [{name:`WHATSAPP: 849-632-2021`,IMG:E}]


//trabajos
export const DT = [{name:'Calculador',IMG:F,url:'https://moises2406.github.io/calculadora/'},{name:'Apps',IMG:G,url:'https://moisesjusto.github.io/prueba/'}]




export  function Imagenes(props) {
    return (
        <div>
            <div className="card wisin">
                    <img src={props.src} className="card-img-top " alt="Imagen de Moises Antonio Justo Seymour" />
                    <div className="card-body">
                        <p className="card-text">{props.p}</p>
                    </div>
                </div>
        </div>
    )
}
