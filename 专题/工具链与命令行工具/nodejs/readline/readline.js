const readline = require('专题/工具链与命令行工具/nodejs/readline/readline');

;(() => {


  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('What do you think of Node.js? ', (answer) => {
    // TODO：记录答案到数据库中
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
  });
})()
