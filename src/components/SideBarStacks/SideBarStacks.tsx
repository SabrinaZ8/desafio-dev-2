import type { SideBarStacksProps } from "./types";

export const SideBarStacks = ({ selectedStack, setSelectedStack }: SideBarStacksProps) => {
  const teams = ["Frontend", "Backend", "Fullstack", "UI/UX"];

  return (
    <aside className="w-64 min-w-64 px-6 shadow-md/10 mr-8 h-screen bg-white">
      <h2 className="text-blue-950 font-medium text-lg py-6 border-b-2 border-white-10">
        Tech Stacks
      </h2>
      <nav className="nav-list-stacks">
        <ul>
          {teams.map((team) => (
            <li
              key={team}
              className={`rounded-md my-1 ${
                selectedStack === team ? "bg-white-10 font-medium text-gray-950" : "text-gray-750"
              }`}
            >
              <button
                className="w-full text-left px-4 py-2"
                onClick={() => setSelectedStack(team)}
              >
                {team}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
