import './App.css';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';
import Theme from './features/theme/Theme';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery } from './services/post';

function App() {
 // const responseInfo = useGetAllPostQuery()
 // const responseInfo = useGetPostByIdQuery(3)
  const responseInfo = useGetPostByLimitQuery(3)


  console.log("Response Information: ", responseInfo)
  console.log("Data: ", responseInfo.data)
  console.log("Success: ", responseInfo.isSuccess)

  if (responseInfo.isLoading) return <div>Loading....</div>
  if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>

  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      {/* <Counter/>
      <Coin/>
      <Theme/> */}
      {/* <div>

      <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
      {
        responseInfo.data.map((post, i) =>
          <div key={i}>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        )
      }
        </div> */}

        {/* <div>

      <h1>Redux Toolkit - RTK Query (Single Data)</h1>


          <div >
           <h2>{responseInfo.data.id} {responseInfo.data.title}</h2>
           <p>{responseInfo.data.body}</p>
            <hr />
          </div>
 
        </div> */}

{/* Get Limited Data */}
     <div className="App">
       <h1>Redux Toolkit - RTK Query (Get Limited  Data)</h1>
       {
         responseInfo.data.map((post, i) =>
           <div key={i}>
             <h2>{post.id} {post.title}</h2>
             <p>{post.body}</p>
             <hr />
           </div>
         )
       }
     </div>
    </div>
  );
}

export default App;
