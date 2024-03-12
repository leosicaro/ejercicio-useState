import './App.css'
import React, { useState } from 'react';


function App() {
    //Aquí tu código
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');

    // const changeName = (newName) => {
    //     setName(newName)
    // }
    const changeName = (event) => {
        event.preventDefault(); // Evita que el formulario recargue la página
        if (newName.trim() !== '') {
          setName(newName);
          setNewName('');
        }
      };

    return (
        //         <div>
        //             <h2>Teacher Name: {name}</h2>
        //             <ul>
        //                 <li>
        //                     <button onClick={() => changeName('Data')}>Data</button>
        //                 </li>
        //                 <li>
        //                     <button onClick={() => changeName('Reyes')}>Reyes</button>
        //                 </li>
        //                 <li>
        //                     <button onClick={() => changeName('Yolanda')}>Yolanda</button>
        //                 </li>
        //             </ul>
        //         </div>

        //     );
        // };
        <div>
            <h2>Teacher Name: {name}</h2>
            {/* Paso 4: Renderizar el formulario */}
            <form onSubmit={changeName}>
                {/* Paso 4: Renderizar el campo de entrada de texto */}
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="add a name"
                />
                {/* Paso 4: Renderizar el botón de envío del formulario */}
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default App

//ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
