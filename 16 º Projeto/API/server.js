import express from "express"
import cors from "cors"
import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

const app = express()
app.use(express.json());
app.use(cors());


app.post('/usuarios', async (req, res) =>{

  await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    //users.push(req.body)

    res.status(201).json(req.body)
})
app.get('/usuarios', async (req, res) =>{

     let users = []

     if(req.query){
            users = await prisma.user.findMany({
              where: {
                name: req.query.name ,
                email: req.query.email,
                age: req.query.age
              }
            })
     } else {
      users = await prisma.user.findMany

     }
    

 res.status(200).json(users)

})

app.put('/usuarios/:id', async (req, res) =>{

  await prisma.user.update({
          where: {
            id: req.params.id

          },
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    users.push(req.body)

    res.status(201).json(req.body)
})

app.delete('/usuarios/:id' , async (req, res) =>{
     await prisma.user.delete({
      where: {
        id: req.params.id
      }
     
    })
     res.status(200).json({ message: 'Usuário deletado com Sucesso!'})
})

app.listen(3000)

/*

   Criar nossa API de usuarios
   
   -Criar um usuario
   -Listar todos os usuarios
   -Editar um usuarios
   -Deletar um usuario

 1) Tipo de Rota / Método HTTP
 2) Endereço


 abnersilva1009_db_user
 PZHUfDh7izqcP9dN
*/



