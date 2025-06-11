import { useEffect, useState } from "react"
import { ContainerTeams } from "./components/ContainerTeams/ContainerTeams"
import { SideBarStacks } from "./components/SideBarStacks/SideBarStacks"
import axios from "axios"
import type { teamsType } from "./types/types"

function App() {
  const [selectedStack, setSelectedStack] = useState<string | null>("Frontend")
  const [teams, setTeams] = useState<teamsType[]>([])

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await axios.get('/data/teams.json')
      setTeams(response.data.filter((team: teamsType) => team.team === selectedStack))
    }

    fetchTeams()
  }, [selectedStack])

  return (
    <div className="flex text-sm">
      <SideBarStacks setSelectedStack={setSelectedStack}/>
      <ContainerTeams teams={teams}/>
    </div>
  )
}

export default App
