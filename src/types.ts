export interface Task {
  id: number;
  name: string;
  effort: number;
  alignments: number[]; // Alignment values between 0 and 1
}
