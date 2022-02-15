#!/usr/bin/env node
const {program} = require('commander');
const inquirer = require('inquirer');

const domainTypeList = [
  {name: 'frontend', value: 'frontend'},
  {name: 'backend', value: 'backend'}
];

// node demo.js getList
program
  .command('choose')
  .option('--frontend')
  .option('--backend')
  .description('请选择你感兴趣的类型')
  .action(async (args) => {
    const result = await inquirer.prompt({
      type: 'list',
      name: 'answer',
      message: '请选择你感兴趣的类型',
      choices: domainTypeList
    });
    console.log(result);
  });
program.version('0.0.1');
program.parse(process.argv);
