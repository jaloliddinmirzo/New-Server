import Todo from "./Todo";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { Form } from "./Form";
import { Header } from "./Header";

const URL = "http://localhost:3000/odamlar/";



export default function App() {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false);
  const [editValue, setEditValue] = useState("");


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setLoading(true);
    const res = await fetch(URL);
    const data = await res.json();
    setTodos(data);
    setLoading(false);
  }

  const change = (e) => {
    setValue(e.target.value)
  }

  const editChange = (e) => {
    setEditValue(e.target.value)
  }

  const deleteOdam = async id => {
    const res = await fetch(URL + id, {
      method: "DELETE",
    });
  
    if (res.status == 200) {
      setTodos(todos.filter(d => d.id !== id));
    }
  };

  const onKey = async (e) => {
    if (e.key == "Enter") {
      const obj = {
        text: value,
        complited: false,
      }
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const result = await res.json();
      if (res.status == 201) {
        setTodos([...todos,result])
      }
      setValue("")
    }
  }

  const editFunc = async id => {
    
    console.log("sslom");
    const obj = {
      text: editValue,
      complited:false
    };
    const res = await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const result = await res.json();
    if (res.status == 200) {
      setTodos(
        todos.map(d => {
          if (d.id == id) {
            return result;
          } else return d;
        })
      );
    }
  };

  return (
    <div className="flex flex-col items-center py-10">
      <Header></Header>
      <Form change={change} onKey={onKey} value={value}></Form>
      {todos.length > 0 ? todos.map(todo => <Todo key={todo.id} id={todo.id} text={todo.text} deleteOdam={deleteOdam} editFunc={editFunc}></Todo>) :
        ""}
      <Modal editChange={editChange}></Modal>
    </div>
  )
}





// return (
//   <div className="App">
//     <input type="text" onKeyDown={createOdamName} placeholder="odam" />
//     {loading && <h1>Loading...</h1>}
//     {data.length > 0 &&
//       data.map(d => (
//         <>
//           <h1 onClick={() => deleteOdam(d.id)} key={d.id}>
//             {d.id}. {d.nomi}
//           </h1>
//           <button onClick={() => edit(d.id)}>Edit</button>
//         </>
//       ))}
//   </div>
// );