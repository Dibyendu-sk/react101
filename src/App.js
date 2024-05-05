import fetchAccountDtls from "./api";
import SearchBar from "./components/SearchBar";
function App() {
    const handleSubmit=async (inputVal)=>{
        var accountDtls = await fetchAccountDtls(inputVal);
        console.log(accountDtls.name)
    }
    return(
        <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    )
}
export default App;