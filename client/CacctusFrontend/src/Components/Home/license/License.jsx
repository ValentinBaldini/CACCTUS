import React from 'react';
import "./license.css";

const License = () => {
    return (
        <div className='license-container'>
            <div className="license">
                <div className="license-title">
                    <h2>¿Quieres vender beats con <span className='license-cacctus-green'>CACCTUS</span>?</h2>
                    <p>Elige la licecia que más se ajuste a tus necesidades para empezar a vender</p>
                </div>

                <div className="license-code-container">
                    <div className="license-code">
                        <div className="license-code-title">
                            <h2>Licencia BÁSICA</h2>
                            <p>$10.000</p>
                        </div>

                        <hr/>

                        <div className="license-code-rules">
                            <ul>
                                <li>Publicación de hasta 10 beats diarios</li>
                                <li>Soporte básico</li>
                                <li>Acceso a estadisticas de ventas</li>
                            </ul>
                        </div>

                        <button className="btn-license-code">
                            Ver detalles
                        </button>
                    </div>

                    <div className="license-code">
                        <div className="license-code-title">
                            <h2>Licencia BÁSICA</h2>
                            <p>$10.000</p>
                        </div>

                        <hr/>

                        <div className="license-code-rules">
                            <ul>
                                <li>Publicación de hasta 10 beats diarios</li>
                                <li>Soporte básico</li>
                                <li>Acceso a estadisticas de ventas</li>
                            </ul>
                        </div>

                        <button className="btn-license-code">
                            Ver detalles
                        </button>
                    </div>

                    <div className="license-code">
                        <div className="license-code-title">
                            <h2>Licencia BÁSICA</h2>
                            <p>$10.000</p>
                        </div>

                        <hr/>

                        <div className="license-code-rules">
                            <ul>
                                <li>Publicación de hasta 10 beats diarios</li>
                                <li>Soporte básico</li>
                                <li>Acceso a estadisticas de ventas</li>
                            </ul>
                        </div>

                        <button className="btn-license-code">
                            Ver detalles
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default License;