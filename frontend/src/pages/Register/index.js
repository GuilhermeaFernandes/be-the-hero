import React, {useState} from 'react';

import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from "../../assets/logo.svg";
import api from '../../services/api'


export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){

        e.preventDefault();

        const data ={
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try{
            const response = await api.post('ongs', data);
            alert(`Seu id: ${response.data.id}`);
            history.push('/');
        }catch(err){
            alert('Seu cadastro deu erro chefe');
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadaastro</h1>
                    <p>FAca seu cadastro</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Nao tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da Ong"
                        value={name}
                        onChange= {e => setName(e.target.value)}
                    />

                    <input 
                        type="email" 
                        placeholder="email"
                        value={email}
                        onChange= {e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="whatsapp"
                        value={whatsapp}
                        onChange= {e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange= {e => setCity(e.target.value)}
                        />

                        <input 
                            placeholder="UF" 
                            style={{ width: 80}}
                            value={uf}
                            onChange= {e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}