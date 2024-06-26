import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const anExampleVariable = "Hello World"
console.log(anExampleVariable)
console.log(anExampleVariable.toUpperCase())
type JobType = {
    name: String
}
class Job{
    name: string
    constructor(){
        this.name = "999"
    }
}
const job = new Job()
const batch = new Map<string, Array<Job>>()
const child: Array<Job> | undefined = batch.get(job.name)
if (child === undefined){

}
else{
    child.push(job)
}