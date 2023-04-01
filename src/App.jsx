import Form from './assets/Components/Form'

function App() {

  return (
    <div className="App">
      <Form data={{
        heading: "Add Form",
        field: "Name",
        buttonText: "Submit"
      }} />
      <br/>
      <Form data={{
        heading: "Edit Form",
        field: "Name",
        buttonText: "Update"
      }} />
    </div>
  )
}

export default App
