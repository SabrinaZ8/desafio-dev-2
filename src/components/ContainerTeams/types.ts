import type{ teamsType } from '../../types/types';

export type ContainerTeamsProps = {
  teams: teamsType[];
  selectedStack: string | null
};