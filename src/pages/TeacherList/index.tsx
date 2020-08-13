import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';



    function TeacherList(){
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState(''); 
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject, 
                week_day,
                time,  
            }
        });

        setTeachers(response.data); 
    }

    return (
       <div id="page-teacher-list" className="container">
          <PageHeader title="Estes são os professores disponíveis." >
              <form id="search-teachers" onSubmit={searchTeachers}> 
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
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

                    <Select 
                        name="week_day" 
                        label="Dia da semana" 
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label:'Domingo'},
                            { value: '1', label:'Segunda-Feira'},
                            { value: '2', label:'Terça-Feira'},
                            { value: '3', label:'Quarta-Feira'},
                            { value: '4', label:'Quinta-Feira'},
                            { value: '5', label:'Sexta-Feira'},
                            { value: '6', label:'Sábado'}
                        ]}
                    />
                  <Input 
                    type="time" 
                    name="time" 
                    label="Hora"
                    value={time}
                    onChange={(e) => { setTime(e.target.value) }}
                  />

                  <button type="submit">
                      Buscar
                  </button>
              </form>
          </PageHeader>

          <main>
              {teachers.map((teacher: Teacher) => {
                  return <TeacherItem key={teacher.id} teacher={teacher}/>; 
              })}
          </main>
       </div>
    )
}



export default TeacherList; 