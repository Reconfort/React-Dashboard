import React,{useState} from 'react'
import styled from 'styled-components'
import { FaPlusCircle } from 'react-icons/fa'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const handleSubmit = ()=>{
        setTodos(currentTodos => {
            const lastItem = currentTodos[currentTodos.length-1]
            const todoTemplate = {
                id: lastItem ? lastItem.id+1 : 1,
                title: newTodo,
                completed: false
            }
            return [...currentTodos, todoTemplate]
        })
    }
    const toggleCompleted = (id)=>{
        const tempTodos = todos

        const updatedTodos = tempTodos.filter(todo => {

            if (todo.id === id) {
                todo.completed = !todo.completed
                return todo
            }else{
                return todo
            }
        })

        setTodos(updatedTodos)
    }
  return (
    <Container>
        <Holder>
            <Message>Todo List</Message>
            <Form>
                <Input type="text" value={newTodo} onChange={(e) =>  setNewTodo(e.target.value)} placeholder='Enter your todo'/>
                <Submit type="button" onClick={
                    handleSubmit
                }>
                    <FaPlusCircle/>
                </Submit>
            </Form>
            {todos.map((todo,index) =>  
            <div key={index}>
                <p>{todo.title}</p>
               <input type="checkbox" onChange={()=>toggleCompleted(todo.id)} checked={todo.completed}/>
            </div>
            )}
           
        </Holder>
    </Container>
  )
}

export default Todo

const Container = styled.div``
const Holder = styled.fieldset`
    border: 1px solid blue;
    padding: 8px 5px 20px 5px;
    border-radius:10px;
    text-align: center;
    width: 100%;

`
const Message = styled.legend`
    background-color: beige;
    padding: 2px 10px;
    border-radius: 10px;
    border:1px solid blue;
`
const Form = styled.form`
    background-color: aliceblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px ;
`
const Input = styled.input`
    background-color: transparent;
    color: "rgb(42, 92, 192";
    outline: none;
`
const Submit = styled.button``