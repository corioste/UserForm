import { User } from "../../domain/entities/User";
import { UsersRepository } from "../../domain/repositories/UserRepository";

class UserDTO {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
}


export class UserLocalStorageRepositoryImpl implements UsersRepository {

    GetTodo: Todo[] {

        var jsonString = localStorage.getItem("todos")
        var res = JSON.parse(jsonString || '[]')
        console.log(res)
        return res.map((todo: TodoDTO) => new Todo(todo.id, todo.task, todo.isDone));
    }

    CreateTodo(data: Todo): Todo[] {

        var jsonString = localStorage.getItem("todos")
        var res = JSON.parse(jsonString || '[]')
        res.push(data)
        localStorage.setItem("todos", JSON.stringify(res))
        return res.map((todo: TodoDTO) => new Todo(todo.id, todo.task, todo.isDone));
    }

    UpdateTodo(data: Todo): Todo[] {
        var intData = parseInt(data.id.toString());
        var jsonString = localStorage.getItem("todos")
        var res = JSON.parse(jsonString || '[]')

        for (let i = 0; i < res.length; i++) {
            if (intData === res[i].id){
                res[i].task = data.task
                res[i].isDone = data.isDone
              break;
            }
          }
        
        localStorage.setItem("todos", JSON.stringify(res))
        

        return res.map((todo: TodoDTO) => new Todo(todo.id, todo.task, todo.isDone));
    }

    DeleteTodo(data: Todo): Todo[] {

        var intData = parseInt(data.id.toString())
        var jsonString = localStorage.getItem("todos")
        var res = JSON.parse(jsonString || '[]')
        
        for (let i = 0; i < res.length; i++) {
            if (intData === res[i].id) {
                res.splice(i, 1);
                break;
            }
        }

        localStorage.setItem("todos", JSON.stringify(res))

        return res.map((todo: TodoDTO) => new Todo(todo.id, todo.task, todo.isDone));
    }
}
