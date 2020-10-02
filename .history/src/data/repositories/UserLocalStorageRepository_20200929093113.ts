import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

class UserDTO {
    id: number = 0;
    task: string = "";
    isDone: boolean = false;
}


export class TodoLocalStorageRepositoryImpl implements TodoRepository {

    GetTodo(): Todo[] {

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
