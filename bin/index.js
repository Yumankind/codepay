#! /usr/bin/env node
import inquirer from 'inquirer';
console.log('Greetings from paycode 💸💾!')

const project = (process.argv[2] || 'none');
if(project === 'none'){
    console.log('To download a project, use paycode <project-name>')
} else {
    //give us your e-mail
    //verify if the project exists
    //download the project
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail? (associated with the project <'+project+'>)',
    },
  ])
  .then(answers => {
    console.info('Your answer are :', JSON.stringify(answers));
  });
}