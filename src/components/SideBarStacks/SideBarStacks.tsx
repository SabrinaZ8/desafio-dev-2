import type { SideBarStacksProps } from "./types";

export const SideBarStacks = ({ setSelectedStack }: SideBarStacksProps) => {
  return (
    <aside>
      <h2>Tech Stacks</h2>
      <nav>
        <ul>
          <li>
            <button onClick={() => setSelectedStack("Frontend")}>Frontend</button>
          </li>
          <li>
            <button onClick={() =>setSelectedStack("Backend")}>Backend</button>
          </li>
          <li>
            <button onClick={() =>setSelectedStack("Fullstack")}>Fullstack</button>
          </li>
          <li>
            <button onClick={() =>setSelectedStack("UI/UX")}>UI/UX</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
