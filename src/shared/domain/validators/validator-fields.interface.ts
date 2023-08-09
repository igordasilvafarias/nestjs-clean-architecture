export type FieldsErrors = {
  [key: string]: string[];
};

export interface ValidatorFieldInterface<PropsValidated> {
  errors: FieldsErrors;
  validatedData: PropsValidated;
  validate(data: any): boolean;
}
