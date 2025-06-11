export type teamsType = {
  name: string,
  lastName: string,
  role: string,
  stack: string,
}

export type SideBarStacksProps = {
  setSelectedStack: (steam: string) => void;
  selectedStack: string | null;
};

export type ContainerTeamsProps = {
  teams: teamsType[];
  selectedStack: string | null
};