interface IForDateValidation {
  val: string;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  setErrorForDate: Dispatch<SetStateAction<string>>;
}
