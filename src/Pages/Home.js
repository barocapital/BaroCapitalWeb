import React from "react";
import img from '../GlobalImages';
import * as Links from '../GlobalLinks';
import './Home.css';

export default function Home() {
    return (
        <div className="div-principal">
            <img className="image-comingsoon" src={img("coming")} />
            <center>
                <p className="text2 b i">Sabemos que el efectivo es el rey</p>
                <p className="text1 b i color310">Nosotros sólo lo transformamos</p>
                <p className="font25" name="Registro"><br /> ¡Regístrate
                    <a className="ancla color310" id="Registro" href={Links.registroPagina} target="_blank"> aquí </a>
                    para informarte de nuestro lanzamiento y seas uno de los usuarios afortunados!
                </p>
            </center>

            <br />

            <div className="flex-responsive">
                <div className="col div-size margin20">
                    <div className="">
                        <img className="img-logo-web" src={img("logoWeb")} />
                        <img className="img-line" src={img("linea")} />
                        <p className="text2 b i margin-right" align="right">La gente no necesita cuentas bancarias,</p>
                        <p className="text1 b i margin-right color310" align="right">necesita hacer pagos.</p>
                    </div>
                </div>
                <div className="col margin20">
                    <iframe
                        src="https://www.youtube.com/embed/oZyUqldvtgA"
                        title="YouTube video player"
                        className="iframe-video margin-right"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div className="ancla" id="Video">
                <p className="font25">Así como Juan y María, existen muchos ciudadanos en la república que tienen grandes problemas frecuentemente
                    cuando quieren realizar sus pagos, por lo que las personas suelen tener retrasos no intencionados a la hora de
                    realizar sus transferencias.                    </p>
                <br />
                <p className="font25">Nosotros tenemos el propósito de mejorar sistema financiero actual,
                    a traves de nuestra aplicación móvil que permitirá a los usuarios realizar sus pagos en cuestion de segundos
                    y sin batallar, de esta forma crear un sistema mucho más eficiente para realizar pagos y transferencias de
                    una forma segura y sin riesgos, por lo que necesitamos tu apoyo para poder crecer en conjunto y
                    llegar mas pronto a la gente.</p>
            </div>

            <center className="">
                <h1 className="font60 ancla2" id="Fundadores">Fundadores</h1>
            </center>


            <div className="row">
                <div className="fill"></div>
                <div className="cols">
                    <img className="image-founder" src={img("Richard")} />
                    <p className="font30 color310 b">Richard</p>
                    <p className="font20">Administrador de riesgos, entusiasta de Blockchain y asesor estratégico de 3 proyectos Web3.</p>
                </div>
                <div className="fill"></div>
                <div className="cols">
                    <img className="image-founder" src={img("Irwing")} />
                    <p className="font30 color310 b">Irwing Tello</p>
                    <p className="font20">Desarrollador certificado en Blockchain
                        <br />5+ años de experiencia y fundador de DFH</p>
                </div>
                <div className="fill"></div>
            </div>
            <div className="row">
                <div className="fill"></div>
                <div className="cols">
                    <img className="image-founder" src={img("Luis")} />
                    <p className="font30 color310 b">Luis Garza</p>
                    <p className="font20">Desarrollador de Blockchain, Contribuidor DFH del Multi-Chain NFT Visor</p>
                </div>
                <div className="fill"></div>
                <div className="cols">
                    <img className="image-founder" src={img("Samuel")} />
                    <p className="font30 color310 b">Samuel Polino</p>
                    <p className="font20">Desarrollador de Blockchain, Contribuidor DFH del Multi-Chain NFT Visor</p>
                </div>
                <div className="fill"></div>

            </div>
            <div className="row">
                <div className="fill last"></div>
                <div class="cols">
                    <img className="image-founder" src={img("Dylan")} />
                    <p className="font30 color310 b">Dylan Molina</p>
                    <p className="font20">Desarrollador de Blockchain, Buildspace N&W S1 Cohort</p>
                </div>
                <div className="fill last"></div>
            </div>

            <div className="clear-both"></div>

            <center>
                <p className="font25 color310">#InclusionFinanciera<br />#Web3</p>
            </center>
        </div>
    );
}