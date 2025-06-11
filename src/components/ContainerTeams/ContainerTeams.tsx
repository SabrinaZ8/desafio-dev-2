import type { teamsType } from "../../types/types";
type PropsTeams = {
  teams: teamsType[];
  selectedStack: string | null
};
export const ContainerTeams = ({ teams, selectedStack }: PropsTeams) => {
  return (
    <main>
      <h1 className="text-[26px] font-light text-blue-950 my-9">{`${selectedStack} Team` }</h1>
      <div className="flex flex-wrap gap-6 mt-8">
        {teams.map((team, index) => (
          <article
            key={index}
            className="w-[260px] h-24 flex text-gray-550 px-5 shadow-md/10 items-center"
          >
            <div className="w-12 h-12 rounded-full bg-gray-40 flex items-center justify-center mr-4">
              <span>{team.name.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-gray-950 font-medium">{`${team.name + " " + team.lastName}`}</h2>
              <p className="text-xs">{team.role}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};
