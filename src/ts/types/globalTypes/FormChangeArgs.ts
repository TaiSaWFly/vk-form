export type FormChangeArgs<Name, Value, N = null> = {
  name: Name;
  value: Value | N;
};
