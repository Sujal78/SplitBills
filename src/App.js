
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
// import About from './Components/About';
function App() {
  return (
    <>

    <Navbar title = "TextUtils" aboutText = " About TextUtils"/>
    <div className="container" my3>
    <TextForms heading = "Enter the text to analyze"/>
    {/* <About/> */}
    </div>
    
    </>

  );
}

export default App;
