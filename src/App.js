

import { Toaster } from 'sonner';
import './App.css';
import Main from './Components/MainPage/Main';
import AdminMain from './Admin/AdminMain/AdminMain';






function App() {
  return (
    <div className="App">
<Toaster richColors position='top-right'/>
    <AdminMain/>
      <Main/>
     
     
    </div>
  );
}

export default App;
