export interface Student {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  course: string;
  created_at: string;
}

export interface StudentUpdateData {
  full_name: string;
  course: string;
}
