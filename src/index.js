const { response } = require('express')
const express = require('express')

const app = express()

app.get("/courses", (_, response) => {
  return response.json(["Course 1", "Course 2", "Course 3"])
})

app.post("/courses", (_, response) => {
  return response.json(["Course 1", "Course 2", "Course 3", "Course 4"])
})

app.put("/courses/:id", (_, response) => {
  return response.json(["Course 7", "Course 2", "Course 3", "Course 4"])
})

app.patch("/courses/:id", (_, response) => {
  return response.json(["Course 7", "Course 6", "Course 3", "Course 4"])
})

app.delete("/courses/:id", (_, reponse) => {
  return response.json(["Course 7", "Course 6", "Course 4"])
})


app.listen(3333, () => {
  console.log("Server initialized")
})