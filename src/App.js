import MainPage from "./component/MainPage.jsx";
import "./App.css"


function App() { 
    return (
        <div > 
          
            <div className="pagecontainer" >
                <MainPage>Pending:</MainPage>
                <MainPage>Completed:</MainPage>
            </div>
        </div>
    );
}

export default App;
