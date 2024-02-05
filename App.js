import WelcomeMessage from "./components/welcome";
import StudentInfo from "./components/student-info";
function App() {
return (
<div className="App">
<div className="container mt-3" >
<WelcomeMessage name="Professor" />
<StudentInfo/>
</div>
</div>
);
}
export default App;