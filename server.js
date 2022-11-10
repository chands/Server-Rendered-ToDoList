const express = require('express');

const app = express();
//body parsing functionality
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'hbs');

let tasks = ['sample task'];
app.get('/', (req, res) => {
  res.render('home', {//object data to be sent to the hbs files.
    title: 'Task Manager',
    tasks
  });
  //let tasklist = tasks.map(task => `<li>${task}</li>`).join('\n');
  // res.send(`
  //   <!DOCTYPE html>
  //   <html lang="en">
  //     <head>
  //       <meta charset="UTF-8">
  //       <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //         <title>Document</title>
  //     </head>
  //     <body>
  //        <!-- content moved from here to home.hbs -->
  //     </body>
  //   </html>`);
});

app.post('/', (req, res) => {
  //res.send('new task added = ' + req.body.newTask);
  tasks.push(req.body.newTask);
  res.redirect('/');
});

app.listen(3000, (req, res) => {
  console.log('Server listening on port 3000');
});