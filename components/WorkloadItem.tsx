import type { Work } from "@/lib/types"
import { observer } from "mobx-react-lite"
import moment from "moment"

interface WorkloadItemProps {
  work: Work
  onCancel: (work: Work) => Promise<unknown>
}

export const WorkloadItem = observer<WorkloadItemProps>(
  ({ work, onCancel }) => {
    return (
      <div>
        <h3>Workload #{work.id}</h3>
        <div>Complexity: {work.complexity}</div>

        <div>Status: {work.status}</div>

        {work.status === "WORKING" && (
          <>
            <div>Complete date: {moment(work.completeDate).format()}</div>
            <button onClick={() => onCancel(work)}>Cancel</button>
          </>
        )}
      </div>
    )
  }
)

export default WorkloadItem
