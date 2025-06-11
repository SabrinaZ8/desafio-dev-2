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
      try {
        const response = await axios.get("/data/teams.json");
        setTeams(response.data.filter((team: teamsType) => team.stack === selectedStack));
      } catch (error) {
        console.error("Erro ao buscar os dados da equipe:", error);
      }
    };

    fetchTeams();
  }, [selectedStack]);

  return (
    <div className="flex text-sm bg-gray-10 flex-col sm:flex-row">
      <SideBarStacks setSelectedStack={setSelectedStack} selectedStack={selectedStack}/>
      <ContainerTeams teams={teams} selectedStack={selectedStack}/>
    </div>
  )
}

export default App
