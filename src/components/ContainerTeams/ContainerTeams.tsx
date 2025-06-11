import type { ContainerTeamsProps } from "../../types/types";

export const ContainerTeams = ({ teams, selectedStack }: ContainerTeamsProps) => {
  return (
    <main className="container">
      <h1>{`${selectedStack} Team`}</h1>
      <div>
        {teams.map((team, index) => (
          <article key={index}>
            <div className="avatar">
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
