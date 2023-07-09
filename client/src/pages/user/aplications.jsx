import React from 'react';
import { useEffect, useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Aplication from './components/aplication';

import { getAplicationsByAplicantId } from '../../api/aplicaciones';
import { getSeleccionados } from '../../api/seleccionados';
import { searchAplicationIn } from '../../utilities/components';


const Aplications = () => {
    const [aplications, setAplications] = useState([]);
    const { user } = useRouteLoaderData("userSessionHome");


    useEffect(() => {
        const loadAplications = async () => {
            const currentAplications = await getAplicationsByAplicantId(user.id);
            const selectedAplications = await getSeleccionados();
            searchAplicationIn(currentAplications, selectedAplications);
            setAplications(currentAplications);
        };
        loadAplications()
    }, [user]);
    console.log(aplications);
    return (
        <Row id="bodyInfoContainer">
            <Col className="mx-auto my-5" xs={12} md={9}>
                <Row>
                    <Col className='mb-4'>
                        <h2 className='text-center'>Mis aplicaciones</h2>
                        <p>Aquí hay algunas cosas que debes tener en cuenta a la hora de aplicar a las ofertas:<br /><br />
                            <ol>
                                <li>Puedes aplicar unicamente a ### ofertas de manera simultanea.</li>
                                <li>El estado de una oferta será actualizado una vez pases de selección. Este proceso consta de tres fases:
                                    <br />
                                    <ul>
                                        <li><strong>En evaluación:</strong> Tu aplicación ha sido registrada. Esta será revisada lo mas pronto posible</li>
                                        <li><strong>SELECCION:</strong> Felicidades, has pasado el proceso inicial y ahora pasaras a realizar una entrevista y una cita medica para validar que seas apto para el cargo. Una vez tengas este estado, el resto de tus aplicaciones serán eliminadas.
                                            <br />
                                            <mark>NOTA:</mark> Serás informado por correo electrónico sobre los pasos a seguir una vez seleccionado. En este se indican fechas y direcciones.
                                        </li>
                                        <li><strong>PRE-CONTRATACION:</strong> Has pasado la entrevista, y tus resultados médicos han sido satisfactorios, solo queda que firmes el contrato.
                                            <br />
                                            <mark>NOTA:</mark> Serás informado por correo electrónico sobre los pasos a seguir una vez seleccionado. En este se indican fechas y direcciones.
                                            Cabe resaltar también que, una vez esto, si no te presentas, quedarás BLOQUEADO PERMANENTEMENTE. Por otra parte, si sigues los pasos correctamente y dentro de los plazos estipulados, tu cuenta será eliminada, y los documentos cargados pasarán a ser parte de tu registro de empleado.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex flex-wrap justify-content-center">
                        {aplications.map((aplication) => <Aplication aplication={aplication} />)}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Aplications;
