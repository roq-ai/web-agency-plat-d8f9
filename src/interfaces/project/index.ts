import { TaskInterface } from 'interfaces/task';
import { AgencyInterface } from 'interfaces/agency';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  status: string;
  agency_id?: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  agency?: AgencyInterface;
  _count?: {
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  agency_id?: string;
}
