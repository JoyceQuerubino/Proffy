import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm(){
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas" 
                description="O primeiro passo é preencher este formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options={[
                            { value: 'Artes', label:'Artes'},
                            { value: 'Biologia', label:'Biologia'},
                            { value: 'Ciências', label:'Ciências'},
                            { value: 'Educação Física', label:'Educação Física'},
                            { value: 'Geografia', label:'Geografia'},
                            { value: 'História', label:'História'},
                            { value: 'Matemática', label:'Matemática'},
                            { value: 'Portugês', label:'Portugês'},
                            { value: 'Química', label:'Química'}
                        ]}
                    />

                    <Input name="cost" label="Custo por aula" />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main>
     </div>
    )
}

export default TeacherForm; 