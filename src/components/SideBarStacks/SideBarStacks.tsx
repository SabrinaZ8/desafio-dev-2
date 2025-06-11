import type { SideBarStacksProps } from "../../types/types";

export const SideBarStacks = ({ selectedStack, setSelectedStack }: SideBarStacksProps) => {
  const teams = ["Frontend", "Backend", "Fullstack", "UI/UX"];

  return (
    <aside className="aside-stacks">
      <h2>Tech Stacks</h2>
      <nav className="nav-list-stacks">
        <ul>
          {teams.map((team) => (
            <li
              key={team}
              className={`${selectedStack === team ? "bg-white-10 font-medium text-gray-950" : "text-gray-750"}`}
            >
              <button
                className="w-full text-left px-6 py-2 cursor-pointer"
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
