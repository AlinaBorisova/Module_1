'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr) => {
  const filtered = allStudents.filter(item => !failedStudents.includes(item))
    console.log('Сдали экзамен:',filtered);
  };
    
filter();
