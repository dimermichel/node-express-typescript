import { Request, Response } from 'express';
import createUser from './services/CreateUser';
export function helloWorld(req: Request, res: Response){
    const user = createUser({
        email: 'dimermichel@gmail.com', 
        password: '123456',
        tech: [
            'Node.JS', 
            'ReactJS', 
            'React Native', 
            {title: 'Javascript', experience: 80},
        ]
    });

    res.json({message: 'Hello World'});
} 