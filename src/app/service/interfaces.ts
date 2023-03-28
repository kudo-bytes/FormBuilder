export interface UserData {
  email: string | null | undefined,
  password: string | null | undefined,
  username?: string | null | undefined,
}

export interface SelectOption {
  id: string,
  content: string,
}

export interface FormElement {
  id: string,
  type: string,
  placeholderText: string,
  width: number,
  height?: number,
  required?: boolean,
  borderWidth?: string,
  borderColor?: string,
  borderStyle?: string, 
  fontSize: number,
  fontWeight: number,
  color: string,
  backgroundColor?: string,
  options?: SelectOption[],
}

export interface GeneralFormStyles {
  heading: string,
  borderWidth: string,
  borderColor: string,
  borderStyle: string, 
  fontSize: number,
  fontWeight: number,
  color: string,
  backgroundColor: string,
}

export interface FormBuilderState {
  formElements: FormElement[],
  generalForm: GeneralFormStyles,
}

export interface UserState {
  username: string,
  email: string,
}

export interface OptionField {
  elementId: string, 
  key: string, 
  val: string
}

export interface KeyValuePair {
  key: string, 
  val: string
}

export interface UserData {
  email: string | null | undefined,
  password: string | null | undefined,
  username?: string | null | undefined,
}

// export interface ServerLoginResponse {
//   accessToken: string,
//   user: {
//     email: string,
//     id: string,
//   }
// }