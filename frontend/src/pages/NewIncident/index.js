import React, {useState} from 'react';
import './style.css';
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api'

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        };

        try {
            api.post('incidents', data, {
                headers:{
                    authorization: ongId,
                }
            })

            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso');
        }

    }

    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadaastrar novo caso</h1>
                <p>Registre seu caso</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para Home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                    placeholder="Titulo"
                    value={title}
                    onChange= {e => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder="Descricao"
                    value={description}
                    onChange= {e => setDescription(e.target.value)}
                />
                <input 
                    placeholder="Valor em reais"
                    value={value}
                    onChange= {e => setValue(e.target.value)}
                />
            
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}
