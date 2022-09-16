import { Observable } from "rxjs"

const promise = new Promise(resolve =>{
  setTimeout(()=>{
    resolve('Hello')
    resolve('World')
  }, 1000)
})

promise.then(result =>{
  console.log(result)
})

const observable = new Observable(observer =>{
  setTimeout(() =>{
    observer.next('Hello')
    observer.next('World')
  }, 1000)
})

observable.subscribe(result =>{
  console.log(result)
})
