import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

interface Command {
  action: string;
  params: string[];
}

app.post('/execute', (req: Request, res: Response) => {
  const command: Command = req.body;
  
  if (command.action === 'startTask') {
    console.log(`Starting task with params: ${command.params.join(', ')}`);
    res.status(200).send('Command executed');
  } else {
    res.status(400).send('Invalid command');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
