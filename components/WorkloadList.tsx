import type { Work } from "@/lib/types"
import WorkloadItem from "./WorkloadItem"
import { useEffect, useState } from "react"

interface WorkloadListProps {
  workloads: Work[]
}

export const WorkloadList = ({ workloads }: WorkloadListProps) => {
  if (!workloads.length) return <div>No workloads</div>

  const [filteredWorkloads, setFilteredWorkloads] = useState<Work[]>([])

  useEffect(() => {
    setFilteredWorkloads(
      workloads.filter((workload) => workload.complexity > 3)
    )
  }, [workloads])

  return (
    <ul>
      {filteredWorkloads.map((work) => (
        <li key={work.id}>
          <WorkloadItem
            work={work}
            onCancel={async (work) => {
              console.log("Cancel workload", { work })
            }}
          />
        </li>
      ))}
    </ul>
  )
}

export default WorkloadList
