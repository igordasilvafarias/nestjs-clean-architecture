export type UserProps = {
  name: string;
  email: string;
  password: string;
  created_at?: Date;
};

export class User {
  constructor(public readonly props: UserProps) {
    this.props.created_at = this.props.created_at ?? new Date();
  }

  updateName(value: string) {
    this.name = value;
  }

  updatePassword(value: string) {
    this.password = value;
  }

  get name(): string {
    return this.props.name;
  }

  set name(value: string) {
    this.props.name = value;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  set password(value: string) {
    this.props.password = value;
  }

  get created_at(): Date {
    return this.props.created_at;
  }
}
