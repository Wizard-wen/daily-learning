#!/usr/bin/env node
const {program} = require('commander');
const inquirer = require('inquirer');
const {spawn} = require('child_process');

const environmentList = [
  { name: 'product', value: 'product' },
  { name: 'test', value: 'test' },
  { name: 'local', value: 'local' }
];

// node demo.js getList
program
  .command('getList')
  .option('--cheese <flavour>')
  .description('获取文件列表')
  .action(async(args) => {
    // options args
    console.log(args);

    const result = await inquirer.prompt({
      type: 'list',
      name: 'answer',
      message: '请选择上传的环境',
      choices: environmentList
    });
    console.log(result);
  })
program.version('0.0.1');
program.parse(process.argv);
