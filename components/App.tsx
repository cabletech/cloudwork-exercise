import CloudworkService from "@/lib/mock-service"
import type { CreateRequest, GetAllResponse } from "@/lib/types"
import { makeAutoObservable } from "mobx"
import { observer, useLocalObservable } from "mobx-react-lite"
import { useEffect } from "react"
import WorkloadForm from "./WorkloadForm"
import WorkloadList from "./WorkloadList"

export const App = observer(() => {
  const app = useLocalObservable(() => {
    return new AppController()
  })

  useEffect(() => {
    app.init()
  }, [app])

  return (
    <div>
      <h1>CloudWork</h1>
      <hr />
      <div>
        <h2>Create workload</h2>
        <WorkloadForm onSubmit={app.createWorkload} />
      </div>
      <hr />
      <div>
        <h2>Workloads</h2>
        <WorkloadList workloads={app.workloads} />
      </div>
    </div>
  )
})

export default App

class AppController {
  private hasInited = false

  private cloudworkClient = new CloudworkService()

  private fetchedData: GetAllResponse = { workloads: [] }

  constructor() {
    makeAutoObservable(this)
  }

  get workloads() {
    return this.fetchedData.workloads
  }

  init = () => {
    // react strict-mode in development calls useEffects twice
    if (this.hasInited) return
    this.hasInited = true

    // add some dummy data when app boots to get started
    this.fetchedData.workloads = [
      {
        id: 0,
        status: "WORKING",
        completeDate: new Date(),
        complexity: 1,
      },
      {
        id: 1,
        status: "SUCCESS",
        completeDate: new Date(),
        complexity: 1,
      },
      {
        id: 2,
        status: "FAILURE",
        completeDate: new Date(),
        complexity: 1,
      },
    ]
  }

  createWorkload = async (params: CreateRequest) => {
    // TODO: create workload
    console.log("create workload", params)

    // await this.cloudworkClient.create(params)
    // ...
  }
}
